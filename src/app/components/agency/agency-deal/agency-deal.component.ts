import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientAllData } from 'src/app/models/client';
import { RentalData } from 'src/app/models/rental';
import { VehicleData } from 'src/app/models/vehicle';
import { ClientService } from 'src/app/services/client.service';
import { RentalService } from 'src/app/services/rental.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-agency-deal',
  templateUrl: './agency-deal.component.html',
  styleUrls: ['./agency-deal.component.scss']
})
export class AgencyDealComponent implements OnInit, AfterViewInit {
  newClient: ClientAllData={};
  newRental: RentalData={};
  @ViewChild('fulName1') fulName1 : ElementRef = new ElementRef('input');
  @ViewChild('type1') type1 : ElementRef = new ElementRef('input');
  @ViewChild('address1') address1 : ElementRef = new ElementRef('input');
  @ViewChild('phone1') phone1 : ElementRef = new ElementRef('input');
  @ViewChild('email1') email1 : ElementRef = new ElementRef('input');
  @ViewChild('cin1') cin1 : ElementRef = new ElementRef('input');
  @ViewChild('start_date1') start_date1 : ElementRef = new ElementRef('input');
  @ViewChild('end_date1') end_date1 : ElementRef = new ElementRef('input');
  @ViewChild('car_id') car_id: ElementRef = new ElementRef('input');
  constructor(private _client: ClientService,private _vehicle:VehicleService, private _rental: RentalService,public router: Router) { }
  ngOnInit(): void {  }
  car_idList:VehicleData[]=[];
  ngAfterViewInit(): void {
    this._vehicle.getPlatNumVehicle().subscribe(
      (resp) => {
        this.car_idList = resp.res;
        console.log(this.car_idList);
      },
      function (err) {
        console.log(err);
      }
    );
  }
  addedNew() {
    var DateObj = new Date;
    //To Rental
    this.newRental.customerName = this.fulName1.nativeElement.value;
    this.newRental.typerental = "Agency";
    this.newRental.create_at = DateObj.getMonth() + 1 + "/" + DateObj.getDate() + "/" + DateObj.getFullYear()
    this.newRental.agency_id = Number(localStorage.getItem('id'));
    this.newRental.car_id = this.car_id.nativeElement.value;
    this.newRental.type_of_contract = this.type1.nativeElement.value;
    this.newRental.customer_type="Client from agency";
    // this.newRental.confirmed=0;
    console.log(this.newRental);
    this._rental.createRental(this.newRental).subscribe(
      (resp) => { this.router.navigate(['Agency/home'])},
      (err) => { }
    );
    //To Client
    this.newClient.create_at = DateObj.getMonth() + 1 + "/" + DateObj.getDate() + "/" + DateObj.getFullYear()
    this.newClient.password = 'NotAvalible';
    this._client.createClient(this.newClient).subscribe(
      (resp) => { this.router.navigate(['Agency/home'])},
      (err) => { }
    );
  }
}
