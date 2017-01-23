/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RisingComponent } from './rising.component';

describe('RisingComponent', () => {
  let component: RisingComponent;
  let fixture: ComponentFixture<RisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
