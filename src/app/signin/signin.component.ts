import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

import 'rxjs/add/operator/finally';

import { AuthenticationService } from './../services/authentication.service';
import { AlertService } from './../services/alert.service';

class Login {
  username: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  model: Login = new Login();
  loading: boolean;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(form: NgForm) {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password, this.model.rememberMe)
      .finally(() => this.loading = false)
      .subscribe(user => {
        if (user) {
          this.router.navigate([this.returnUrl]);
        }
        else {
          this.alertService.error('Login or password are not valid');
          this.eraseModel(form);
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

        this.alertService.error(err.body.error, false);
        this.eraseModel(form);
      });
  }

  private eraseModel(form: NgForm) {
    this.model = new Login();
    form.reset();
  }
}
