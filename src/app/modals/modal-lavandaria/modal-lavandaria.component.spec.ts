import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLavandariaComponent } from './modal-lavandaria.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ModalLavandariaComponent', () => {
  let component: ModalLavandariaComponent;
  let fixture: ComponentFixture<ModalLavandariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLavandariaComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        },
      ]
    });
    fixture = TestBed.createComponent(ModalLavandariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
