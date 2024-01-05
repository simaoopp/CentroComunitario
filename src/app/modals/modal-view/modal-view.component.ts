import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css'],
})
export class ModalViewComponent implements OnInit {
  file: string | ArrayBuffer | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalViewComponent>
  ) {}
  ngOnInit(): void {
    this.file = this.data.element.file;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
