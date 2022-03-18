import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RentalData } from 'src/app/models/rental';
import { VehicleData } from 'src/app/models/vehicle';
import { RentalService } from 'src/app/services/rental.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-agency-newrental',
  templateUrl: './agency-newrental.component.html',
  styleUrls: ['./agency-newrental.component.scss']
})
export class AgencyNewrentalComponent implements OnInit, AfterViewInit {
  newRental: RentalData = {};
  clientName: string = "";
  @ViewChild('startdate') startdate: ElementRef = new ElementRef('input');
  @ViewChild('enddate') enddate: ElementRef = new ElementRef('input');
  @ViewChild('type_of_contract') type_of_contract: ElementRef = new ElementRef('input');
  @ViewChild('customer_type') customer_type: ElementRef = new ElementRef('input');
  @ViewChild('car_id') car_id: ElementRef = new ElementRef('input');
  constructor(private _rental: RentalService, public router: Router, private route: ActivatedRoute,
    private _vehicle: VehicleService) { }
  private routeSub: Subscription = new Subscription;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.clientName = params['id'];
    });
  }
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
  addNewRental() {
    var DateObj = new Date;
    this.newRental.customerName = this.clientName;
    this.newRental.typerental = "Agency";
    this.newRental.create_at = DateObj.getMonth() + 1 + "/" + DateObj.getDate() + "/" + DateObj.getFullYear()
    this.newRental.agency_id = Number(localStorage.getItem('id'));
    this.newRental.startdate = this.startdate.nativeElement.value;
    this.newRental.enddate = this.enddate.nativeElement.value;
    this.newRental.customer_type = this.customer_type.nativeElement.value;
    this.newRental.type_of_contract = this.type_of_contract.nativeElement.value;
    this.newRental.car_id = this.car_id.nativeElement.value;
    this._rental.createRental(this.newRental).subscribe(
      (resp) => { this.router.navigate(['Agency/rates'])},
      (err) => { }
    );
  }
}
