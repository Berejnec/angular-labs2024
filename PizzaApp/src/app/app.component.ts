import {Component} from '@angular/core';
import {IPizza} from "./app.model";
import {PIZZAS} from './app.data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pizzas: Array<IPizza>;

  constructor() {
    this.pizzas = PIZZAS;
  }
}
