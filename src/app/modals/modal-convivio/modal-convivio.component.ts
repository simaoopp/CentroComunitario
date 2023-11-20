import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-convivio',
  templateUrl: './modal-convivio.component.html',
  styleUrls: ['./modal-convivio.component.css']
})
export class ModalConvivioComponent {
  constructor(public dialogRef: MatDialogRef<ModalConvivioComponent>, public dialog: MatDialog) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
