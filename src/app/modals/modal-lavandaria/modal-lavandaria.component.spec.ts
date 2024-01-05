import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLavandariaComponent } from './modal-lavandaria.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('ModalLavandariaComponent', () => {
  let component: ModalLavandariaComponent;
  let fixture: ComponentFixture<ModalLavandariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLavandariaComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} } 
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
