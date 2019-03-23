import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCertificatesComponent } from './our-certificates.component';

describe('OurCertificatesComponent', () => {
  let component: OurCertificatesComponent;
  let fixture: ComponentFixture<OurCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
