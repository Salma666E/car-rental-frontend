import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientAllData } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  newClient: ClientAllData = {};
  @ViewChild('name') name: ElementRef = new ElementRef('input');
  @ViewChild('address') address: ElementRef = new ElementRef('input');
  @ViewChild('contact') contact: ElementRef = new ElementRef('input');
  @ViewChild('email') email: ElementRef = new ElementRef('input');
  @ViewChild('password') password: ElementRef = new ElementRef('input');
  @ViewChild('cin') cin: ElementRef = new ElementRef('input');
  constructor(private _client: ClientService, public router: Router) { }

  ngOnInit(): void {
  }
  addAgency() {
    var DateObj = new Date();
    this.newClient.type='client';
    this.newClient.create_at= DateObj.getMonth()+1+"/"+DateObj.getDate()+"/"+DateObj.getFullYear();
    console.log(this.newClient);
    this._client.createClient(this.newClient).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/Login']);
        // window.location.reload();

      },
      function (err) {
        console.log(err);
      }
    );
  }
}
