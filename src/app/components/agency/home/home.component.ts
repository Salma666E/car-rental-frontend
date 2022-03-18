import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { VehicleData } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import {render} from 'creditcardpayments/creditCardPayments';

// declare let paypal: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('amount') amount: ElementRef = new ElementRef('input');
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean = false;

    ngOnInit(): void {
    }

  constructor(private _vehicle:VehicleService) {
    render({
      id: "#myPaypalBtn",
      currency: "USD",
      value: '3000',
      onApprove:(details)=>{
        alert('Transaction Successfull');
      }
    })
   }

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
  book(item: VehicleData){
    console.log('////////////////////////////////////////////////////');
    this.amount.nativeElement.value=item.price;
    console.log(this.amount.nativeElement.value);}

  details(item: VehicleData){this.temp=item;}
}
