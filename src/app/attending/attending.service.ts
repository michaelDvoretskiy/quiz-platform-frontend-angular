import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AttendingService {

  constructor(private http: HttpClient) { }

  public getCurrentAttending(token: string): Observable<any> {
    return this.http.get<any>(
        `${environment.apiBaseUrl}attending/current/?token=${token}`
    ).pipe(map(data => {
      if (data) {
        data.thumb = environment.siteBackUrl + data.thumb;
      }
      return data
    }));
  }

  public indicateAttending(token: string, pairId: string): Observable<any> {
    return this.http.post<any>(
        `${environment.apiBaseUrl}attending/current-set/${pairId}/?token=${token}`,
        {attended: true}
    );
  }

  public getDiscList(token: string): Observable<any> {
    return this.http.get<any[]>(
        `${environment.apiBaseUrl}attending/list/?token=${token}`
    ).pipe(map(data => data.map(elem => {
      elem.thumb = environment.siteBackUrl + elem.thumb;
      return elem;
    })));
  }
}
