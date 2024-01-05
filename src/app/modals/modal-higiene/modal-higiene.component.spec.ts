import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHigieneComponent } from './modal-higiene.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('ModalHigieneComponent', () => {
  let component: ModalHigieneComponent;
  let fixture: ComponentFixture<ModalHigieneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHigieneComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} } 
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
