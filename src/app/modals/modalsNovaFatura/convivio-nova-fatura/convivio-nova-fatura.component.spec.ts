import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvivioNovaFaturaComponent } from './convivio-nova-fatura.component';

describe('ConvivioNovaFaturaComponent', () => {
  let component: ConvivioNovaFaturaComponent;
  let fixture: ComponentFixture<ConvivioNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvivioNovaFaturaComponent]
    });
    fixture = TestBed.createComponent(ConvivioNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
