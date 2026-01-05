import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44353/',
  redirectUri: baseUrl,
  clientId: 'ShowZen_App',
  responseType: 'code',
  scope: 'offline_access ShowZen',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'ShowZen',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44353',
      rootNamespace: 'ShowZen',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  googleMapsApiKey: 'YOUR_API_KEY_HERE',
} as Environment;
