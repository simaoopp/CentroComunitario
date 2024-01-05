import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { object } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  constructor(private db: AngularFireDatabase, private toastr: ToastrService) {}

  TransportesADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    file: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, file };
    return this.db
      .object(`/FATURACAO/transportes/${numeroFatura}`)
      .set(payload)
      .then(() => {
        this.toastr.success(
          'Dados de Transporte adicionados com sucesso!',
          'Sucesso!'
        );
      })
      .catch((error) => {
        this.toastr.error(
          'Falha ao adicionar dados de Transporte',
          'Erro!'
        );
        console.error("Error adding transport data: ", error);
      });
  }
  ConvivioADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    file: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, file };
    return this.db.object(`/FATURACAO/convivio/${numeroFatura}`).set(payload)
    .then(() => {
      this.toastr.success(
        'Dados de Convivio adicionados com sucesso!',
        'Sucesso!'
      );
    })
    .catch((error) => {
      this.toastr.error(
        'Falha ao adicionar dados de Convivio',
        'Erro!'
      );
      console.error("Error adding transport data: ", error);
    });
  }

  LavandariaADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    file: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, file };
    return this.db.object(`/FATURACAO/lavandaria/${numeroFatura}`).set(payload)
    .then(() => {
      this.toastr.success(
        'Dados de Lavandaria adicionados com sucesso!',
        'Sucesso!'
      );
    })
    .catch((error) => {
      this.toastr.error(
        'Falha ao adicionar dados de Lavandaria',
        'Erro!'
      );
      console.error("Error adding transport data: ", error);
    });
  }

  AdministrativosADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    file: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, file };
    return this.db
      .object(`/FATURACAO/administrativos/${numeroFatura}`)
      .set(payload)
    .then(() => {
      this.toastr.success(
        'Dados de Administrativos adicionados com sucesso!',
        'Sucesso!'
      );
    })
    .catch((error) => {
      this.toastr.error(
        'Falha ao adicionar dados de Administrativos',
        'Erro!'
      );
      console.error("Error adding transport data: ", error);
    });
  }

  ServicoComunsADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    file: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, file };
    return this.db
      .object(`/FATURACAO/servicoComuns/${numeroFatura}`)
      .set(payload)
    .then(() => {
      this.toastr.success(
        'Dados de Serviços Comuns adicionados com sucesso!',
        'Sucesso!'
      );
    })
    .catch((error) => {
      this.toastr.error(
        'Falha ao adicionar dados de Serviços Comuns',
        'Erro!'
      );
      console.error("Error adding transport data: ", error);
    });
  }

  HigieneADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    file: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, file };
    return this.db.object(`/FATURACAO/higiene/${numeroFatura}`).set(payload)
    .then(() => {
      this.toastr.success(
        'Dados de Higiene adicionados com sucesso!',
        'Sucesso!'
      );
    })
    .catch((error) => {
      this.toastr.error(
        'Falha ao adicionar dados de Higiene',
        'Erro!'
      );
      console.error("Error adding transport data: ", error);
    });
  }

  CozinhaADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    file: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, file };
    return this.db.object(`/FATURACAO/cozinha/${numeroFatura}`).set(payload)
    .then(() => {
      this.toastr.success(
        'Dados de Cozinha adicionados com sucesso!',
        'Sucesso!'
      );
    })
    .catch((error) => {
      this.toastr.error(
        'Falha ao adicionar dados de Cozinha',
        'Erro!'
      );
      console.error("Error adding transport data: ", error);
    });
  }

  RecursosHumanosADD(
    empresa: string,
    numeroFatura: string,
    data: any,
    valorTotal: any,
    file: any
  ) {
    const payload = { empresa, numeroFatura, data, valorTotal, file };
    return this.db
      .object(`/FATURACAO/recursosHumanos/${numeroFatura}`)
      .set(payload)
    .then(() => {
      this.toastr.success(
        'Dados de Recursos Humanos adicionados com sucesso!',
        'Sucesso!'
      );
    })
    .catch((error) => {
      this.toastr.error(
        'Falha ao adicionar dados de Recursos Humanos',
        'Erro!'
      );
      console.error("Error adding transport data: ", error);
    });
  }

  NovoProdutoADD(produto: any) {
    return this.db
      .object(`/PRODUTOS/${produto.nome}`)
      .set(Object.assign(produto)).then(() => {
        this.toastr.success(
          'Dados do novo produto adicionados com sucesso!',
          'Sucesso!'
        );
      })
      .catch((error) => {
        this.toastr.error(
          'Falha ao adicionar dados do novo produto',
          'Erro!'
        );
        console.error("Error adding transport data: ", error);
      });
  }

  addQuantidade(item: any) {
    this.db
      .list('/PRODUTOS')
      .update(item.nome, { quantidade: item.quantidade + 1 });
  }
}
