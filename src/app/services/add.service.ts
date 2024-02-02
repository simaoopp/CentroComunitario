import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { object } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  private apiUrl = 'http://localhost:3000/api/faturacao/add';

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

  ADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    categoria: string,
    valorTotal: any,
    file: any
  ) {
    const payload = {
      empresa,
      numeroFatura,
      data,
      categoria,
      valorTotal,
      file,
    };
    return this.http.post<any>(this.apiUrl, payload);
  }

  NovoProdutoADD(produto: any) {
    return this.db
      .object(`/PRODUTOS/${produto.nome}`)
      .set(Object.assign(produto))
      .then(() => {
        this.toastr.success(
          'Dados do novo produto adicionados com sucesso!',
          'Sucesso!'
        );
      })
      .catch((error) => {
        this.toastr.error('Falha ao adicionar dados do novo produto', 'Erro!');
        console.error('Error adding transport data: ', error);
      });
  }

  addQuantidade(item: any) {
    this.db
      .list('/PRODUTOS')
      .update(item.nome, { quantidade: item.quantidade + 1 });
  }

  saveMonthlyTotals(year: number, monthlyTotals: number[]): void {
    const path = `/MonthlyTotals/${year}`;
    this.db.object(path).set(monthlyTotals);
  }
}
