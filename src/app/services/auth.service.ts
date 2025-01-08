import { inject, Injectable, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { authConfig } from '../config/authConfig';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private oAuthService = inject(OAuthService);
  private router = inject(Router);
  profile = signal<any>(null);

  constructor() {
    this.initConfiguration();
  }

  initConfiguration() {
    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oAuthService.hasValidIdToken()) {
        this.profile.set(this.oAuthService.getIdentityClaims());
      }
    });
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
    this.profile.set(null);
  }

  getProfile() {
    return this.profile();
  }
}
