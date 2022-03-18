import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientAllData } from 'src/app/models/client';
import { RentalData } from 'src/app/models/rental';
import { ClientService } from 'src/app/services/client.service';
import { RentalClientService } from 'src/app/services/rental-client.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.scss']
})
export class AdminClientComponent implements OnInit, AfterViewInit {

  @ViewChild('searchId') searchId: ElementRef = new ElementRef('input');
  @ViewChild('searchByBrandd') searchByBrandd: ElementRef = new ElementRef('input');
  @ViewChild('listVehicles') listVehicles: ElementRef = new ElementRef('input');
  @ViewChild('addVehicles') addVehicles: ElementRef = new ElementRef('input');
  @ViewChild('searcVehicles') searcVehicles: ElementRef = new ElementRef('input');
  rentalList: RentalData[] = [];
  // rentalNotList: RentalData[] = [];
  client : ClientAllData[]=[];
  constructor(private _client: ClientService,private _rental: RentalService,private _rentalClient: RentalClientService, public router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.getConfirmed();
    // getRentalList
    this._rental.getRentalList().subscribe(
      (resp) => {
        this.rentalList = resp.data;
        console.log(this.rentalList);
        this._rentalClient.getRentalClientList().subscribe(
          (resp) => {
            console.log(resp.data);
            this.rentalList = [ ...this.rentalList, ...resp.data]
            console.log(this.rentalList);
          },
          function (err) {
            console.log(err);
          }
        );
      },
      function (err) {
        console.log(err);
      }
    );
  }
  getConfirmed() {
    this.listVehicles?.nativeElement.setAttribute('style', 'display:block');
    this.addVehicles?.nativeElement.setAttribute('style', 'display:none');
    this.searcVehicles?.nativeElement.setAttribute('style', 'display:none');
  }
  getNotConfirmed() {
    this.addVehicles?.nativeElement.setAttribute('style', 'display:block');
    this.listVehicles?.nativeElement.setAttribute('style', 'display:none');
    this.searcVehicles?.nativeElement.setAttribute('style', 'display:none');
  }
  searchClients() {
    this.searcVehicles?.nativeElement.setAttribute('style', 'display:block');
    this.addVehicles?.nativeElement.setAttribute('style', 'display:none');
    this.listVehicles?.nativeElement.setAttribute('style', 'display:none');
  }
  
  searchByCIN() {
    this.client = [];
    this._client.getClientByCin(`'${this.searchByBrandd.nativeElement.value}'`).subscribe(
      (resp) => {
        console.log(resp);
        this.client = resp.res;
      },
      (err) => {
        console.log(err);
        this.client = [];
        alert("No client By This CIN, Sorry");
      }
    );
  }
  searchByName(){
    this.client = [];
    this._client.getClientByName(`'${this.searchId.nativeElement.value}'`).subscribe(
      (resp) => {
        console.log(resp);
        this.client = resp.res;
      },
      (err) => {
        console.log(err);
        this.client = [];
        alert("No client By This Name, Sorry");
      }
    );
  }
}
