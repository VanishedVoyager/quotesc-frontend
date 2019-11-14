import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Quote } from '../model/quote';
import { HttpClientModule } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type,Origin',
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })};

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  URL = 'http://192.168.43.236:8182';

  constructor(private http: HttpClient) { }

  getQuotes() {
    return this.http.get<Quote[]>(this.URL + '/quotes', httpOptions);
  }

  addQuote(quote: Quote) {
    return this.http.post<Quote>(this.URL + '/quotes', quote, httpOptions);
  }
}
