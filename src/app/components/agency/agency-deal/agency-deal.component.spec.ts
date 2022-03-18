import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDealComponent } from './agency-deal.component';

describe('AgencyDealComponent', () => {
  let component: AgencyDealComponent;
  let fixture: ComponentFixture<AgencyDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyDealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
