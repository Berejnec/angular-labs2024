import {Component} from '@angular/core';
import {IPizza} from "./app.model";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pizza: IPizza;

  constructor() {
    this.pizza = {
      name: '4 STAGIONI',
      price: 27.5,
      weight: 550,
      ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare'
    }
  }
}
