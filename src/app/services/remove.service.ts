import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class RemoveService {

  constructor(private db: AngularFireDatabase) { }
  TransportesREMOVE(empresa: string, numeroFatura: string) {
    this.db.object(`/transportes/${empresa}/${numeroFatura}/`);
  }

  TransportesREMOVEartigo(empresa: string, numeroFatura: string) {
    this.db.object(`/transportes/${empresa}/${numeroFatura}/`);
  }
}
