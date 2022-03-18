import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyNewrentalComponent } from './agency-newrental.component';

describe('AgencyNewrentalComponent', () => {
  let component: AgencyNewrentalComponent;
  let fixture: ComponentFixture<AgencyNewrentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyNewrentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyNewrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
