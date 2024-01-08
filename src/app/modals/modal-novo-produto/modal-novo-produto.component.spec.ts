import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoProdutoComponent } from './modal-novo-produto.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('ModalNovoProdutoComponent', () => {
  let component: ModalNovoProdutoComponent;
  let fixture: ComponentFixture<ModalNovoProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNovoProdutoComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: AngularFireDatabase, useValue: AngularFireDatabase },
        {
          provide: 'InjectionToken angularfire2.app.options',
          useValue: environment.firebase,
        },  
      ]
    });
    fixture = TestBed.createComponent(ModalNovoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
