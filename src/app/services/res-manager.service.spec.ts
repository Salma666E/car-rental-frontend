import { TestBed } from '@angular/core/testing';

import { ResManagerService } from './res-manager.service';

describe('ResManagerService', () => {
  let service: ResManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
