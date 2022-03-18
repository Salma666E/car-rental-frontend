import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ResmanagerData } from 'src/app/models/resmanager';
import { ResManagerService } from 'src/app/services/res-manager.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss']
})
export class AddManagerComponent implements OnInit{
  newManager: ResmanagerData={};
  @ViewChild('password1') password1 : ElementRef = new ElementRef('input');
  @ViewChild('email1') email1 : ElementRef = new ElementRef('input');
  @ViewChild('name1') name1 : ElementRef = new ElementRef('input');
  @ViewChild('address1') address1 : ElementRef = new ElementRef('input');
  @ViewChild('phone1') phone1: ElementRef = new ElementRef('input');
  constructor(private _ResMA: ResManagerService,public router: Router) { }

  ngOnInit(): void {  }

  addedNew() {
    var DateObj = new Date;
    //To Rental
    this.newManager.type = "maintenancemanager	";
    this.newManager.create_at = DateObj.getMonth() + 1 + "/" + DateObj.getDate() + "/" + DateObj.getFullYear()
    this.newManager.email = this.email1.nativeElement.value;
    this.newManager.password = this.password1.nativeElement.value;
    this.newManager.name = this.name1.nativeElement.value;
    this.newManager.address = this.address1.nativeElement.value;
    this.newManager.contact = this.phone1.nativeElement.value;
    // this.newManager.confirmed=0;
    console.log(this.newManager);
    this._ResMA.createresMange(this.newManager).subscribe(
      (resp) => { this.router.navigate(['Agency/home'])},
      (err) => { }
    );
  }
}
