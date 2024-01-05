import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewComponent } from './modal-view.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('ModalViewComponent', () => {
  let component: ModalViewComponent;
  let fixture: ComponentFixture<ModalViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalViewComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} } 
      ]
    });
    fixture = TestBed.createComponent(ModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
