import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Transaction } from 'src/app/Transaction';
import { Category } from '../Category';
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  private apiUrl='http://localhost:5000/transactions';
  private apiUrl2='http://localhost:5000/categories';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.apiUrl);
  }
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl2);
  }
  
  updateTaskReminder(transaction: Transaction): Observable<Transaction> {
    const url = `${this.apiUrl}/${transaction.id}`;
    return this.http.put<Transaction>(url, transaction,httpOptions);
  }
  
}
