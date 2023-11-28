import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private db: AngularFireDatabase) { }

  TransportesADD(empresa: string, numeroFatura: string, data: any, valorTotal:any, Fatura: any) {
    const payload = { empresa, numeroFatura, data, valorTotal, Fatura };
    return this.db.object(`/transportes/${numeroFatura}`).set(payload);
  }
}
