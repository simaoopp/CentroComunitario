import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-faturacao',
  templateUrl: './faturacao.component.html',
  styleUrls: ['./faturacao.component.css'],
})
export class FaturacaoComponent implements OnInit {
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
