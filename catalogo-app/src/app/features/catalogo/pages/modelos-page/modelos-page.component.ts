import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ModelsService } from '../../service/models.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelos-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './modelos-page.component.html',
  styleUrl: './modelos-page.component.css',
})
export class ModelosPageComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modelSerivce: ModelsService,
    private router: Router
  ) {
    this.form = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1990)]],
    });
  }

  add() {
    if (this.form.valid) {
      this.modelSerivce.addModel(this.form.value).subscribe(() => {
        this.router.navigate(['/catalogo']);
      });
    }
  }
}
