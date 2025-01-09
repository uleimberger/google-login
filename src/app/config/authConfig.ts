import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',

  redirectUri: window.location.origin,

  clientId:
    '783281797281-ttehvtcbprnmfg79hjm4j16ei9hrjlcv.apps.googleusercontent.com',

  // clientId: '111706031731528254980',

  scope: 'openid profile email',

  strictDiscoveryDocumentValidation: false,
};
