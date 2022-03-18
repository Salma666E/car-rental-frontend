import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _newclient = "http://localhost:9000/client/new";
  private _clientById = "http://localhost:9000/client/findclientid";
  private _clientByName = "http://localhost:9000/client/findclientname";
  private _clientByCin = "http://localhost:9000/client/findclientcin";

  constructor(private http: HttpClient) { }

  getClientById(id: any){
    return this.http.get<any>(`${this._clientById}/${id}`)
  }
  getClientByName(id: any){
    return this.http.get<any>(`${this._clientByName}/${id}`)
  }
  getClientByCin(id: any){
    return this.http.get<any>(`${this._clientByCin}/${id}`)
  }
  createClient(client: any){
    return this.http.post<any>(this._newclient,client)
  }
}
