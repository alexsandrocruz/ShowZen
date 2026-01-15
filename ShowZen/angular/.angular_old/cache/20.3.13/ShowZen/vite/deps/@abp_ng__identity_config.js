import {
  RoutesService
} from "./chunk-YNSF2OKM.js";
import "./chunk-KYW4FKB6.js";
import "./chunk-OALXQWG3.js";
import "./chunk-XJ5KBAN7.js";
import "./chunk-A4AOUQJ4.js";
import "./chunk-ZKYDULWF.js";
import "./chunk-7TTFZDGB.js";
import "./chunk-PL5KB4ZG.js";
import {
  NgModule,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OHEE3L26.js";
import "./chunk-576P5TAG.js";
import "./chunk-UQGLAMHP.js";
import "./chunk-2K3BB2X3.js";
import "./chunk-SYKYUVZG.js";

// node_modules/@abp/ng.identity/fesm2022/abp-ng.identity-config.mjs
var IDENTITY_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
})];
function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([{
    path: void 0,
    name: "AbpIdentity::Menu:IdentityManagement",
    parentName: "AbpUiNavigation::Menu:Administration",
    requiredPolicy: "AbpIdentity.Roles || AbpIdentity.Users",
    iconClass: "fa fa-id-card-o",
    layout: "application",
    order: 1
  }, {
    path: "/identity/roles",
    name: "AbpIdentity::Roles",
    parentName: "AbpIdentity::Menu:IdentityManagement",
    requiredPolicy: "AbpIdentity.Roles",
    order: 1
  }, {
    path: "/identity/users",
    name: "AbpIdentity::Users",
    parentName: "AbpIdentity::Menu:IdentityManagement",
    requiredPolicy: "AbpIdentity.Users",
    order: 2
  }]);
}
function provideIdentityConfig() {
  return makeEnvironmentProviders([IDENTITY_ROUTE_PROVIDERS]);
}
var _IdentityConfigModule = class _IdentityConfigModule {
  static forRoot() {
    return {
      ngModule: _IdentityConfigModule,
      providers: [provideIdentityConfig()]
    };
  }
};
_IdentityConfigModule.ɵfac = function IdentityConfigModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IdentityConfigModule)();
};
_IdentityConfigModule.ɵmod = ɵɵdefineNgModule({
  type: _IdentityConfigModule
});
_IdentityConfigModule.ɵinj = ɵɵdefineInjector({});
var IdentityConfigModule = _IdentityConfigModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityConfigModule, [{
    type: NgModule
  }], null, null);
})();
export {
  IDENTITY_ROUTE_PROVIDERS,
  IdentityConfigModule,
  configureRoutes,
  provideIdentityConfig
};
//# sourceMappingURL=@abp_ng__identity_config.js.map
