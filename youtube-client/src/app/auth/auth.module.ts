import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialComponents } from '../core/material/material.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialComponents,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule { }
