import {Routes} from '@angular/router';
import {PizzaListComponent} from "./pizza/pizza-list/pizza-list.component";
import {PizzaDetailsComponent} from "./pizza/pizza-details/pizza-details.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerDetailsComponent} from "./customer/customer-details/customer-details.component";

const PIZZA_ROUTES: Routes = [
  {
    path: 'pizzas',
    children: [
      {
        path: '',
        component: PizzaListComponent
      },
      {
        path: ':id',
        component: PizzaDetailsComponent
      },
    ]
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


