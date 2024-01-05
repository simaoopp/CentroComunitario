import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativosNovaFaturaComponent } from './administrativos-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

describe('AdministrativosNovaFaturaComponent', () => {
  let component: AdministrativosNovaFaturaComponent;
  let fixture: ComponentFixture<AdministrativosNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativosNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} } ]
    });
    fixture = TestBed.createComponent(AdministrativosNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
