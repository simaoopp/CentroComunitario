import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaNovaFaturaComponent } from './cozinha-nova-fatura.component';

describe('CozinhaNovaFaturaComponent', () => {
  let component: CozinhaNovaFaturaComponent;
  let fixture: ComponentFixture<CozinhaNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CozinhaNovaFaturaComponent]
    });
    fixture = TestBed.createComponent(CozinhaNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
