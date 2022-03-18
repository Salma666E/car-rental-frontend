import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepairingService {
  private _repairingList = "http://localhost:9000/repairing/list";
  private _repairing = "http://localhost:9000/repairing/findrepairingid";
  private _newrepairing = "http://localhost:9000/repairing/new";
  private _repairingDel = "http://localhost:9000/repairing/deleterepairing";
  private _newUpdaterepairing = "http://localhost:9000/repairing/updaterepairing";
  httpClient: any;
  private _repairingByplate_number = "http://localhost:9000/repairing/findplate_number";
  private _repairingByGarage = "http://localhost:9000/repairing/findgarage_name";

  constructor(private http: HttpClient) { }
  getrepairingList(){
    return this.http.get<any>(this._repairingList)
  }
  getrepairing(id: any){  //By MANAGER ID
    return this.http.get<any>(`${this._repairing}/${id}`)
  }
  createrepairing(repairing: any){
    return this.http.post<any>(this._newrepairing, repairing)
  }
  deleterepairing(id: any){
    return this.http.delete<any>(`${this._repairingDel}/${id}`)
  }
  updaterepairing(repairing: any, id: any){
    return this.http.post<any>(`${this._newUpdaterepairing}/${id}`, repairing)
  }
  searchByplate_number(id: any){  
    return this.http.get<any>(`${this._repairingByplate_number}/'${id}'`)
  }
  searchByGarage(id: any){  
    return this.http.get<any>(`${this._repairingByGarage}/${id}`)
  }
}