import {Component, OnInit} from '@angular/core';
import {IPizza} from "../pizza.model";
import {PizzaRestService} from "../pizza-rest.service";
import {ActivatedRoute} from "@angular/router";
import {TabsComponent} from "./tabs/tabs.component";
import {NavigationService} from "../../commons/navigation.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-pizza-details',
  standalone: true,
  imports: [
    TabsComponent,
    CurrencyPipe
  ],
  templateUrl: './pizza-details.component.html',
  styleUrl: './pizza-details.component.css'
})
export class PizzaDetailsComponent implements OnInit {
  pizza: IPizza | undefined;

  constructor(private pizzaService: PizzaRestService,
              private activatedRoute: ActivatedRoute,
              private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.pizzaService.getPizza(this.activatedRoute.snapshot.params['id']).subscribe(pizza => {
      this.pizza = pizza;
    });
  }

  goBack(): Promise<boolean> {
    return this.navigationService.openPizzas();
  }
}
