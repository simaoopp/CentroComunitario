import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoComunsNovaFaturaComponent } from './servico-comuns-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ServicoComunsNovaFaturaComponent', () => {
  let component: ServicoComunsNovaFaturaComponent;
  let fixture: ComponentFixture<ServicoComunsNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicoComunsNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        }, ]
    });
    fixture = TestBed.createComponent(ServicoComunsNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
