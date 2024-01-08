import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServicoComunsComponent } from './modal-servico-comuns.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ModalServicoComunsComponent', () => {
  let component: ModalServicoComunsComponent;
  let fixture: ComponentFixture<ModalServicoComunsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalServicoComunsComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        },
      ],
    });
    fixture = TestBed.createComponent(ModalServicoComunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
