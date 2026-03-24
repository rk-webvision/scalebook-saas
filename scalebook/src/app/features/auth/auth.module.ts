import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { Auth } from './auth';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [Auth, Login, Signup],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule],
})
export class AuthModule { }
