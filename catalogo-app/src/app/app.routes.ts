import { Routes } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'catalogo',
        loadComponent: () =>
          import(
            './features/catalogo/pages/modelos-list-page/modelos-list-page.component'
          ).then((m) => m.ModelosListPageComponent),
      },
      {
        path: 'catalogo/agregar',
        loadComponent: () =>
          import(
            './features/catalogo/pages/modelos-page/modelos-page.component'
          ).then((m) => m.ModelosPageComponent),
      },
      {
        path: 'catalogo/editar/:id',
        loadComponent: () =>
          import(
            './features/catalogo/pages/modelos-edit-page//modelos-edit-page.component'
          ).then((m) => m.ModelosEditPageComponent),
      },
    ],
  },
];
