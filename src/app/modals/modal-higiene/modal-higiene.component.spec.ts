import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHigieneComponent } from './modal-higiene.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ModalHigieneComponent', () => {
  let component: ModalHigieneComponent;
  let fixture: ComponentFixture<ModalHigieneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHigieneComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        }, 
      ]
    });
    fixture = TestBed.createComponent(ModalHigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
