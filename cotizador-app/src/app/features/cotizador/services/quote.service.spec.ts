import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';

describe('CotizadorService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
