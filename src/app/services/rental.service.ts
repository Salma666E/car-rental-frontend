import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private _customzList ="http://localhost:9000/rental/customlist"
  private _rentalList = "http://localhost:9000/rental/listbyagency";
  private _rental = "http://localhost:9000/rental/findrentalid";
  private _newrental = "http://localhost:9000/rental/new";
  private _rentalDel = "http://localhost:9000/rental/deleterental";
  private _rentalByTYpe = "http://localhost:9000/rental/findrentaltype";
  private _newUpdaterental = "http://localhost:9000/rental/updaterental";
  httpClient: any;

  constructor(private http: HttpClient) { }
  getRentalListBYAgencyID(id: any){
    return this.http.get<any>(`${this._rentalList}/${id}`)
  }
  getRentalList(){
    return this.http.get<any>(this._customzList)
  }
  getRental(id: any){
    return this.http.get<any>(`${this._rental}/${id}`)
  }
  getRentalByType(id: any){
    return this.http.get<any>(`${this._rentalByTYpe}/${id}`)
  }
  createRental(rental: any){
    return this.http.post<any>(this._newrental, rental)
  }
  deleteRental(id: any){
    return this.http.delete<any>(`${this._rentalDel}/${id}`)
  }
  updateRental(rental: any, id: any){
    return this.http.post<any>(`${this._newUpdaterental}/${id}`, rental)
  }
}