import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetService } from 'src/app/services/get.service';
import { RemoveService } from 'src/app/services/remove.service';
import { CozinhaNovaFaturaComponent } from '../modalsNovaFatura/cozinha-nova-fatura/cozinha-nova-fatura.component';
import { ModalViewComponent } from '../modal-view/modal-view.component';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
  id: number;
  numeroFatura: string;
  data: string;
  empresa: string;
  valorTotal: number;
}

@Component({
  selector: 'app-modal-cozinha',
  templateUrl: './modal-cozinha.component.html',
  styleUrls: ['./modal-cozinha.component.css'],
})
export class ModalCozinhaComponent {
  displayedColumns: string[] = ['data', 'empresa', 'valorTotal', 'Action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  faturacaoData: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private toastr: ToastrService,
    private removeData: RemoveService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private get: GetService
  ) {}

  remove(element: PeriodicElement) {
    const elementFatura = element.numeroFatura;
    const elementKey = element.id;
    this.removeData.deleteFaturacao(elementFatura, elementKey).subscribe(
      () => {
        this.toastr.success('Fatura eliminada com sucesso!', 'Sucesso');
        this.dataSource.data = this.dataSource.data.filter(
          (item) => item !== element
        );
      },
      (error) => {
        console.error('Error removing data from the backend:', error);
      }
    );
  }
  ngOnInit(): void {
    this.fetchFaturacaoData();
  }

  fetchFaturacaoData(): void {
    this.get.getFaturacao().subscribe(
      (data) => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
  
        this.faturacaoData = data.filter((item) => {
          const itemDate = new Date(item.data);
          const itemMonth = itemDate.getMonth() + 1;
          const itemYear = itemDate.getFullYear();
  
          return itemMonth === currentMonth && itemYear === currentYear && item.categoria === 'cozinha';
        });
  
        this.dataSource.data = this.faturacaoData || [];
      },
      (error) => {
        console.error('Error fetching Faturacao Data:', error);
      }
    );
  }

  openView(element) {
    const dialogRef = this.dialog.open(ModalViewComponent, {
      width: '100vh',
      height: '80vh',
      data: { element: element },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openCozinhaDialog() {
    const dialogRef = this.dialog.open(CozinhaNovaFaturaComponent, {
      width: '100vh',
      height: '80vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
