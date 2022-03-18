import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmailboxComponent } from './admin-emailbox.component';

describe('AdminEmailboxComponent', () => {
  let component: AdminEmailboxComponent;
  let fixture: ComponentFixture<AdminEmailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmailboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
