import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativosNovaFaturaComponent } from './administrativos-nova-fatura.component';

describe('AdministrativosNovaFaturaComponent', () => {
  let component: AdministrativosNovaFaturaComponent;
  let fixture: ComponentFixture<AdministrativosNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativosNovaFaturaComponent]
    });
    fixture = TestBed.createComponent(AdministrativosNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
