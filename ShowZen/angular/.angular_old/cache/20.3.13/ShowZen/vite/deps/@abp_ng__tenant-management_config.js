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

// node_modules/@abp/ng.tenant-management/fesm2022/abp-ng.tenant-management-config.mjs
var TENANT_MANAGEMENT_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
})];
function configureRoutes() {
  const routes = inject(RoutesService);
  routes.add([{
    path: void 0,
    name: "AbpTenantManagement::Menu:TenantManagement",
    parentName: "AbpUiNavigation::Menu:Administration",
    requiredPolicy: "AbpTenantManagement.Tenants",
    layout: "application",
    iconClass: "fa fa-users",
    order: 2
  }, {
    path: "/tenant-management/tenants",
    name: "AbpTenantManagement::Tenants",
    parentName: "AbpTenantManagement::Menu:TenantManagement",
    requiredPolicy: "AbpTenantManagement.Tenants",
    order: 1
  }]);
}
function provideTenantManagementConfig() {
  return makeEnvironmentProviders([TENANT_MANAGEMENT_ROUTE_PROVIDERS]);
}
var _TenantManagementConfigModule = class _TenantManagementConfigModule {
  static forRoot() {
    return {
      ngModule: _TenantManagementConfigModule,
      providers: [provideTenantManagementConfig()]
    };
  }
};
_TenantManagementConfigModule.ɵfac = function TenantManagementConfigModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TenantManagementConfigModule)();
};
_TenantManagementConfigModule.ɵmod = ɵɵdefineNgModule({
  type: _TenantManagementConfigModule
});
_TenantManagementConfigModule.ɵinj = ɵɵdefineInjector({});
var TenantManagementConfigModule = _TenantManagementConfigModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantManagementConfigModule, [{
    type: NgModule
  }], null, null);
})();
export {
  TENANT_MANAGEMENT_ROUTE_PROVIDERS,
  TenantManagementConfigModule,
  configureRoutes,
  provideTenantManagementConfig
};
//# sourceMappingURL=@abp_ng__tenant-management_config.js.map
