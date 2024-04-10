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

  getPizzas(): Observable<Array<IPizza>> {
    return of(PIZZAS);
  }

  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    pizza.reviews.push(review);
    return of(pizza);
  }
}
