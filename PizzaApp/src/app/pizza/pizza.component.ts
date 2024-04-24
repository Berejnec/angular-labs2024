import { Component } from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductToken} from "../IProduct";
import {PizzaRestService} from "./pizza-rest.service";

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [
    ProductListComponent
  ],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css',
  providers: [
    {provide: ProductToken, useClass: PizzaRestService}
  ]
})
export class PizzaComponent {

}
