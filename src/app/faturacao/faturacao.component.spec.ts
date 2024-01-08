import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturacaoComponent } from './faturacao.component';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('FaturacaoComponent', () => {
  let component: FaturacaoComponent;
  let fixture: ComponentFixture<FaturacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaturacaoComponent],
      providers: [
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        },
      ]
    });
    fixture = TestBed.createComponent(FaturacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
