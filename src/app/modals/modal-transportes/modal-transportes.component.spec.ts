import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTransportesComponent } from './modal-transportes.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('ModalTransportesComponent', () => {
  let component: ModalTransportesComponent;
  let fixture: ComponentFixture<ModalTransportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTransportesComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} } 
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
