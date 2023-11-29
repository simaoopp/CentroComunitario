import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {


  constructor(private db: AngularFireDatabase) { }

  getFaturacaoTransportes() {
    return this.db.object(`/transportes`).valueChanges();
  }
  getFaturacaoCozinha() {
    return this.db.object(`/cozinha`).valueChanges();
  }
  getFaturacaoConvivio() {
    return this.db.object(`/convivio`).valueChanges();
  }
  getFaturacaoHigiene() {
    return this.db.object(`/higiene`).valueChanges();
  }
  getFaturacaoServicoComuns() {
    return this.db.object(`/servicoComuns`).valueChanges();
  }
  getFaturacaoLavandaria() {
    return this.db.object(`/Lavandaria`).valueChanges();
  }
  getFaturacaoAdministrativos() {
    return this.db.object(`/Administrativos`).valueChanges();
  }



  getFaturacaoById(numeroFatura: string) {
    return this.db.object(`/transportes/${numeroFatura}`).valueChanges();
  }
}
