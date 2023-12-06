
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor() {}

  login() {

    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  register() {

    this.isLoggedIn = true;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
