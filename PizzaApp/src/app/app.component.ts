import {Component, OnInit} from '@angular/core';
import {IPizza} from "./app.model";
import {CurrencyPipe} from "@angular/common";
import {TabsComponent} from "./tabs/tabs.component";
import {PizzaRestService} from "./pizza-rest.service";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CurrencyPipe, TabsComponent],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  pizzas: Array<IPizza> = [];

  constructor(private pizzaService: PizzaRestService) {
  }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }
}
