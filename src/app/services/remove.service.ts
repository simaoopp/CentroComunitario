import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoveService {

  constructor(private db: AngularFireDatabase, private toastr: ToastrService, private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api/faturacao/delete';

  deleteFaturacao(numeroFatura: string, id: number): Observable<void> {
    const url = `${this.apiUrl}/${numeroFatura}/${id}`;
    return this.http.delete<void>(url);
  }

  removeQuantidade(item: any) {
    if (item.quantidade > 0) {
      this.db.list('PRODUTOS').update(item.nome, { quantidade: item.quantidade - 1 });
    }
  }
}
