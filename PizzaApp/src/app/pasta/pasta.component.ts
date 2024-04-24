import {Component} from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductToken} from "../IProduct";
import {PastaRestService} from "./pasta-rest.service";

@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [
    ProductListComponent
  ],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css',
  providers: [
    {provide: ProductToken, useClass: PastaRestService}
  ]
})
export class PastaComponent {

}
