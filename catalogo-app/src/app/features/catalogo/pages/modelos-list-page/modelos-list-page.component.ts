import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { VehicleModel } from '../../models/VehicleModel';
import { ModelsService } from '../../service/models.service';

@Component({
  selector: 'app-modelos-list-page',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  templateUrl: './modelos-list-page.component.html',
  styleUrl: './modelos-list-page.component.css',
})
export class ModelosListPageComponent implements OnInit {
  nameColumns = ['brand', 'model', 'year', 'actions'];

  dataSource: VehicleModel[] = [];

  constructor(private router: Router, private modelService: ModelsService) {}

  ngOnInit() {
    this.modelService.getModels().subscribe((data) => {
      this.dataSource = data;
    });
  }

  add() {
    this.router.navigate(['/catalogo/agregar']);
  }

  edit(id: string) {
    this.router.navigate(['/catalogo/editar', id]);
  }

  remove(id: string) {
    const confirmation = confirm('Estas seguro de eliminar este modelo?');
    if (confirmation) {
      this.modelService.delete(id).subscribe(() => {
        this.modelService.getModels().subscribe((data) => {
          this.dataSource = data;
        });
        console.log('Model deleted successfully');
      });
    }
  }
}
