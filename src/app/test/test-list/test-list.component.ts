import { Component, OnInit } from '@angular/core';
import {TestService} from "../test.service";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  testsList: any[] = [];
  discName: String = '';

  constructor(private testService: TestService,
              private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const token = this.authService.getToken();
    const discId = this.activatedRoute.snapshot.params['id'];
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.testService.getDiscTestList(token, discId).subscribe(
        data => {
          this.testsList = data.tests;
          this.discName = data.dysc.title;
        },
        error => {
          if (error.status != undefined && error.status == '401') {
            this.authService.clearToken();
            this.router.navigate(['/login']);
          }
        }
    );
  }

  getBtnText(type: number): String {
    if (type == 0) {
      return 'Розпочати тест';
    }
    if (type == 1) {
      return 'Продовжити тест';
    }
    if (type == 2) {
      return 'Переглянути результат';
    }
    return "";
  }

  getBtnClass(type: number): String {
    if (type == 0) {
      return 'btn-primary';
    }
    if (type == 1) {
      return 'btn-success';
    }
    if (type == 2) {
      return 'btn-secondary';
    }
    return "btn-info";
  }
}
