import {CanActivateFn, Router} from '@angular/router';
import {AuthGoogle} from './auth-google';
import {inject} from '@angular/core';
import {Profile} from './landing-page/profile.model';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService: AuthGoogle = inject(AuthGoogle);
  const router = inject(Router);
  const loggedProfile: Profile = loginService.getLoggedProfile();

  if (loggedProfile) {
    return true;
  }

  router.navigate(['']);

  return false;
};
