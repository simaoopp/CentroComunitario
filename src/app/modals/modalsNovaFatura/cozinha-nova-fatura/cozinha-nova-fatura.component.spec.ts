import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaNovaFaturaComponent } from './cozinha-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

describe('CozinhaNovaFaturaComponent', () => {
  let component: CozinhaNovaFaturaComponent;
  let fixture: ComponentFixture<CozinhaNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CozinhaNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} } ]
    });
    fixture = TestBed.createComponent(CozinhaNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
