import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConvivioComponent } from './modal-convivio.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ModalConvivioComponent', () => {
  let component: ModalConvivioComponent;
  let fixture: ComponentFixture<ModalConvivioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConvivioComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        }, 
      ]
    });
    fixture = TestBed.createComponent(ModalConvivioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
