import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RemoveService {

  constructor(private db: AngularFireDatabase, private toastr: ToastrService) { }
  TransportesREMOVE(numeroFatura: string): Promise<void> {
    this.toastr.success('Fatura eliminada com sucesso!', 'Sucesso')
    return this.db.object(`/FATURACAO/transportes/${numeroFatura}/`).remove();
  }

  CozinhaREMOVE(numeroFatura: string): Promise<void> {
    this.toastr.success('Fatura eliminada com sucesso!', 'Sucesso')
    return this.db.object(`/FATURACAO/cozinha/${numeroFatura}/`).remove();
  }

  HigieneREMOVE(numeroFatura: string): Promise<void> {
    this.toastr.success('Fatura eliminada com sucesso!', 'Sucesso')
    return this.db.object(`/FATURACAO/higiene/${numeroFatura}/`).remove();
  }

  LavandariaREMOVE(numeroFatura: string): Promise<void> {
    this.toastr.success('Fatura eliminada com sucesso!', 'Sucesso')
    return this.db.object(`/FATURACAO/lavandaria/${numeroFatura}/`).remove();
  }

  ServicoComunsREMOVE(numeroFatura: string): Promise<void> {
    this.toastr.success('Fatura eliminada com sucesso!', 'Sucesso')
    return this.db.object(`/FATURACAO/servicoComuns/${numeroFatura}/`).remove();
  }

  ConvivioREMOVE(numeroFatura: string): Promise<void> {
    this.toastr.success('Fatura eliminada com sucesso!', 'Sucesso')
    return this.db.object(`/FATURACAO/convivio/${numeroFatura}/`).remove();
  }

  AdministrativosREMOVE(numeroFatura: string): Promise<void> {
    this.toastr.success('Fatura eliminada com sucesso!', 'Sucesso')
    return this.db.object(`/FATURACAO/administrativos/${numeroFatura}/`).remove();
  }

  RecursosHumanosREMOVE(numeroFatura: string): Promise<void> {
    this.toastr.success('Fatura eliminada com sucesso!', 'Sucesso')
    return this.db.object(`/FATURACAO/recursosHumanos/${numeroFatura}/`).remove();
  }



  removeQuantidade(item: any) {
    if (item.quantidade > 0) {
      this.db.list('PRODUTOS').update(item.nome, { quantidade: item.quantidade - 1 });
    }
  }
}
