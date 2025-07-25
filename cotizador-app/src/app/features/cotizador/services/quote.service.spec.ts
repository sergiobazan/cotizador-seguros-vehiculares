import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  let service: QuoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuoteService],
    });
    service = TestBed.inject(QuoteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should save a quote using POST', () => {
    const mockQuote = {
      basePrice: 500,
      totalPremium: 100,
      adjustments: { year: 100, usage: 200, age: 200 },
    };

    service.quote(mockQuote).subscribe((res) => {
      expect(res.totalPremium).toEqual(mockQuote.totalPremium);
    });

    const req = httpMock.expectOne('http://localhost:3000/cotizador');
    expect(req.request.method).toBe('POST');
    req.flush(mockQuote);
  });
});
