import { TestBed } from '@angular/core/testing';

import { ReqRepairServService } from './req-repair-serv.service';

describe('ReqRepairServService', () => {
  let service: ReqRepairServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqRepairServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
