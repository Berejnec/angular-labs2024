import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../customer.model";
import {NavigationService} from "../../commons/navigation.service";
import {CustomerFileService} from "../customer.service";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {

  customers: Array<ICustomer> = [];

  constructor(private navigationService: NavigationService,
              private customerService: CustomerFileService) {
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  goToCustomer(customer: ICustomer): Promise<boolean> {
    return this.navigationService.openCustomer(customer._id);
  }
}
