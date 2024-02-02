import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { take, tap } from 'rxjs';
import { GetService } from '../services/get.service';
import { AddService } from '../services/add.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totals: any = {};
  yearlyTotal: number = 0;
  recentFaturas: any;
  totaisMensais: number[] = new Array(12).fill(0);
  meses: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  constructor(private db: AngularFireDatabase, private get: GetService, private add: AddService) {}

  ngOnInit(): void {
    
    const currentYear = new Date().getFullYear();
    this.get.getFaturacao().subscribe((faturas: any[]) => {
      const totaisMensais = new Array(12).fill(0);

      faturas.forEach((fatura) => {
        const data = new Date(fatura.data);
        const anoAtual = data.getFullYear();

        if (anoAtual === currentYear) {
          const mes = data.getMonth();
          totaisMensais[mes] += parseFloat(fatura.valorTotal);
        }
      });
    });
      this.get.getRecentFaturas().then(recentFaturas => {
        this.recentFaturas = recentFaturas;
      });
  
      this.get.getAllFaturasTotals().then(totals => {
        this.totals = totals;
      });
  }
}
