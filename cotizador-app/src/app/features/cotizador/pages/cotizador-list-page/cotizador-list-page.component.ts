import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { Quotation } from '../../models/QuotationResult';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { map } from 'rxjs';

@Component({
  selector: 'app-cotizador-list-page',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './cotizador-list-page.component.html',
  styleUrl: './cotizador-list-page.component.css',
})
export class CotizadorListPageComponent implements OnInit {
  quotes: Quotation[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService
      .getLatestQuotes()
      .pipe(map((quotations) => quotations.slice(-3).reverse()))
      .subscribe((data) => {
        this.quotes = data;
      });
  }
}
