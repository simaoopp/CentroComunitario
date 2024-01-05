import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvivioNovaFaturaComponent } from './convivio-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

describe('ConvivioNovaFaturaComponent', () => {
  let component: ConvivioNovaFaturaComponent;
  let fixture: ComponentFixture<ConvivioNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvivioNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} } ]
    });
    fixture = TestBed.createComponent(ConvivioNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
