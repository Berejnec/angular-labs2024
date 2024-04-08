import {Component, OnInit} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {TabsComponent} from "./tabs/tabs.component";
import {IPizza} from "./pizza.model";
import {PizzaRestService} from "./pizza-rest.service";

@Component({
  selector: 'pizza-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    TabsComponent
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
