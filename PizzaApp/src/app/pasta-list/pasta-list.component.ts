import { Component } from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductToken} from "../ProductToken";
import {PastaRestService} from "./pasta-rest.service";

@Component({
  selector: 'app-pasta-list',
  standalone: true,
  imports: [
    ProductListComponent
  ],
  templateUrl: './pasta-list.component.html',
  styleUrl: './pasta-list.component.css',
  providers: [
    {provide: ProductToken, useClass: PastaRestService}
  ]
})
export class PastaListComponent {

}
