import { Component, OnInit } from '@angular/core';
import { ModalNovoProdutoComponent } from '../modals/modal-novo-produto/modal-novo-produto.component';
import { MatDialog } from '@angular/material/dialog';
import { GetService } from '../services/get.service';
import { AddService } from '../services/add.service';
import { RemoveService } from '../services/remove.service';
import { UpdateService } from '../services/update.service';
import { Observable, map } from 'rxjs';

interface Product {
  nome: string;
  quantidade: number;
  img: string;
  categoria: string;
  tipo: string;
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  produtos: Observable<any[]>;

  productsFound: boolean = true;

  valorQuantidade: number;

  searchTerm: string = '';

  constructor(
    public dialog: MatDialog,
    private get: GetService,
    private add: AddService,
    private remove: RemoveService,
    private update: UpdateService
  ) {}
  ngOnInit(): void {
    this.Produtos();
  }

  Produtos() {
    this.produtos = this.get.getProdutos();
  }

  trackByFunction(index, item) {
    return item.nome; 
  }

  addQuantidade(item: any) {
    this.add.addQuantidade(item);
  }

  removeQuantidade(item: any) {
    this.remove.removeQuantidade(item);
  }

  updateQuantidade(nome: any, quantidade: any) {
    this.update.UpdateProduct(nome, quantidade);
  }

  openNovoProdutoDialog() {
    const dialogRef = this.dialog.open(ModalNovoProdutoComponent, {
      width: '70vh',
      height: '50vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  filterProducts(category: string) {
    if (category === 'todos') {
      this.produtos = this.get.getProdutos();
    } else {
      this.produtos = this.get
        .getProdutos()
        .pipe(
          map((products: Product[]) =>
            products.filter((item) => item.tipo === category)
          )
        );
    }
  }
  filterBySearchTerm() {
    this.produtos = this.get.getProdutos().pipe(
      map((products: Product[]) => {
        const filtered = products.filter((product) =>
          product.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.productsFound = filtered.length > 0;
        return filtered;
      })
    );
  }
}
