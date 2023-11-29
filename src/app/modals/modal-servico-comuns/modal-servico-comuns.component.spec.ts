import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServicoComunsComponent } from './modal-servico-comuns.component';

describe('ModalServicoComunsComponent', () => {
  let component: ModalServicoComunsComponent;
  let fixture: ComponentFixture<ModalServicoComunsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalServicoComunsComponent]
    });
    fixture = TestBed.createComponent(ModalServicoComunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
