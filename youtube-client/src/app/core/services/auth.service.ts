import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public router: Router) {}

  public isLoggedIn = new BehaviorSubject(false);

  public login = 'Your name';

  public password = '';

  public redirectUrl: string = 'login';

  public logUser() {
    this.isLoggedIn.next(true);

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

      this.isLoggedIn.next(true);
    }
  }

  public logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('token');

    this.login = 'Your name';
    this.password = '';

    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
    console.log('Redirect to login page..');
  }
}
