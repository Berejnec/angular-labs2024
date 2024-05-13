import {Component, OnInit} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {TabsComponent} from "../feature-pizza-details/tabs/tabs.component";
import {NavigationService} from "../../commons/navigation.service";
import {IPizza, PizzaRestService} from "@pizza/data-access";
import {OutOfStockDirective} from "./out-of-stock/out-of-stock.directive";
import {DiscountDirective} from "./discount/discount.directive";
import {ExchangePipe} from "./exchange/exchange.pipe";
import {PizzaCardComponent} from "./pizza-card/pizza-card.component";

@Component({
  selector: 'feature-pizza-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    TabsComponent,
    OutOfStockDirective,
    DiscountDirective,
    ExchangePipe,
    PizzaCardComponent
  ],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css'
})
export class PizzaListComponent implements OnInit {
  pizzas: Array<IPizza> = [];

  constructor(private pizzaService: PizzaRestService) {
  }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }


}
