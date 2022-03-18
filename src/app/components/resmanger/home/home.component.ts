import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RepairingData } from 'src/app/models/repairing';
import { VehicleData } from 'src/app/models/vehicle';
import { RepairingService } from 'src/app/services/repairing.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('List') List: ElementRef = new ElementRef('input');
  @ViewChild('Add') Add: ElementRef = new ElementRef('input');
  @ViewChild('Search') Search: ElementRef = new ElementRef('input');

  repairList: RepairingData[] = [];
  repairReturn: RepairingData[] = [];
  @ViewChild('searchplate_number') searchplate_number: ElementRef = new ElementRef('input');
  @ViewChild('searchgarage') searchgarage: ElementRef = new ElementRef('input');
  @ViewChild('car_mdl') car_mdl: ElementRef = new ElementRef('input');
  @ViewChild('marked') marked: ElementRef = new ElementRef('input');
  @ViewChild('garageName') garageName: ElementRef = new ElementRef('input');
  @ViewChild('operations_description') operations_description: ElementRef = new ElementRef('input');
  @ViewChild('plate_number') plate_number: ElementRef = new ElementRef('input');

  constructor(private _repairSer: RepairingService, private _car: VehicleService, public router: Router) { }
  newRepairing: RepairingData = {};
  getRepairingList: VehicleData[] = [];
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.ListDIV();
    //get List of Repairing here
    this._repairSer.getrepairing(localStorage.getItem('id')).subscribe(
      (ress) => {
        console.log(ress.data);
        this.repairList = ress.res.map((x: any) => x);// res.data;
        console.log(this.repairList);
      },
      function (err) {
        console.log(err);
        alert("perhaps! Agency DB is empty.");
      }
    );
    // getnewRepairingList
    this._car.getPlatNumVehicle().subscribe(
      (resp) => {
        this.getRepairingList = resp.res;
        console.log(this.getRepairingList);
      },
      function (err) {
        console.log(err);
      }
    );

  }
  ListDIV() {
    this.List?.nativeElement.setAttribute('style', 'display:block');
    this.Add?.nativeElement.setAttribute('style', 'display:none');
    this.Search?.nativeElement.setAttribute('style', 'display:none');
  }
  AddDIV() {
    this.Add?.nativeElement.setAttribute('style', 'display:block');
    this.List?.nativeElement.setAttribute('style', 'display:none');
    this.Search?.nativeElement.setAttribute('style', 'display:none');
  }
  SearchDIV() {
    this.Search?.nativeElement.setAttribute('style', 'display:block');
    this.Add?.nativeElement.setAttribute('style', 'display:none');
    this.List?.nativeElement.setAttribute('style', 'display:none');
  }
  searchByplate_number() {
    this.repairReturn = [];
    this._repairSer.searchByplate_number(this.searchplate_number.nativeElement.value).subscribe(
      (resp) => {
        console.log(resp);
        this.repairReturn = resp.res;
      },
      (err) => {
        console.log(err);
        this.repairReturn = [];
        alert("No Vehicle By This ID, Sorry");
      }
    );
  }
  searchByGarage() {
    this.repairReturn = [];
    this._repairSer.searchByGarage(`'${this.searchgarage.nativeElement.value}'`).subscribe(
      (resp) => {
        console.log(resp);
        this.repairReturn = resp.res;
      },
      (err) => {
        console.log(err);
        this.repairReturn = [];
        alert("No Vehicle By This ID, Sorry");
      }
    );
  }
  async addRepair() {
    this.newRepairing.car_name = this.plate_number.nativeElement.value;
    console.log(this.plate_number.nativeElement.value);
    
    await this._car.getCarOfPlatNumCar(this.plate_number.nativeElement.value).subscribe(
      (ress) => {
        console.log(ress.res);
        this.newRepairing.car_id = ress.res[0].id;
        console.log(ress.res[0].id);
        
        console.log(parseInt(localStorage.getItem('id') + ''));
    this.newRepairing.maintenanceManager_id = parseInt(localStorage.getItem('id') + '');
    this._repairSer.createrepairing(this.newRepairing).subscribe(
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
    console.log('///////////////////////////////////////////////////////');
    console.log(this.newRepairing);
      },
      function (err) {
        console.log(err);
      }
    );
  }
  request(itemID: RepairingData) { }

}
