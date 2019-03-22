import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProdComponent } from './our-prod.component';

describe('OurProdComponent', () => {
  let component: OurProdComponent;
  let fixture: ComponentFixture<OurProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
