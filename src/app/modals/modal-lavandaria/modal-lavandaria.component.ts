import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransportesNovaFaturaComponent } from '../modalsNovaFatura/transportes-nova-fatura/transportes-nova-fatura.component';
import { GetService } from 'src/app/services/get.service';
import { RemoveService } from 'src/app/services/remove.service';
import { LavandariaNovaFaturaComponent } from '../modalsNovaFatura/lavandaria-nova-fatura/lavandaria-nova-fatura.component';
import { ModalViewComponent } from '../modal-view/modal-view.component';

export interface PeriodicElement {
  numeroFatura: string;
  data: string;
  empresa: string;
  valorTotal: number;
}


@Component({
  selector: 'app-modal-lavandaria',
  templateUrl: './modal-lavandaria.component.html',
  styleUrls: ['./modal-lavandaria.component.css']
})
export class ModalLavandariaComponent {
  displayedColumns: string[] = ['data', 'empresa', 'valorTotal', 'Action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private removeData: RemoveService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private get: GetService
  ) {}
  ngOnInit(): void {
    this.get.getFaturacaoLavandaria().subscribe((data) => {
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

    this.removeData.LavandariaREMOVE(elementKey)
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

  openView(element) {
    const dialogRef = this.dialog.open(ModalViewComponent, {
      width: '100vh',
      height: '80vh',
      data: { element: element }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openLavandariaDialog() {
    const dialogRef = this.dialog.open(LavandariaNovaFaturaComponent, {
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
