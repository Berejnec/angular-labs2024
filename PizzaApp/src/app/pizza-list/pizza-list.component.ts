import { Component } from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductToken} from "../ProductToken";
import {PizzaRestService} from "./pizza-rest.service";

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [
    ProductListComponent
  ],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css',
  providers: [{provide: ProductToken, useClass: PizzaRestService}]
})
export class PizzaListComponent {

}
