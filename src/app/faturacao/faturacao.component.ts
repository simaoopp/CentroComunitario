import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js/auto';
import { ModalCozinhaComponent } from '../modals/modal-cozinha/modal-cozinha.component';
import { ModalConvivioComponent } from '../modals/modal-convivio/modal-convivio.component';
import { ModalTransportesComponent } from '../modals/modal-transportes/modal-transportes.component';

@Component({
  selector: 'app-faturacao',
  templateUrl: './faturacao.component.html',
  styleUrls: ['./faturacao.component.css'],
})
export class FaturacaoComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openCozinhaDialog() {
    const dialogRef = this.dialog.open(ModalCozinhaComponent, {
      width: '100vh',
      height: '100vh'
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openConvivioDialog() {
    const dialogRef = this.dialog.open(ModalConvivioComponent, {
      width: '100vh',
      height: '70vh'
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openTransportesDialog() {
    const dialogRef = this.dialog.open(ModalTransportesComponent, {
      width: '100vh',
      height: '80vh'
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  @ViewChild('Canvas', { static: true }) element: ElementRef;

  ngOnInit(): void {
    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'janeiro',
          'feveiro',
          'março',
          'abril',
          'maio',
          'junho',
          'julho',
          'agosto',
          'setembro',
          'outubro',
          'novembro',
          'dezembro',
        ],

        datasets: [
          {
            data: [85, 55, 63, 72, 35, 56, 23, 65, 87, 34, 67, 23],
          },
        ],
      },
    });
  }
}
