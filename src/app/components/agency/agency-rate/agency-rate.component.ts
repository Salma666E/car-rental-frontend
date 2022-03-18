import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalData } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-agency-rate',
  templateUrl: './agency-rate.component.html',
  styleUrls: ['./agency-rate.component.scss']
})
export class AgencyRateComponent implements OnInit, AfterViewInit {
  rentalList:RentalData[] =[];
  constructor(private _rental: RentalService,  public router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this._rental.getRentalListBYAgencyID(localStorage.getItem('id')).subscribe(
      (res) => {
        console.log(res.data);
        this.rentalList = res.data.map((x: any) => x);// res.data;
          console.log(this.rentalList);
      },
      function (err) {
        console.log(err);
        alert("perhaps! mail DB is empty.");
      }
    );
  }
  newInvice(){
    this.router.navigate([`/Agency/invoice/`]);
  }
  addnewReserv(customerName: any){
    this.router.navigate([`/Agency/newreserv/${customerName}`]);
  }
}
