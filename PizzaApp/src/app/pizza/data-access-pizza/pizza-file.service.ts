import {Injectable} from '@angular/core';
import {PIZZAS} from "./pizza.data";
import {IPizza, IReview} from "./pizza.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PizzaFileService {

  constructor() {
  }

  getPizza(id: string): Observable<IPizza | undefined> {
    return of(PIZZAS.find(pizza => pizza.id === id));
  }

  getPizzas(): Observable<Array<IPizza>> {
    return of(PIZZAS);
  }

  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    pizza.reviews.push(review);
    return of(pizza);
  }
}
