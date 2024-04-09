import {Component} from '@angular/core';
import {IPizza} from "./app.model";
import {CurrencyPipe} from "@angular/common";
import {TabsComponent} from "./tabs/tabs.component";
import {PizzaFileService} from "./pizza-file.service";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CurrencyPipe, TabsComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  pizzas: Array<IPizza> = [];

  constructor(private pizzaService: PizzaFileService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
