import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from "@angular/forms";
import {ICustomer} from "../../customer.model";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {map, Observable, of, startWith} from "rxjs";
import {CustomerFileService} from "../../customer.service";
import {CustomerValidators} from "../../customer-validators";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {COUNTRIES} from "./countries.data";
import {CITIES} from "./cities.data";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    MatFormField,
    MatInput,
    NgIf,
    MatSelect,
    MatOption,
    NgForOf,
    MatButton,
    MatLabel,
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatError
  ],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent implements OnInit {
  emailFormControl: FormControl;
  customerFormGroup: FormGroup;
  filteredCities$: Observable<string[]> = of([]);
  countries = COUNTRIES;
  private readonly cityFormControl: FormControl;

  constructor(private customerService: CustomerFileService) {
    this.emailFormControl = new FormControl("",
      [
        Validators.required,
        Validators.email,
        CustomerValidators.forbiddenEmailValidator("irian.ro")
      ],
      [
        this.uniqueEmailValidator()
      ]);

    this.cityFormControl = new FormControl()

    this.customerFormGroup = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: this.emailFormControl,
      phone: new FormControl(""),
      address: new FormGroup({
        street: new FormControl(),
        city: this.cityFormControl,
        zipCode: new FormControl(),
        country: new FormControl()
      })
    });
  }

  private _customer: ICustomer | undefined;

  get customer(): ICustomer | undefined {
    return this._customer;
  }

  @Input() set customer(customer: ICustomer | undefined) {
    this._customer = customer;
    if (customer) {
      this.customerFormGroup.patchValue(customer);
    }
  }

  ngOnInit() {
    this.filteredCities$ = this.cityFormControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const filterValue = value.toLowerCase();
        return CITIES.filter(option => option.toLowerCase().includes(filterValue));
      }),
    );
  }

  onSubmit() {
    console.log({
      ...this.customerFormGroup.value,
      _id: this.customer ? this.customer._id : null
    });
  }

  private uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (control.value && this.customer && this.customer.email !== control.value) {
        return this.customerService.isEmailTaken(control.value).pipe(
          map(isTaken => {
            return isTaken ? {uniqueEmail: true} : null;
          })
        );
      }

      return of(null);
    };
  }
}
