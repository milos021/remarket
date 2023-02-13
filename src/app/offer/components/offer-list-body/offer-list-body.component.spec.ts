/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OfferListBodyComponent } from './offer-list-body.component';

describe('OfferListBodyComponent', () => {
  let component: OfferListBodyComponent;
  let fixture: ComponentFixture<OfferListBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferListBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
