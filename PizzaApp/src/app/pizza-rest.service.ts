import {Injectable, Provider} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPizza} from "./app.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";

@Injectable()
export class PizzaRestService implements IPizzaService {
  private url: string = "https://angular-labs2021-59f10-default-rtdb.firebaseio.com/pizzas.json";

  constructor(private http: HttpClient) {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.url);
  }
}

export const PizzaRestServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaRestService
};
