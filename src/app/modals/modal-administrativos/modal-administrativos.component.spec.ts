import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdministrativosComponent } from './modal-administrativos.component';

describe('ModalAdministrativosComponent', () => {
  let component: ModalAdministrativosComponent;
  let fixture: ComponentFixture<ModalAdministrativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdministrativosComponent]
    });
    fixture = TestBed.createComponent(ModalAdministrativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
