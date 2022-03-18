import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqRepairServService {
  private _repairserviceList = "http://localhost:9000/repairservice/list";
  private _repairservice = "http://localhost:9000/repairservice/findrequest_repair_serviceid";
  private _newrepairservice = "http://localhost:9000/repairservice/new";
  private _repairserviceDel = "http://localhost:9000/repairservice/deleterequest_repair_service";
  private _newUpdaterepairservice = "http://localhost:9000/repairservice/updaterequest_repair_service";
  httpClient: any;

  constructor(private http: HttpClient) { }
  getrepairserviceList(){
    return this.http.get<any>(this._repairserviceList)
  }
  getrepairservice(id: any){
    return this.http.get<any>(`${this._repairservice}/${id}`)
  }
  createrepairservice(repairservice: any){
    return this.http.post<any>(this._newrepairservice, repairservice)
  }
  deleterepairservice(id: any){
    return this.http.delete<any>(`${this._repairserviceDel}/${id}`)
  }
  updaterepairservice(repairservice: any, id: any){
    return this.http.post<any>(`${this._newUpdaterepairservice}/${id}`, repairservice)
  }
}