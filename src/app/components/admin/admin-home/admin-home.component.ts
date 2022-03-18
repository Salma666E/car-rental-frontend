import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyData } from 'src/app/models/agency';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit, AfterViewInit {

  @ViewChild('Informations') Informations: ElementRef = new ElementRef('input');
  @ViewChild('Management') Management: ElementRef = new ElementRef('input');
  agentList: AgencyData[] = [];
  newAgency: AgencyData = {};
  @ViewChild('name') name: ElementRef = new ElementRef('input');
  @ViewChild('address') address: ElementRef = new ElementRef('input');
  @ViewChild('contact') contact: ElementRef = new ElementRef('input');
  @ViewChild('email') email: ElementRef = new ElementRef('input');
  @ViewChild('password') password: ElementRef = new ElementRef('input');

  constructor(private _agency: AgencyService, public router: Router) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.informat();
    // getAgencyList
    this._agency.getAgencyList().subscribe(
      (res) => {
        console.log(res.data);
        this.agentList = res.data.map((x: any) => x);// res.data;
        console.log(this.agentList);
      },
      function (err) {
        console.log(err);
        alert("perhaps! Agency DB is empty.");
      }
    )
    // End getAgencyList
  }
  addAgency() {
    var DateObj = new Date();
    this.newAgency.booking_confirmed=0;
    this.newAgency.booking_not_confirmed=0;
    this.newAgency.num_brokendown_car=0;
    this.newAgency.create_at= DateObj.getMonth()+1+"/"+DateObj.getDate()+"/"+DateObj.getFullYear();
    console.log(this.newAgency);
    this._agency.createAgenct(this.newAgency).subscribe(
      (res) => {
        console.log(res);
        window.location.reload();
      },
      function (err) {
        console.log(err);
      }
    );
  }
  deleteAgency(id: any){
    this._agency.deleteAgency(id).subscribe(
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
    this.router.navigate([`Admain/edit/${id}`]);
  }

  informat() {
    this.Informations?.nativeElement.setAttribute('style', 'display:block');
    this.Management?.nativeElement.setAttribute('style', 'display:none');
  }
  management() {
    this.Management?.nativeElement.setAttribute('style', 'display:block');
    this.Informations?.nativeElement.setAttribute('style', 'display:none');
  }
}
