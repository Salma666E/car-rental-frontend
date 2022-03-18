import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarResmanagerComponent } from './navbar-resmanager.component';

describe('NavbarResmanagerComponent', () => {
  let component: NavbarResmanagerComponent;
  let fixture: ComponentFixture<NavbarResmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarResmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarResmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
