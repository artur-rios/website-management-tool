import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, PasswordRecoverComponent],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    MatCardModule,
    SharedModule,
  ],
})
export class AuthenticationModule {}
