import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  desig: string;
  quanti: string;
  iva: string;
  iliquido: string;
}

@Component({
  selector: 'app-transportes-nova-fatura',
  templateUrl: './transportes-nova-fatura.component.html',
  styleUrls: ['./transportes-nova-fatura.component.css'],
})
export class TransportesNovaFaturaComponent {
  displayedColumns: string[] = ['desig', 'quanti', 'iva', 'iliquido'];
  dataSource: PeriodicElement[] = [];

  form: FormGroup;
  designacao: any;
  quantidade: any;
  percentagemIva: any;
  totalIliquido: any;



  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      designacao: ['', Validators.required],
      quantidade: ['', Validators.required],
      percentagemIva: ['', Validators.required],
      totalIliquido: ['', Validators.required],
    });
  }

  transferirDados() {
    const novoElemento: PeriodicElement = {
      desig: this.form.value.designacao,
      quanti: this.form.value.quantidade,
      iva: this.form.value.percentagemIva,
      iliquido: this.form.value.totalIliquido,
    };

    this.dataSource.push(novoElemento);

    // Limpar o formulário
    this.form.reset();
  }
}