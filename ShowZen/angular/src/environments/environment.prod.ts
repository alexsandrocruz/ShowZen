import { Environment } from '@abp/ng.core';

export const environment = {
  production: true,
  application: {
    baseUrl: 'https://eventos.zensuite.com.br',
    name: 'ShowZen',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://eventos.zensuite.com.br/',
    redirectUri: 'https://eventos.zensuite.com.br',
    clientId: 'ShowZen_App',
    responseType: 'code',
    scope: 'offline_access openid profile email phone',
  },
  apis: {
    default: {
      url: 'https://eventos.zensuite.com.br',
      rootNamespace: 'ShowZen',
    },
  },
} as Environment;
