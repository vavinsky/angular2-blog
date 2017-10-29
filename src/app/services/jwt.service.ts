import { Injectable } from '@angular/core';

const jwtTokenKey = 'jwtToken';

@Injectable()
export class JwtService {

  getToken(): string {
    return localStorage[jwtTokenKey];
  }

  saveToken(token: string) {
    localStorage[jwtTokenKey] = token;
  }

  destroyToken() {
    localStorage.removeItem(jwtTokenKey);
  }
}
