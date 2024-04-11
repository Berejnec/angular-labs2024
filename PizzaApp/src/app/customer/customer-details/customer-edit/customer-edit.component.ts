import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ICustomer} from "../../customer.model";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent {
  emailFormControl: FormControl;
  customerFormGroup: FormGroup;

  constructor() {
    this.emailFormControl = new FormControl("", [Validators.required, Validators.email])
    this.customerFormGroup = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: this.emailFormControl,
      phone: new FormControl(""),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        zipCode: new FormControl(),
        country: new FormControl()
      })
    });
  }

  private _customer: ICustomer | undefined;

  get customer(): ICustomer | undefined {
    return this._customer;
  }

  @Input()
  set customer(customer: ICustomer | undefined) {
    this._customer = customer;
    if (customer) {
      this.customerFormGroup.patchValue(customer);
    }
  }

  onSubmit() {
    console.log({
      ...this.customerFormGroup.value,
      _id: this.customer ? this.customer._id : null
    });
  }
}
