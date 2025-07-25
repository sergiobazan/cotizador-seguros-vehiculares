import { QuotationInput } from '../cotizador/models/QuoteData';
import { GenerateFakeQuote } from './GenerateFakeQuote';

describe('GenerateFakeQuote', () => {
  let service: GenerateFakeQuote;

  beforeEach(() => {
    service = new GenerateFakeQuote();
  });

  it('should calculate correct premium based on form values', (done) => {
    const form: QuotationInput = {
      brand: 'Toyota',
      model: 'Corolla',
      year: 2018,
      useType: 'personal',
      driversAge: 30,
    };

    service.calculate(form).subscribe((result) => {
      expect(result.basePrice).toBe(500);
      expect(result.totalPremium).toBeGreaterThan(result.basePrice);
      done();
    });
  });
});
