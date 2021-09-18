import { Component, OnInit } from '@angular/core';
import {TestService} from "../test.service";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.scss']
})
export class TestOneComponent implements OnInit {

  testHeader: any;
  testContent: any;
  testAnswers: any;
  testBeginDate: Date;
  testHasToBeFinished: Date;
  testTimePassed: String = '';
  testTimeLeft: String = '';

  constructor(private testService: TestService,
              private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const token = this.authService.getToken();
    const testId = this.activatedRoute.snapshot.params['id'];
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.testService.getTest(token, testId).subscribe(
        data => {
          this.testHeader = data.test;
          this.testContent = data.content.test;
          this.testBeginDate = new Date(data.test.begin_date);
          this.testHasToBeFinished = new Date(data.test.begin_date);
          this.testHasToBeFinished.setMinutes(
              this.testHasToBeFinished.getMinutes() + data.test.duration
          );
          if (data.answers) {
            this.testAnswers = data.content.answers;
          }
          setInterval(() => {
              this.refreshTimePassed();
              this.refreshTimeLift();
          }, 1000);
          console.log(data);
        },
        error => {
          if (error.status != undefined && error.status == '401') {
            this.authService.clearToken();
            this.router.navigate(['/login']);
          }
        }
    );
  }

  private refreshTimePassed() {
      const now = new Date();
      let s = parseInt(((now.getTime() - this.testBeginDate.getTime()) / 1000).toString());

      this.testTimePassed = this.presentTime(s);
  }

  private refreshTimeLift() {
      const now = new Date();
      let s = parseInt(((this.testHasToBeFinished.getTime() - now.getTime()) / 1000).toString());

      this.testTimeLeft = this.presentTime(s);
  }

  private presentTime(s: number): String {
      if (s < 0) s = 0;
      let m = Math.floor(s / 60); s = s - 60 * m;
      let h = Math.floor(m / 60); m = m - 60 * h;
      let hs = h.toString(); if (hs.length < 2) hs = '0' + hs;
      let ms = m.toString(); if (ms.length < 2) ms = '0' + ms;
      let ss = s.toString(); if (ss.length < 2) ss = '0' + ss;
      return `${hs} год. ${ms} хв. ${ss} сек.`;
  }
}
