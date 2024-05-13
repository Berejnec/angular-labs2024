import {Component, Input} from '@angular/core';
import {NavigationService} from "../../../commons/navigation.service";
import {IPizza} from "../../data-access-pizza";
import {ExchangePipe} from "../exchange/exchange.pipe";
import {CurrencyPipe} from "@angular/common";
import {DiscountDirective} from "../discount/discount.directive";
import {OutOfStockDirective} from "../out-of-stock/out-of-stock.directive";

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [
    ExchangePipe,
    CurrencyPipe,
    DiscountDirective,
    OutOfStockDirective
  ],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.css'
})
export class PizzaCardComponent {

  @Input({required: true}) pizza!: IPizza;
  @Input({required: true}) index!: number;

  constructor(private navigationService: NavigationService) {
  }

  goToPizza(pizza: IPizza) {
    return this.navigationService.openPizza(pizza.id);
  }
}
