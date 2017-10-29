import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { User } from './../models/user';
import { AuthenticationService } from './../services/authentication.service';
import { AlertService } from './../services/alert.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  signinForm: FormGroup;
  loading: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.createSignInForm();

    this.currentUserSubscription = authenticationService.currentUser$
      .subscribe(user => this.currentUser = user);
  }

  ngOnInit() {
    this.collapseHumburgerMenuOnClick();
  }

  private collapseHumburgerMenuOnClick() {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
    });
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.currentUserSubscription.unsubscribe();
  }

  onSignIn() {
    if (!this.signinForm.valid) {
      return;
    }

    const formModel = this.signinForm.value;
    this.loading = true;
    this.authenticationService.login(formModel.username,
      formModel.password, formModel.rememberMe)
      .finally(() => {
        this.loading = false;
        $('.dropdown.open .dropdown-toggle').dropdown('toggle');
        $(".navbar-collapse").collapse('hide');
      })
      .subscribe(data => {
        if (!data) {
          this.alertService.error('Login or password are not valid', true);
          this.router.navigate(['signin']);
        }
      },
      (err: any) => {
        let errorMessage = 'Unexpected error. Please, contact the Blog support.';
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = err.error.message;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.body.error}`);

          if (err.status && err.status == 401) {
            errorMessage = 'Username or password is incorrect';
          }
          else if (err.body && err.body.error) {
            errorMessage = err.body.error;
          }
        }

        this.alertService.error(err.body.error, true);
        this.router.navigate(['signin']);
      }
      );
  }

  private createSignInForm() {
    this.signinForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.maxLength(256)]],
      password: [null, [Validators.required, Validators.maxLength(256)]],
      rememberMe: false
    });
  }
}
