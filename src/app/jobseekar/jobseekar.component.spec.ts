import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekarComponent } from './jobseekar.component';

describe('JobseekarComponent', () => {
  let component: JobseekarComponent;
  let fixture: ComponentFixture<JobseekarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
