export interface Quotation {
  id: string;
  basePrice: number;
  adjustments: {
    year: number;
    usage: number;
    age: number;
  };
  totalPremium: number;
}

export type QuotationResult = Omit<Quotation, 'id'>;

export type QuotationRequest = Omit<Quotation, 'id'>;
