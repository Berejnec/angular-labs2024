import {Component, Inject, OnInit} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {TabsComponent} from "./tabs/tabs.component";
import {IProduct} from "./product.model";
import {ProductToken} from "../ProductToken";
import {IProductService} from "../IProductService";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    TabsComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  pizzas: Array<IProduct> = [];

  constructor( @Inject(ProductToken) private productService: IProductService) {
  }

  ngOnInit() {
    this.productService.getProduct().subscribe(pizzas => this.pizzas = pizzas);
  }
}
