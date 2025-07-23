import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quotation, QuotationRequest } from '../models/QuotationResult';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apiUrl = 'http://localhost:3000/cotizador';

  constructor(private http: HttpClient) {}

  quote(data: QuotationRequest): Observable<Quotation> {
    return this.http.post<Quotation>(this.apiUrl, data);
  }

  getLatestQuotes(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.apiUrl);
  }
}
