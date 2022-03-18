import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResManagerService {
  private _resMangeList = "http://localhost:9000/maintmanag/list";
  private _newresMange = "http://localhost:9000/maintmanag/new";
  private _resMange = "http://localhost:9000/maintmanag/findmanagerid";
  private _resMangeDel = "http://localhost:9000/maintmanag/deletemaintenancemanager";
  private _newUpdateresMange = "http://localhost:9000/maintmanag/updatemaintenancemanager";
  httpClient: any;

  constructor(private http: HttpClient) { }
  getresMangeList(){
    return this.http.get<any>(this._resMangeList)
  }
  getresMange(id: any){
    return this.http.get<any>(`${this._resMange}/${id}`)
  }
  createresMange(resMange: any){
    return this.http.post<any>(this._newresMange, resMange)
  }
  deleteresMange(id: any){
    return this.http.delete<any>(`${this._resMangeDel}/${id}`)
  }
  updateresMange(resMange: any, id: any){
    return this.http.post<any>(`${this._newUpdateresMange}/${id}`, resMange)
  }
}