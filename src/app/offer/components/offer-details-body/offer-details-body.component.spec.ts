/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OfferDetailsBodyComponent } from './offer-details-body.component';

describe('OfferDetailsBodyComponent', () => {
  let component: OfferDetailsBodyComponent;
  let fixture: ComponentFixture<OfferDetailsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDetailsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
