import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavigationService} from "./commons/navigation.service";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, MatToolbar, MatAnchor],
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private navigationService: NavigationService) {
  }

  goToPizzas() {
    return this.navigationService.openPizzas();
  }

  goToCustomers() {
    return this.navigationService.openCustomers();
  }
}
