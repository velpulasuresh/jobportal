import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginselectorComponent } from './loginselector.component';

describe('LoginselectorComponent', () => {
  let component: LoginselectorComponent;
  let fixture: ComponentFixture<LoginselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
