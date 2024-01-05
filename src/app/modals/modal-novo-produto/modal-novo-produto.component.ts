import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-modal-novo-produto',
  templateUrl: './modal-novo-produto.component.html',
  styleUrls: ['./modal-novo-produto.component.css'],
})
export class ModalNovoProdutoComponent {

  imageuploaded: any;

  NewProduct = new FormGroup({
    nome: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    quantidade: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  });

  constructor(
    private dialogRef: MatDialogRef<ModalNovoProdutoComponent>,
    private add: AddService,
    private toastr: ToastrService
  ) {}

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.NewProduct.get('img')?.setValue(reader.result as string);
        this.imageuploaded = reader.result;
      };
      reader.onerror = (error) => {
        console.error('File reading has failed', error);
      };
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submit() {
    if (this.NewProduct.valid) {
      const produto = this.NewProduct.value;
      this.add.NovoProdutoADD(produto);
      this.dialogRef.close();
    } else {
      this.toastr.error('Por favor, preencha todos os campos requeridos.', 'Erro!');
    }
  }
}
