import { provideAbpCore, withOptions } from '@abp/ng.core';
import { provideAbpOAuth } from '@abp/ng.oauth';
import { provideSettingManagementConfig } from '@abp/ng.setting-management/config';
import { provideFeatureManagementConfig } from '@abp/ng.feature-management';
import { provideAbpThemeShared, } from '@abp/ng.theme.shared';
import { provideIdentityConfig } from '@abp/ng.identity/config';
import { provideAccountConfig } from '@abp/ng.account/config';
import { provideTenantManagementConfig } from '@abp/ng.tenant-management/config';
import { registerLocaleForEsBuild } from '@abp/ng.core/locale';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { provideLogo, withEnvironmentOptions } from "@abp/ng.theme.shared";
import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReplaceableComponentsService } from '@abp/ng.core';

import { LogoComponent } from './logo/logo.component';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { APP_ROUTES } from './app.routes';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { FooterInjectorComponent } from './layout/footer-injector/footer-injector.component';
import { createComponent, ApplicationRef } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    APP_ROUTE_PROVIDER,
    provideAnimations(),
    provideAbpCore(
      withOptions({
        environment,
        registerLocaleFn: registerLocaleForEsBuild(),
      }),
    ),
    provideAbpOAuth(),
    provideIdentityConfig(),
    provideSettingManagementConfig(),
    provideFeatureManagementConfig(),
    provideAccountConfig(),
    provideTenantManagementConfig(),
    provideAbpThemeShared(),
    importProvidersFrom(ThemeBasicModule.forRoot()),
    {
      provide: APP_INITIALIZER,
      useFactory: (replaceableComponents: ReplaceableComponentsService, appRef: ApplicationRef) => () => {
        replaceableComponents.add({
          component: LogoComponent,
          key: eThemeBasicComponents.Logo,
        });

        // Inject footer after app stabilizes
        appRef.isStable.subscribe(stable => {
          if (stable) {
            const footerInjector = createComponent(FooterInjectorComponent, {
              environmentInjector: appRef.injector
            });
            appRef.attachView(footerInjector.hostView);
          }
        });
      },
      deps: [ReplaceableComponentsService, ApplicationRef],
      multi: true,
    },

  ]
};