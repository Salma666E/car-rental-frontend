import { TestBed } from '@angular/core/testing';

import { RepairingService } from './repairing.service';

describe('RepairingService', () => {
  let service: RepairingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
