import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCozinhaComponent } from './modal-cozinha.component';

describe('ModalCozinhaComponent', () => {
  let component: ModalCozinhaComponent;
  let fixture: ComponentFixture<ModalCozinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCozinhaComponent]
    });
    fixture = TestBed.createComponent(ModalCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
