import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js/auto';
import { ModalCozinhaComponent } from '../modals/modal-cozinha/modal-cozinha.component';
import { ModalConvivioComponent } from '../modals/modal-convivio/modal-convivio.component';
import { ModalTransportesComponent } from '../modals/modal-transportes/modal-transportes.component';
import { ModalAdministrativosComponent } from '../modals/modal-administrativos/modal-administrativos.component';
import { ModalLavandariaComponent } from '../modals/modal-lavandaria/modal-lavandaria.component';
import { ModalHigieneComponent } from '../modals/modal-higiene/modal-higiene.component';
import { ModalServicoComunsComponent } from '../modals/modal-servico-comuns/modal-servico-comuns.component';
import { format } from 'date-fns';
import { GetService } from '../services/get.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalRecursosHumanosComponent } from '../modals/modal-recursos-humanos/modal-recursos-humanos.component';

@Component({
  selector: 'app-faturacao',
  templateUrl: './faturacao.component.html',
  styleUrls: ['./faturacao.component.css'],
})
export class FaturacaoComponent implements OnInit {
  totalFaturacaoCozinha: number;
  totalFaturacaoLavandaria: number;
  totalFaturacaoHigienes: number;
  totalFaturacaoAdministrativos: number;
  totalFaturacaoTransportes: number;
  totalFaturacaoServicosComuns: number;
  totalFaturacaoConvivio: number;
  totalFaturacaoRecursosHumanos: number;

  mesAtual: string;
  anoAtual: string;

  constructor(
    public dialog: MatDialog,
    private get: GetService,
    private db: AngularFireDatabase
  ) {}

  openCozinhaDialog() {
    const dialogRef = this.dialog.open(ModalCozinhaComponent, {
      width: '100vh',
      height: '80vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openConvivioDialog() {
    const dialogRef = this.dialog.open(ModalConvivioComponent, {
      width: '100vh',
      height: '80vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openTransportesDialog() {
    const dialogRef = this.dialog.open(ModalTransportesComponent, {
      width: '100vh',
      height: '80vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openAdministrativosDialog() {
    const dialogRef = this.dialog.open(ModalAdministrativosComponent, {
      width: '100vh',
      height: '80vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openLavandariaDialog() {
    const dialogRef = this.dialog.open(ModalLavandariaComponent, {
      width: '100vh',
      height: '80vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openHigienePessoalDialog() {
    const dialogRef = this.dialog.open(ModalHigieneComponent, {
      width: '100vh',
      height: '80vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openServicosComunsDialog() {
    const dialogRef = this.dialog.open(ModalServicoComunsComponent, {
      width: '100vh',
      height: '80vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openRecursosHumanosDialog() {
    const dialogRef = this.dialog.open(ModalRecursosHumanosComponent, {
      width: '100vh',
      height: '80vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  calcularTotalFaturacaoCozinha() {
    this.get
      .getFaturacaoTotalMensalCozinha(this.mesAtual, this.anoAtual)
      .subscribe((total) => {
        this.totalFaturacaoCozinha = total;
      });
  }

  calcularTotalFaturacaoConvivio() {
    this.get
      .getFaturacaoTotalMensalConvivio(this.mesAtual, this.anoAtual)
      .subscribe((total) => {
        this.totalFaturacaoConvivio = total;
      });
  }
  calcularTotalFaturacaoTransportes() {
    this.get
      .getFaturacaoTotalMensalTransportes(this.mesAtual, this.anoAtual)
      .subscribe((total) => {
        this.totalFaturacaoTransportes = total;
      });
  }
  calcularTotalFaturacaoAdministrativos() {
    this.get
      .getFaturacaoTotalMensalAdministrivos(this.mesAtual, this.anoAtual)
      .subscribe((total) => {
        this.totalFaturacaoAdministrativos = total;
      });
  }
  calcularTotalFaturacaoHigienes() {
    this.get
      .getFaturacaoTotalMensalHigienes(this.mesAtual, this.anoAtual)
      .subscribe((total) => {
        this.totalFaturacaoHigienes = total;
      });
  }
  calcularTotalFaturacaoServicosComuns() {
    this.get
      .getFaturacaoTotalMensalServicosComuns(this.mesAtual, this.anoAtual)
      .subscribe((total) => {
        this.totalFaturacaoServicosComuns = total;
      });
  }
  calcularTotalFaturacaoLavandaria() {
    this.get
      .getFaturacaoTotalMensalLavandaria(this.mesAtual, this.anoAtual)
      .subscribe((total) => {
        this.totalFaturacaoLavandaria = total;
      });
  }
  calcularTotalFaturacaoRecursosHumanos() {
    this.get
      .getFaturacaoTotalMensalRecursosHumanos(this.mesAtual, this.anoAtual)
      .subscribe((total) => {
        this.totalFaturacaoRecursosHumanos = total;
      });
  }

  createChart(totaisMensais) {
    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        labels: [
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
        ],
        datasets: [
          {
            label: 'Faturação Mensal Consolidada',
            data: totaisMensais.map(value => typeof value === 'string' ? parseFloat(value) : value),
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                const value = typeof tooltipItem.parsed.y === 'string' ? parseFloat(tooltipItem.parsed.y) : tooltipItem.parsed.y;
                return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(value);
              }
            }
          }
        },
        scales: {
          y: {
            ticks: {
              callback: function(value) {
                // Assuming value should be a number here; parse it if it's a string
                const numberValue = typeof value === 'string' ? parseFloat(value) : value;
                return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(numberValue);
              }
            }
          }
        }
      }
    });
  }

  @ViewChild('Canvas', { static: true }) element: ElementRef;

  ngOnInit(): void {
    this.db
      .list('/FATURACAO')
      .query.once('value')
      .then((snapshot) => {
        const tabelas = Object.keys(snapshot.val());

        const totaisMensais = new Array(12).fill(0);

        const promises = tabelas.map((tabela) => {
          return new Promise<void>((resolve) => {
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
                  totaisMensais[indiceMes] += valorMensal;
                });

                resolve();
              });
          });
        });

        Promise.all(promises).then(() => {
          this.createChart(totaisMensais);
        });
      });

    const hoje = new Date();
    this.mesAtual = format(hoje, 'MM');
    this.anoAtual = format(hoje, 'yyyy');
    this.calcularTotalFaturacaoCozinha();
    this.calcularTotalFaturacaoAdministrativos();
    this.calcularTotalFaturacaoConvivio();
    this.calcularTotalFaturacaoHigienes();
    this.calcularTotalFaturacaoLavandaria();
    this.calcularTotalFaturacaoServicosComuns();
    this.calcularTotalFaturacaoTransportes();
    this.calcularTotalFaturacaoRecursosHumanos();
  }
}
