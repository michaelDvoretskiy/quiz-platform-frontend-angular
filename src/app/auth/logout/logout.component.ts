import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  userName: String;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.authService.getAppUserName();
  }

  logout() {
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }

}
