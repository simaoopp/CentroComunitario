import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvivioNovaFaturaComponent } from './convivio-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ConvivioNovaFaturaComponent', () => {
  let component: ConvivioNovaFaturaComponent;
  let fixture: ComponentFixture<ConvivioNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvivioNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        }, ]
    });
    fixture = TestBed.createComponent(ConvivioNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
