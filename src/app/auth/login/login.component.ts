import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: ''};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
    this.authService.checkLogin(
        this.user.username,
        this.user.password
    ).subscribe(
        data => {
          this.authService.saveToken(data);
          this.router.navigate(['/disc-list']);
        },
        error => {
          this.authService.clearToken();
          this.router.navigate(['/login']);
        }
    );
  }
}
