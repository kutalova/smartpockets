import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFeedbackComponent } from './our-feedback.component';

describe('OurFeedbackComponent', () => {
  let component: OurFeedbackComponent;
  let fixture: ComponentFixture<OurFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
