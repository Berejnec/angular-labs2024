import {Component} from '@angular/core';
import {IPizza} from "./app.model";
import {PIZZAS} from './app.data';
import {CurrencyPipe} from "@angular/common";
import {TabsComponent} from "./tabs/tabs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CurrencyPipe, TabsComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  pizzas: Array<IPizza>;

  constructor() {
    this.pizzas = PIZZAS;
  }
}
