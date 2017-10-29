import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { User } from './../models/user';

@Injectable()
export class UserService {
  private usersUrl = 'api/users';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.usersUrl}/${id}`)
      .catch(this.handleError);
  }

  create(user: User): Observable<User> {
    return this.httpClient
      .post<User>(this.usersUrl, user, { headers: this.headers })
      .catch(this.handleError);
  }

  checkIfUsernameExists(userName: string): Observable<boolean> {
    const url = this.usersUrl + '?username=' + userName;

    return this.httpClient
      .get<User[]>(url, { headers: this.headers })
      .map(users => users && users.length > 0)
      .catch(this.handleError);
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    let url = this.usersUrl + '?email=' + email;
    url = encodeURI(url)
    return this.httpClient
      .get<User[]>(url, { headers: this.headers })
      .map(users => users && users.length > 0)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}