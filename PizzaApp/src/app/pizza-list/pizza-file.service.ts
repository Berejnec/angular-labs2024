import {Injectable} from '@angular/core';
import {PIZZAS} from "./pizza.data";
import {IPizza} from "./pizza.model";

@Injectable({
  providedIn: 'root'
})
export class PizzaFileService {

  constructor() {
  }

  getPizzas(): Array<IPizza> {
    return PIZZAS;
  }
}
