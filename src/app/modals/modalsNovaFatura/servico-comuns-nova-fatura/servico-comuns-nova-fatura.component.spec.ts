import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoComunsNovaFaturaComponent } from './servico-comuns-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

describe('ServicoComunsNovaFaturaComponent', () => {
  let component: ServicoComunsNovaFaturaComponent;
  let fixture: ComponentFixture<ServicoComunsNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicoComunsNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} } ]
    });
    fixture = TestBed.createComponent(ServicoComunsNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
