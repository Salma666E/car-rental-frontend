import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  private _dealList = "http://localhost:9000/deal/list";
  private _deal = "http://localhost:9000/deal/finddealid";
  private _newdeal = "http://localhost:9000/deal/new";
  private _dealDel = "http://localhost:9000/deal/deletedeal";
  private _dealByName = "http://localhost:9000/deal/finddealname";
  private _newUpdatedeal = "http://localhost:9000/deal/updatedeal";
  httpClient: any;

  constructor(private http: HttpClient) { }
  getdealList(){
    return this.http.get<any>(this._dealList)
  }
  getdeal(id: any){
    return this.http.get<any>(`${this._deal}/${id}`)
  }
  getdealByName(id: any){
    return this.http.get<any>(`${this._dealByName}/${id}`)
  }
  createAgenct(deal: any){
    return this.http.post<any>(this._newdeal, deal)
  }
  deletedeal(id: any){
    return this.http.delete<any>(`${this._dealDel}/${id}`)
  }
  updatedeal(deal: any, id: any){
    return this.http.post<any>(`${this._newUpdatedeal}/${id}`, deal)
  }
}
