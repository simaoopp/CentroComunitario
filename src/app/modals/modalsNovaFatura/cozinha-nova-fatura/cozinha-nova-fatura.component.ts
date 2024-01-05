import { Component } from '@angular/core';
import { AddService } from 'src/app/services/add.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cozinha-nova-fatura',
  templateUrl: './cozinha-nova-fatura.component.html',
  styleUrls: ['./cozinha-nova-fatura.component.css'],
})
export class CozinhaNovaFaturaComponent {

  isSubmitting = false;

  customForm = new FormGroup({
    empresa: new FormControl('', Validators.required),
    Nfatura: new FormControl('', Validators.required),
    dataemissao: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
    ValorTotal: new FormControl('', Validators.required)
  });

  constructor(
    private DatePipe: DatePipe,
    public dialogRef: MatDialogRef<CozinhaNovaFaturaComponent>,
    private add: AddService,
    private toastr: ToastrService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    reader.onerror = (error) => {
      this.toastr.error('Failed to read the file', 'Error');
    };  
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const fileUrl = reader.result as string;
        this.customForm.get('file')?.setValue(fileUrl);
      };
    }
  }

  resetForm() {
    this.customForm.reset();
  }

  submit() {
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;

    if (!this.customForm.valid) {
      this.toastr.error('Por favor, preencha todos os campos requeridos.', 'Erro!');
      this.isSubmitting = false;
      return;
    }

    const dateFormatted = this.DatePipe.transform(this.customForm.get('dataemissao')?.value, 'yyyy/MM/dd');
    
    this.add.CozinhaADD(
      this.customForm.get('empresa')?.value,
      this.customForm.get('Nfatura')?.value,
      dateFormatted,
      this.customForm.get('ValorTotal')?.value,
      this.customForm.get('file')?.value
    ).then(() => {
      this.dialogRef.close();
    }).catch((error) => {
      this.toastr.error('Ocorreu um erro durante a submissão.', 'Erro!');
    }).finally(() => {
      this.isSubmitting = false; 
    });
  }
}