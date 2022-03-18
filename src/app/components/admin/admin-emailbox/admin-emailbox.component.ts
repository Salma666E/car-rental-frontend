import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MailData } from 'src/app/models/mailbox';
import { MailboxService } from 'src/app/services/mailbox.service';

@Component({
  selector: 'app-admin-emailbox',
  templateUrl: './admin-emailbox.component.html',
  styleUrls: ['./admin-emailbox.component.scss']
})
export class AdminEmailboxComponent implements OnInit, AfterViewInit {
  mailList: MailData[] = [];
  constructor(private _mail: MailboxService) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // getmailList
    this._mail.getMailbox().subscribe(
      (res) => {
        console.log(res.data);
        this.mailList = res.data.map((x: any) => x);// res.data;
        console.log(this.mailList);
      },
      function (err) {
        console.log(err);
        alert("perhaps! mail DB is empty.");
      }
    )
    // End getmailList
  }
  ckeck(id: any){
    this._mail.updateMailboxByConfirm(id).subscribe(
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
