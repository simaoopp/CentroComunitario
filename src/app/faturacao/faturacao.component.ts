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
    const categoria: string = 'cozinha';
    this.get
      .getFaturacaoTotalMensal(this.mesAtual, this.anoAtual, categoria)
      .subscribe((total) => {
        this.totalFaturacaoCozinha = total;
      });
  }

  calcularTotalFaturacaoConvivio() {
    const categoria: string = 'convivio';
    this.get
      .getFaturacaoTotalMensal(this.mesAtual, this.anoAtual, categoria)
      .subscribe((total) => {
        this.totalFaturacaoConvivio = total;
      });
  }
  calcularTotalFaturacaoTransportes() {
    const categoria: string = 'transportes';
    this.get
      .getFaturacaoTotalMensal(this.mesAtual, this.anoAtual, categoria)
      .subscribe((total) => {
        this.totalFaturacaoTransportes = total;
      });
  }
  calcularTotalFaturacaoAdministrativos() {
    const categoria: string = 'administrativos';
    this.get
      .getFaturacaoTotalMensal(this.mesAtual, this.anoAtual, categoria)
      .subscribe((total) => {
        this.totalFaturacaoAdministrativos = total;
      });
  }
  calcularTotalFaturacaoHigienes() {
    const categoria: string = 'higiene';
    this.get
      .getFaturacaoTotalMensal(this.mesAtual, this.anoAtual, categoria)
      .subscribe((total) => {
        this.totalFaturacaoHigienes = total;
      });
  }
  calcularTotalFaturacaoServicosComuns() {
    const categoria: string = 'servicosComuns';
    this.get
      .getFaturacaoTotalMensal(this.mesAtual, this.anoAtual, categoria)
      .subscribe((total) => {
        this.totalFaturacaoServicosComuns = total;
      });
  }
  calcularTotalFaturacaoLavandaria() {
    const categoria: string = 'lavandaria';
    this.get
      .getFaturacaoTotalMensal(this.mesAtual, this.anoAtual, categoria)
      .subscribe((total) => {
        this.totalFaturacaoLavandaria = total;
      });
  }
  calcularTotalFaturacaoRecursosHumanos() {
    const categoria: string = 'recursosHumanos';
    this.get
      .getFaturacaoTotalMensal(this.mesAtual, this.anoAtual, categoria)
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
            data: totaisMensais.map((value) =>
              typeof value === 'string' ? parseFloat(value) : value
            ),
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const value =
                  typeof tooltipItem.parsed.y === 'string'
                    ? parseFloat(tooltipItem.parsed.y)
                    : tooltipItem.parsed.y;
                return new Intl.NumberFormat('pt-PT', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(value);
              },
            },
          },
        },
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                const numberValue =
                  typeof value === 'string' ? parseFloat(value) : value;
                return new Intl.NumberFormat('pt-PT', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(numberValue);
              },
            },
          },
        },
      },
    });
  }

  @ViewChild('Canvas', { static: true }) element: ElementRef;

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

      this.createChart(totaisMensais);
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
