import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map, mergeMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  constructor(private db: AngularFireDatabase) {}

  getProdutos() {
    return this.db.list(`/PRODUTOS`).valueChanges();
  }
  getFaturacaoTransportes() {
    return this.db.object(`/FATURACAO/transportes`).valueChanges();
  }
  getFaturacaoCozinha() {
    return this.db.object(`/FATURACAO/cozinha`).valueChanges();
  }
  getFaturacaoConvivio() {
    return this.db.object(`/FATURACAO/convivio`).valueChanges();
  }
  getFaturacaoHigiene() {
    return this.db.object(`/FATURACAO/higiene`).valueChanges();
  }
  getFaturacaoServicoComuns() {
    return this.db.object(`/FATURACAO/servicoComuns`).valueChanges();
  }
  getFaturacaoLavandaria() {
    return this.db.object(`/FATURACAO/lavandaria`).valueChanges();
  }
  getFaturacaoAdministrativos() {
    return this.db.object(`/FATURACAO/administrativos`).valueChanges();
  }
  getFaturacaoRecursosHumanos() {
    return this.db.object(`/FATURACAO/recursosHumanos`).valueChanges();
  }

  getFaturacaoTotalMensalCozinha(mes: string, ano: string): Observable<number> {
    return this.db
      .list(`/FATURACAO/cozinha`, (ref) =>
        ref
          .orderByChild('data')
          .startAt(`${ano}/${mes}/01`)
          .endAt(`${ano}/${mes}/31`)
      )
      .valueChanges()
      .pipe(
        map((faturas: any[]) => {
          return faturas.reduce((acc, curr) => acc + curr.valorTotal, 0);
        })
      ) as Observable<number>;
  }

  getFaturacaoTotalMensalConvivio(
    mes: string,
    ano: string
  ): Observable<number> {
    return this.db
      .list(`/FATURACAO/convivio`, (ref) =>
        ref
          .orderByChild('data')
          .startAt(`${ano}/${mes}/01`)
          .endAt(`${ano}/${mes}/31`)
      )
      .valueChanges()
      .pipe(
        map((faturas: any[]) => {
          return faturas.reduce((acc, curr) => acc + curr.valorTotal, 0);
        })
      ) as Observable<number>;
  }

  getFaturacaoTotalMensalTransportes(
    mes: string,
    ano: string
  ): Observable<number> {
    return this.db
      .list(`/FATURACAO/transportes`, (ref) =>
        ref
          .orderByChild('data')
          .startAt(`${ano}/${mes}/01`)
          .endAt(`${ano}/${mes}/31`)
      )
      .valueChanges()
      .pipe(
        map((faturas: any[]) => {
          return faturas.reduce((acc, curr) => acc + curr.valorTotal, 0);
        })
      ) as Observable<number>;
  }

  getFaturacaoTotalMensalHigienes(
    mes: string,
    ano: string
  ): Observable<number> {
    return this.db
      .list(`/FATURACAO/higiene`, (ref) =>
        ref
          .orderByChild('data')
          .startAt(`${ano}/${mes}/01`)
          .endAt(`${ano}/${mes}/31`)
      )
      .valueChanges()
      .pipe(
        map((faturas: any[]) => {
          return faturas.reduce((acc, curr) => acc + curr.valorTotal, 0);
        })
      ) as Observable<number>;
  }

  getFaturacaoTotalMensalAdministrivos(
    mes: string,
    ano: string
  ): Observable<number> {
    return this.db
      .list(`/FATURACAO/administrativos`, (ref) =>
        ref
          .orderByChild('data')
          .startAt(`${ano}/${mes}/01`)
          .endAt(`${ano}/${mes}/31`)
      )
      .valueChanges()
      .pipe(
        map((faturas: any[]) => {
          return faturas.reduce((acc, curr) => acc + curr.valorTotal, 0);
        })
      ) as Observable<number>;
  }

  getFaturacaoTotalMensalLavandaria(
    mes: string,
    ano: string
  ): Observable<number> {
    return this.db
      .list(`/FATURACAO/lavandaria`, (ref) =>
        ref
          .orderByChild('data')
          .startAt(`${ano}/${mes}/01`)
          .endAt(`${ano}/${mes}/31`)
      )
      .valueChanges()
      .pipe(
        map((faturas: any[]) => {
          return faturas.reduce((acc, curr) => acc + curr.valorTotal, 0);
        })
      ) as Observable<number>;
  }
  getFaturacaoTotalMensalServicosComuns(
    mes: string,
    ano: string
  ): Observable<number> {
    return this.db
      .list(`/FATURACAO/servicoComuns`, (ref) =>
        ref
          .orderByChild('data')
          .startAt(`${ano}/${mes}/01`)
          .endAt(`${ano}/${mes}/31`)
      )
      .valueChanges()
      .pipe(
        map((faturas: any[]) => {
          return faturas.reduce((acc, curr) => acc + curr.valorTotal, 0);
        })
      ) as Observable<number>;
  }

  getFaturacaoTotalMensalRecursosHumanos(
    mes: string,
    ano: string
  ): Observable<number> {
    return this.db
      .list(`/FATURACAO/recursosHumanos`, (ref) =>
        ref
          .orderByChild('data')
          .startAt(`${ano}/${mes}/01`)
          .endAt(`${ano}/${mes}/31`)
      )
      .valueChanges()
      .pipe(
        map((faturas: any[]) => {
          return faturas.reduce((acc, curr) => acc + curr.valorTotal, 0);
        })
      ) as Observable<number>;
  }

  getRecentFaturas(): Promise<any[]> {
    return this.db
      .list('/FATURACAO')
      .query.once('value')
      .then((snapshot) => {
        const tabelas = Object.keys(snapshot.val());
        const allFaturas = [];
        const promises = tabelas.map((tabela) => {
          return this.db
            .list(`/FATURACAO/${tabela}`)
            .valueChanges()
            .pipe(take(1))
            .toPromise()
            .then((faturas: any[]) => allFaturas.push(...faturas));
        });

        return Promise.all(promises).then(() => {
          const withParsedDates = allFaturas.map((fatura) => ({
            ...fatura,
            parsedDate: this.parseDateString(fatura.data),
          }));
          return withParsedDates
            .sort((a, b) => b.parsedDate - a.parsedDate)
            .slice(0, 10);
        });
      });
  }

  private parseDateString(dateString: string): Date {
    if (!dateString) {
      return new Date();
    }

    const isoDateString = dateString.replace(/\//g, '-');
    return new Date(isoDateString);
  }

  getDailyTotal(faturas) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const endOfToday = new Date(today);
    endOfToday.setDate(endOfToday.getDate() + 1);

    return faturas
      .filter((fatura) => {
        const faturaDate = new Date(fatura.data);
        return faturaDate >= today && faturaDate < endOfToday;
      })
      .reduce(
        (sum, fatura) => sum + this.parseValorTotal(fatura.valorTotal),
        0
      );
  }

  getWeeklyTotal(faturas) {
    const today = new Date();
    const startOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay())
    );
    startOfWeek.setHours(0, 0, 0, 0);

    return faturas
      .filter((fatura) => {
        const faturaDate = new Date(fatura.data);
        return faturaDate >= startOfWeek && faturaDate < new Date();
      })
      .reduce(
        (sum, fatura) => sum + this.parseValorTotal(fatura.valorTotal),
        0
      );
  }

  getMonthlyTotal(faturas) {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    return faturas
      .filter((fatura) => {
        const faturaDate = new Date(fatura.data);
        return faturaDate >= startOfMonth && faturaDate < new Date();
      })
      .reduce(
        (sum, fatura) => sum + this.parseValorTotal(fatura.valorTotal),
        0
      );
  }

  getYearlyTotal(faturas) {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);

    return faturas
      .filter((fatura) => {
        const faturaDate = new Date(fatura.data);
        return faturaDate >= startOfYear;
      })
      .reduce(
        (sum, fatura) => sum + this.parseValorTotal(fatura.valorTotal),
        0
      );
  }

  parseValorTotal(valorTotal) {
    return typeof valorTotal === 'number'
      ? valorTotal
      : parseFloat(valorTotal.replace(/,/g, ''));
  }

  getAllFaturasTotals() {
    return this.db
      .list('/FATURACAO')
      .query.once('value')
      .then((snapshot) => {
        const tabelas = Object.keys(snapshot.val() || {});
        const promises = tabelas.map((tabela) => {
          return this.db
            .list(`/FATURACAO/${tabela}`)
            .valueChanges()
            .pipe(take(1))
            .toPromise();
        });

        return Promise.all(promises).then((results) => {
          const allFaturas = [].concat(...results);
          return {
            dailyTotal: this.getDailyTotal(allFaturas),
            weeklyTotal: this.getWeeklyTotal(allFaturas),
            monthlyTotal: this.getMonthlyTotal(allFaturas),
            yearlyTotal: this.getYearlyTotal(allFaturas),
          };
        });
      });
  }
}
