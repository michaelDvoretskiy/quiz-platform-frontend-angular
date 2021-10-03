import { Component, OnInit } from '@angular/core';
import {AttendingService} from "../attending.service";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-attending-disc-list',
  templateUrl: './attending-disc-list.component.html',
  styleUrls: ['./attending-disc-list.component.scss']
})
export class AttendingDiscListComponent implements OnInit {

  discList: any;
  constructor(private attendingService: AttendingService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
      const token = this.authService.getToken();
      if (!token) {
          this.router.navigate(['/login']);
          return;
      }
      this.attendingService.getDiscList(token).subscribe(
          data => {
              this.discList = data
          },
          error => {
              if (error.status != undefined && error.status == '401') {
                this.authService.clearToken();
                this.router.navigate(['/login']);
              }
          }
      );
  }

  getStatusText(type: number): String {
        if (type == 2) {
            return 'Пару відвідано';
        }
        if (type == 1) {
            return 'Присутність не підтверджено';
        }
        if (type == 0) {
            return 'Не відвідано';
        }
        return "";
  }

  getStatusClass(type: number): String {
        if (type == 1) {
            return 'text-info';
        }
        if (type == 2) {
            return 'text-success';
        }
        if (type == 0) {
            return 'text-danger';
        }
        return "";
  }

}
