import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryData } from 'src/app/models/history';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit {
  histList: HistoryData[] = [];

  flage: boolean =true;

  constructor(private _hist: HistoryService, private router: Router) { }
  ngOnInit(): void {
  }
  async ngAfterViewInit(): Promise<void> {
    // gethistList
    await this._hist.gethistory(localStorage.getItem('id')).subscribe(
      (ress) => {
        console.log(ress.data);
        this.histList = ress.res;//.map((x: any) => x);// ress.data;
          this.flage=true;
          console.log(this.histList);
      },
      function (err) {
        console.log(err);
        alert("perhaps! mail DB is empty.");
      }
    );
        if(this.histList){
          this.flage=false;
        }
        // End gethistList
  }
  deleteAgency(id: any){
    this._hist.deletehistory(id).subscribe(
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
    this.router.navigate([`Resmange/history/edit/${id}`]);
  }
}