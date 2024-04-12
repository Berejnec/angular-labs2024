import {Injectable} from '@angular/core';

import {ICustomer} from './customer.model';
import {CUSTOMERS} from './customer.data';
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class CustomerFileService {

  getCustomers(): Observable<Array<ICustomer>> {
    return of(CUSTOMERS)
  }

  getCustomer(id: string): Observable<ICustomer | undefined> {
    return of(CUSTOMERS.find(customer => customer._id === id))
  }

  isEmailTaken(email: string): Observable<boolean> {
    const isTaken = CUSTOMERS.findIndex(customer => customer.email === email) >= 0;
    return of(isTaken);
  }

}
