import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Amount } from '../model/amount.model';
import { Loan } from '../model/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  loan$ = new BehaviorSubject<Loan>({});
  constructor(private http: HttpClient) { }

  getLoans(): Observable<Loan[]> { //GET, POST< PUT, DELETE
      return this.http.get<Loan[]>(environment.serverUrl + '/loan/all')
  }

  applyLoan(loanId:number, amount: number) : Observable<Amount>{
    let header = {
      'Authorization' : 'Basic ' + localStorage.getItem('token')
    };
    return this.http.get<Amount>(environment.serverUrl +'/loan/apply/' + loanId + '/' + amount
    , {headers: header})
  }
}
