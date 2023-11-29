import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  constructor(private db: AngularFireDatabase) {}

  TransportesADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    Fatura: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, Fatura };
    return this.db.object(`/transportes/${numeroFatura}`).set(payload);
  }

  ConvivioADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    Fatura: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, Fatura };
    return this.db.object(`/convivio/${numeroFatura}`).set(payload);
  }

  LavandariaADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    Fatura: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, Fatura };
    return this.db.object(`/lavandaria/${numeroFatura}`).set(payload);
  }

  AdministrativosADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    Fatura: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, Fatura };
    return this.db.object(`/administrativos/${numeroFatura}`).set(payload);
  }

  ServicoComunsADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    Fatura: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, Fatura };
    return this.db.object(`/servicoComuns/${numeroFatura}`).set(payload);
  }

  HigieneADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    Fatura: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, Fatura };
    return this.db.object(`/higiene/${numeroFatura}`).set(payload);
  }

  CozinhaADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    Fatura: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, Fatura };
    return this.db.object(`/cozinha/${numeroFatura}`).set(payload);
  }
}
