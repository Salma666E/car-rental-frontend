import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HistoryData } from 'src/app/models/history';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-edit-history',
  templateUrl: './edit-history.component.html',
  styleUrls: ['./edit-history.component.scss']
})
export class EditHistoryComponent implements OnInit, AfterViewInit {
  newHist: HistoryData = {};
  id:number=0;
  @ViewChild('num_of_vehicle') num_of_vehicle: ElementRef = new ElementRef('input');
  @ViewChild('date') date: ElementRef = new ElementRef('input');
  @ViewChild('description') description: ElementRef = new ElementRef('input');
  @ViewChild('repaire_amount') repaire_amount: ElementRef = new ElementRef('input');
  @ViewChild('name_garage_managers') name_garage_managers: ElementRef = new ElementRef('input');
  constructor(private _hist: HistoryService, private router: Router, private route: ActivatedRoute) { }
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
    this._hist.gethistoryByID(this.id).subscribe(
      (resp) => {
        console.log(resp.res);
        this.num_of_vehicle.nativeElement.value=resp.res[0].num_of_vehicle;
        this.repaire_amount.nativeElement.value=resp.res[0].repaire_amount;
        this.name_garage_managers.nativeElement.value=resp.res[0].name_garage_managers;
        this.date.nativeElement.value=resp.res[0].date;
        this.description.nativeElement.value=resp.res[0].description;
      },
      function (err) {
        console.log(err);
        alert("perhaps! History DB is empty.");
      }
    )
    // End getAgencyList
  }
  updateAgency() {
    console.log(this.newHist);
    this._hist.updatehistory(this.newHist,this.id).subscribe(
      (res) => {
        console.log(res);
        alert("successfully updated");
        this.router.navigate([`Resmange/history`]);
      },
      function (err) {
        console.log(err);
      }
    );
  }
}
