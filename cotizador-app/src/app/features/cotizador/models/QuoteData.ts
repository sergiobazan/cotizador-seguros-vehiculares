export interface QuoteData {
  id: string;
  brand: string;
  model: string;
  year: number;
  useType: 'personal' | 'work' | 'loading';
  driversAge: number;
}

export type QuoteDataRequest = Omit<QuoteData, 'id'>;

export type QuotationInput = Omit<QuoteData, 'id'>;
