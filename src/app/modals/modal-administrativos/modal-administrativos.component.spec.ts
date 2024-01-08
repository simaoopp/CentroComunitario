import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdministrativosComponent } from './modal-administrativos.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ModalAdministrativosComponent', () => {
  let component: ModalAdministrativosComponent;
  let fixture: ComponentFixture<ModalAdministrativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdministrativosComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        }, 
      ]
    });
    fixture = TestBed.createComponent(ModalAdministrativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
