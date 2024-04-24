import {Component} from '@angular/core';
import {ProductListComponent} from "./product-list/product-list.component";
import {PizzaComponent} from "./pizza/pizza.component";
import {PastaComponent} from "./pasta/pasta.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ProductListComponent, PizzaComponent, PastaComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
  }
}
