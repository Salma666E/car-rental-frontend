import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailboxService {

  private _mailbox = "http://localhost:9000/mailbox/list";
  private _mailboxnew = "http://localhost:9000/mailbox/new";
  private _mailboxById = "http://localhost:9000/mailbox/findmailboxid";
  private _mailboxSearchById = "http://localhost:9000/mailbox/findmailboxwritermail";
  private _mailboxdelete = "http://localhost:9000/mailbox/deletemailbox";
  private _mailboxupdate = "http://localhost:9000/mailbox/updatemailbox";
  private _mailboxConfirmed = "http://localhost:9000/mailbox/updatemailboxconfirmed";

  constructor(private http: HttpClient) { }

  getMailbox() {
    return this.http.get<any>(`${this._mailbox}`)
  }
  getMailboxById(id: any) {
    return this.http.get<any>(`${this._mailboxById}/${id}`)
  }
  newMailbox(mailbox: any) {
    return this.http.post<any>(`${this._mailboxnew}`, mailbox)
  }
  searchMailbox(id: any) {
    return this.http.get<any>(`${this._mailboxSearchById}/'${id}'`)
  }
  deleteMailbox(id: any) {
    return this.http.delete<any>(`${this._mailboxdelete}/${id}`)
  }
  updateMailbox(mailbox: any, id: any) {
    return this.http.post<any>(`${this._mailboxupdate}/${id}`, mailbox)
  }
  updateMailboxByConfirm(id: any) {
    return this.http.get<any>(`${this._mailboxConfirmed}/${id}`);
  }
}