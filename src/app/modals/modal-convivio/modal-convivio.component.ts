import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConvivioNovaFaturaComponent } from '../modalsNovaFatura/convivio-nova-fatura/convivio-nova-fatura.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RemoveService } from 'src/app/services/remove.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { GetService } from 'src/app/services/get.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  numeroFatura: string;
  data: string;
  empresa: string;
  valorTotal: number;
}
@Component({
  selector: 'app-modal-convivio',
  templateUrl: './modal-convivio.component.html',
  styleUrls: ['./modal-convivio.component.css']
})
export class ModalConvivioComponent {
  constructor(
    private removeData: RemoveService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private get: GetService
  ) {}

  displayedColumns: string[] = ['data', 'empresa', 'valorTotal', 'Action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  ngOnInit(): void {
    this.get.getFaturacaoConvivio().subscribe((data) => {
      this.dataSource.data = [];

      const dataArray = Object.values(data);

      if (Array.isArray(dataArray)) {
        this.dataSource.data.push(...dataArray);
        this.dataSource.data = this.dataSource.data.slice();
      } else {
        console.error('Data is not an array:', data);
      }
    });
  }

  remove(element: PeriodicElement) {
    const elementKey = element.numeroFatura;

    this.removeData.CozinhaREMOVE(elementKey)
    .then(() => {
      console.log('Data removed from Firebase:', element);
      this.dataSource.data = this.dataSource.data.filter(
        (item) => item !== element
      );
    })
    .catch((error) => {
      console.error('Error removing data from Firebase:', error);
    });
  }

  openTransportesDialog() {
    const dialogRef = this.dialog.open(ConvivioNovaFaturaComponent, {
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

