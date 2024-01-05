import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecursosHumanosComponent } from './modal-recursos-humanos.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('ModalRecursosHumanosComponent', () => {
  let component: ModalRecursosHumanosComponent;
  let fixture: ComponentFixture<ModalRecursosHumanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRecursosHumanosComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} } 
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
