import { Component, OnInit } from '@angular/core';
import {AttendingService} from "../attending.service";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-attending-current-admin',
  templateUrl: './attending-current-admin.component.html',
  styleUrls: ['./attending-current-admin.component.scss']
})
export class AttendingCurrentAdminComponent implements OnInit {

  currentPairs: any = false;

  constructor(private attendingService: AttendingService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.getCurrentAttendings(token);
  }

  getCurrentAttendings(token: string) {
    this.attendingService.getAllCurrentAttendings(token).subscribe(
        data => this.currentPairs = data,
        error => {
          if (error.status != undefined && error.status == '401') {
            this.authService.clearToken();
            this.router.navigate(['/login']);
          }
        }
    );
  }

  approveAttending(pair: number, studentId: number) {
    const token = this.authService.getToken();
    if (!token) {
        this.router.navigate(['/login']);
        return;
    }
    this.attendingService.approveAttending(token, 1, pair, studentId).subscribe();
  }

  declineAttending(pair: number, studentId: number) {
      const token = this.authService.getToken();
      if (!token) {
          this.router.navigate(['/login']);
          return;
      }
      this.attendingService.approveAttending(token, 2, pair, studentId).subscribe();
  }

  getStatusText(status: number) {
    if (status == 0) {
      return "Відсутній";
    }
    if (status == 1) {
      return "Присутній";
    }
    if (status == 2) {
      return "Присутній";
    }
    if (status == 3) {
      return "Відхилено";
    }
    return "";
  }

  getStatusClass(status: number) {
    if (status == 0) {
      return "text-secondary";
    }
    if (status == 1) {
      return "text-info";
    }
    if (status == 2) {
      return "text-success";
    }
    if (status == 3) {
      return "text-danger";
    }
    return "";
  }

}
