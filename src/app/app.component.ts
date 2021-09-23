import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'edu-tests';
  userName: String;
  constructor(private authService: AuthService) {
    this.userName = this.authService.getAppUserName();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.userName = this.authService.getAppUserName();
  }
}
