import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {map} from "rxjs";

export const customerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getAuthorization().pipe(map(auth => {
    if (auth.customerFeatureEnabled) {
      return true;
    }

    router.navigate(['/']);
    return false;
  }));
};
