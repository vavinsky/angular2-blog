import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, NgForm, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

import { UserService } from './../services/user.service';
import { AlertService } from './../services/alert.service';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-signin-reactive',
  templateUrl: './signin-reactive.component.html',
  styleUrls: ['./signin-reactive.component.scss']
})
export class SigninReactiveComponent implements OnInit {
  loading: boolean;
  isSubmitAttempt: boolean;
  returnUrl: string;
  signinForm: FormGroup;

  get username() { return this.signinForm.get('username'); }

  get password() { return this.signinForm.get('password'); }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {

    this.createForm();
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.isSubmitAttempt = true;
    if (!this.signinForm.valid) {
      return;
    }

    const formModel = this.signinForm.value;
    this.loading = true;
    this.authenticationService.login(formModel.username, formModel.password, formModel.rememberMe)
      .finally(() => this.loading = false)
      .subscribe(user => {
        if (user) {
          this.router.navigate([this.returnUrl]);
        }
        else {
          this.alertService.error('Login or password are not valid');
          this.reset();
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
        this.reset();
      }
      );
  }

  isControlInvalid(field: string) {
    const control = this.signinForm.get(field);
    return !control.valid && (control.dirty || this.isSubmitAttempt);
  }

  getControlClass(field: string) {
    const isValid = this.isControlInvalid(field);
    return {
      'has-error': isValid,
      'has-feedback': isValid
    };
  }

  private createForm() {
    this.signinForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.maxLength(256)]],
      password: [null, [Validators.required, Validators.maxLength(256)]],
      rememberMe: false
    });
  }

  private reset() {
    this.isSubmitAttempt = false;
    this.signinForm.reset();
  }
}
