import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavandariaNovaFaturaComponent } from './lavandaria-nova-fatura.component';

describe('LavandariaNovaFaturaComponent', () => {
  let component: LavandariaNovaFaturaComponent;
  let fixture: ComponentFixture<LavandariaNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavandariaNovaFaturaComponent]
    });
    fixture = TestBed.createComponent(LavandariaNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
