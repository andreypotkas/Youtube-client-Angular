import { Injectable } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { checkPasswordValidator } from '../directives/check-password.directive';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public router: Router,
    private fb: FormBuilder,
  ) {}
  public redirectUrl: string = 'login';
  public isLoggedIn = new BehaviorSubject(false);
  public user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), checkPasswordValidator()]),
  });
  get email() {
    return this.user.get('email');
  }
  get password() {
    return this.user.get('password');
  }

  public loginUser() {
    this.isLoggedIn.next(true);
    /* localStorage.setItem('login', this.user.name.value);
    localStorage.setItem('password', this.password); */
    localStorage.setItem('token', '1234567890');
    this.router.navigate(['/main']);
  }

  public checkUser() {
    if (localStorage.getItem('login') && localStorage.getItem('password')) {
      /* this.login = localStorage.getItem('login') as string;
      this.password = localStorage.getItem('password') as string; */

      this.isLoggedIn.next(true);
    }
  }

  public logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('token');

    /* this.login = 'Your name';
    this.password = ''; */

    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
    console.log('Redirect to login page..');
  }
}
