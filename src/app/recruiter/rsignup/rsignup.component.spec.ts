import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSignupComponent } from './rsignup.component';

describe(' RSignupComponent', () => {
  let component:  RSignupComponent;
  let fixture: ComponentFixture< RSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  RSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( RSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
