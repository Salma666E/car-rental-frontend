import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyInvoiceService {
  private _invoiceList = "http://localhost:9000/invoice/list";
  private _invoice = "http://localhost:9000/invoice/findinvoiceid";
  private _newinvoice = "http://localhost:9000/invoice/new";
  private _invoiceDel = "http://localhost:9000/invoice/deleteinvoice";
  private _invoiceByName = "http://localhost:9000/invoice/findinvoicename_agency";
  private _newUpdateinvoice = "http://localhost:9000/invoice/updateinvoice";
  httpClient: any;

  constructor(private http: HttpClient) { }
  getinvoiceList(){
    return this.http.get<any>(this._invoiceList)
  }
  getinvoice(id: any){
    return this.http.get<any>(`${this._invoice}/${id}`)
  }
  getinvoiceByName(id: any){
    return this.http.get<any>(`${this._invoiceByName}/'${id}'`)
  }
  createInvoice(invoice: any){
    return this.http.post<any>(this._newinvoice, invoice)
  }
  deleteinvoice(id: any){
    return this.http.delete<any>(`${this._invoiceDel}/${id}`)
  }
  updateinvoice(invoice: any, id: any){
    return this.http.post<any>(`${this._newUpdateinvoice}/${id}`, invoice)
  }
}
