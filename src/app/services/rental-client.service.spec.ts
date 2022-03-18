import { TestBed } from '@angular/core/testing';

import { RentalClientService } from './rental-client.service';

describe('RentalClientService', () => {
  let service: RentalClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
