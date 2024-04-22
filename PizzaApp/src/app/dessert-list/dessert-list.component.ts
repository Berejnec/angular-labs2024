import { Component } from '@angular/core';
import {DessertRestService} from "./dessert-rest.service";
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductToken} from "../ProductToken";

@Component({
  selector: 'app-dessert-list',
  standalone: true,
  imports: [
    ProductListComponent
  ],
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.css',
  providers: [{provide: ProductToken, useClass: DessertRestService}]
})
export class DessertListComponent {

}
