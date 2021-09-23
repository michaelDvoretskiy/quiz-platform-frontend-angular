import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {LogoutComponent} from "./logout/logout.component";

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    AuthRoutingModule,
      FormsModule,
    CommonModule
  ],
  exports: [
    LogoutComponent
  ]
})
export class AuthModule { }
