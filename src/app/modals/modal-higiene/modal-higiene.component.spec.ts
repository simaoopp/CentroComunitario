import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHigieneComponent } from './modal-higiene.component';

describe('ModalHigieneComponent', () => {
  let component: ModalHigieneComponent;
  let fixture: ComponentFixture<ModalHigieneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHigieneComponent]
    });
    fixture = TestBed.createComponent(ModalHigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
