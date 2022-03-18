import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalClientService {
  private _customzList ="http://localhost:9000/rental_client/customlist"
  // private _rentalList = "http://localhost:9000/rental_client/list";
  private _rental = "http://localhost:9000/rental_client/findrental_clientid";
  private _newrental = "http://localhost:9000/rental_client/new";
  private _rentalDel = "http://localhost:9000/rental_client/deleterental_client";
  private _rentalByTYpe = "http://localhost:9000/rental_client/findrental_clienttype";
  private _newUpdaterental = "http://localhost:9000/rental_client/updaterental_client";
  httpClient: any;

  constructor(private http: HttpClient) { }
  getRentalClientList(){
    return this.http.get<any>(this._customzList)
  }
  //  getRentalClientList(){
  //   return this.http.get<any>(this._rentalList)
  // }
  getrentalClient(id: any){
    return this.http.get<any>(`${this._rental}/${id}`)
  }
  getRentalClientByType(id: any){
    return this.http.get<any>(`${this._rentalByTYpe}/${id}`)
  }
  createRentalClient(rental: any){
    return this.http.post<any>(this._newrental, rental)
  }
  deleterentalClient(id: any){
    return this.http.delete<any>(`${this._rentalDel}/${id}`)
  }
  updaterentalClient(rental: any, id: any){
    return this.http.post<any>(`${this._newUpdaterental}/${id}`, rental)
  }
}