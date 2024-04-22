import {Component} from '@angular/core';
import {ProductListComponent} from "./product-list/product-list.component";
import {PizzaListComponent} from "./pizza-list/pizza-list.component";
import {PastaListComponent} from "./pasta-list/pasta-list.component";
import {DessertListComponent} from "./dessert-list/dessert-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ProductListComponent, PizzaListComponent, PastaListComponent, DessertListComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
  }
}
