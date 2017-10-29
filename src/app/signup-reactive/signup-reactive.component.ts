import { User } from './../models/user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UserService } from './../services/user.service';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.scss']
})
export class SignupReactiveComponent implements OnInit {
  signupForm: FormGroup;
  loading: boolean;
  isSubmitAttempt: boolean;
  visible: boolean = true;

  get username() { return this.signupForm.get('username'); }

  get email() { return this.signupForm.get('email'); }

  get firstName() { return this.signupForm.get('firstName'); }

  get lastName() { return this.signupForm.get('lastName'); }

  get password() { return this.signupForm.get('password'); }

  get confirmPassword() { return this.signupForm.get('confirmPassword'); }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private userService: UserService,
    private alertService: AlertService) {

    this.createForm();
  }

  ngOnInit() {
  }

  onSignUp() {
    this.isSubmitAttempt = true;
    if (!this.signupForm.valid) {
      return;
    }

    let newUser: User = this.prepareSaveUser();

    this.loading = true;
    this.userService.create(newUser)
      .finally(() => this.loading = false)
      .subscribe(user => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/signin']);
      },
      error => {
        this.alertService.error(error);
      });
  }

  goBack(): void {
    this.visible = false;
    this.location.back();
  }

  isControlInvalid(field: string) {
    const control = this.signupForm.get(field);
    return !control.valid && (control.dirty || this.isSubmitAttempt);
  }

  getControlClass(field: string) {
    const isValid = this.isControlInvalid(field);
    return {
      'has-error': isValid,
      'has-feedback': isValid
    };
  }

  private prepareSaveUser(): User {
    const formModel = this.signupForm.value;
    const saveUser: User = {
      id: null,
      username: formModel.username as string,
      email: formModel.email as string,
      firstName: formModel.firstName as string,
      lastName: formModel.lastName as string,
      password: formModel.password as string,
      avatarImageUrl: null
    };

    return saveUser;
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      username: [null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(64)
      ],
        this.isUserNameUnique.bind(this)
      ],
      email: [null, [
        Validators.required,
        Validators.maxLength(256),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ],
        this.isEmailUnique.bind(this)
      ],
      firstName: [null, [Validators.required, Validators.maxLength(256)]],
      lastName: [null, [Validators.required, Validators.maxLength(256)]],
      password: [null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])[A-Za-z\\d!@#\$%\^&\*]{8,20}")
      ]],
      confirmPassword: [null, [
        Validators.required,
        this.isPasswordMismatch.bind(this)
      ]]
    });
  }

  private isPasswordMismatch(control: AbstractControl): ValidationErrors | null {
    let passwordControl = control.root.get('password');
    if (passwordControl && passwordControl.value) {
      let passwordValue = passwordControl.value as string;
      if (control.value !== passwordValue) {
        return { 'passwordMismatch': true };
      }
    }

    return null;
  }

  private isEmailUnique(control: FormControl): Promise<ValidationErrors | null> {
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.userService.checkIfEmailExists(control.value)
          .subscribe(result => {
            resolve(result ? { 'emailDuplicate': true } : null);
          }, 
          (error) => {
            resolve(null);
          });
      }, 1000);
    });
    return q;
  }

  private isUserNameUnique(control: AbstractControl): Observable<ValidationErrors | null> {
    return Observable.timer(500).switchMap(() => {
      return this.userService.checkIfUsernameExists(control.value)
        .map(result => {
          return result ? { userNameDuplicate: true } : null;
        });
    });
  }
}
