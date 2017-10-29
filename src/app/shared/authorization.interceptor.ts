import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { JwtService } from './../services/jwt.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
    constructor(private jwtService: JwtService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let jwtToken = this.jwtService.getToken();
        const headers = req.headers.set('Authorization', jwtToken);
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}