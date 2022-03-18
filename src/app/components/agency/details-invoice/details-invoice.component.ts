import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InvoiceData } from 'src/app/models/invoice';
import { AgencyInvoiceService } from 'src/app/services/agency-invoice.service';

@Component({
  selector: 'app-details-invoice',
  templateUrl: './details-invoice.component.html',
  styleUrls: ['./details-invoice.component.scss']
})
export class DetailsInvoiceComponent implements OnInit {
  invoice: InvoiceData={};
  id:number=0;
  constructor(private _invoice: AgencyInvoiceService, public router: Router, private route: ActivatedRoute) { }
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
    this._invoice.getinvoice(this.id).subscribe(////////////////////////
      (resp) => {
        console.log(resp.res);
        this.invoice=resp.res[0];
      },
      function (err) {
        console.log(err);
      }
    )
  }
}
