import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { AlertService } from './../services/alert.service';

class AddUserModel {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  visible: boolean = true;
  loading: boolean;
  model: AddUserModel = new AddUserModel();

  constructor(
    private location: Location,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  registerUser() {
    
    let user = new User();
    user.username = this.model.username;
    user.firstName = this.model.firstName;
    user.lastName = this.model.lastName;
    user.email = this.model.email;
    user.password = this.model.password;

    if(this.model.password !== this.model.confirmPassword) {
      this.alertService.error('Confirm password field mistmach the password field');
      return;
    }
    
    this.loading = true;
    this.userService.create(user)
      .finally(() => this.loading = false)
      .subscribe(data => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
        });
  }

  goBack(): void {
    this.visible = false;
    this.location.back();
  }
}
