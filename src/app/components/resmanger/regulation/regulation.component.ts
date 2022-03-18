import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryData } from 'src/app/models/history';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.scss']
})
export class RegulationComponent implements OnInit, AfterViewInit {

  @ViewChild('Informations') Informations: ElementRef = new ElementRef('input');
  @ViewChild('Management') Management: ElementRef = new ElementRef('input');
  newHist: HistoryData = {};
  nowHist: HistoryData = {};
  constructor(public router: Router, private _hist: HistoryService) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.Save();
   
  }
  Save() {
    this.Informations?.nativeElement.setAttribute('style', 'display:block');
    this.Management?.nativeElement.setAttribute('style', 'display:none');
  }
  Add() {
    this.Management?.nativeElement.setAttribute('style', 'display:block');
    this.Informations?.nativeElement.setAttribute('style', 'display:none');
  }
  addHist() {
    console.log(this.newHist);
    this.newHist.manager_id = parseInt(localStorage.getItem('id')+'');
    this._hist.createhistory(this.newHist).subscribe(
      (res) => {
        console.log(res);
        alert("successfully updated");
        window.location.reload();
      },
      function (err) {
        console.log(err);
      }
    );
  }
  savePrice(){
    const DateObj =new Date();
    console.log(this.nowHist);
    this.nowHist.manager_id = parseInt(localStorage.getItem('id')+'');
    this.nowHist.name_garage_managers = '';
    this.nowHist.date = DateObj.getMonth()+1+"/"+DateObj.getDate()+"/"+DateObj.getFullYear();
    this._hist.createhistory(this.nowHist).subscribe(
      (res) => {
        console.log(res);
        alert("successfully updated");
        window.location.reload();
      },
      function (err) {
        console.log(err);
      }
    );
  }
}
