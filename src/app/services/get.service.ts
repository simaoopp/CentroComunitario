import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetService {

  private apiUrl = 'http://localhost:3000/api/faturacao/get';

  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  getProdutos() {
    return this.db.list(`/PRODUTOS`).valueChanges();
  }
  
  getFaturacao(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getFaturacaoTotalMensal(
    mes: string,
    ano: string,
    categoria: string
  ): Observable<number> {
    return this.http
      .get<number[]>(`http://localhost:3000/api/faturacao/get/${mes}/${ano}/${categoria}`)
      .pipe(
        map((valoresTotais: number[]) => {
          return valoresTotais.reduce((acc, curr) => acc + curr, 0);
        })
      );
  }

  getRecentFaturas(): Promise<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`).toPromise()
      .then((faturas: any[]) => {
        const withParsedDates = faturas.map((fatura) => ({
          ...fatura,
          parsedDate: this.parseDateString(fatura.data),
        }));
        return withParsedDates
          .sort((a, b) => b.parsedDate - a.parsedDate)
          .slice(0, 10);
      })
      .catch((error) => {
        console.error('Error fetching recent faturas:', error);
        return Promise.reject('Failed to fetch recent faturas');
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
    return new Promise((resolve, reject) => {
      this.http.get<any[]>(this.apiUrl).subscribe(
        (results) => {
          const allFaturas = [].concat(...results);
          resolve({
            dailyTotal: this.getDailyTotal(allFaturas),
            weeklyTotal: this.getWeeklyTotal(allFaturas),
            monthlyTotal: this.getMonthlyTotal(allFaturas),
            yearlyTotal: this.getYearlyTotal(allFaturas),
          });
        },
        (error) => {
          console.error("Error fetching Faturacao data from MySQL:", error);
          reject({
            error: "Failed to fetch Faturacao data from MySQL",
          });
        }
      );
    });
  }
}
