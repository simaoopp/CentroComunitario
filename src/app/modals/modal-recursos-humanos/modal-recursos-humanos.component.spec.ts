import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecursosHumanosComponent } from './modal-recursos-humanos.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ModalRecursosHumanosComponent', () => {
  let component: ModalRecursosHumanosComponent;
  let fixture: ComponentFixture<ModalRecursosHumanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRecursosHumanosComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        },
      ]
    });
    fixture = TestBed.createComponent(ModalRecursosHumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
