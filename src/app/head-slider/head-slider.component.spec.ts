import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSliderComponent } from './head-slider.component';

describe('HeadSliderComponent', () => {
  let component: HeadSliderComponent;
  let fixture: ComponentFixture<HeadSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
