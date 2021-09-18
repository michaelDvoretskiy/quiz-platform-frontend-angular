import { Component, OnInit } from '@angular/core';
import {TestService} from "../test.service";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import { map } from 'rxjs/operators';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-disc-list',
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.scss']
})
export class DiscListComponent implements OnInit {

  discList: any[] = [];

  constructor(
      private testService: TestService,
      private authService: AuthService,
      private router: Router
      ) { }

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.testService.getDiscList(token).subscribe(
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

  openTestList(id: number) {
    this.router.navigate(['/test-list', id]);
  }
}
