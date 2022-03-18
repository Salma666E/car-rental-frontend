import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyInvoiceComponent } from './agency-invoice.component';

describe('AgencyInvoiceComponent', () => {
  let component: AgencyInvoiceComponent;
  let fixture: ComponentFixture<AgencyInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
