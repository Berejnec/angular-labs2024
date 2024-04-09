import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPizza, IReview} from "./pizza.model";

@Injectable({
  providedIn: 'root'
})
export class PizzaRestService {
  private url: string = "https://angular-labs2021-59f10-default-rtdb.firebaseio.com/pizzas.json";
  private reviewUrl: string = "https://us-central1-angular-labs2021-59f10.cloudfunctions.net/app";

  constructor(private http: HttpClient) {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.url);
  }

  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    const url: string = this.reviewUrl + '/review/' + pizza.id;
    return this.http.post<IPizza>(url, review);
  }
}
