import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private _historyList = "http://localhost:9000/history/list";
  private _history = "http://localhost:9000/history/findhistoryid";
  private _newhistory = "http://localhost:9000/history/new";
  private _findhistoryspecial ="http://localhost:9000/history/findhistoryspecial"
  private _historyDel = "http://localhost:9000/history/deletehistory";
  private _newUpdatehistory = "http://localhost:9000/history/updatehistory";
  httpClient: any;

  constructor(private http: HttpClient) { }
  gethistoryList(){
    return this.http.get<any>(this._historyList)
  }
  gethistory(id: any){
    return this.http.get<any>(`${this._history}/${id}`)
  }
  gethistoryByID(id: any){
    return this.http.get<any>(`${this._findhistoryspecial}/${id}`)
  }
  createhistory(history: any){
    return this.http.post<any>(this._newhistory, history)
  }
  deletehistory(id: any){
    return this.http.delete<any>(`${this._historyDel}/${id}`)
  }
  updatehistory(history: any, id: any){
    return this.http.post<any>(`${this._newUpdatehistory}/${id}`, history)
  }
}