import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl, FormGroup, Validators,
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
  ) {}
  public redirectUrl: string = 'login';
  public isLoggedIn = new BehaviorSubject(false);
  public user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), checkPasswordValidator()]),
  });

  public get email(): AbstractControl {
    return this.user.get('email') as AbstractControl;
  }
  get password(): AbstractControl {
    return this.user.get('password') as AbstractControl;
  }

  public loginUser(): void {
    this.isLoggedIn.next(true);
    localStorage.setItem('login', this.user.value.email);
    localStorage.setItem('password', this.user.value.password);
    localStorage.setItem('token', '1234567890');
    this.router.navigate(['/main']);
  }

  public checkUser(): void {
    if (localStorage.getItem('login') && localStorage.getItem('password')) {
      this.user.setValue({
        email: localStorage.getItem('login'),
        password: localStorage.getItem('password'),
      });
      this.isLoggedIn.next(true);
      this.router.navigate(['/main']);
    }
  }

  public logout(): void {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('token');
    this.user.setValue({
      email: '',
      password: '',
    });
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
