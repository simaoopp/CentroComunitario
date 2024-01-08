import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigieneNovaFaturaComponent } from './higiene-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('HigieneNovaFaturaComponent', () => {
  let component: HigieneNovaFaturaComponent;
  let fixture: ComponentFixture<HigieneNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HigieneNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        }, 
       ]
    });
    fixture = TestBed.createComponent(HigieneNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
