import { Environment } from '@abp/ng.core';

const baseUrl = 'http://65.109.172.148';

const oAuthConfig = {
  issuer: 'http://65.109.172.148/',
  redirectUri: baseUrl,
  clientId: 'ShowZen_App',
  responseType: 'code',
  scope: 'offline_access ShowZen',
  requireHttps: false,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'ShowZen',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'http://65.109.172.148',
      rootNamespace: 'ShowZen',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
