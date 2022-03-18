import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyNavbarComponent } from './agency-navbar.component';

describe('AgencyNavbarComponent', () => {
  let component: AgencyNavbarComponent;
  let fixture: ComponentFixture<AgencyNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
