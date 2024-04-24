import {Inject, Injectable} from "@angular/core";
import {IProductService} from "../IProduct";
import { Observable } from "rxjs";
import { IProduct, IReview } from "../product-list/product.model";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class PastaRestService implements IProductService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  addReview(pizza: IProduct, review: IReview): Observable<IProduct> {
        throw new Error("Method not implemented.");
    }
    getProduct(): Observable<IProduct[]> {
       return  this.http.get<IProduct[]>(`${this.url}/pasta`);
    }
}
