import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesNovaFaturaComponent } from './transportes-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

describe('TransportesNovaFaturaComponent', () => {
  let component: TransportesNovaFaturaComponent;
  let fixture: ComponentFixture<TransportesNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportesNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} } ]
    });
    fixture = TestBed.createComponent(TransportesNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
