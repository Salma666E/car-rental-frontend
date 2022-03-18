import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, AfterViewInit {
  @ViewChild('Name') Name: ElementRef = new ElementRef('input');
  @ViewChild('Address') Address: ElementRef = new ElementRef('input');
  @ViewChild('Contact') Contact: ElementRef = new ElementRef('input');
  @ViewChild('Email') Email: ElementRef = new ElementRef('input');
  @ViewChild('CIN') CIN: ElementRef = new ElementRef('input');
  @ViewChild('Type') Type: ElementRef = new ElementRef('input');

  constructor(private _client: ClientService, public router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    if(!localStorage.getItem('id')){
      this.router.navigate(['/Login']);

    }
    console.log(localStorage.getItem('id'));
    
    this._client.getClientById(localStorage.getItem('id')).subscribe(
      (resp) => {
        console.log(resp.res);
        this.Name.nativeElement.value=resp.res[0].name;
        this.Address.nativeElement.value=resp.res[0].address;
        this.Contact.nativeElement.value=resp.res[0].contact;
        this.Email.nativeElement.value=resp.res[0].email;
        this.CIN.nativeElement.value=resp.res[0].cin;
        this.Type.nativeElement.value=resp.res[0].type;
      },
      function (err) {
        console.log(err);
      }
    )
  }

}
