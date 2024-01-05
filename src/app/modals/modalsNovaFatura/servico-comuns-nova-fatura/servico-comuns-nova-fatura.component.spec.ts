import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoComunsNovaFaturaComponent } from './servico-comuns-nova-fatura.component';

describe('ServicoComunsNovaFaturaComponent', () => {
  let component: ServicoComunsNovaFaturaComponent;
  let fixture: ComponentFixture<ServicoComunsNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicoComunsNovaFaturaComponent]
    });
    fixture = TestBed.createComponent(ServicoComunsNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
