import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class RemoveService {

  constructor(private db: AngularFireDatabase) { }
  TransportesREMOVE(numeroFatura: string): Promise<void> {
    return this.db.object(`/transportes/${numeroFatura}/`).remove();
  }

  CozinhaREMOVE(numeroFatura: string): Promise<void> {
    return this.db.object(`/cozinha/${numeroFatura}/`).remove();
  }

  HigieneREMOVE(numeroFatura: string): Promise<void> {
    return this.db.object(`/higiene/${numeroFatura}/`).remove();
  }

  LavandariaREMOVE(numeroFatura: string): Promise<void> {
    return this.db.object(`/lavandaria/${numeroFatura}/`).remove();
  }

  ServicoComunsREMOVE(numeroFatura: string): Promise<void> {
    return this.db.object(`/servicoComuns/${numeroFatura}/`).remove();
  }

  ConvivioREMOVE(numeroFatura: string): Promise<void> {
    return this.db.object(`/convivio/${numeroFatura}/`).remove();
  }

  AdministrativosREMOVE(numeroFatura: string): Promise<void> {
    return this.db.object(`/administrativos/${numeroFatura}/`).remove();
  }

  TransportesREMOVEartigo(numeroFatura: string) {
    this.db.object(`/transportes/${numeroFatura}/fatura/`).remove();
  }
}
