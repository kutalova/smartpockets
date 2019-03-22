import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCountComponent } from './form-count.component';

describe('FormCountComponent', () => {
  let component: FormCountComponent;
  let fixture: ComponentFixture<FormCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
