import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVechleComponent } from './edit-vechle.component';

describe('EditVechleComponent', () => {
  let component: EditVechleComponent;
  let fixture: ComponentFixture<EditVechleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVechleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVechleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
