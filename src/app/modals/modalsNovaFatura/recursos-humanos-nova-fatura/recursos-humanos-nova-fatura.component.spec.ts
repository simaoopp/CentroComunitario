import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosHumanosNovaFaturaComponent } from './recursos-humanos-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

describe('RecursosHumanosNovaFaturaComponent', () => {
  let component: RecursosHumanosNovaFaturaComponent;
  let fixture: ComponentFixture<RecursosHumanosNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursosHumanosNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} } ]
    });
    fixture = TestBed.createComponent(RecursosHumanosNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
