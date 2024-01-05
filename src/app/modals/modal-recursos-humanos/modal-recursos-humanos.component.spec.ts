import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecursosHumanosComponent } from './modal-recursos-humanos.component';

describe('ModalRecursosHumanosComponent', () => {
  let component: ModalRecursosHumanosComponent;
  let fixture: ComponentFixture<ModalRecursosHumanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRecursosHumanosComponent]
    });
    fixture = TestBed.createComponent(ModalRecursosHumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});