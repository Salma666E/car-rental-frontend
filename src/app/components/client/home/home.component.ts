import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { VehicleData } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private _vehicle:VehicleService) {
    render({
      id: "#myPaypalBtn",
      currency: "USD",
      value: '3000',
      onApprove:(details)=>{
        alert('Transaction Successfull');
      }
    })
   }//private _client: ClientService, private _rental: RentalService,public router: Router

  carList:VehicleData[]=[];
  temp:VehicleData={};
  email?:String|null;
  ngAfterViewInit(): void {
    this.email=localStorage.getItem('email');
    this._vehicle.getvehicleList().subscribe(
      (res) => {
        this.carList = res.data;
        console.log(this.carList);
      },
      function (err) {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
  }
  book(item:VehicleData){this.temp=item;
  }
  validate(){
    
  }
}
