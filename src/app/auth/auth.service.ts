import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public checkLogin(login: String, passwd: String): Observable<any> {
      return this.http.post(`${environment.apiBaseUrl}login`,{
        'username': login,
        'password': passwd
      });
  }

  public saveToken(data: any) {
      if (data.token != undefined && data.token != null) {
          this.setToken(data.token);
      } else {
          this.clearToken();
      }
  }

  public getToken() {
      return localStorage.getItem('token');
  }

  public setToken(token: string) {
      localStorage.setItem('token', token);
  }

  public clearToken() {
      localStorage.removeItem('token');
  }
}
