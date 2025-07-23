import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModelsService } from '../../service/models.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modelos-edit-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './modelos-edit-page.component.html',
  styleUrl: './modelos-edit-page.component.css',
})
export class ModelosEditPageComponent implements OnInit {
  form: FormGroup;
  modelId = '';

  constructor(
    private fb: FormBuilder,
    private modelService: ModelsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1990)]],
    });
    this.modelId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.modelService.getModelById(this.modelId).subscribe((data) => {
      this.form.patchValue({
        id: data.id,
        brand: data.brand,
        model: data.model,
        year: Number(data.year),
      });
    });
  }

  update() {
    if (this.form.valid) {
      this.modelService.updateModel(this.form.value).subscribe(() => {
        this.router.navigate(['/catalogo']);
      });
    }
  }
}
