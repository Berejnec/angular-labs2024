import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/pizzas',
    pathMatch: 'full'
  },
  {
    path: 'pizzas',
    children: [
      {
        path: '',
        loadComponent: () => import('./pizza/pizza-list/pizza-list.component').then(m => m.PizzaListComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('./pizza/pizza-details/pizza-details.component').then(m => m.PizzaDetailsComponent),
      },
    ]
  },
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.routes').then(m => m.CUSTOMER_ROUTES)
  }
];
