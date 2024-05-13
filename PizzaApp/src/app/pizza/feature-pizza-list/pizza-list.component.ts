import {Component, OnInit} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {TabsComponent} from "../feature-pizza-details/tabs/tabs.component";
import {NavigationService} from "../../commons/navigation.service";
import {IPizza, PizzaRestService} from "@pizza/data-access";
import {OutOfStockDirective} from "./out-of-stock/out-of-stock.directive";
import {DiscountDirective} from "./discount/discount.directive";

@Component({
  selector: 'feature-pizza-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    TabsComponent,
    OutOfStockDirective,
    DiscountDirective
  ],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css'
})
export class PizzaListComponent implements OnInit {
  pizzas: Array<IPizza> = [];

  constructor(private pizzaService: PizzaRestService,
              private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }

  goToPizza(pizza: IPizza) {
    return this.navigationService.openPizza(pizza.id);
  }
}
