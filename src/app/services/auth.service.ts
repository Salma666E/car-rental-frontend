import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _loginClient = "http://localhost:9000/auth/login/clientoradmin";
  private _logoutUrl = "http://localhost:9000/auth/logout";
  loginUser(user: any){
    return this.http.post<any>(this._loginClient, user)
  }
  logoutUser(id: any){
    return this.http.post<any>(this._logoutUrl+`/${id}`,null)
  }
  private _loginAgency = "http://localhost:9000/auth/login/agency";
  private _logoutAgency = "http://localhost:9000/auth/logoutagency";
  loginAgency(user: any){
    return this.http.post<any>(this._loginAgency, user)
  }
  logoutAgency(id: any){
    return this.http.post<any>(this._logoutAgency+`/${id}`,null)
  }
  private _loginResManager = "http://localhost:9000/auth/login/maintenancemanager";
  private _logoutResManager = "http://localhost:9000/auth/logoutresmanager";
  loginResManager(user: any){
    return this.http.post<any>(this._loginResManager, user)
  }
  logoutResManager(id: any){
    return this.http.post<any>(this._logoutResManager+`/${id}`,null)
  }
  constructor(private http: HttpClient) { }


}
