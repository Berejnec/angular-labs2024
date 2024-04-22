import {InjectionToken} from "@angular/core";
import {IProductService} from "./IProductService";


export const ProductToken = new InjectionToken<IProductService>('ProductToken');
