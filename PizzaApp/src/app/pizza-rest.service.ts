import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct, IReview} from "./product-list/product.model";

@Injectable({
  providedIn: 'root'
})
export class PizzaRestService {
  private url: string = "https://angular-labs2021-59f10-default-rtdb.firebaseio.com/pizzas.json";
  private reviewUrl: string = "https://us-central1-angular-labs2021-59f10.cloudfunctions.net/app";

  constructor(private http: HttpClient) {
  }

  getProduct(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(this.url);
  }

  addReview(pizza: IProduct, review: IReview): Observable<IProduct> {
    const url: string = this.reviewUrl + '/review/' + pizza.id;
    return this.http.post<IProduct>(url, review);
  }
}
