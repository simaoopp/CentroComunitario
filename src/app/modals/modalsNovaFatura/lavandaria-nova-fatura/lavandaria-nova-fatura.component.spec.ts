import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavandariaNovaFaturaComponent } from './lavandaria-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

describe('LavandariaNovaFaturaComponent', () => {
  let component: LavandariaNovaFaturaComponent;
  let fixture: ComponentFixture<LavandariaNovaFaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavandariaNovaFaturaComponent],
      providers: [ DatePipe, { provide: MatDialogRef, useValue: {} } ]
    });
    fixture = TestBed.createComponent(LavandariaNovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
