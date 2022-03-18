import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyEmailboxComponent } from './agency-emailbox.component';

describe('AgencyEmailboxComponent', () => {
  let component: AgencyEmailboxComponent;
  let fixture: ComponentFixture<AgencyEmailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyEmailboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyEmailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
