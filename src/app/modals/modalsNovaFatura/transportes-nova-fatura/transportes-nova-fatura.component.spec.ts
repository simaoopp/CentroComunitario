import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesNovaFaturaComponent } from './transportes-nova-fatura.component';

describe('TransportesNovaFaturaComponent', () => {
  let component: TransportesNovaFaturaComponent;
  let fixture: ComponentFixture<TransportesNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportesNovaFaturaComponent]
    });
    fixture = TestBed.createComponent(TransportesNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
