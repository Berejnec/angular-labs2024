import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  openPizza(id: string): Promise<boolean> {
    return this.router.navigate(['pizzas', id]);
  }

  openPizzas(): Promise<boolean> {
    return this.router.navigate(['pizzas']);
  }

  openCustomer(id: string): Promise<boolean> {
    return this.router.navigate(['customers', id]);
  }

  openCustomers(): Promise<boolean> {
    return this.router.navigate(['customers']);
  }

  getParam(activatedRoute: ActivatedRoute, paramName: string): string {
    return activatedRoute.snapshot.params[paramName];
  }
}
