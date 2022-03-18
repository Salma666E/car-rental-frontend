import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AgencyData } from 'src/app/models/agency';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-edit-agency',
  templateUrl: './edit-agency.component.html',
  styleUrls: ['./edit-agency.component.scss']
})
export class EditAgencyComponent implements OnInit, AfterViewInit {
  newAgency: AgencyData = {};
  id:number=0;
  @ViewChild('name') name: ElementRef = new ElementRef('input');
  @ViewChild('address') address: ElementRef = new ElementRef('input');
  @ViewChild('contact') contact: ElementRef = new ElementRef('input');
  @ViewChild('email') email: ElementRef = new ElementRef('input');
  constructor(private _agency: AgencyService, public router: Router, private route: ActivatedRoute) { }
  private routeSub: Subscription = new Subscription;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.id = params['id'];
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  ngAfterViewInit(): void {
    // getAgencyList
    this._agency.getAgency(this.id).subscribe(////////////////////////
      (resp) => {
        console.log(resp.res);
        this.name.nativeElement.value=resp.res[0].name;
        this.email.nativeElement.value=resp.res[0].email;
        this.address.nativeElement.value=resp.res[0].address;
        this.contact.nativeElement.value=resp.res[0].contact;
      },
      function (err) {
        console.log(err);
        alert("perhaps! Agency DB is empty.");
      }
    )
    // End getAgencyList
  }
  updateAgency() {
    console.log(this.newAgency);
    this._agency.updateAgency(this.newAgency,this.id).subscribe(
      (res) => {
        console.log(res);
        alert("successfully updated");
        this.router.navigate([`Admain/home`]);
      },
      function (err) {
        console.log(err);
      }
    );
  }
}
