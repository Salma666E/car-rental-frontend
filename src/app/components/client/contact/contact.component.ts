import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MailData } from 'src/app/models/mailbox';
import { MailboxService } from 'src/app/services/mailbox.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name=localStorage.getItem('name');
  email=localStorage.getItem('email');
  @ViewChild ("msg") msg: ElementRef = new ElementRef('input');
  mailBox: MailData ={};
  constructor(private _mail: MailboxService) { }

  ngOnInit(): void {
  }
  addMail(){
    const d=new Date();
    this.mailBox.client_id = localStorage.getItem('id');
    this.mailBox.agency_id = localStorage.getItem('id');//JSON.parse(!) ;//|| 0;//parseInt();
    this.mailBox.writermail = localStorage.getItem('email')?.toString();
    this.mailBox.confirmed = false;
    this.mailBox.content = this.msg.nativeElement.value;
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
