import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransportesNovaFaturaComponent } from '../transportes-nova-fatura/transportes-nova-fatura.component';
import { AddService } from 'src/app/services/add.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  desig: string;
  quanti: string;
  iva: string;
  iliquido: string;
}
@Component({
  selector: 'app-cozinha-nova-fatura',
  templateUrl: './cozinha-nova-fatura.component.html',
  styleUrls: ['./cozinha-nova-fatura.component.css']
})
export class CozinhaNovaFaturaComponent {

  
    dataSource = new MatTableDataSource<PeriodicElement>();
    displayedColumns: string[] = [
      'desig',
      'quanti',
      'iva',
      'iliquido',
      'actions',
    ];
  
    dataemissao: any;
    empresa: any;
    Nfatura: any;
  
    ValorTotal = 0;
  
    constructor(
      private cdr: ChangeDetectorRef,
      private DatePipe: DatePipe,
      public dialogRef: MatDialogRef<CozinhaNovaFaturaComponent>,
      private add: AddService
    ) {}
  
    faturaForm = new FormGroup({
      designacao: new FormControl('', Validators.required),
      quantidade: new FormControl('', Validators.required),
      percentagemIva: new FormControl('', Validators.required),
      totalIliquido: new FormControl('', Validators.required),
    });
  
    getDados() {
      if (this.faturaForm.valid) {
        const percentagemIva = parseFloat(
          this.faturaForm.get('percentagemIva').value
        );
        const totalIliquido = parseFloat(
          this.faturaForm.get('totalIliquido').value
        );
  
        if (percentagemIva !== 0) {
          const decimalPercent = percentagemIva / 100;
          const result = decimalPercent * totalIliquido;
          this.ValorTotal = this.ValorTotal + totalIliquido + result;
        } else {
          this.ValorTotal = this.ValorTotal + totalIliquido;
        }
        const novoElemento: PeriodicElement = {
          desig: this.faturaForm.get('designacao').value,
          quanti: this.faturaForm.get('quantidade').value,
          iva: this.faturaForm.get('percentagemIva').value,
          iliquido: this.faturaForm.get('totalIliquido').value,
        };
  
        this.dataSource.data.push(novoElemento);
  
        this.dataSource.data = [...this.dataSource.data];
  
        console.log('Updated DataSource:', this.dataSource.data);
  
        this.cdr.detectChanges();
        this.faturaForm.reset();
      }
    }
  
    Remove(element: any) {
      const index = this.dataSource.data.indexOf(element);
      if(element.iva !== 0){
        const decimalPercent = element.iva / 100;
        const valorIVA = decimalPercent * element.iliquido;
        const valorTotal = element.iliquido + valorIVA
        this.ValorTotal = this.ValorTotal - valorTotal;
      } else {
        this.ValorTotal = this.ValorTotal - element.iliquido;
      }
      if (index >= 0) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<PeriodicElement>(
          this.dataSource.data
        );
      }
    }
  
    closeDialog(): void {
      this.dialogRef.close();
    }
  
    submit() {
      let date = this.DatePipe.transform(this.dataemissao, 'yyyy/MM/dd');
      this.add.CozinhaADD(
        this.empresa,
        this.Nfatura,
        date,
        this.ValorTotal,
        this.dataSource.data
      );
      this.dialogRef.close();
    }
  }
  
