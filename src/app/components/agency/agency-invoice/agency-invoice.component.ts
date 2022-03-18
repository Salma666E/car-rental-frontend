import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceData } from 'src/app/models/invoice';
import { AgencyInvoiceService } from 'src/app/services/agency-invoice.service';

@Component({
  selector: 'app-agency-invoice',
  templateUrl: './agency-invoice.component.html',
  styleUrls: ['./agency-invoice.component.scss']
})
export class AgencyInvoiceComponent implements OnInit, AfterViewInit {
  @ViewChild('NumberEle') NumberEle: ElementRef = new ElementRef('input');
  @ViewChild('DateEle') DateEle: ElementRef = new ElementRef('input');
  @ViewChild('NameClient') NameClient: ElementRef = new ElementRef('input');
  @ViewChild('EmailClient') EmailClient: ElementRef = new ElementRef('input');
  @ViewChild('Address') Address: ElementRef = new ElementRef('input');
  @ViewChild('reservation_number') reservation_number: ElementRef = new ElementRef('input');
  @ViewChild('reservation_duration') reservation_duration: ElementRef = new ElementRef('input');
  @ViewChild('car_brand') car_brand: ElementRef = new ElementRef('input');
  @ViewChild('car_num_plate') car_num_plate: ElementRef = new ElementRef('input');
  @ViewChild('rantal_price') rantal_price: ElementRef = new ElementRef('input');
  @ViewChild('equipment_price') equipment_price: ElementRef = new ElementRef('input');
  @ViewChild('pay_within_day') pay_within_day: ElementRef = new ElementRef('input');
  @ViewChild('bank_details') bank_details: ElementRef = new ElementRef('input');
  @ViewChild('bank_name') bank_name: ElementRef = new ElementRef('input');
  @ViewChild('bank_teller') bank_teller: ElementRef = new ElementRef('input');
  @ViewChild('bank_key') bank_key: ElementRef = new ElementRef('input');
  invoiceList: InvoiceData[] = [];
  invoice: InvoiceData = {};

  flage: boolean = true;

  constructor(private _invoice: AgencyInvoiceService, public router: Router) { }
  ngOnInit(): void {
  }
  async ngAfterViewInit(): Promise<void> {
    // getinvoiceList
    console.log(localStorage.getItem('email'));

    await this._invoice.getinvoiceByName(localStorage.getItem('name')).subscribe(
      (res) => {
        console.log(res.data);
        this.invoiceList = res.res;//.map((x: any) => x);// res.data;
        this.flage = true;
        console.log(this.invoiceList);
      },
      function (err) {
        console.log(err);
        alert("perhaps! mail DB is empty.");
      }
    );
    if (this.invoiceList) {
      this.flage = false;
      console.log(this.flage);

    }
    // End getinvoiceList
  }
  addInvoice() {
    this.invoice.name_agency = localStorage.getItem('name');
    this.invoice.number = this.NumberEle.nativeElement.value;
    this.invoice.date = this.DateEle.nativeElement.value;
    this.invoice.name_client = this.NameClient.nativeElement.value;
    this.invoice.email_client = this.EmailClient.nativeElement.value;
    this.invoice.address = this.Address.nativeElement.value;
    this.invoice.reservation_number = this.reservation_number.nativeElement.value;
    this.invoice.reservation_duration = this.reservation_duration.nativeElement.value;//
    this.invoice.car_brand = this.car_brand.nativeElement.value;
    this.invoice.car_num_plate = this.car_num_plate.nativeElement.value;
    this.invoice.rantal_price = this.rantal_price.nativeElement.value;
    this.invoice.equipment_price = this.equipment_price.nativeElement.value;
    this.invoice.pay_within_day = this.pay_within_day.nativeElement.value;
    this.invoice.bank_details = this.bank_details.nativeElement.value;
    this.invoice.bank_name = this.bank_name.nativeElement.value;
    this.invoice.bank_teller = this.bank_teller.nativeElement.value;
    this.invoice.bank_key = this.bank_key.nativeElement.value;
    this.invoice.total_amount = parseInt(this.rantal_price.nativeElement.value) + parseInt(this.equipment_price.nativeElement.value);
    this._invoice.createInvoice(this.invoice).subscribe(
      (res) => {
        console.log(res);
        window.location.reload();
      },
      function (err) {
        console.log(err);
      }
    );
  }
  showDetails(id: any){
    this.router.navigate([`/Agency/invoice/${id}`]);
  }
}