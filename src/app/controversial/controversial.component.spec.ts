/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ControversialComponent } from './controversial.component';

describe('ControversialComponent', () => {
  let component: ControversialComponent;
  let fixture: ComponentFixture<ControversialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControversialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControversialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
