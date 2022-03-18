import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private _vehicleList = "http://localhost:9000/car/list";
  private _newVehicle = "http://localhost:9000/car/new";
  private _deleteVehicle = "http://localhost:9000/car/deletcar";
  private _searchByIdVehicle = "http://localhost:9000/car/findcarid";
  private _searchByBrandVehicle = "http://localhost:9000/car/findcarbrand";
  private _searchByPlatNumVehicle = "http://localhost:9000/car/findplate_number";
  private _updateVehicle = "http://localhost:9000/car/updatecar";
  // Category 
  private category = "http://localhost:9000/category/list";
  private _searchByNameCategory = "http://localhost:9000/category/findcategoryname";
  httpClient: any;
  private findcity = "http://localhost:9000/car/findcity"  // car by city.
  private retCarCity = "http://localhost:9000/car/citycar"
  private platNumCar = "http://localhost:9000/car/platnumcar"
  cityVehicle(id1: any, id2: any) {
    return this.http.get<any>(`${this.retCarCity}/'${id1}'/'${id2}'`)
  }
  getCityVehicleList() {
    return this.http.get<any>(`${this.findcity}`)
  }
  getCarOfPlatNumCar(plat:any) {
    return this.http.get<any>(`${this.platNumCar}/'${plat}'`)
  }
  // ///////////////
  constructor(private http: HttpClient) { }
  getvehicleList() {
    return this.http.get<any>(this._vehicleList)
  }
  createVehicle(vehicle: any) {
    return this.http.post<any>(this._newVehicle, vehicle)
  }
  deleteVehicle(id: any) {
    return this.http.delete<any>(`${this._deleteVehicle}/${id}`)
  }
  searchByIdVehicle(id: any) {
    return this.http.get<any>(`${this._searchByIdVehicle}/${id}`)
  }
  searchByBrandVehicle(brand: String) {
    return this.http.get<any>(`${this._searchByBrandVehicle}/${brand}`)
  }
  updateVehicle(vehicle: any, id: any) {
    return this.http.post<any>(`${this._updateVehicle}/${id}`, vehicle)
  }
  getPlatNumVehicle() {
    return this.http.get<any>(this._searchByPlatNumVehicle)
  }

  // categoryList
  geCategoryList() {
    return this.http.get<any>(this.category)
  }
  searchByNameCategory(id: any) {
    return this.http.get<any>(`${this._searchByNameCategory}/'${id}'`)
  }
}
