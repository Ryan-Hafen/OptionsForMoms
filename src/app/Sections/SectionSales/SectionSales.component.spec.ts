/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionSalesComponent } from './SectionSales.component';

describe('SectionSalesComponent', () => {
  let component: SectionSalesComponent;
  let fixture: ComponentFixture<SectionSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
