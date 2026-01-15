import {
  AbpVisibleDirective,
  ButtonComponent,
  DocumentDirHandlerService,
  EllipsisDirective,
  LOGO_APP_NAME_TOKEN,
  LOGO_URL_TOKEN,
  ModalCloseDirective,
  ModalComponent,
  NavItemsService,
  PageAlertService,
  ToasterService,
  UserMenuService,
  collapseWithMargin,
  slideFromBottom
} from "./chunk-7M2NWIIB.js";
import {
  NgbDropdown,
  NgbDropdownModule,
  NgbDropdownToggle
} from "./chunk-YX3SHI5G.js";
import "./chunk-HXT4IF3A.js";
import "./chunk-G7KX2FVW.js";
import {
  AbpTenantService,
  AuthService,
  CONTENT_STRATEGY,
  ConfigStateService,
  DomInsertionService,
  EnvironmentService,
  LOADING_STRATEGY,
  LazyLoadService,
  LazyLocalizationPipe,
  LocalizationPipe,
  MultiTenancyService,
  NAVIGATE_TO_MANAGE_PROFILE,
  PermissionDirective,
  ReplaceableComponentsService,
  ReplaceableTemplateDirective,
  RouterEvents,
  RoutesService,
  SafeHtmlPipe,
  SessionStateService,
  SubscriptionService,
  ToInjectorPipe
} from "./chunk-YNSF2OKM.js";
import {
  VALIDATION_ERROR_TEMPLATE,
  VALIDATION_INVALID_CLASSES,
  VALIDATION_TARGET_SELECTOR,
  ValidationErrorComponent
} from "./chunk-KYW4FKB6.js";
import "./chunk-OALXQWG3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-XJ5KBAN7.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterOutlet
} from "./chunk-A4AOUQJ4.js";
import "./chunk-ZKYDULWF.js";
import "./chunk-7TTFZDGB.js";
import {
  AsyncPipe,
  NgClass,
  NgComponentOutlet,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-PL5KB4ZG.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  PLATFORM_ID,
  Renderer2,
  ViewChildren,
  ViewEncapsulation,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OHEE3L26.js";
import {
  fromEvent
} from "./chunk-576P5TAG.js";
import "./chunk-UQGLAMHP.js";
import {
  debounceTime,
  finalize,
  map
} from "./chunk-2K3BB2X3.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-SYKYUVZG.js";

// node_modules/@abp/ng.account.core/fesm2022/abp-ng.account.core.mjs
var _AuthWrapperService = class _AuthWrapperService {
  get enableLocalLogin$() {
    return this.configState.getSetting$("Abp.Account.EnableLocalLogin").pipe(map((value) => value?.toLowerCase() !== "false"));
  }
  get isTenantBoxVisibleForCurrentRoute() {
    return this.getMostInnerChild().data.tenantBoxVisible ?? true;
  }
  get isTenantBoxVisible() {
    return this.isTenantBoxVisibleForCurrentRoute && this.multiTenancy.isTenantBoxVisible;
  }
  constructor() {
    this.multiTenancy = inject(MultiTenancyService);
    this.configState = inject(ConfigStateService);
    this.isMultiTenancyEnabled$ = this.configState.getDeep$("multiTenancy.isEnabled");
    this.tenantBoxKey = "Account.TenantBoxComponent";
    const injector = inject(Injector);
    this.route = injector.get(ActivatedRoute);
  }
  getMostInnerChild() {
    let child = this.route.snapshot;
    let depth = 0;
    const depthLimit = 10;
    while (child.firstChild && depth < depthLimit) {
      child = child.firstChild;
      depth++;
    }
    return child;
  }
};
_AuthWrapperService.ɵfac = function AuthWrapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthWrapperService)();
};
_AuthWrapperService.ɵprov = ɵɵdefineInjectable({
  token: _AuthWrapperService,
  factory: _AuthWrapperService.ɵfac
});
var AuthWrapperService = _AuthWrapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthWrapperService, [{
    type: Injectable
  }], () => [], null);
})();
var _TenantBoxService = class _TenantBoxService {
  constructor() {
    this.toasterService = inject(ToasterService);
    this.tenantService = inject(AbpTenantService);
    this.sessionState = inject(SessionStateService);
    this.configState = inject(ConfigStateService);
    this.currentTenant$ = this.sessionState.getTenant$();
  }
  onSwitch() {
    const tenant = this.sessionState.getTenant();
    this.name = tenant?.name || "";
    this.isModalVisible = true;
  }
  save() {
    if (!this.name) {
      this.setTenant(null);
      this.isModalVisible = false;
      return;
    }
    this.modalBusy = true;
    this.tenantService.findTenantByName(this.name).pipe(finalize(() => this.modalBusy = false)).subscribe((_a) => {
      var _b = _a, {
        success,
        tenantId: id
      } = _b, tenant = __objRest(_b, [
        "success",
        "tenantId"
      ]);
      if (!success) {
        this.showError();
        return;
      }
      this.setTenant(__spreadProps(__spreadValues({}, tenant), {
        id,
        isAvailable: true
      }));
      this.isModalVisible = false;
    });
  }
  setTenant(tenant) {
    this.sessionState.setTenant(tenant);
    this.configState.refreshAppState();
  }
  showError() {
    this.toasterService.error("AbpUiMultiTenancy::GivenTenantIsNotAvailable", "AbpUi::Error", {
      messageLocalizationParams: [this.name || ""]
    });
  }
};
_TenantBoxService.ɵfac = function TenantBoxService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TenantBoxService)();
};
_TenantBoxService.ɵprov = ɵɵdefineInjectable({
  token: _TenantBoxService,
  factory: _TenantBoxService.ɵfac
});
var TenantBoxService = _TenantBoxService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantBoxService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/@abp/ng.theme.basic/fesm2022/abp-ng.theme.basic.mjs
function LogoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.logoUrl, ɵɵsanitizeUrl)("alt", ctx_r0.appName);
  }
}
function LogoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.appName, " ");
  }
}
var _c0 = ["childrenContainer"];
var _c1 = (a0) => ({
  $implicit: a0
});
var _c2 = (a0) => [a0];
function RoutesComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 9);
  }
  if (rf & 2) {
    const route_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    const defaultLink_r3 = ɵɵreference(5);
    const dropdownLink_r4 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.isDropdown(route_r1) ? dropdownLink_r4 : defaultLink_r3)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, route_r1));
  }
}
function RoutesComponent_ng_template_4_li_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 13);
  }
  if (rf & 2) {
    const route_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", route_r5.iconClass);
  }
}
function RoutesComponent_ng_template_4_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 11)(1, "a", 12);
    ɵɵconditionalCreate(2, RoutesComponent_ng_template_4_li_0_Conditional_2_Template, 1, 1, "i", 13);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLazyLocalization");
    ɵɵpipe(5, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const route_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpureFunction1(7, _c2, route_r5.path));
    ɵɵadvance();
    ɵɵconditional(route_r5.iconClass ? 2 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, ɵɵpipeBind1(4, 3, route_r5.name)), " ");
  }
}
function RoutesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoutesComponent_ng_template_4_li_0_Template, 6, 9, "li", 10);
  }
  if (rf & 2) {
    const route_r5 = ctx.$implicit;
    ɵɵproperty("abpPermission", route_r5.requiredPolicy);
  }
}
function RoutesComponent_ng_template_6_Conditional_0_li_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 13);
  }
  if (rf & 2) {
    const route_r7 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", route_r7.iconClass);
  }
}
function RoutesComponent_ng_template_6_Conditional_0_li_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function RoutesComponent_ng_template_6_Conditional_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 16);
    ɵɵlistener("click", function RoutesComponent_ng_template_6_Conditional_0_li_0_Template_li_click_0_listener() {
      ɵɵrestoreView(_r6);
      const route_r7 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.rootDropdownExpand[route_r7.name] ? ctx_r1.rootDropdownExpand[route_r7.name] = false : ctx_r1.rootDropdownExpand[route_r7.name] = true);
    });
    ɵɵelementStart(1, "a", 17);
    ɵɵconditionalCreate(2, RoutesComponent_ng_template_6_Conditional_0_li_0_Conditional_2_Template, 1, 1, "i", 13);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLazyLocalization");
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 18, 5);
    ɵɵlistener("click", function RoutesComponent_ng_template_6_Conditional_0_li_0_Template_div_click_6_listener($event) {
      ɵɵrestoreView(_r6);
      $event.preventDefault();
      return ɵɵresetView($event.stopPropagation());
    });
    ɵɵtemplate(8, RoutesComponent_ng_template_6_Conditional_0_li_0_ng_container_8_Template, 1, 0, "ng-container", 19);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const route_r7 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    const forTemplate_r8 = ɵɵreference(9);
    ɵɵadvance(2);
    ɵɵconditional(route_r7.iconClass ? 2 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 8, ɵɵpipeBind1(4, 6, route_r7.name)), " ");
    ɵɵadvance(3);
    ɵɵclassProp("d-block", ctx_r1.smallScreen && ctx_r1.rootDropdownExpand[route_r7.name]);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", forTemplate_r8)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c1, route_r7));
  }
}
function RoutesComponent_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoutesComponent_ng_template_6_Conditional_0_li_0_Template, 9, 12, "li", 15);
  }
  if (rf & 2) {
    const route_r7 = ɵɵnextContext().$implicit;
    ɵɵproperty("abpPermission", route_r7.requiredPolicy);
  }
}
function RoutesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, RoutesComponent_ng_template_6_Conditional_0_Template, 1, 1, "li", 14);
  }
  if (rf & 2) {
    const route_r7 = ctx.$implicit;
    ɵɵconditional((route_r7.children == null ? null : route_r7.children.length) ? 0 : -1);
  }
}
function RoutesComponent_ng_template_8_For_1_ng_template_0_Template(rf, ctx) {
}
function RoutesComponent_ng_template_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoutesComponent_ng_template_8_For_1_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const child_r9 = ctx.$implicit;
    ɵɵnextContext(2);
    const defaultChild_r10 = ɵɵreference(11);
    const dropdownChild_r11 = ɵɵreference(13);
    ɵɵproperty("ngTemplateOutlet", (child_r9.children == null ? null : child_r9.children.length) ? dropdownChild_r11 : defaultChild_r10)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, child_r9));
  }
}
function RoutesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, RoutesComponent_ng_template_8_For_1_Template, 1, 4, null, 9, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const route_r12 = ctx.$implicit;
    ɵɵrepeater(route_r12.children);
  }
}
function RoutesComponent_ng_template_10_Conditional_0_div_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 13);
  }
  if (rf & 2) {
    const child_r14 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", child_r14.iconClass);
  }
}
function RoutesComponent_ng_template_10_Conditional_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20)(1, "a", 22);
    ɵɵlistener("click", function RoutesComponent_ng_template_10_Conditional_0_div_0_Template_a_click_1_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.closeDropdown());
    });
    ɵɵconditionalCreate(2, RoutesComponent_ng_template_10_Conditional_0_div_0_Conditional_2_Template, 1, 1, "i", 13);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const child_r14 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpureFunction1(5, _c2, child_r14.path));
    ɵɵadvance();
    ɵɵconditional(child_r14.iconClass ? 2 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, child_r14.name));
  }
}
function RoutesComponent_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoutesComponent_ng_template_10_Conditional_0_div_0_Template, 5, 7, "div", 21);
  }
  if (rf & 2) {
    const child_r14 = ɵɵnextContext().$implicit;
    ɵɵproperty("abpPermission", child_r14.requiredPolicy);
  }
}
function RoutesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, RoutesComponent_ng_template_10_Conditional_0_Template, 1, 1, "div", 20);
  }
  if (rf & 2) {
    const child_r14 = ctx.$implicit;
    ɵɵconditional(child_r14.path ? 0 : -1);
  }
}
function RoutesComponent_ng_template_12_div_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 13);
  }
  if (rf & 2) {
    const child_r15 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", child_r15.iconClass);
  }
}
function RoutesComponent_ng_template_12_div_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function RoutesComponent_ng_template_12_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24, 6)(2, "div", 25)(3, "a", 26);
    ɵɵconditionalCreate(4, RoutesComponent_ng_template_12_div_0_Conditional_4_Template, 1, 1, "i", 13);
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 27, 7);
    ɵɵtemplate(9, RoutesComponent_ng_template_12_div_0_ng_container_9_Template, 1, 0, "ng-container", 19);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const dropdownSubmenu_r16 = ɵɵreference(1);
    const child_r15 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    const forTemplate_r8 = ɵɵreference(9);
    ɵɵproperty("autoClose", true);
    ɵɵadvance(2);
    ɵɵclassProp("dropdown-toggle", false);
    ɵɵadvance();
    ɵɵproperty("abpEllipsisEnabled", !ctx_r1.smallScreen);
    ɵɵadvance();
    ɵɵconditional(child_r15.iconClass ? 4 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 10, child_r15.name), " ");
    ɵɵadvance(2);
    ɵɵclassProp("d-block", ctx_r1.smallScreen && dropdownSubmenu_r16.isOpen());
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", forTemplate_r8)("ngTemplateOutletContext", ɵɵpureFunction1(12, _c1, child_r15));
  }
}
function RoutesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoutesComponent_ng_template_12_div_0_Template, 10, 14, "div", 23);
  }
  if (rf & 2) {
    const child_r15 = ctx.$implicit;
    ɵɵproperty("abpPermission", child_r15.requiredPolicy);
  }
}
function NavItemsComponent_Conditional_1_For_1_ng_container_0_li_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
    ɵɵpipe(1, "toInjector");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngComponentOutlet", item_r1.component)("ngComponentOutletInjector", ɵɵpipeBind1(1, 2, item_r1));
  }
}
function NavItemsComponent_Conditional_1_For_1_ng_container_0_li_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function NavItemsComponent_Conditional_1_For_1_ng_container_0_li_1_Conditional_2_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const item_r1 = ɵɵnextContext(3).$implicit;
      return ɵɵresetView(item_r1.action ? item_r1.action() : null);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("innerHTML", item_r1.html, ɵɵsanitizeHtml);
  }
}
function NavItemsComponent_Conditional_1_For_1_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 3);
    ɵɵconditionalCreate(1, NavItemsComponent_Conditional_1_For_1_ng_container_0_li_1_Conditional_1_Template, 2, 4, "ng-container", 4)(2, NavItemsComponent_Conditional_1_For_1_ng_container_0_li_1_Conditional_2_Template, 1, 1, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵconditional(item_r1.component ? 1 : 2);
  }
}
function NavItemsComponent_Conditional_1_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NavItemsComponent_Conditional_1_For_1_ng_container_0_li_1_Template, 3, 1, "li", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("abpPermission", item_r1.requiredPolicy);
  }
}
function NavItemsComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavItemsComponent_Conditional_1_For_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("abpVisible", !item_r1.visible || item_r1.visible(item_r1));
  }
}
function NavItemsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NavItemsComponent_Conditional_1_For_1_Template, 1, 1, "ng-container", null, ɵɵrepeaterTrackByIndex);
    ɵɵpipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵrepeater(ɵɵpipeBind1(2, 0, ctx_r2.navItems.items$));
  }
}
var _c3 = () => ({
  name: ""
});
function TenantBoxComponent_Conditional_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h5");
    ɵɵtext(1, "Switch Tenant");
    ɵɵelementEnd();
  }
}
function TenantBoxComponent_Conditional_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 12);
    ɵɵlistener("ngSubmit", function TenantBoxComponent_Conditional_0_ng_template_19_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.service.save());
    });
    ɵɵelementStart(1, "div", 13)(2, "div", 14)(3, "label", 15);
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(6, "input", 16);
    ɵɵtwoWayListener("ngModelChange", function TenantBoxComponent_Conditional_0_ng_template_19_Template_input_ngModelChange_6_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.service.name, $event) || (ctx_r1.service.name = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd()();
    ɵɵelementStart(7, "p");
    ɵɵtext(8);
    ɵɵpipe(9, "abpLocalization");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 3, "AbpUiMultiTenancy::Name"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r1.service.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 5, "AbpUiMultiTenancy::SwitchTenantHint"));
  }
}
function TenantBoxComponent_Conditional_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "abp-button", 18);
    ɵɵlistener("click", function TenantBoxComponent_Conditional_0_ng_template_21_Template_abp_button_click_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.service.save());
    });
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const currentTenant_r5 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpTenantManagement::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", (currentTenant_r5 == null ? null : currentTenant_r5.name) === ctx_r1.service.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 5, "AbpTenantManagement::Save"));
  }
}
function TenantBoxComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "span", 7);
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(7, "br");
    ɵɵelementStart(8, "h6", 8)(9, "i");
    ɵɵtext(10);
    ɵɵpipe(11, "abpLocalization");
    ɵɵelementEnd()()();
    ɵɵelementStart(12, "div", 9)(13, "a", 10);
    ɵɵlistener("click", function TenantBoxComponent_Conditional_0_Template_a_click_13_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.service.onSwitch());
    });
    ɵɵtext(14);
    ɵɵpipe(15, "abpLocalization");
    ɵɵelementEnd()()()()();
    ɵɵelementStart(16, "abp-modal", 11);
    ɵɵtwoWayListener("visibleChange", function TenantBoxComponent_Conditional_0_Template_abp_modal_visibleChange_16_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.service.isModalVisible, $event) || (ctx_r1.service.isModalVisible = $event);
      return ɵɵresetView($event);
    });
    ɵɵtemplate(17, TenantBoxComponent_Conditional_0_ng_template_17_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(19, TenantBoxComponent_Conditional_0_ng_template_19_Template, 10, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor)(21, TenantBoxComponent_Conditional_0_ng_template_21_Template, 7, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 5, "AbpUiMultiTenancy::Tenant"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx.name || ɵɵpipeBind1(11, 7, "AbpUiMultiTenancy::NotSelected"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(15, 9, "AbpUiMultiTenancy::Switch"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("visible", ctx_r1.service.isModalVisible);
    ɵɵproperty("busy", ctx_r1.service.modalBusy);
  }
}
var _c4 = ["*"];
var _c5 = (a0) => ({
  componentKey: a0
});
function AuthWrapperComponent_Conditional_2_abp_tenant_box_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-tenant-box");
  }
}
function AuthWrapperComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AuthWrapperComponent_Conditional_2_abp_tenant_box_0_Template, 1, 0, "abp-tenant-box", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c5, ctx_r0.service.tenantBoxKey));
  }
}
function AuthWrapperComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 6);
    ɵɵprojection(2);
    ɵɵelementEnd()();
  }
}
function AuthWrapperComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "strong");
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "AbpAccount::InvalidLoginRequest"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 4, "AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient"), " ");
  }
}
var _c6 = (a0) => ({
  "alert-dismissible fade show": a0
});
function PageAlertContainerComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "h4", 2);
    ɵɵpipe(1, "abpSafeHtml");
    ɵɵpipe(2, "abpLocalization");
  }
  if (rf & 2) {
    const alert_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind2(2, 3, ɵɵpipeBind1(1, 1, alert_r1.title), alert_r1.titleLocalizationParams), ɵɵsanitizeHtml);
  }
}
function PageAlertContainerComponent_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function PageAlertContainerComponent_For_1_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ɵ$index_1_r3 = ɵɵnextContext().$index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.service.remove(ɵ$index_1_r3));
    });
    ɵɵelementEnd();
  }
}
function PageAlertContainerComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵconditionalCreate(1, PageAlertContainerComponent_For_1_Conditional_1_Template, 3, 6, "h4", 2);
    ɵɵelement(2, "span", 3);
    ɵɵpipe(3, "abpSafeHtml");
    ɵɵpipe(4, "abpLocalization");
    ɵɵconditionalCreate(5, PageAlertContainerComponent_For_1_Conditional_5_Template, 1, 0, "button", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    ɵɵclassMap(ɵɵinterpolate1("alert alert-", alert_r1.type, " fade show"));
    ɵɵproperty("ngClass", ɵɵpureFunction1(12, _c6, alert_r1.dismissible));
    ɵɵadvance();
    ɵɵconditional(alert_r1.title ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ɵɵpipeBind2(4, 9, ɵɵpipeBind1(3, 7, alert_r1.message), alert_r1.messageLocalizationParams), ɵɵsanitizeHtml);
    ɵɵadvance(3);
    ɵɵconditional(alert_r1.dismissible ? 5 : -1);
  }
}
var _c7 = (a0) => ({
  value: a0
});
var _c8 = (a0) => ({
  smallScreen: a0
});
var _c9 = (a0, a1) => ({
  componentKey: a0,
  inputs: a1
});
function AccountLayoutComponent_abp_logo_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-logo");
  }
}
function AccountLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccountLayoutComponent_Conditional_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccountLayoutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, AccountLayoutComponent_Conditional_7_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const navigations_r3 = ɵɵreference(9);
    ɵɵproperty("@collapseWithMargin", ctx_r1.service.isCollapsed ? "collapsed" : "expanded");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", navigations_r3);
  }
}
function AccountLayoutComponent_ng_template_8_abp_routes_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-routes", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("smallScreen", ctx_r1.service.smallScreen);
  }
}
function AccountLayoutComponent_ng_template_8_abp_nav_items_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-nav-items");
  }
}
function AccountLayoutComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccountLayoutComponent_ng_template_8_abp_routes_0_Template, 1, 1, "abp-routes", 9)(1, AccountLayoutComponent_ng_template_8_abp_nav_items_1_Template, 1, 0, "abp-nav-items", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction2(6, _c9, ctx_r1.service.routesComponentKey, ɵɵpureFunction1(4, _c8, ɵɵpureFunction1(2, _c7, ctx_r1.service.smallScreen))));
    ɵɵadvance();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(9, _c5, ctx_r1.service.navItemsComponentKey));
  }
}
function AccountLayoutComponent_abp_auth_wrapper_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "abp-auth-wrapper");
    ɵɵelement(1, "router-outlet", null, 1);
    ɵɵelementEnd();
  }
}
function ApplicationLayoutComponent_abp_logo_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-logo");
  }
}
function ApplicationLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ApplicationLayoutComponent_Conditional_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ApplicationLayoutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ApplicationLayoutComponent_Conditional_7_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const navigations_r3 = ɵɵreference(9);
    ɵɵproperty("@collapseWithMargin", ctx_r1.service.isCollapsed ? "collapsed" : "expanded");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", navigations_r3);
  }
}
function ApplicationLayoutComponent_ng_template_8_abp_routes_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-routes", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("smallScreen", ctx_r1.service.smallScreen);
  }
}
function ApplicationLayoutComponent_ng_template_8_abp_nav_items_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-nav-items");
  }
}
function ApplicationLayoutComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ApplicationLayoutComponent_ng_template_8_abp_routes_0_Template, 1, 1, "abp-routes", 9)(1, ApplicationLayoutComponent_ng_template_8_abp_nav_items_1_Template, 1, 0, "abp-nav-items", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction2(6, _c9, ctx_r1.service.routesComponentKey, ɵɵpureFunction1(4, _c8, ɵɵpureFunction1(2, _c7, ctx_r1.service.smallScreen))));
    ɵɵadvance();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(9, _c5, ctx_r1.service.navItemsComponentKey));
  }
}
function CurrentUserComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small")(1, "i");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3, "\\");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx);
  }
}
function CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 8);
    ɵɵpipe(1, "toInjector");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngComponentOutlet", item_r1.component)("ngComponentOutletInjector", ɵɵpipeBind1(1, 2, item_r1));
  }
}
function CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const item_r1 = ɵɵnextContext(4).$implicit;
      return ɵɵresetView(item_r1.action ? item_r1.action() : null);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("innerHTML", item_r1.html, ɵɵsanitizeHtml);
  }
}
function CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(6).$implicit;
    ɵɵclassMap(ɵɵinterpolate1("me-1 ", item_r1.textTemplate.icon));
  }
}
function CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("click", function CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_1_Conditional_0_Template_a_click_0_listener() {
      ɵɵrestoreView(_r3);
      const item_r1 = ɵɵnextContext(5).$implicit;
      return ɵɵresetView(item_r1.action ? item_r1.action() : null);
    });
    ɵɵconditionalCreate(1, CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_1_Conditional_0_Conditional_1_Template, 1, 3, "i", 13);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(5).$implicit;
    ɵɵadvance();
    ɵɵconditional(item_r1.textTemplate.icon ? 1 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, item_r1.textTemplate.text));
  }
}
function CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_1_Conditional_0_Template, 4, 4, "a", 11);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(4).$implicit;
    ɵɵconditional(item_r1.textTemplate ? 0 : -1);
  }
}
function CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_0_Template, 1, 1, "div", 9)(1, CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵconditional(item_r1.html ? 0 : 1);
  }
}
function CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 7);
    ɵɵconditionalCreate(1, CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_1_Template, 2, 4, "ng-container", 8)(2, CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Conditional_2_Template, 2, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵconditional(item_r1.component ? 1 : 2);
  }
}
function CurrentUserComponent_Conditional_0_For_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CurrentUserComponent_Conditional_0_For_10_ng_container_0_li_1_Template, 3, 1, "li", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("abpPermission", item_r1.requiredPolicy);
  }
}
function CurrentUserComponent_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CurrentUserComponent_Conditional_0_For_10_ng_container_0_Template, 2, 1, "ng-container", 5);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("abpVisible", !item_r1.visible || item_r1.visible(item_r1));
  }
}
function CurrentUserComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1, 0)(2, "a", 3);
    ɵɵconditionalCreate(3, CurrentUserComponent_Conditional_0_Conditional_3_Template, 4, 1, "small");
    ɵɵpipe(4, "async");
    ɵɵelementStart(5, "strong");
    ɵɵtext(6);
    ɵɵpipe(7, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 4);
    ɵɵrepeaterCreate(9, CurrentUserComponent_Conditional_0_For_10_Template, 1, 1, "ng-container", null, ɵɵrepeaterTrackByIndex);
    ɵɵpipe(11, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const currentUserDropdown_r4 = ɵɵreference(1);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵconditional((tmp_2_0 = (tmp_2_0 = ɵɵpipeBind1(4, 4, ctx_r4.selectedTenant$)) == null ? null : tmp_2_0.name) ? 3 : -1, tmp_2_0);
    ɵɵadvance(3);
    ɵɵtextInterpolate((tmp_3_0 = ɵɵpipeBind1(7, 6, ctx_r4.currentUser$)) == null ? null : tmp_3_0.userName);
    ɵɵadvance(2);
    ɵɵclassProp("d-block", ctx_r4.smallScreen && currentUserDropdown_r4.isOpen());
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(11, 8, ctx_r4.userMenu.items$));
  }
}
function CurrentUserComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 14);
    ɵɵlistener("click", function CurrentUserComponent_Conditional_2_Template_a_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.navigateToLogin());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "AbpAccount::Login"), " ");
  }
}
function LanguagesComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 5);
    ɵɵlistener("click", function LanguagesComponent_Conditional_0_For_7_Template_a_click_0_listener() {
      const lang_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onChangeLang(lang_r2.cultureName || ""));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(lang_r2 == null ? null : lang_r2.displayName);
  }
}
function LanguagesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1, 0)(2, "a", 2);
    ɵɵtext(3);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 3);
    ɵɵrepeaterCreate(6, LanguagesComponent_Conditional_0_For_7_Template, 2, 1, "a", 4, ɵɵrepeaterTrackByIndex);
    ɵɵpipe(8, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const languageDropdown_r4 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, ctx_r2.defaultLanguage$), " ");
    ɵɵadvance(2);
    ɵɵclassProp("d-block", ctx_r2.smallScreen && languageDropdown_r4.isOpen());
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(8, 5, ctx_r2.dropdownLanguages$));
  }
}
function ValidationErrorComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, error_r1.message, error_r1.interpoliteParams), " ");
  }
}
var _LayoutService = class _LayoutService {
  constructor() {
    this.subscription = inject(SubscriptionService);
    this.cdRef = inject(ChangeDetectorRef);
    this.document = inject(DOCUMENT);
    this.isCollapsed = true;
    this.logoComponentKey = "Theme.LogoComponent";
    this.routesComponentKey = "Theme.RoutesComponent";
    this.navItemsComponentKey = "Theme.NavItemsComponent";
    const subscription = this.subscription;
    const routerEvents = inject(RouterEvents);
    subscription.addOne(routerEvents.getNavigationEvents("End"), () => {
      this.isCollapsed = true;
    });
  }
  checkWindowWidth() {
    const isSmallScreen = this.document.defaultView.innerWidth < 992;
    if (isSmallScreen && this.smallScreen === false) {
      this.isCollapsed = false;
      setTimeout(() => {
        this.isCollapsed = true;
      }, 100);
    }
    this.smallScreen = isSmallScreen;
    this.cdRef.detectChanges();
  }
  subscribeWindowSize() {
    this.checkWindowWidth();
    const resize$ = fromEvent(this.document.defaultView, "resize").pipe(debounceTime(150));
    this.subscription.addOne(resize$, () => this.checkWindowWidth());
  }
};
_LayoutService.ɵfac = function LayoutService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LayoutService)();
};
_LayoutService.ɵprov = ɵɵdefineInjectable({
  token: _LayoutService,
  factory: _LayoutService.ɵfac
});
var LayoutService = _LayoutService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable
  }], () => [], null);
})();
var _LogoComponent = class _LogoComponent {
  constructor() {
    this.environment = inject(EnvironmentService);
    this.providedLogoUrl = inject(LOGO_URL_TOKEN, {
      optional: true
    });
    this.providedAppName = inject(LOGO_APP_NAME_TOKEN, {
      optional: true
    });
  }
  get logoUrl() {
    return this.providedLogoUrl ?? this.environment.getEnvironment().application?.logoUrl;
  }
  get appName() {
    return this.providedAppName ?? this.environment.getEnvironment().application?.name;
  }
};
_LogoComponent.ɵfac = function LogoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LogoComponent)();
};
_LogoComponent.ɵcmp = ɵɵdefineComponent({
  type: _LogoComponent,
  selectors: [["abp-logo"]],
  decls: 3,
  vars: 1,
  consts: [["routerLink", "/", 1, "navbar-brand"], ["width", "100%", "height", "auto", 3, "src", "alt"]],
  template: function LogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "a", 0);
      ɵɵconditionalCreate(1, LogoComponent_Conditional_1_Template, 1, 2, "img", 1)(2, LogoComponent_Conditional_2_Template, 1, 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(ctx.logoUrl ? 1 : 2);
    }
  },
  dependencies: [RouterLink],
  encapsulation: 2
});
var LogoComponent = _LogoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoComponent, [{
    type: Component,
    args: [{
      selector: "abp-logo",
      template: `
    <a class="navbar-brand" routerLink="/">
      @if (logoUrl) {
        <img [src]="logoUrl" [alt]="appName" width="100%" height="auto" />
      } @else {
        {{ appName }}
      }
    </a>
  `,
      standalone: true,
      imports: [RouterLink]
    }]
  }], null, null);
})();
var _RoutesComponent = class _RoutesComponent {
  constructor() {
    this.routesService = inject(RoutesService);
    this.renderer = inject(Renderer2);
    this.rootDropdownExpand = {};
    this.trackByFn = (_, item) => item.name;
  }
  isDropdown(node) {
    return !node?.isLeaf || this.routesService.hasChildren(node.name);
  }
  closeDropdown() {
    this.childrenContainers.forEach(({
      nativeElement
    }) => {
      this.renderer.addClass(nativeElement, "d-none");
      setTimeout(() => this.renderer.removeClass(nativeElement, "d-none"), 0);
    });
  }
};
_RoutesComponent.ɵfac = function RoutesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoutesComponent)();
};
_RoutesComponent.ɵcmp = ɵɵdefineComponent({
  type: _RoutesComponent,
  selectors: [["abp-routes"]],
  viewQuery: function RoutesComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childrenContainers = _t);
    }
  },
  inputs: {
    smallScreen: "smallScreen"
  },
  decls: 14,
  vars: 2,
  consts: [["defaultLink", ""], ["dropdownLink", ""], ["forTemplate", ""], ["defaultChild", ""], ["dropdownChild", ""], ["routeContainer", ""], ["dropdownSubmenu", "ngbDropdown"], ["childrenContainer", ""], [1, "navbar-nav"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "nav-item", 4, "abpPermission"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [3, "ngClass"], ["display", "static", 1, "nav-item", "dropdown"], ["class", "nav-item dropdown", "display", "static", 3, "click", 4, "abpPermission"], ["display", "static", 1, "nav-item", "dropdown", 3, "click"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "href", "javascript:void(0)", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu", "border-0", "shadow-sm", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dropdown-submenu"], ["class", "dropdown-submenu", 4, "abpPermission"], [1, "dropdown-item", 3, "click", "routerLink"], ["class", "dropdown-submenu", "ngbDropdown", "", "placement", "right-top", 3, "autoClose", 4, "abpPermission"], ["ngbDropdown", "", "placement", "right-top", 1, "dropdown-submenu", 3, "autoClose"], ["ngbDropdownToggle", ""], ["abpEllipsis", "210px", "role", "button", 1, "btn", "d-block", "text-start", "dropdown-toggle", 3, "abpEllipsisEnabled"], [1, "dropdown-menu", "dropdown-menu-start", "border-0", "shadow-sm"]],
  template: function RoutesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ul", 8);
      ɵɵrepeaterCreate(1, RoutesComponent_For_2_Template, 1, 4, "ng-container", 9, ɵɵrepeaterTrackByIndex);
      ɵɵpipe(3, "async");
      ɵɵtemplate(4, RoutesComponent_ng_template_4_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(6, RoutesComponent_ng_template_6_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(8, RoutesComponent_ng_template_8_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor)(10, RoutesComponent_ng_template_10_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor)(12, RoutesComponent_ng_template_12_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx.routesService.visible$));
    }
  },
  dependencies: [NgTemplateOutlet, NgClass, AsyncPipe, RouterLink, NgbDropdownModule, NgbDropdown, NgbDropdownToggle, LazyLocalizationPipe, PermissionDirective, EllipsisDirective, LocalizationPipe],
  encapsulation: 2
});
var RoutesComponent = _RoutesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutesComponent, [{
    type: Component,
    args: [{
      selector: "abp-routes",
      imports: [NgTemplateOutlet, NgClass, AsyncPipe, RouterLink, NgbDropdownModule, LazyLocalizationPipe, PermissionDirective, EllipsisDirective, LocalizationPipe],
      template: '<ul class="navbar-nav">\r\n  @for (route of routesService.visible$ | async; track $index) {\r\n    <ng-container\r\n      [ngTemplateOutlet]="isDropdown(route) ? dropdownLink : defaultLink"\r\n      [ngTemplateOutletContext]="{ $implicit: route }"\r\n    />\r\n  }\r\n\r\n  <ng-template #defaultLink let-route>\r\n    <li class="nav-item" *abpPermission="route.requiredPolicy">\r\n      <a class="nav-link" [routerLink]="[route.path]">\r\n        @if (route.iconClass) {\r\n          <i [ngClass]="route.iconClass"></i>\r\n        }\r\n        {{ route.name | abpLazyLocalization | async }}\r\n      </a>\r\n    </li>\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownLink let-route>\r\n    @if (route.children?.length) {\r\n      <li\r\n        class="nav-item dropdown"\r\n        display="static"\r\n        *abpPermission="route.requiredPolicy"\r\n        (click)="\r\n          rootDropdownExpand[route.name]\r\n            ? (rootDropdownExpand[route.name] = false)\r\n            : (rootDropdownExpand[route.name] = true)\r\n        "\r\n      >\r\n        <a\r\n          class="nav-link dropdown-toggle"\r\n          data-toggle="dropdown"\r\n          aria-haspopup="true"\r\n          aria-expanded="false"\r\n          href="javascript:void(0)"\r\n        >\r\n          @if (route.iconClass) {\r\n            <i [ngClass]="route.iconClass"></i>\r\n          }\r\n          {{ route.name | abpLazyLocalization | async }}\r\n        </a>\r\n        <div\r\n          #routeContainer\r\n          class="dropdown-menu border-0 shadow-sm"\r\n          (click)="$event.preventDefault(); $event.stopPropagation()"\r\n          [class.d-block]="smallScreen && rootDropdownExpand[route.name]"\r\n        >\r\n          <ng-container *ngTemplateOutlet="forTemplate; context: { $implicit: route }" />\r\n        </div>\r\n      </li>\r\n    }\r\n  </ng-template>\r\n\r\n  <ng-template #forTemplate let-route>\r\n    @for (child of route.children; track $index) {\r\n      <ng-template\r\n        [ngTemplateOutlet]="child.children?.length ? dropdownChild : defaultChild"\r\n        [ngTemplateOutletContext]="{ $implicit: child }"\r\n      />\r\n    }\r\n  </ng-template>\r\n\r\n  <ng-template #defaultChild let-child>\r\n    @if (child.path) {\r\n      <div class="dropdown-submenu" *abpPermission="child.requiredPolicy">\r\n        <a class="dropdown-item" [routerLink]="[child.path]" (click)="closeDropdown()">\r\n          @if (child.iconClass) {\r\n            <i [ngClass]="child.iconClass"></i>\r\n          }\r\n          {{ child.name | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    }\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownChild let-child>\r\n    <div\r\n      class="dropdown-submenu"\r\n      ngbDropdown\r\n      #dropdownSubmenu="ngbDropdown"\r\n      placement="right-top"\r\n      [autoClose]="true"\r\n      *abpPermission="child.requiredPolicy"\r\n    >\r\n      <div ngbDropdownToggle [class.dropdown-toggle]="false">\r\n        <a\r\n          abpEllipsis="210px"\r\n          [abpEllipsisEnabled]="!smallScreen"\r\n          role="button"\r\n          class="btn d-block text-start dropdown-toggle"\r\n        >\r\n          @if (child.iconClass) {\r\n            <i [ngClass]="child.iconClass"></i>\r\n          }\r\n          {{ child.name | abpLocalization }}\r\n        </a>\r\n      </div>\r\n      <div\r\n        #childrenContainer\r\n        class="dropdown-menu dropdown-menu-start border-0 shadow-sm"\r\n        [class.d-block]="smallScreen && dropdownSubmenu.isOpen()"\r\n      >\r\n        <ng-container *ngTemplateOutlet="forTemplate; context: { $implicit: child }" />\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ul>\r\n'
    }]
  }], null, {
    smallScreen: [{
      type: Input
    }],
    childrenContainers: [{
      type: ViewChildren,
      args: ["childrenContainer"]
    }]
  });
})();
var _NavItemsComponent = class _NavItemsComponent {
  constructor() {
    this.navItems = inject(NavItemsService);
    this.platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.trackByFn = (_, element) => element.id;
  }
};
_NavItemsComponent.ɵfac = function NavItemsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavItemsComponent)();
};
_NavItemsComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavItemsComponent,
  selectors: [["abp-nav-items"]],
  decls: 2,
  vars: 1,
  consts: [[1, "navbar-nav"], [4, "abpVisible"], ["class", "nav-item d-flex align-items-center", 4, "abpPermission"], [1, "nav-item", "d-flex", "align-items-center"], [3, "ngComponentOutlet", "ngComponentOutletInjector"], [3, "innerHTML"], [3, "click", "innerHTML"]],
  template: function NavItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ul", 0);
      ɵɵconditionalCreate(1, NavItemsComponent_Conditional_1_Template, 3, 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(ctx.isBrowser ? 1 : -1);
    }
  },
  dependencies: [NgComponentOutlet, AsyncPipe, AbpVisibleDirective, PermissionDirective, ToInjectorPipe],
  encapsulation: 2
});
var NavItemsComponent = _NavItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavItemsComponent, [{
    type: Component,
    args: [{
      selector: "abp-nav-items",
      imports: [NgComponentOutlet, AsyncPipe, AbpVisibleDirective, PermissionDirective, ToInjectorPipe],
      template: '<ul class="navbar-nav">\r\n  @if (isBrowser) {\r\n    @for (item of navItems.items$ | async; track $index) {\r\n      <ng-container *abpVisible="!item.visible || item.visible(item)">\r\n        <li class="nav-item d-flex align-items-center" *abpPermission="item.requiredPolicy">\r\n          @if (item.component) {\r\n            <ng-container\r\n              [ngComponentOutlet]="item.component"\r\n              [ngComponentOutletInjector]="item | toInjector"\r\n            ></ng-container>\r\n          } @else {\r\n            <div [innerHTML]="item.html" (click)="item.action ? item.action() : null"></div>\r\n          }\r\n        </li>\r\n      </ng-container>\r\n    }\r\n  }\r\n</ul>\r\n'
    }]
  }], null, null);
})();
var _TenantBoxComponent = class _TenantBoxComponent {
  constructor() {
    this.service = inject(TenantBoxService);
  }
};
_TenantBoxComponent.ɵfac = function TenantBoxComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TenantBoxComponent)();
};
_TenantBoxComponent.ɵcmp = ɵɵdefineComponent({
  type: _TenantBoxComponent,
  selectors: [["abp-tenant-box"]],
  features: [ɵɵProvidersFeature([TenantBoxService])],
  decls: 2,
  vars: 4,
  consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [1, "card", "shadow-sm", "rounded", "mb-3"], [1, "card-body", "px-5"], [1, "row"], [1, "col"], [1, "text-uppercase", "text-muted", 2, "font-size", "0.8em"], [1, "m-0", "d-inline-block"], [1, "col-auto"], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", 1, "btn", "btn-sm", "mt-3", "btn-outline-primary", 3, "click"], [3, "visibleChange", "visible", "busy"], [3, "ngSubmit"], [1, "mt-2"], [1, "mb-3", "form-group"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "name", "tenant", "autofocus", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["abpClose", "", "type", "button", 1, "btn", "btn-outline-primary"], ["type", "abp-button", "iconClass", "fa fa-check", 3, "click", "disabled"]],
  template: function TenantBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, TenantBoxComponent_Conditional_0_Template, 23, 11);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.service.currentTenant$) || ɵɵpureFunction0(3, _c3)) ? 0 : -1, tmp_0_0);
    }
  },
  dependencies: [AsyncPipe, FormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, ModalComponent, LocalizationPipe, ButtonComponent, ModalCloseDirective],
  encapsulation: 2
});
var TenantBoxComponent = _TenantBoxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantBoxComponent, [{
    type: Component,
    args: [{
      selector: "abp-tenant-box",
      providers: [TenantBoxService],
      imports: [AsyncPipe, FormsModule, ModalComponent, LocalizationPipe, ButtonComponent, ModalCloseDirective],
      template: `@if ((service.currentTenant$ | async) || { name: '' }; as currentTenant) {\r
  <div class="card shadow-sm rounded mb-3">\r
    <div class="card-body px-5">\r
      <div class="row">\r
        <div class="col">\r
          <span style="font-size: 0.8em" class="text-uppercase text-muted">{{\r
            'AbpUiMultiTenancy::Tenant' | abpLocalization\r
          }}</span\r
          ><br />\r
          <h6 class="m-0 d-inline-block">\r
            <i>{{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}</i>\r
          </h6>\r
        </div>\r
        <div class="col-auto">\r
          <a\r
            id="AbpTenantSwitchLink"\r
            href="javascript:void(0);"\r
            class="btn btn-sm mt-3 btn-outline-primary"\r
            (click)="service.onSwitch()"\r
            >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r
          >\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <abp-modal [(visible)]="service.isModalVisible" [busy]="service.modalBusy">\r
    <ng-template #abpHeader>\r
      <h5>Switch Tenant</h5>\r
    </ng-template>\r
    <ng-template #abpBody>\r
      <form (ngSubmit)="service.save()">\r
        <div class="mt-2">\r
          <div class="mb-3 form-group">\r
            <label for="name" class="form-label">{{\r
              'AbpUiMultiTenancy::Name' | abpLocalization\r
            }}</label>\r
            <input\r
              [(ngModel)]="service.name"\r
              type="text"\r
              id="name"\r
              name="tenant"\r
              class="form-control"\r
              autofocus\r
            />\r
          </div>\r
          <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r
        </div>\r
      </form>\r
    </ng-template>\r
    <ng-template #abpFooter>\r
      <button abpClose type="button" class="btn btn-outline-primary">\r
        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r
      </button>\r
      <abp-button\r
        type="abp-button"\r
        iconClass="fa fa-check"\r
        (click)="service.save()"\r
        [disabled]="currentTenant?.name === service.name"\r
      >\r
        <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r
      </abp-button>\r
    </ng-template>\r
  </abp-modal>\r
}\r
`
    }]
  }], null, null);
})();
var _AuthWrapperComponent = class _AuthWrapperComponent {
  constructor() {
    this.service = inject(AuthWrapperService);
  }
};
_AuthWrapperComponent.ɵfac = function AuthWrapperComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthWrapperComponent)();
};
_AuthWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: _AuthWrapperComponent,
  selectors: [["abp-auth-wrapper"]],
  features: [ɵɵProvidersFeature([AuthWrapperService])],
  ngContentSelectors: _c4,
  decls: 8,
  vars: 6,
  consts: [[1, "row"], [1, "mx-auto", "col", "col-md-5"], [1, "abp-account-container"], [1, "card", "mt-3", "shadow-sm", "rounded"], [1, "alert", "alert-warning"], [4, "abpReplaceableTemplate"], [1, "card-body", "p-5"]],
  template: function AuthWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵconditionalCreate(2, AuthWrapperComponent_Conditional_2_Template, 1, 3, "abp-tenant-box");
      ɵɵpipe(3, "async");
      ɵɵelementStart(4, "div", 2);
      ɵɵconditionalCreate(5, AuthWrapperComponent_Conditional_5_Template, 3, 0, "div", 3);
      ɵɵpipe(6, "async");
      ɵɵconditionalBranchCreate(7, AuthWrapperComponent_Conditional_7_Template, 6, 6, "div", 4);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵconditional(ɵɵpipeBind1(3, 2, ctx.service.isMultiTenancyEnabled$) && ctx.service.isTenantBoxVisible ? 2 : -1);
      ɵɵadvance(3);
      ɵɵconditional(ɵɵpipeBind1(6, 4, ctx.service.enableLocalLogin$) ? 5 : 7);
    }
  },
  dependencies: [AsyncPipe, TenantBoxComponent, ReplaceableTemplateDirective, LocalizationPipe],
  encapsulation: 2
});
var AuthWrapperComponent = _AuthWrapperComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthWrapperComponent, [{
    type: Component,
    args: [{
      selector: "abp-auth-wrapper",
      providers: [AuthWrapperService],
      imports: [AsyncPipe, TenantBoxComponent, ReplaceableTemplateDirective, LocalizationPipe],
      template: `<div class="row">\r
  <div class="mx-auto col col-md-5">\r
    @if ((service.isMultiTenancyEnabled$ | async) && service.isTenantBoxVisible) {\r
      <abp-tenant-box\r
        *abpReplaceableTemplate="{ componentKey: service.tenantBoxKey }"\r
      ></abp-tenant-box>\r
    }\r
\r
    <div class="abp-account-container">\r
      @if (service.enableLocalLogin$ | async) {\r
        <div class="card mt-3 shadow-sm rounded">\r
          <div class="card-body p-5">\r
            <ng-content></ng-content>\r
          </div>\r
        </div>\r
      } @else {\r
        <div class="alert alert-warning">\r
          <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r
          {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</div>\r
`
    }]
  }], null, null);
})();
var _PageAlertContainerComponent = class _PageAlertContainerComponent {
  constructor() {
    this.service = inject(PageAlertService);
  }
};
_PageAlertContainerComponent.ɵfac = function PageAlertContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageAlertContainerComponent)();
};
_PageAlertContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageAlertContainerComponent,
  selectors: [["abp-page-alert-container"]],
  decls: 3,
  vars: 2,
  consts: [["role", "alert", 3, "class", "ngClass"], ["role", "alert", 3, "ngClass"], [1, "alert-heading", 3, "innerHTML"], [3, "innerHTML"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "btn-close", 3, "click"]],
  template: function PageAlertContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵrepeaterCreate(0, PageAlertContainerComponent_For_1_Template, 6, 14, "div", 0, ɵɵrepeaterTrackByIndex);
      ɵɵpipe(2, "async");
    }
    if (rf & 2) {
      ɵɵrepeater(ɵɵpipeBind1(2, 0, ctx.service.alerts$));
    }
  },
  dependencies: [NgClass, AsyncPipe, LocalizationPipe, SafeHtmlPipe],
  encapsulation: 2
});
var PageAlertContainerComponent = _PageAlertContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageAlertContainerComponent, [{
    type: Component,
    args: [{
      selector: "abp-page-alert-container",
      encapsulation: ViewEncapsulation.None,
      imports: [NgClass, AsyncPipe, LocalizationPipe, SafeHtmlPipe],
      template: `@for (alert of service.alerts$ | async; track i; let i = $index) {\r
  <div\r
    class="alert alert-{{ alert.type }} fade show"\r
    [ngClass]="{ 'alert-dismissible fade show': alert.dismissible }"\r
    role="alert"\r
  >\r
    @if (alert.title) {\r
      <h4\r
        class="alert-heading"\r
        [innerHTML]="alert.title | abpSafeHtml | abpLocalization: alert.titleLocalizationParams"\r
      ></h4>\r
    }\r
    <span\r
      [innerHTML]="alert.message | abpSafeHtml | abpLocalization: alert.messageLocalizationParams"\r
    ></span>\r
    @if (alert.dismissible) {\r
      <button\r
        type="button"\r
        class="btn-close"\r
        data-dismiss="alert"\r
        aria-label="Close"\r
        (click)="service.remove(i)"\r
      ></button>\r
    }\r
  </div>\r
}\r
`
    }]
  }], null, null);
})();
var _AccountLayoutComponent = class _AccountLayoutComponent {
  constructor() {
    this.service = inject(LayoutService);
    this.authWrapperKey = "Account.AuthWrapperComponent";
  }
  ngAfterViewInit() {
    this.service.subscribeWindowSize();
  }
};
_AccountLayoutComponent.type = "account";
_AccountLayoutComponent.ɵfac = function AccountLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccountLayoutComponent)();
};
_AccountLayoutComponent.ɵcmp = ɵɵdefineComponent({
  type: _AccountLayoutComponent,
  selectors: [["abp-layout-account"]],
  features: [ɵɵProvidersFeature([LayoutService, SubscriptionService])],
  decls: 13,
  vars: 11,
  consts: [["navigations", ""], ["outlet", "outlet"], ["id", "main-navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "shadow-sm", "flex-column", "flex-md-row", "mb-4", 2, "min-height", "4rem"], [1, "container"], [4, "abpReplaceableTemplate"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "main-navbar-collapse", 1, "navbar-collapse"], [4, "ngTemplateOutlet"], ["class", "mx-auto", 3, "smallScreen", 4, "abpReplaceableTemplate"], [1, "mx-auto", 3, "smallScreen"]],
  template: function AccountLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "nav", 2)(1, "div", 3);
      ɵɵtemplate(2, AccountLayoutComponent_abp_logo_2_Template, 1, 0, "abp-logo", 4);
      ɵɵelementStart(3, "button", 5);
      ɵɵlistener("click", function AccountLayoutComponent_Template_button_click_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.service.isCollapsed = !ctx.service.isCollapsed);
      });
      ɵɵelement(4, "span", 6);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 7);
      ɵɵtemplate(6, AccountLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 8);
      ɵɵconditionalCreate(7, AccountLayoutComponent_Conditional_7_Template, 2, 2, "div");
      ɵɵtemplate(8, AccountLayoutComponent_ng_template_8_Template, 2, 11, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementEnd()()();
      ɵɵelementStart(10, "div", 3);
      ɵɵelement(11, "abp-page-alert-container");
      ɵɵtemplate(12, AccountLayoutComponent_abp_auth_wrapper_12_Template, 3, 0, "abp-auth-wrapper", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const navigations_r3 = ɵɵreference(9);
      ɵɵadvance(2);
      ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(7, _c5, ctx.service.logoComponentKey));
      ɵɵadvance();
      ɵɵattribute("aria-expanded", !ctx.service.isCollapsed);
      ɵɵadvance(2);
      ɵɵclassProp("overflow-hidden", ctx.service.smallScreen);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", !ctx.service.smallScreen ? navigations_r3 : null);
      ɵɵadvance();
      ɵɵconditional(ctx.service.smallScreen ? 7 : -1);
      ɵɵadvance(5);
      ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(9, _c5, ctx.authWrapperKey));
    }
  },
  dependencies: [NgTemplateOutlet, LogoComponent, RoutesComponent, NavItemsComponent, AuthWrapperComponent, PageAlertContainerComponent, ReplaceableTemplateDirective, RouterOutlet],
  encapsulation: 2,
  data: {
    animation: [collapseWithMargin]
  }
});
var AccountLayoutComponent = _AccountLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountLayoutComponent, [{
    type: Component,
    args: [{
      selector: "abp-layout-account",
      animations: [collapseWithMargin],
      providers: [LayoutService, SubscriptionService],
      imports: [NgTemplateOutlet, LogoComponent, RoutesComponent, NavItemsComponent, AuthWrapperComponent, PageAlertContainerComponent, ReplaceableTemplateDirective, RouterOutlet],
      template: `<nav\r
  class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4"\r
  id="main-navbar"\r
  style="min-height: 4rem"\r
>\r
  <div class="container">\r
    <abp-logo *abpReplaceableTemplate="{ componentKey: service.logoComponentKey }"></abp-logo>\r
    <button\r
      class="navbar-toggler"\r
      type="button"\r
      [attr.aria-expanded]="!service.isCollapsed"\r
      (click)="service.isCollapsed = !service.isCollapsed"\r
    >\r
      <span class="navbar-toggler-icon"></span>\r
    </button>\r
    <div\r
      class="navbar-collapse"\r
      [class.overflow-hidden]="service.smallScreen"\r
      id="main-navbar-collapse"\r
    >\r
      <ng-container *ngTemplateOutlet="!service.smallScreen ? navigations : null"></ng-container>\r
\r
      @if (service.smallScreen) {\r
        <div\r
          [@collapseWithMargin]="service.isCollapsed ? 'collapsed' : 'expanded'"\r
        >\r
          <ng-container *ngTemplateOutlet="navigations"></ng-container>\r
        </div>\r
      }\r
\r
      <ng-template #navigations>\r
        <abp-routes\r
          *abpReplaceableTemplate="{\r
            componentKey: service.routesComponentKey,\r
            inputs: {\r
              smallScreen: { value: service.smallScreen }\r
            }\r
          }"\r
          class="mx-auto"\r
          [smallScreen]="service.smallScreen"\r
        ></abp-routes>\r
\r
        <abp-nav-items\r
          *abpReplaceableTemplate="{\r
            componentKey: service.navItemsComponentKey\r
          }"\r
        ></abp-nav-items>\r
      </ng-template>\r
    </div>\r
  </div>\r
</nav>\r
\r
<!-- [@slideFromBottom]="outlet.isActivated && outlet.activatedRoute?.routeConfig?.path" TODO: throws ExpressionChangedAfterItHasBeenCheck when animation is active. It should be fixed -->\r
<div class="container">\r
  <abp-page-alert-container></abp-page-alert-container>\r
  <abp-auth-wrapper\r
    *abpReplaceableTemplate="{\r
      componentKey: authWrapperKey\r
    }"\r
  >\r
    <router-outlet #outlet="outlet"></router-outlet>\r
  </abp-auth-wrapper>\r
</div>\r
`
    }]
  }], null, null);
})();
var _ApplicationLayoutComponent = class _ApplicationLayoutComponent {
  constructor() {
    this.service = inject(LayoutService);
  }
  ngAfterViewInit() {
    this.service.subscribeWindowSize();
  }
};
_ApplicationLayoutComponent.type = "application";
_ApplicationLayoutComponent.ɵfac = function ApplicationLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApplicationLayoutComponent)();
};
_ApplicationLayoutComponent.ɵcmp = ɵɵdefineComponent({
  type: _ApplicationLayoutComponent,
  selectors: [["abp-layout-application"]],
  features: [ɵɵProvidersFeature([LayoutService, SubscriptionService])],
  decls: 14,
  vars: 8,
  consts: [["navigations", ""], ["outlet", "outlet"], ["id", "main-navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "shadow-sm", "flex-column", "flex-md-row", "mb-4", 2, "min-height", "4rem"], [1, "container"], [4, "abpReplaceableTemplate"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "main-navbar-collapse", 1, "navbar-collapse"], [4, "ngTemplateOutlet"], ["class", "mx-auto", 3, "smallScreen", 4, "abpReplaceableTemplate"], [1, "mx-auto", 3, "smallScreen"]],
  template: function ApplicationLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "nav", 2)(1, "div", 3);
      ɵɵtemplate(2, ApplicationLayoutComponent_abp_logo_2_Template, 1, 0, "abp-logo", 4);
      ɵɵelementStart(3, "button", 5);
      ɵɵlistener("click", function ApplicationLayoutComponent_Template_button_click_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.service.isCollapsed = !ctx.service.isCollapsed);
      });
      ɵɵelement(4, "span", 6);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 7);
      ɵɵtemplate(6, ApplicationLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 8);
      ɵɵconditionalCreate(7, ApplicationLayoutComponent_Conditional_7_Template, 2, 2, "div");
      ɵɵtemplate(8, ApplicationLayoutComponent_ng_template_8_Template, 2, 11, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementEnd()()();
      ɵɵelementStart(10, "div", 3);
      ɵɵelement(11, "abp-page-alert-container")(12, "router-outlet", null, 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const navigations_r3 = ɵɵreference(9);
      ɵɵadvance(2);
      ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(6, _c5, ctx.service.logoComponentKey));
      ɵɵadvance();
      ɵɵattribute("aria-expanded", !ctx.service.isCollapsed);
      ɵɵadvance(2);
      ɵɵclassProp("overflow-hidden", ctx.service.smallScreen);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", !ctx.service.smallScreen ? navigations_r3 : null);
      ɵɵadvance();
      ɵɵconditional(ctx.service.smallScreen ? 7 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, LogoComponent, PageAlertContainerComponent, RoutesComponent, NavItemsComponent, ReplaceableTemplateDirective, RouterOutlet],
  encapsulation: 2,
  data: {
    animation: [slideFromBottom, collapseWithMargin]
  }
});
var ApplicationLayoutComponent = _ApplicationLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationLayoutComponent, [{
    type: Component,
    args: [{
      selector: "abp-layout-application",
      animations: [slideFromBottom, collapseWithMargin],
      providers: [LayoutService, SubscriptionService],
      imports: [NgTemplateOutlet, LogoComponent, PageAlertContainerComponent, RoutesComponent, NavItemsComponent, ReplaceableTemplateDirective, RouterOutlet],
      template: `<nav\r
  class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4"\r
  id="main-navbar"\r
  style="min-height: 4rem"\r
>\r
  <div class="container">\r
    <abp-logo *abpReplaceableTemplate="{ componentKey: service.logoComponentKey }"></abp-logo>\r
    <button\r
      class="navbar-toggler"\r
      type="button"\r
      [attr.aria-expanded]="!service.isCollapsed"\r
      (click)="service.isCollapsed = !service.isCollapsed"\r
    >\r
      <span class="navbar-toggler-icon"></span>\r
    </button>\r
    <div\r
      class="navbar-collapse"\r
      [class.overflow-hidden]="service.smallScreen"\r
      id="main-navbar-collapse"\r
    >\r
      <ng-container *ngTemplateOutlet="!service.smallScreen ? navigations : null"></ng-container>\r
\r
      @if (service.smallScreen) {\r
        <div [@collapseWithMargin]="service.isCollapsed ? 'collapsed' : 'expanded'">\r
          <ng-container *ngTemplateOutlet="navigations"></ng-container>\r
        </div>\r
      }\r
\r
      <ng-template #navigations>\r
        <abp-routes\r
          *abpReplaceableTemplate="{\r
            componentKey: service.routesComponentKey,\r
            inputs: {\r
              smallScreen: { value: service.smallScreen }\r
            }\r
          }"\r
          class="mx-auto"\r
          [smallScreen]="service.smallScreen"\r
        ></abp-routes>\r
\r
        <abp-nav-items\r
          *abpReplaceableTemplate="{\r
            componentKey: service.navItemsComponentKey\r
          }"\r
        ></abp-nav-items>\r
      </ng-template>\r
    </div>\r
  </div>\r
</nav>\r
\r
<!-- [@slideFromBottom]="outlet.isActivated && outlet.activatedRoute?.routeConfig?.path" TODO: throws ExpressionChangedAfterItHasBeenCheck when animation is active. It should be fixed -->\r
<div class="container">\r
  <abp-page-alert-container></abp-page-alert-container>\r
\r
  <router-outlet #outlet="outlet"></router-outlet>\r
</div>\r
`
    }]
  }], null, null);
})();
var _EmptyLayoutComponent = class _EmptyLayoutComponent {
};
_EmptyLayoutComponent.type = "empty";
_EmptyLayoutComponent.ɵfac = function EmptyLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmptyLayoutComponent)();
};
_EmptyLayoutComponent.ɵcmp = ɵɵdefineComponent({
  type: _EmptyLayoutComponent,
  selectors: [["abp-layout-empty"]],
  decls: 1,
  vars: 0,
  template: function EmptyLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "router-outlet");
    }
  },
  dependencies: [RouterOutlet],
  encapsulation: 2
});
var EmptyLayoutComponent = _EmptyLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmptyLayoutComponent, [{
    type: Component,
    args: [{
      selector: "abp-layout-empty",
      template: ` <router-outlet></router-outlet> `,
      imports: [RouterOutlet]
    }]
  }], null, null);
})();
var _CurrentUserComponent = class _CurrentUserComponent {
  constructor() {
    this.navigateToManageProfile = inject(NAVIGATE_TO_MANAGE_PROFILE);
    this.userMenu = inject(UserMenuService);
    this.authService = inject(AuthService);
    this.configState = inject(ConfigStateService);
    this.sessionState = inject(SessionStateService);
    this.document = inject(DOCUMENT);
    this.currentUser$ = this.configState.getOne$("currentUser");
    this.selectedTenant$ = this.sessionState.getTenant$();
    this.trackByFn = (_, element) => element.id;
  }
  get smallScreen() {
    return this.document.defaultView?.innerWidth < 992;
  }
  navigateToLogin() {
    this.authService.navigateToLogin();
  }
  logout() {
    this.authService.logout().subscribe();
  }
};
_CurrentUserComponent.ɵfac = function CurrentUserComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CurrentUserComponent)();
};
_CurrentUserComponent.ɵcmp = ɵɵdefineComponent({
  type: _CurrentUserComponent,
  selectors: [["abp-current-user"]],
  decls: 3,
  vars: 3,
  consts: [["currentUserDropdown", "ngbDropdown"], ["ngbDropdown", "", "display", "static", 1, "dropdown"], ["role", "button", 1, "nav-link", "pointer"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-end", "border-0", "shadow-sm"], [4, "abpVisible"], ["class", "nav-item d-flex align-items-center", 4, "abpPermission"], [1, "nav-item", "d-flex", "align-items-center"], [3, "ngComponentOutlet", "ngComponentOutletInjector"], [3, "innerHTML"], [3, "click", "innerHTML"], [1, "dropdown-item", "pointer"], [1, "dropdown-item", "pointer", 3, "click"], [3, "class"], ["role", "button", 1, "nav-link", "pointer", 3, "click"]],
  template: function CurrentUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, CurrentUserComponent_Conditional_0_Template, 12, 10, "div", 1);
      ɵɵpipe(1, "async");
      ɵɵconditionalBranchCreate(2, CurrentUserComponent_Conditional_2_Template, 3, 3, "a", 2);
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵconditional(((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.currentUser$)) == null ? null : tmp_0_0.isAuthenticated) ? 0 : 2);
    }
  },
  dependencies: [NgComponentOutlet, AsyncPipe, NgbDropdownModule, NgbDropdown, NgbDropdownToggle, AbpVisibleDirective, PermissionDirective, ToInjectorPipe, LocalizationPipe],
  encapsulation: 2
});
var CurrentUserComponent = _CurrentUserComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUserComponent, [{
    type: Component,
    args: [{
      selector: "abp-current-user",
      imports: [NgComponentOutlet, AsyncPipe, NgbDropdownModule, AbpVisibleDirective, PermissionDirective, ToInjectorPipe, LocalizationPipe],
      template: `@if ((currentUser$ | async)?.isAuthenticated) {\r
  <div\r
    ngbDropdown\r
    class="dropdown"\r
    #currentUserDropdown="ngbDropdown"\r
    display="static"\r
  >\r
    <a\r
      ngbDropdownToggle\r
      class="nav-link"\r
      href="javascript:void(0)"\r
      role="button"\r
      id="dropdownMenuLink"\r
      data-toggle="dropdown"\r
      aria-haspopup="true"\r
      aria-expanded="false"\r
    >\r
      @if ((selectedTenant$ | async)?.name; as tenantName) {\r
        <small\r
          ><i>{{ tenantName }}</i\r
          >\\</small\r
        >\r
      }\r
      <strong>{{ (currentUser$ | async)?.userName }}</strong>\r
    </a>\r
    <div\r
      class="dropdown-menu dropdown-menu-end border-0 shadow-sm"\r
      aria-labelledby="dropdownMenuLink"\r
      [class.d-block]="smallScreen && currentUserDropdown.isOpen()"\r
    >\r
      @for (item of userMenu.items$ | async; track $index) {\r
        <ng-container *abpVisible="!item.visible || item.visible(item)">\r
          <li class="nav-item d-flex align-items-center" *abpPermission="item.requiredPolicy">\r
            @if (item.component) {\r
              <ng-container\r
                [ngComponentOutlet]="item.component"\r
                [ngComponentOutletInjector]="item | toInjector"\r
              ></ng-container>\r
            } @else {\r
              @if (item.html) {\r
                <div [innerHTML]="item.html" (click)="item.action ? item.action() : null"></div>\r
              } @else {\r
                @if (item.textTemplate) {\r
                  <a (click)="item.action ? item.action() : null" class="dropdown-item pointer">\r
                    @if (item.textTemplate.icon) {\r
                      <i class="me-1 {{ item.textTemplate.icon }}"></i>\r
                    }\r
                    {{ item.textTemplate.text | abpLocalization }}</a\r
                  >\r
                }\r
              }\r
            }\r
          </li>\r
        </ng-container>\r
      }\r
    </div>\r
  </div>\r
} @else {\r
    <a role="button" class="nav-link pointer" (click)="navigateToLogin()">\r
      {{ 'AbpAccount::Login' | abpLocalization }}\r
    </a>\r
}\r
`
    }]
  }], null, null);
})();
var _LanguagesComponent = class _LanguagesComponent {
  constructor() {
    this.sessionState = inject(SessionStateService);
    this.configState = inject(ConfigStateService);
    this.document = inject(DOCUMENT);
    this.languages$ = this.configState.getDeep$("localization.languages");
  }
  get smallScreen() {
    return this.document.defaultView.innerWidth < 992;
  }
  get defaultLanguage$() {
    return this.languages$.pipe(map((languages) => languages?.find((lang) => lang.cultureName === this.selectedLangCulture)?.displayName || ""));
  }
  get dropdownLanguages$() {
    return this.languages$.pipe(map((languages) => languages?.filter((lang) => lang.cultureName !== this.selectedLangCulture) || []));
  }
  get selectedLangCulture() {
    return this.sessionState.getLanguage();
  }
  onChangeLang(cultureName) {
    this.sessionState.setLanguage(cultureName);
  }
};
_LanguagesComponent.ɵfac = function LanguagesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguagesComponent)();
};
_LanguagesComponent.ɵcmp = ɵɵdefineComponent({
  type: _LanguagesComponent,
  selectors: [["abp-languages"]],
  decls: 2,
  vars: 3,
  consts: [["languageDropdown", "ngbDropdown"], ["ngbDropdown", "", "display", "static", 1, "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-end", "border-0", "shadow-sm"], ["href", "javascript:void(0)", 1, "dropdown-item"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]],
  template: function LanguagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, LanguagesComponent_Conditional_0_Template, 9, 7, "div", 1);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵconditional((((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.dropdownLanguages$)) == null ? null : tmp_0_0.length) || 0) > 0 ? 0 : -1);
    }
  },
  dependencies: [AsyncPipe, NgbDropdownModule, NgbDropdown, NgbDropdownToggle],
  encapsulation: 2
});
var LanguagesComponent = _LanguagesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguagesComponent, [{
    type: Component,
    args: [{
      selector: "abp-languages",
      template: `
    @if (((dropdownLanguages$ | async)?.length || 0) > 0) {
      <div class="dropdown" ngbDropdown #languageDropdown="ngbDropdown" display="static">
        <a
          ngbDropdownToggle
          class="nav-link"
          href="javascript:void(0)"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ defaultLanguage$ | async }}
        </a>
        <div
          class="dropdown-menu dropdown-menu-end border-0 shadow-sm"
          aria-labelledby="dropdownMenuLink"
          [class.d-block]="smallScreen && languageDropdown.isOpen()"
        >
          @for (lang of dropdownLanguages$ | async; track $index) {
            <a
              href="javascript:void(0)"
              class="dropdown-item"
              (click)="onChangeLang(lang.cultureName || '')"
              >{{ lang?.displayName }}</a
            >
          }
        </div>
      </div>
    }
  `,
      imports: [AsyncPipe, NgbDropdownModule]
    }]
  }], null, null);
})();
var _ValidationErrorComponent = class _ValidationErrorComponent extends ValidationErrorComponent {
  get abpErrors() {
    if (!this.errors || !this.errors.length) return [];
    return this.errors.map((error) => {
      if (!error.message) return error;
      const index = error.message.indexOf("[");
      if (index > -1) {
        return __spreadProps(__spreadValues({}, error), {
          message: error.message.slice(0, index),
          interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(",")
        });
      }
      return error;
    });
  }
};
_ValidationErrorComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵValidationErrorComponent_BaseFactory;
  return function ValidationErrorComponent_Factory(__ngFactoryType__) {
    return (ɵValidationErrorComponent_BaseFactory || (ɵValidationErrorComponent_BaseFactory = ɵɵgetInheritedFactory(_ValidationErrorComponent)))(__ngFactoryType__ || _ValidationErrorComponent);
  };
})();
_ValidationErrorComponent.ɵcmp = ɵɵdefineComponent({
  type: _ValidationErrorComponent,
  selectors: [["abp-validation-error"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [[1, "invalid-feedback"]],
  template: function ValidationErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵrepeaterCreate(0, ValidationErrorComponent_For_1_Template, 3, 4, "div", 0, ɵɵrepeaterTrackByIndex);
    }
    if (rf & 2) {
      ɵɵrepeater(ctx.abpErrors);
    }
  },
  dependencies: [LocalizationPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ValidationErrorComponent2 = _ValidationErrorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationErrorComponent2, [{
    type: Component,
    args: [{
      selector: "abp-validation-error",
      template: `
    @for (error of abpErrors; track $index) {
      <div class="invalid-feedback">
        {{ error.message | abpLocalization: error.interpoliteParams }}
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [LocalizationPipe]
    }]
  }], null, null);
})();
var LAZY_STYLES = new InjectionToken("LAZY_STYLES");
var BOOTSTRAP = "bootstrap-{{dir}}.min.css";
var _LazyStyleHandler = class _LazyStyleHandler {
  set dir(dir) {
    if (dir === this._dir) return;
    this.switchCSS(dir);
    this._dir = dir;
  }
  get dir() {
    return this._dir;
  }
  constructor() {
    this.document = inject(DOCUMENT);
    this._dir = "ltr";
    this.loaded = /* @__PURE__ */ new Map();
    const injector = inject(Injector);
    this.setStyles(injector);
    this.setLazyLoad(injector);
    this.listenToDirectionChanges(injector);
  }
  getHrefFromLink(link) {
    if (!link) return "";
    const a = this.document.createElement("a");
    a.href = link.href;
    return a.pathname.replace(/^\//, "");
  }
  getLoadedBootstrap() {
    const href = createLazyStyleHref(BOOTSTRAP, this.dir);
    const selector = `[href*="${href.replace(/\.css$/, "")}"]`;
    const link = this.document.querySelector(selector);
    return {
      href,
      link
    };
  }
  listenToDirectionChanges(injector) {
    const docDirHandler = injector.get(DocumentDirHandlerService);
    docDirHandler.dir$.subscribe((dir) => {
      this.dir = dir;
    });
  }
  setLazyLoad(injector) {
    this.lazyLoad = injector.get(LazyLoadService);
    const {
      href,
      link
    } = this.getLoadedBootstrap();
    this.lazyLoad.loaded.set(href, link);
  }
  setStyles(injector) {
    this.styles = injector.get(LAZY_STYLES, [BOOTSTRAP]);
  }
  switchCSS(dir) {
    this.styles.forEach((style) => {
      const oldHref = createLazyStyleHref(style, this.dir);
      const newHref = createLazyStyleHref(style, dir);
      const link = this.loaded.get(newHref);
      const href = this.getHrefFromLink(link) || newHref;
      const strategy = LOADING_STRATEGY.PrependAnonymousStyleToHead(href);
      this.lazyLoad.load(strategy).subscribe(() => {
        const oldLink = this.lazyLoad.loaded.get(oldHref);
        this.loaded.delete(newHref);
        this.loaded.set(oldHref, oldLink);
        const newLink = this.lazyLoad.loaded.get(href);
        this.lazyLoad.loaded.delete(href);
        this.lazyLoad.loaded.set(newHref, newLink);
        this.lazyLoad.remove(oldHref);
      });
    });
  }
};
_LazyStyleHandler.ɵfac = function LazyStyleHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LazyStyleHandler)();
};
_LazyStyleHandler.ɵprov = ɵɵdefineInjectable({
  token: _LazyStyleHandler,
  factory: _LazyStyleHandler.ɵfac
});
var LazyStyleHandler = _LazyStyleHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyStyleHandler, [{
    type: Injectable
  }], () => [], null);
})();
function createLazyStyleHref(style, dir) {
  return style.replace(/{{\s*dir\s*}}/g, dir);
}
function initLazyStyleHandler() {
  return () => new LazyStyleHandler();
}
var BASIC_THEME_NAV_ITEM_PROVIDERS = [provideAppInitializer(() => {
  configureNavItems();
})];
function configureNavItems() {
  const navItems = inject(NavItemsService);
  navItems.addItems([{
    id: "Theme.LanguagesComponent",
    order: 100,
    component: LanguagesComponent
  }, {
    id: "Theme.CurrentUserComponent",
    order: 100,
    component: CurrentUserComponent
  }]);
}
var styles = `
.content-header-title {
    font-size: 24px;
}
.entry-row {
    margin-bottom: 15px;
}
#main-navbar-tools a.dropdown-toggle {
    text-decoration: none;
    color: #fff;
}
.navbar .dropdown-submenu {
    position: relative;
}
.navbar .dropdown-menu {
    margin: 0;
    padding: 0;
}
.navbar .dropdown-menu a {
    font-size: .9em;
    padding: 10px 15px;
    display: block;
    min-width: 210px;
    text-align: left;
    border-radius: 0.25rem;
    min-height: 44px;
}
[dir=rtl] .navbar .dropdown-menu a {
    text-align: right!important;
}
.navbar .dropdown-submenu a::after {
    transform: rotate(-90deg);
    position: absolute;
    right: 16px;
    top: 18px;
}
[dir=rtl] .navbar .dropdown-submenu a::after {
    transform: rotate(90deg);
    left: 16px;
    right: auto;
    top: 20px;
}
.navbar .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
}
/* work around for rtl. Track https://github.com/ng-bootstrap/ng-bootstrap/issues/4100 issue */
[dir=rtl] .navbar .dropdown-submenu .dropdown-menu {
    top: 0;
    right: 100%;
}
.card-header .btn {
    padding: 2px 6px;
}
.card-header h5 {
    margin: 0;
}
.container > .card {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
@media screen and (min-width: 992px) {
    .navbar .dropdown:hover > .dropdown-menu {
        display: block;
    }

    .navbar .dropdown-submenu:hover > .dropdown-menu {
        display: block;
    }
}
.input-validation-error {
    border-color: #dc3545;
}
.field-validation-error {
    font-size: 0.8em;
}
.ui-table .ui-table-tbody > tr.empty-row > div.empty-row-content {
    border: 1px solid #c8c8c8;
  }
.abp-loading {
    background: rgba(0, 0, 0, 0.05);
}
.modal-backdrop {
background-color: rgba(0, 0, 0, 0.6);
}

.confirmation .confirmation-backdrop {
	 background: rgba(0, 0, 0, 0.7) !important;
}
 .confirmation .confirmation-dialog {
	 border: none;
	 border-radius: 10px;
	 background-color: #fff;
	 box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);
}
 .confirmation .confirmation-dialog .icon-container .icon {
	 stroke: #fff;
	 color: #fff;
}
 .confirmation .confirmation-dialog .icon-container.info .icon {
	 stroke: #2f96b4;
	 color: #2f96b4;
}
 .confirmation .confirmation-dialog .icon-container.success .icon {
	 stroke: #51a351;
	 color: #51a351;
}
 .confirmation .confirmation-dialog .icon-container.warning .icon {
	 stroke: #f89406;
	 color: #f89406;
}
 .confirmation .confirmation-dialog .icon-container.error .icon {
	 stroke: #bd362f;
	 color: #bd362f;
}
 .confirmation .confirmation-dialog .content .title {
	 color: #222;
}
 .confirmation .confirmation-dialog .content .message {
	 color: #777;
}
 .confirmation .confirmation-dialog .footer {
	 background: transparent;
}
 .confirmation .confirmation-dialog .footer .confirmation-button {
	 background-color: #eee;
	 color: #777;
}
 .confirmation .confirmation-dialog .footer .confirmation-button:hover, .confirmation .confirmation-dialog .footer .confirmation-button:focus, .confirmation .confirmation-dialog .footer .confirmation-button:active {
	 background-color: #bbb;
}
 .confirmation .confirmation-dialog .footer .confirmation-button--confirm {
	 background-color: #2f96b4;
	 color: #fff;
}
 .confirmation .confirmation-dialog .footer .confirmation-button--confirm:hover {
	 background-color: #2e819b;
}
.ui-table .pagination-wrapper {
    background-color: #f4f4f4;
    border: 1px solid #c8c8c8;
}
.bordered .datatable-body-row {
    border-top: 1px solid #eee;
    margin-top: -1px;
}
.breadcrumb {
    background-color: transparent;
    padding: 0.27rem;
}

.abp-md-form {
    max-width: 540px;
}

abp-chat-icon,
abp-back-to-impersonator-nav-item {
    margin-inline: 0.4rem;
}

abp-chat-icon {
    .fa-comments:before {
        color: var(--bs-navbar-color);
    }
}

abp-back-to-impersonator-nav-item {
    .fa-undo {
        color: var(--bs-navbar-color);
    }
}

.ngx-datatable.material:has(.datatable-body-row) .datatable-footer {
  border-top: none;
}

.ngx-datatable.material:not(:has(.datatable-body-row)) .datatable-footer {
  border-top: 1px solid #dee2e6;
}

`;
var BASIC_THEME_STYLES_PROVIDERS = [provideAppInitializer(() => {
  const initializerFn = configureStyles(inject(DomInsertionService), inject(ReplaceableComponentsService));
  return initializerFn();
})];
function configureStyles(domInsertion, replaceableComponents) {
  return () => {
    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
    initLayouts(replaceableComponents);
  };
}
function initLayouts(replaceableComponents) {
  replaceableComponents.add({
    key: "Theme.ApplicationLayoutComponent",
    component: ApplicationLayoutComponent
  });
  replaceableComponents.add({
    key: "Theme.AccountLayoutComponent",
    component: AccountLayoutComponent
  });
  replaceableComponents.add({
    key: "Theme.EmptyLayoutComponent",
    component: EmptyLayoutComponent
  });
}
var BASIC_THEME_USER_MENU_PROVIDERS = [provideAppInitializer(() => {
  const initializerFn = configureUserMenu(inject(Injector));
  return initializerFn();
})];
function configureUserMenu(injector) {
  const userMenu = injector.get(UserMenuService);
  const authService = injector.get(AuthService);
  const navigateToManageProfile = injector.get(NAVIGATE_TO_MANAGE_PROFILE);
  return () => {
    userMenu.addItems([{
      id: "UserMenu.MyAccount",
      order: 100,
      textTemplate: {
        text: "AbpAccount::MyAccount",
        icon: "fa fa-cog"
      },
      action: () => navigateToManageProfile()
    }, {
      id: "UserMenu.Logout",
      order: 101,
      textTemplate: {
        text: "AbpUi::Logout",
        icon: "fa fa-power-off"
      },
      action: () => {
        authService.logout().subscribe();
      }
    }]);
  };
}
function provideThemeBasicConfig() {
  return makeEnvironmentProviders([BASIC_THEME_NAV_ITEM_PROVIDERS, BASIC_THEME_USER_MENU_PROVIDERS, BASIC_THEME_STYLES_PROVIDERS, {
    provide: VALIDATION_ERROR_TEMPLATE,
    useValue: ValidationErrorComponent2
  }, {
    provide: VALIDATION_TARGET_SELECTOR,
    useValue: ".form-group"
  }, {
    provide: VALIDATION_INVALID_CLASSES,
    useValue: "is-invalid"
  }, LazyStyleHandler, provideAppInitializer(() => {
    inject(LazyStyleHandler);
  })]);
}
var LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
var THEME_BASIC_COMPONENTS = [...LAYOUTS, ValidationErrorComponent2, LogoComponent, NavItemsComponent, RoutesComponent, CurrentUserComponent, LanguagesComponent, PageAlertContainerComponent, AuthWrapperComponent, TenantBoxComponent];
var _BaseThemeBasicModule = class _BaseThemeBasicModule {
};
_BaseThemeBasicModule.ɵfac = function BaseThemeBasicModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseThemeBasicModule)();
};
_BaseThemeBasicModule.ɵmod = ɵɵdefineNgModule({
  type: _BaseThemeBasicModule,
  imports: [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent, ValidationErrorComponent2, LogoComponent, NavItemsComponent, RoutesComponent, CurrentUserComponent, LanguagesComponent, PageAlertContainerComponent, AuthWrapperComponent, TenantBoxComponent],
  exports: [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent, ValidationErrorComponent2, LogoComponent, NavItemsComponent, RoutesComponent, CurrentUserComponent, LanguagesComponent, PageAlertContainerComponent, AuthWrapperComponent, TenantBoxComponent]
});
_BaseThemeBasicModule.ɵinj = ɵɵdefineInjector({
  imports: [ApplicationLayoutComponent, AccountLayoutComponent, RoutesComponent, CurrentUserComponent, LanguagesComponent, AuthWrapperComponent, TenantBoxComponent]
});
var BaseThemeBasicModule = _BaseThemeBasicModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseThemeBasicModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      exports: [...THEME_BASIC_COMPONENTS],
      imports: [...THEME_BASIC_COMPONENTS]
    }]
  }], null, null);
})();
var _ThemeBasicModule = class _ThemeBasicModule {
  /**
   * @deprecated forRoot method is deprecated, use `provideThemeBasicConfig` *function* for config settings.
   */
  static forRoot() {
    return {
      ngModule: _ThemeBasicModule,
      providers: [provideThemeBasicConfig()]
    };
  }
};
_ThemeBasicModule.ɵfac = function ThemeBasicModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeBasicModule)();
};
_ThemeBasicModule.ɵmod = ɵɵdefineNgModule({
  type: _ThemeBasicModule,
  imports: [BaseThemeBasicModule],
  exports: [BaseThemeBasicModule]
});
_ThemeBasicModule.ɵinj = ɵɵdefineInjector({
  imports: [BaseThemeBasicModule, BaseThemeBasicModule]
});
var ThemeBasicModule = _ThemeBasicModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeBasicModule, [{
    type: NgModule,
    args: [{
      exports: [BaseThemeBasicModule],
      imports: [BaseThemeBasicModule]
    }]
  }], null, null);
})();
export {
  AccountLayoutComponent,
  ApplicationLayoutComponent,
  AuthWrapperComponent,
  BASIC_THEME_NAV_ITEM_PROVIDERS,
  BASIC_THEME_STYLES_PROVIDERS,
  BASIC_THEME_USER_MENU_PROVIDERS,
  BOOTSTRAP,
  BaseThemeBasicModule,
  CurrentUserComponent,
  EmptyLayoutComponent,
  LAYOUTS,
  LAZY_STYLES,
  LanguagesComponent,
  LazyStyleHandler,
  LogoComponent,
  NavItemsComponent,
  PageAlertContainerComponent,
  RoutesComponent,
  THEME_BASIC_COMPONENTS,
  TenantBoxComponent,
  ThemeBasicModule,
  ValidationErrorComponent2 as ValidationErrorComponent,
  configureNavItems,
  configureStyles,
  configureUserMenu,
  createLazyStyleHref,
  initLazyStyleHandler,
  provideThemeBasicConfig
};
//# sourceMappingURL=@abp_ng__theme__basic.js.map
