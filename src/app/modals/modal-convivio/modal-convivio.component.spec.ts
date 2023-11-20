import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConvivioComponent } from './modal-convivio.component';

describe('ModalConvivioComponent', () => {
  let component: ModalConvivioComponent;
  let fixture: ComponentFixture<ModalConvivioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConvivioComponent]
    });
    fixture = TestBed.createComponent(ModalConvivioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
