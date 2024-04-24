import {IProduct, IReview} from "./product-list/product.model";
import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";



export const ProductToken = new InjectionToken<IProductService>('ProductService');
export interface IProductService {

  addReview(pizza: IProduct, review: IReview): Observable<IProduct>
  getProduct(): Observable<Array<IProduct>>
}
