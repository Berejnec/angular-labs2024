import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {IAuthorization} from "./auth.model";
import {AUTH} from "./auth.data";

@Injectable({providedIn: 'root'})
export class AuthService {

  getAuthorization(): Observable<IAuthorization> {
    return of(AUTH);
  }
}
