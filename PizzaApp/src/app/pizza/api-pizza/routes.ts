import {Routes} from "@angular/router";
import {PizzaListComponent} from "@pizza/feature-pizza-list";
import {PizzaDetailsComponent} from "@pizza/feature-pizza-details";


export const PIZZA_ROUTES: Routes = [
  {
    path: '',
    component: PizzaListComponent
  },
  {
    path: ':id',
    component: PizzaDetailsComponent
  },
  ]
