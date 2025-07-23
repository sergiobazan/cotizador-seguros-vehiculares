import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuotationInput } from '../cotizador/models/QuoteData';
import { QuotationResult } from '../cotizador/models/QuotationResult';

@Injectable({
  providedIn: 'root',
})
export class GenerateFakeQuote {
  private readonly BASE_PRICE = 500;

  calculate(input: QuotationInput): Observable<QuotationResult> {
    let yearAdjustment = 0;
    if (input.year >= 2020) yearAdjustment = 100;
    else if (input.year < 2015) yearAdjustment = 150;

    let usageAdjustment = 0;
    switch (input.useType) {
      case 'personal':
        usageAdjustment = 100;
        break;
      case 'work':
        usageAdjustment = 200;
        break;
      case 'loading':
        usageAdjustment = 300;
        break;
    }

    let ageAdjustment = 50;
    if (input.driversAge < 25) ageAdjustment = 200;
    else if (input.driversAge > 60) ageAdjustment = 150;

    const total =
      this.BASE_PRICE + yearAdjustment + usageAdjustment + ageAdjustment;

    const result: QuotationResult = {
      basePrice: this.BASE_PRICE,
      adjustments: {
        year: yearAdjustment,
        usage: usageAdjustment,
        age: ageAdjustment,
      },
      totalPremium: total,
    };

    return of(result);
  }
}
