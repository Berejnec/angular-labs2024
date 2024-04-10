import {Routes} from '@angular/router';
import {PizzaListComponent} from "./pizza/pizza-list/pizza-list.component";
import {PizzaDetailsComponent} from "./pizza/pizza-details/pizza-details.component";

const PIZZA_ROUTES = [
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
      }
    ]
  }
];
export const routes: Routes = PIZZA_ROUTES;
