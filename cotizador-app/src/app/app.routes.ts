import { Routes } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'cotizador',
        loadComponent: () =>
          import(
            './features/cotizador/pages/cotizador-page/cotizador-page.component'
          ).then((m) => m.CotizadorPageComponent),
      },
      {
        path: 'cotizador/latest',
        loadComponent: () =>
          import(
            './features/cotizador/pages/cotizador-list-page/cotizador-list-page.component'
          ).then((m) => m.CotizadorListPageComponent),
      },
    ],
  },
];
