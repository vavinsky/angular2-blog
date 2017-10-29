import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router,
        private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.authenticationService.isAuthenticated$
            .take(1)
            .map(value => {
                if (!value) {
                    this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
                }
                return value;
            });
    }
}