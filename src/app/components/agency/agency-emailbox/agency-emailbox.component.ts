import { AfterViewInit, Component, ElementRef, Output, OnInit, ViewChild } from '@angular/core';
import { MailData } from 'src/app/models/mailbox';
import { MailboxService } from 'src/app/services/mailbox.service';

@Component({
  selector: 'app-agency-emailbox',
  templateUrl: './agency-emailbox.component.html',
  styleUrls: ['./agency-emailbox.component.scss']
})
export class AgencyEmailboxComponent implements OnInit, AfterViewInit {
  @ViewChild ("content") content: ElementRef = new ElementRef('input');
  mailList: MailData[] = [];
  mailBox: MailData ={};
  
  flage: boolean =true;

  constructor(private _mail: MailboxService) { }
  ngOnInit(): void {
  }
  async ngAfterViewInit(): Promise<void> {
    // getmailList
    console.log(localStorage.getItem('email'));
    
    await this._mail.searchMailbox(localStorage.getItem('email')).subscribe(
      (res) => {
        console.log(res.data);
        this.mailList = res.res;//.map((x: any) => x);// res.data;
          this.flage=true;
          console.log(this.mailList);
      },
      function (err) {
        console.log(err);
        alert("perhaps! mail DB is empty.");
      }
    );
        if(this.mailList){
          this.flage=false;
        }
        // End getmailList
  }
  addMail(){
    const d=new Date();
    this.mailBox.client_id = localStorage.getItem('id');
    this.mailBox.agency_id = localStorage.getItem('id');//JSON.parse(!) ;//|| 0;//parseInt();
    this.mailBox.writermail = localStorage.getItem('email')?.toString();
    this.mailBox.confirmed = false;
    this.mailBox.content = this.content.nativeElement.value;
    this.mailBox.create_at = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    this._mail.newMailbox(this.mailBox).subscribe(
      (res) => {
        console.log(res);
      },
      function (err) {
        console.log(err);
      }
    );
  window.location.reload();
  }
}