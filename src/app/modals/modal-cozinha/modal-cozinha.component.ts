import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cozinha',
  templateUrl: './modal-cozinha.component.html',
  styleUrls: ['./modal-cozinha.component.css']
})
export class ModalCozinhaComponent {
  constructor(public dialogRef: MatDialogRef<ModalCozinhaComponent>, public dialog: MatDialog) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
