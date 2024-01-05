import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private db: AngularFireDatabase) { }

  UpdateProduct(nome: string, quantidade: any) {
    return this.db.list('PRODUTOS').update(nome, { quantidade: quantidade });
  }
}
