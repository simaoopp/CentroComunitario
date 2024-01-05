import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessDeniedComponent } from './acess-denied.component';

describe('AcessDeniedComponent', () => {
  let component: AcessDeniedComponent;
  let fixture: ComponentFixture<AcessDeniedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcessDeniedComponent]
    });
    fixture = TestBed.createComponent(AcessDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
