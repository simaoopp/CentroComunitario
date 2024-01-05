import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigieneNovaFaturaComponent } from './higiene-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

describe('HigieneNovaFaturaComponent', () => {
  let component: HigieneNovaFaturaComponent;
  let fixture: ComponentFixture<HigieneNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HigieneNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} } ]
    });
    fixture = TestBed.createComponent(HigieneNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
