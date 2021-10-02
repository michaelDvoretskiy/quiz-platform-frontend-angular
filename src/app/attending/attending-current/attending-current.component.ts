import { Component, OnInit } from '@angular/core';
import {AttendingService} from "../attending.service";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-attending-current',
  templateUrl: './attending-current.component.html',
  styleUrls: ['./attending-current.component.scss']
})
export class AttendingCurrentComponent implements OnInit {

  currentPair: any = false;

  constructor(private attendingService: AttendingService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.getCurrentPair(token);
  }

  getCurrentPair(token: string) {
    this.attendingService.getCurrentAttending(token).subscribe(
        data => this.currentPair = data,
        error => {
          if (error.status != undefined && error.status == '401') {
            this.authService.clearToken();
            this.router.navigate(['/login']);
          }
        }
    );
  }

  indicateAttending(pairId: string) {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.attendingService.indicateAttending(token, pairId).subscribe(
      data => this.getCurrentPair(token),
      error => {
          if (error.status != undefined && error.status == '401') {
            this.authService.clearToken();
            this.router.navigate(['/login']);
          }
      }
    );
  }

  getStatusText(status: number) {
    if (status == 0) {
      return "Присутність на парі не зазначено";
    }
    if (status == 1) {
      return "Присутність на парі зазначено, але поки не підтверджено";
    }
    if (status == 2) {
      return "Присутність на парі підтверджено";
    }
    return "";
  }

  getStatusClasses(status: number) {
    if (status == 0) {
      return "bg-light";
    }
    if (status == 1) {
      return "bg-info text-white";
    }
    if (status == 2) {
      return "bg-success text-white";
    }
    return "";
  }

}
