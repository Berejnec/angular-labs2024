import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../customer.model";
import {CustomerFileService} from "../customer.service";
import {NavigationService} from "../../commons/navigation.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    CustomerEditComponent
  ],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {
  customer: ICustomer | undefined;

  constructor(private customerService: CustomerFileService,
              private navigationService: NavigationService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.customerService.getCustomer(this.navigationService.getParam(this.activatedRoute, 'id'))
      .subscribe(customer => this.customer = customer);
  }

  goBack() {
    return this.navigationService.openCustomers();
  }

  onSubmit(customerFormGroup: FormGroup) {
    console.log({
      ...customerFormGroup.value,
      _id: this.customer ? this.customer._id : null
    });
  }
}
