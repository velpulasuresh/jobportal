import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedjobComponent } from './postedjob.component';

describe('PostedjobComponent', () => {
  let component: PostedjobComponent;
  let fixture: ComponentFixture<PostedjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
