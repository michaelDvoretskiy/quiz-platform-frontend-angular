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
          this.setAppUserName(data);
      } else {
          this.clearToken();
      }
  }

  public getToken() {
      return localStorage.getItem('app_user_token');
  }

  public setToken(token: string) {
      localStorage.setItem('app_user_token', token);
  }

  public setAppUserName(data: any) {
      const name = data.name == '' ? data.username : data.name;
      localStorage.setItem('app_user_name', name);
  }

    public getAppUserName(): String {
        const name = localStorage.getItem('app_user_name');
        if (!name) {
            return '';
        }
        return name;
    }

    public clearToken() {
      localStorage.removeItem('app_user_token');
      localStorage.removeItem('app_user_name');
  }
}
