import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './../services/authentication.service';

@Injectable()
export class NoAuthenticationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authenticationService.isAuthenticated$
      .take(1)
      .map(value => !value);
  }
}