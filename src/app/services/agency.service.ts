import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  private _agencyList = "http://localhost:9000/agency/list";
  private _agency = "http://localhost:9000/agency/findagencyid";
  private _newAgency = "http://localhost:9000/agency/new";
  private _agencyDel = "http://localhost:9000/agency/deleteagency";
  private _newUpdateAgency = "http://localhost:9000/agency/updateagency";
  httpClient: any;

  constructor(private http: HttpClient) { }
  getAgencyList(){
    return this.http.get<any>(this._agencyList)
  }
  getAgency(id: any){
    return this.http.get<any>(`${this._agency}/${id}`)
  }
  createAgenct(agency: any){
    return this.http.post<any>(this._newAgency, agency)
  }
  deleteAgency(id: any){
    return this.http.delete<any>(`${this._agencyDel}/${id}`)
  }
  updateAgency(agency: any, id: any){
    return this.http.post<any>(`${this._newUpdateAgency}/${id}`, agency)
  }
}
