import { TestBed } from '@angular/core/testing';

import { AgencyInvoiceService } from './agency-invoice.service';

describe('AgencyInvoiceService', () => {
  let service: AgencyInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
