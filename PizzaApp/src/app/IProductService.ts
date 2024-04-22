import {IProduct, IReview} from "./product-list/product.model";
import {Observable} from "rxjs";


export interface IProductService {
  addReview(pizza: IProduct, review: IReview): Observable<IProduct>;
  getProduct(): Observable<Array<IProduct>>;
}
