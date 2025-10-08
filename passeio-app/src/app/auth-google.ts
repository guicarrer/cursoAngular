import {inject, Injectable, signal} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {Router} from '@angular/router';
import {auth} from './auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogle {

  private oAtuhService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any>(null);

  constructor() {
    this.initConfiguration();
  }

  initConfiguration(): void {
    this.oAtuhService.configure(auth);
    this.oAtuhService.setupAutomaticSilentRefresh();
    this.oAtuhService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oAtuhService.hasValidIdToken()) {
        this.profile.set(this.oAtuhService.getIdentityClaims());
      }
    });
  }

  login(): void {
    this.oAtuhService.initImplicitFlow();
  }

  logou(): void {
    this.oAtuhService.revokeTokenAndLogout();
    this.oAtuhService.logOut();
    this.profile.set(null);
    this.router.navigate(['']);
  }

}
