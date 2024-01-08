import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCozinhaComponent } from './modal-cozinha.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ModalCozinhaComponent', () => {
  let component: ModalCozinhaComponent;
  let fixture: ComponentFixture<ModalCozinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCozinhaComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        },  
      ]
    });
    fixture = TestBed.createComponent(ModalCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
