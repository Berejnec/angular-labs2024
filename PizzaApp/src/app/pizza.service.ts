import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs";
import {IPizza} from "./app.model";

export interface IPizzaService {
  getPizzas(): Observable<Array<IPizza>>;
}

export const PIZZA_SERVICE = new InjectionToken<IPizzaService>('PIZZA_SERVICE');
