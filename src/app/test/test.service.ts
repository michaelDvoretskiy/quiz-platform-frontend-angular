import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  public getDiscList(token: string): Observable<any> {
      return this.http.get<any[]>(`${environment.apiBaseUrl}disciplines?token=${token}`)
          .pipe(map(data => data.map(elem => {
              elem.thumb = environment.siteBackUrl + elem.thumb;
              return elem;
          })));
  }

    public getDiscTestList(token: string, discId: number): Observable<any> {
        return this.http.get<any>(
            `${environment.apiBaseUrl}test-list/${discId}/?token=${token}`
        );
    }

    public getTest(token: string, testId: number): Observable<any> {
        return this.http.get<any>(
            `${environment.apiBaseUrl}test-one/read/${testId}/?token=${token}`
        );
    }

    public setAnswers(token: string, testId: number, answers: any) {
      return this.http.post<any>(
          `${environment.apiBaseUrl}test-one/accept-answers/${testId}/?token=${token}`,
          {answers: answers}
      );
    }

    public finishTest(token: string, testId: number) {
      return this.http.post<any>(
        `${environment.apiBaseUrl}test-one/finish/${testId}/?token=${token}`,
        {}
      );
    }

    public annulTest(token: string, testId: number) {
        return this.http.post<any>(
            `${environment.apiBaseUrl}test-one/annul/${testId}/?token=${token}`,
            {}
        );
    }
}
