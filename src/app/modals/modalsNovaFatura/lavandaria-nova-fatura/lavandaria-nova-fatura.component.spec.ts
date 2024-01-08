import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavandariaNovaFaturaComponent } from './lavandaria-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('LavandariaNovaFaturaComponent', () => {
  let component: LavandariaNovaFaturaComponent;
  let fixture: ComponentFixture<LavandariaNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavandariaNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        },  ]
    });
    fixture = TestBed.createComponent(LavandariaNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
