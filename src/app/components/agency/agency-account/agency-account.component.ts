import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-agency-account',
  templateUrl: './agency-account.component.html',
  styleUrls: ['./agency-account.component.scss']
})
export class AgencyAccountComponent implements OnInit, AfterViewInit {
  @ViewChild('Name') Name: ElementRef = new ElementRef('input');
  @ViewChild('Address') Address: ElementRef = new ElementRef('input');
  @ViewChild('Contact') Contact: ElementRef = new ElementRef('input');
  @ViewChild('Email') Email: ElementRef = new ElementRef('input');
  @ViewChild('Broken_down_cars') Broken_down_cars: ElementRef = new ElementRef('input');
  @ViewChild('Booking_confirmed') Booking_confirmed: ElementRef = new ElementRef('input');
  @ViewChild('Booking_not_confirmed') Booking_not_confirmed: ElementRef = new ElementRef('input');

  constructor(private _agency: AgencyService, public router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    if(!localStorage.getItem('id')){
      this.router.navigate(['/Login']);

    }
    this._agency.getAgency(localStorage.getItem('id')).subscribe(
      (resp) => {
        console.log(resp.res);
        this.Name.nativeElement.value=resp.res[0].name;
        this.Address.nativeElement.value=resp.res[0].address;
        this.Contact.nativeElement.value=resp.res[0].contact;
        this.Email.nativeElement.value=resp.res[0].email;
        this.Broken_down_cars.nativeElement.value=resp.res[0].num_brokendown_car;
        this.Booking_confirmed.nativeElement.value=resp.res[0].booking_confirmed;
        this.Booking_not_confirmed.nativeElement.value=resp.res[0].booking_not_confirmed;
      },
      function (err) {
        console.log(err);
      }
    )
  }

}
