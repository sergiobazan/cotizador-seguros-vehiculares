import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { QuoteService } from '../../services/quote.service';
import { GenerateFakeQuote } from '../../../utils/GenerateFakeQuote';
import { QuotationResult } from '../../models/QuotationResult';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

interface UseType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cotizador-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
  ],
  templateUrl: './cotizador-page.component.html',
  styleUrl: './cotizador-page.component.css',
})
export class CotizadorPageComponent {
  form: FormGroup;
  quoteResult?: QuotationResult;

  useTypes: UseType[] = [
    { value: 'personal', viewValue: 'Personal' },
    { value: 'work', viewValue: 'Trabajo' },
    { value: 'loading', viewValue: 'Carga' },
  ];

  constructor(
    private fb: FormBuilder,
    private quoteService: QuoteService,
    private fakeQuotation: GenerateFakeQuote,
    private router: Router
  ) {
    this.form = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1990)]],
      useType: ['', [Validators.required]],
      driversAge: ['', [Validators.required, Validators.min(18)]],
    });
  }

  quote() {
    if (this.form.valid) {
      this.fakeQuotation.calculate(this.form.value).subscribe((result) => {
        this.quoteResult = result;
        this.quoteService.quote(result).subscribe(() => {
          console.log('Quotation saved: ');
        });
      });
    }
  }

  goToLastQuotations() {
    this.router.navigate(['/cotizador/latest']);
  }
}
