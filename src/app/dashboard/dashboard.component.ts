import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { take, tap } from 'rxjs';
import { GetService } from '../services/get.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totals: any = {};
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

  constructor(private db: AngularFireDatabase, private get: GetService) {}

  ngOnInit(): void {
    this.db
      .list('/FATURACAO')
      .query.once('value')
      .then((snapshot) => {
        const tabelas = Object.keys(snapshot.val());
        tabelas.forEach((tabela) => {
          this.db
            .list(`/FATURACAO/${tabela}`)
            .valueChanges()
            .subscribe((faturas: any[]) => {
              const anoAtual = new Date().getFullYear();
              const faturasPorMes = faturas.reduce((acc, fatura) => {
                const data = new Date(fatura.data);
                if (data.getFullYear() === anoAtual) {
                  const mes = data.getMonth();
                  acc[mes] = (acc[mes] || 0) + fatura.valorTotal;
                }
                return acc;
              }, []);

              faturasPorMes.forEach((valorMensal, indiceMes) => {
                this.totaisMensais[indiceMes] =
                  (this.totaisMensais[indiceMes] || 0) + valorMensal;
              });
            });
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
