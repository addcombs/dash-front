import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of} from 'rxjs';
import { Bank } from 'src/app/shared/models/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankHttpService {

  private cassandraUrl = "http://localhost:1111";

  constructor(
    private http: HttpClient
  ) { }

  getAllBankAccounts(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.cassandraUrl + '/bank-accounts')
    .pipe(
      catchError(error => {
        console.log(error)
        return of();
      })
    )
  }

  createNewBankAccount(bank: Bank): Observable<Bank> {
    return this.http.post<Bank>(this.cassandraUrl + '/add-bank-account', bank)
    .pipe(
      catchError(error => {
        console.log(error)
        return of();
      })
    )
  }

  removeBankAccount(userId: number): Observable<Bank> {
    return this.http.delete<Bank>(this.cassandraUrl + '/remove-bank-account/' + userId)
    .pipe(
      catchError(error => {
        console.log(error)
        return of();
      })
    )
  }

  updateBank(bank: Bank): Observable<Bank>{
    return this.http.put<Bank>(this.cassandraUrl + '/update-bank', bank)
    .pipe(
      catchError(error => {
        console.log(error)
        return of();
      })
    )
  }

}
