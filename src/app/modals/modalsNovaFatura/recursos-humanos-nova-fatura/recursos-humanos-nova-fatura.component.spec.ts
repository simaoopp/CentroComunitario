import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosHumanosNovaFaturaComponent } from './recursos-humanos-nova-fatura.component';

describe('RecursosHumanosNovaFaturaComponent', () => {
  let component: RecursosHumanosNovaFaturaComponent;
  let fixture: ComponentFixture<RecursosHumanosNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursosHumanosNovaFaturaComponent]
    });
    fixture = TestBed.createComponent(RecursosHumanosNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
