import {Component} from '@angular/core';
import {PizzaListComponent} from "./pizza-list/pizza-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [PizzaListComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
  }
}
