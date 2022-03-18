import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryData } from 'src/app/models/category';
import { VehicleData } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-admin-vehicle',
  templateUrl: './admin-vehicle.component.html',
  styleUrls: ['./admin-vehicle.component.scss']
})
export class AdminVehicleComponent implements OnInit, AfterViewInit {
  @ViewChild('searchId') searchId: ElementRef = new ElementRef('input');
  @ViewChild('searchByBrandd') searchByBrandd: ElementRef = new ElementRef('input');
  vehicle: VehicleData[] = [];
  @ViewChild('listVehicles') listVehicles: ElementRef = new ElementRef('input');
  @ViewChild('addVehicles') addVehicles: ElementRef = new ElementRef('input');
  @ViewChild('searcVehicles') searcVehicles: ElementRef = new ElementRef('input');
  vehicleList: VehicleData[] = [];
  newVehicle: VehicleData = {};
  @ViewChild('car_model') car_model: ElementRef = new ElementRef('input');
  @ViewChild('car_brand') car_brand: ElementRef = new ElementRef('input');
  @ViewChild('plate_number') plate_number: ElementRef = new ElementRef('input');
  @ViewChild('booking_num') booking_num: ElementRef = new ElementRef('input');
  @ViewChild('car_images') car_images: ElementRef = new ElementRef('input');
  @ViewChild('available_num') available_num: ElementRef = new ElementRef('input');
  @ViewChild('broken_down_num') broken_down_num: ElementRef = new ElementRef('input');
  @ViewChild('category') category: ElementRef = new ElementRef('input');
  @ViewChild('marked') marked: ElementRef = new ElementRef('input');
  @ViewChild('date_first_circulation') date_first_circulation: ElementRef = new ElementRef('input');
  @ViewChild('version') version: ElementRef = new ElementRef('input');
  @ViewChild('identify_num') identify_num: ElementRef = new ElementRef('input');
  @ViewChild('description') description: ElementRef = new ElementRef('input');
  @ViewChild('capacity') capacity: ElementRef = new ElementRef('input');
  @ViewChild('price') price: ElementRef = new ElementRef('input');
  @ViewChild('gps_price') gps_price: ElementRef = new ElementRef('input');
  @ViewChild('airbag_price') airbag_price: ElementRef = new ElementRef('input');
  @ViewChild('air_conditioning_price') air_conditioning_price: ElementRef = new ElementRef('input');
  @ViewChild('child_seat_price') child_seat_price: ElementRef = new ElementRef('input');
  @ViewChild('cd_player_price') cd_player_price: ElementRef = new ElementRef('input');
  @ViewChild('baby_seat_price') baby_seat_price: ElementRef = new ElementRef('input');
  @ViewChild('ski_rack') ski_rack: ElementRef = new ElementRef('input');
  @ViewChild('rate') rate: ElementRef = new ElementRef('input');

  constructor(private _vehicle: VehicleService, public router: Router) { }

  ngOnInit(): void {
  }
  categoryList:CategoryData[]=[];
  ngAfterViewInit(): void {
    this.getVehicles();
    // getCategoryList
    this._vehicle.geCategoryList().subscribe(
      (resp) => {
        this.categoryList = resp.data;
        console.log(this.categoryList);
      },
      function (err) {
        console.log(err);
      }
    );
    this._vehicle.getvehicleList().subscribe(
      (res) => {
        console.log(res.data);
        this.vehicleList = res.data.map((x: any) => x);// res.data;
        console.log(this.vehicleList);
      },
      function (err) {
        console.log(err);
        alert("perhaps! Agency DB is empty.");
      }
    )
  }
  getVehicles() {
    this.listVehicles?.nativeElement.setAttribute('style', 'display:block');
    this.addVehicles?.nativeElement.setAttribute('style', 'display:none');
    this.searcVehicles?.nativeElement.setAttribute('style', 'display:none');
  }
  createVehicles() {
    this.addVehicles?.nativeElement.setAttribute('style', 'display:block');
    this.listVehicles?.nativeElement.setAttribute('style', 'display:none');
    this.searcVehicles?.nativeElement.setAttribute('style', 'display:none');
  }
  searchVehicles() {
    this.searcVehicles?.nativeElement.setAttribute('style', 'display:block');
    this.addVehicles?.nativeElement.setAttribute('style', 'display:none');
    this.listVehicles?.nativeElement.setAttribute('style', 'display:none');
  }
  addVehicle() {
    //get catID
    console.log(this.category.nativeElement.value);//cat2
    this.newVehicle.category=this.category.nativeElement.value;
    this._vehicle.searchByNameCategory(this.category.nativeElement.value).subscribe(
      (resp) => {
        console.log(resp);
        this.newVehicle.category_id = resp.res[0].idcat
        console.log(resp.res[0].id);
        console.log(this.newVehicle);
        console.log(this.newVehicle);
        this._vehicle.createVehicle(this.newVehicle).subscribe(
          (res) => {
            console.log(res);
            window.location.reload();
            alert("successfully added!!")
          },
          function (err) {
            console.log(err);
            alert("unsuccessfully added, Sorry.")
          }
        );
        
      },
      function (err) {
        console.log(err);
      }
    );
  }
  searchById() {
    this.vehicle = [];
    this._vehicle.searchByIdVehicle(this.searchId.nativeElement.value).subscribe(
      (resp) => {
        console.log(resp);
        this.vehicle = resp.res;
      },
      (err) => {
        console.log(err);
        this.vehicle = [];
        alert("No Vehicle By This ID, Sorry");
      }
    );
  }
  searchByBrand(){
    this.vehicle = [];
    this._vehicle.searchByBrandVehicle(`'${this.searchByBrandd.nativeElement.value}'`).subscribe(
      (resp) => {
        console.log(resp);
        this.vehicle = resp.res;
      },
      (err) => {
        console.log(err);
        this.vehicle = [];
        alert("No Vehicle By This ID, Sorry");
      }
    );
  }
  deleteVec(id: any){
    this._vehicle.deleteVehicle(id).subscribe(
      (res) => {
        console.log(res);
        window.location.reload();
      },
      function (err) {
        console.log(err);
      }
    );
  }
  goToEdit(id: any){
    console.log(id);
    this.router.navigate([`Admain/editvec/${id}`]);
  }
}
