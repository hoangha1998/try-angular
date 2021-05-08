import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthorized = false;

  constructor() { }

  login() {
    this.isAuthorized = true;
    console.log(this.isAuthorized);
  }

  logout() {
    this.isAuthorized = false;
    console.log(this.isAuthorized);
  }
}
