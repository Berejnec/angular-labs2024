import {Component, Inject, OnInit} from '@angular/core';
import {IPizza} from "./app.model";
import {CurrencyPipe} from "@angular/common";
import {TabsComponent} from "./tabs/tabs.component";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CurrencyPipe, TabsComponent],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  pizzas: Array<IPizza> = [];

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService) {
  }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }
}
