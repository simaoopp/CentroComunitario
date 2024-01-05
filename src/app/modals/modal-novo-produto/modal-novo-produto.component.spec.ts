import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoProdutoComponent } from './modal-novo-produto.component';

describe('ModalNovoProdutoComponent', () => {
  let component: ModalNovoProdutoComponent;
  let fixture: ComponentFixture<ModalNovoProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNovoProdutoComponent]
    });
    fixture = TestBed.createComponent(ModalNovoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
