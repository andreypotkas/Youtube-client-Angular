import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public router: Router) {}

  public isLoggedIn = false;

  public login = 'Your name';

  public password = '';

  public redirectUrl: string = 'login';

  public logUser() {
    this.isLoggedIn = true;

    localStorage.setItem('login', this.login);
    localStorage.setItem('password', this.password);
    localStorage.setItem('token', '1234567890');

    this.router.navigate(['/main']);
    console.log('Redirect to main page..');
  }

  public checkUser() {
    if (localStorage.getItem('login') && localStorage.getItem('password')) {
      this.login = localStorage.getItem('login') as string;
      this.password = localStorage.getItem('password') as string;

      this.isLoggedIn = true;
    }
  }

  public logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('token');

    this.login = 'Your name';
    this.password = '';

    this.isLoggedIn = false;

    this.router.navigate(['/login']);
    console.log('Redirect to login page..');
  }
}
