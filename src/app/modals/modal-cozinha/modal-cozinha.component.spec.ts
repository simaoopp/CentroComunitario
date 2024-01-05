import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCozinhaComponent } from './modal-cozinha.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('ModalCozinhaComponent', () => {
  let component: ModalCozinhaComponent;
  let fixture: ComponentFixture<ModalCozinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCozinhaComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} } 
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
