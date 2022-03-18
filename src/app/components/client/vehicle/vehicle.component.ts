import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleData } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  @ViewChild('depCity1') depCity1: ElementRef = new ElementRef('input');
  @ViewChild('depCity2') depCity2: ElementRef = new ElementRef('input');
  constructor(private _vehicle: VehicleService, public router: Router) { }
  ngOnInit(): void {
  }
  vehicle: VehicleData[]=[];
  carList:VehicleData[]=[];
  rout_city={};
  dep_city={};
  ngAfterViewInit(): void {
    this._vehicle.getCityVehicleList().subscribe(
      (resp) => {
        this.carList = resp.res;
        console.log(this.carList);
        this.rout_city=this.carList.map((x:any)=>x.rout_city);
        this.dep_city=this.carList.map((x:any)=>x.dep_city);
        console.log(this.dep_city);
      },
      function (err) {
        console.log(err);
      }
    );
  }
  search() {
    this.vehicle = [];
    this._vehicle.cityVehicle(this.depCity1.nativeElement.value,this.depCity2.nativeElement.value).subscribe(
      (resp) => {
        this.vehicle = resp.res;
        console.log(this.vehicle);

      },
      (err) => {
        console.log(err);
        this.vehicle = [];
        alert("No Vehicle By This ID, Sorry");
      }
    );
  }
}
