import {Routes} from '@angular/router';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerDetailsComponent} from "./customer/customer-details/customer-details.component";

const PIZZA_ROUTES: Routes = [
  {
    path: 'pizzas',
    loadChildren: () => import('@pizza/api-pizza').then(m => m.PIZZA_ROUTES)
  },
  {
    path: 'customers',
    children: [
      {
        path: '',
        component: CustomerListComponent,
      },
      {
        path: ':id',
        component: CustomerDetailsComponent,
      }
    ]
  }
];
export const routes: Routes = PIZZA_ROUTES;


