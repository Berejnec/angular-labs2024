import {Component, Inject, Input} from '@angular/core';
import {IProduct, IReview} from "../product.model";
import {ReviewsComponent} from "./reviews/reviews.component";
import {IngredientsComponent} from "./ingredients/ingredients.component";
import {ExtrasComponent} from "./extras/extras.component";
import {ProductToken} from "../../ProductToken";
import {IProductService} from "../../IProductService";

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [
    ReviewsComponent,
    IngredientsComponent,
    ExtrasComponent
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() pizza!: IProduct;

  private activeTab = 1;
  tabMap = new Map<number, boolean>();

  constructor(@Inject(ProductToken) private productService: IProductService) {
    this.tabMap.set(this.activeTab, true);
  }

  public selectTab(tid: number) {
    this.tabMap.set(this.activeTab, false);
    this.activeTab = tid;
    this.tabMap.set(this.activeTab, true);
  }

  public addReview(review: IReview) {
    this.productService.addReview(this.pizza, review)
      .subscribe(pizza => this.pizza = pizza);
  }
}
