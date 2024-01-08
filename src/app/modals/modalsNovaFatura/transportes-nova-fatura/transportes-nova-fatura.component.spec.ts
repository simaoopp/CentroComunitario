import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesNovaFaturaComponent } from './transportes-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('TransportesNovaFaturaComponent', () => {
  let component: TransportesNovaFaturaComponent;
  let fixture: ComponentFixture<TransportesNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportesNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        }, ]
    });
    fixture = TestBed.createComponent(TransportesNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
