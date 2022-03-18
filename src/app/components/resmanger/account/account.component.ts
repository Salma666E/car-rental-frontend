import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResManagerService } from 'src/app/services/res-manager.service';

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
  @ViewChild('Type') Type: ElementRef = new ElementRef('input');

  constructor(private _resMange: ResManagerService, public router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    if(!localStorage.getItem('id')){
      this.router.navigate(['/Login']);

    }
    this._resMange.getresMange(localStorage.getItem('id')).subscribe(
      (resp) => {
        console.log(resp.res);
        this.Name.nativeElement.value=resp.res[0].name;
        this.Address.nativeElement.value=resp.res[0].address;
        this.Contact.nativeElement.value=resp.res[0].contact;
        this.Email.nativeElement.value=resp.res[0].email;
        this.Type.nativeElement.value=resp.res[0].type;
      },
      function (err) {
        console.log(err);
      }
    )
  }

}
