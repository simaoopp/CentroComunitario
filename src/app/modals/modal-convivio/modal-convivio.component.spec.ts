import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConvivioComponent } from './modal-convivio.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('ModalConvivioComponent', () => {
  let component: ModalConvivioComponent;
  let fixture: ComponentFixture<ModalConvivioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConvivioComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} } 
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
