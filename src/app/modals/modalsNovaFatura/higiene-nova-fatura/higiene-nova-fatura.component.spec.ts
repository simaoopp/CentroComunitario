import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigieneNovaFaturaComponent } from './higiene-nova-fatura.component';

describe('HigieneNovaFaturaComponent', () => {
  let component: HigieneNovaFaturaComponent;
  let fixture: ComponentFixture<HigieneNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HigieneNovaFaturaComponent]
    });
    fixture = TestBed.createComponent(HigieneNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
