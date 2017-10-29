import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { User } from './../models/user';
import { UserService } from './user.service';
import { JwtService } from './jwt.service';

const currentUserKey = 'currentUser';

@Injectable()
export class AuthenticationService {
  private currentUserBehaviorSource = new BehaviorSubject<User>(null);
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  currentUser$ = this.currentUserBehaviorSource.asObservable().distinctUntilChanged();

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private jwtService: JwtService) { }

  restoreAuthentication() {
    let storedUser = this.getStoredUser();
    let jwtToken = this.jwtService.getToken();
    if (storedUser != null && jwtToken) {
      this.setAuthentication(storedUser, jwtToken);

      // TODO: store only jwt and try to get user by jwt from the server
      // this.userService.get(storedUser.id)
      //   .subscribe(
      //   user => this.setAuthentication(user),
      //   error => this.clearAuthentication())
    }
    else {
      this.clearAuthentication();
    }
  }

  login(username: string, password: string, rememberMe: boolean | null) {
    const body = JSON.stringify({
      username: username,
      password: password,
      rememberMe: rememberMe
    });

    return this.httpClient.post('/api/authenticate', body)
      .map((response: any) => {
        let user: User = null;
        if (response && response.jwtToken) {
          user = response as User;
          this.setAuthentication(user, response.jwtToken);
        }

        return user;
      })
      .share();
  }

  logout() {
    this.clearAuthentication();
  }

  getCurrentUser(): User {
    return this.currentUserBehaviorSource.value;
  }

  private setAuthentication(user: User, jwtToken: string) {
    if (user && jwtToken) {
      this.currentUserBehaviorSource.next(user);
      this.isAuthenticatedSubject.next(true);
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem(currentUserKey, JSON.stringify(user));
      this.jwtService.saveToken(jwtToken);
    }
  }

  private clearAuthentication() {
    this.currentUserBehaviorSource.next(null);
    this.isAuthenticatedSubject.next(false);

    localStorage.removeItem(currentUserKey);
    this.jwtService.destroyToken();
  }

  private getStoredUser(): User {
    let user = localStorage.getItem(currentUserKey);
    return user ? JSON.parse(user) : null;
  }
}
