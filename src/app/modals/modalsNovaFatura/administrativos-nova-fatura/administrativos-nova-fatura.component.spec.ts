import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativosNovaFaturaComponent } from './administrativos-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/compat/database';

describe('AdministrativosNovaFaturaComponent', () => {
  let component: AdministrativosNovaFaturaComponent;
  let fixture: ComponentFixture<AdministrativosNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativosNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        },  ]
    });
    fixture = TestBed.createComponent(AdministrativosNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
