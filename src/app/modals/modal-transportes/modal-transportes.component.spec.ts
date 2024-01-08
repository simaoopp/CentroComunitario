import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTransportesComponent } from './modal-transportes.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ModalTransportesComponent', () => {
  let component: ModalTransportesComponent;
  let fixture: ComponentFixture<ModalTransportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTransportesComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        }, 
      ]
    });
    fixture = TestBed.createComponent(ModalTransportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
