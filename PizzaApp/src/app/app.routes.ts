import {Routes} from '@angular/router';
import {PizzaListComponent} from "./pizza/pizza-list/pizza-list.component";
import {PizzaDetailsComponent} from "./pizza/pizza-details/pizza-details.component";
import {CustomerComponent} from "./customer/customer.component";
import {customerGuard} from "./customer.guard";

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
    component: CustomerComponent,
    canActivate: [customerGuard]
  }
];
export const routes: Routes = PIZZA_ROUTES;
