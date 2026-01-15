import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepickerI18n,
  NgbInputDatepickerConfig,
  NgbModal,
  NgbTimeAdapter,
  NgbTimepickerI18n,
  NgbTooltip,
  NgbTypeaheadConfig
} from "./chunk-YX3SHI5G.js";
import {
  ColumnMode,
  DatatableComponent,
  NgxDatatableModule
} from "./chunk-HXT4IF3A.js";
import {
  animate,
  animation,
  keyframes,
  query,
  sequence,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-G7KX2FVW.js";
import {
  AbstractNgModelComponent,
  AuthService,
  CONTENT_STRATEGY,
  ConfigStateService,
  ContentProjectionService,
  DomInsertionService,
  HttpErrorReporterService,
  HttpWaitService,
  InternalStore,
  InternetConnectionService,
  LocalizationPipe,
  LocalizationService,
  PROJECTION_STRATEGY,
  RouterEvents,
  RouterWaitService,
  RoutesService,
  SORT_COMPARE_FUNC,
  SessionStateService,
  StopPropagationDirective,
  SubscriptionService,
  TENANT_NOT_FOUND_BY_NAME,
  getLocaleDirection,
  getRoutePath,
  uuid
} from "./chunk-YNSF2OKM.js";
import {
  NgxValidateCoreModule,
  VALIDATION_BLUEPRINTS,
  VALIDATION_MAP_ERRORS_FN,
  VALIDATION_VALIDATE_ON_SUBMIT,
  ValidationTargetDirective,
  defaultMapErrorsFn,
  normalizeDiacritics
} from "./chunk-KYW4FKB6.js";
import {
  takeUntilDestroyed
} from "./chunk-OALXQWG3.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  Validators
} from "./chunk-XJ5KBAN7.js";
import {
  ResolveEnd,
  Router,
  RouterLink
} from "./chunk-A4AOUQJ4.js";
import {
  HttpErrorResponse
} from "./chunk-ZKYDULWF.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgStyle,
  NgTemplateOutlet,
  formatDate,
  isPlatformBrowser
} from "./chunk-PL5KB4ZG.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  contentChild,
  createComponent,
  effect,
  forwardRef,
  inject,
  input,
  makeEnvironmentProviders,
  model,
  output,
  provideAppInitializer,
  setClassMetadata,
  viewChild,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate,
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
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-OHEE3L26.js";
import {
  fromEvent
} from "./chunk-576P5TAG.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
  map,
  of,
  startWith,
  switchMap,
  take,
  takeUntil,
  timer
} from "./chunk-2K3BB2X3.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-SYKYUVZG.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static ɵfac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static ɵfac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  return type === 0 || type === 1;
}

// node_modules/@abp/ng.theme.shared/fesm2022/abp-ng.theme.shared.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function BreadcrumbItemsComponent_Conditional_0_For_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbItemsComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 7);
    ɵɵtemplate(1, BreadcrumbItemsComponent_Conditional_0_For_5_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ɵ$index_10_r2 = ctx.$index;
    const ɵ$count_10_r3 = ctx.$count;
    ɵɵnextContext(2);
    const linkTemplate_r4 = ɵɵreference(2);
    const textTemplate_r5 = ɵɵreference(4);
    ɵɵclassProp("active", ɵ$index_10_r2 === ɵ$count_10_r3 - 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r1.path ? linkTemplate_r4 : textTemplate_r5)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c0, item_r1));
  }
}
function BreadcrumbItemsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ol", 2)(1, "li", 3)(2, "a", 4);
    ɵɵelement(3, "i", 5);
    ɵɵelementEnd()();
    ɵɵrepeaterCreate(4, BreadcrumbItemsComponent_Conditional_0_For_5_Template, 2, 6, "li", 6, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵrepeater(ctx_r5.items);
  }
}
function BreadcrumbItemsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    ɵɵproperty("routerLink", item_r7.path);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, item_r7.name));
  }
}
function BreadcrumbItemsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, item_r8.name), "\n");
  }
}
var _c1 = ["button"];
var _c2 = ["*"];
function ConfirmationComponent_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext(2);
    ɵɵproperty("outerHTML", data_r2.options.iconTemplate, ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 11);
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext(2);
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getIconClass(data_r2));
  }
}
function ConfirmationComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵconditionalCreate(1, ConfirmationComponent_Conditional_0_Conditional_3_Conditional_1_Template, 1, 1, "div", 10)(2, ConfirmationComponent_Conditional_0_Conditional_3_Conditional_2_Template, 1, 1, "i", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", data_r2.severity);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.isIconTemplateExits(data_r2) ? 1 : 2);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "h1", 5);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ɵɵpipeBind2(1, 1, data_r2.title, data_r2.options == null ? null : data_r2.options.titleLocalizationParams), ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p", 6);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ɵɵpipeBind2(1, 1, data_r2.message, data_r2.options == null ? null : data_r2.options.messageLocalizationParams), ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵpipe(1, "abpLocalization");
    ɵɵlistener("click", function ConfirmationComponent_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.close(ctx_r2.reject));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, (data_r2.options == null ? null : data_r2.options.cancelText) || "AbpUi::Cancel"), ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵpipe(1, "abpLocalization");
    ɵɵlistener("click", function ConfirmationComponent_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.close(ctx_r2.confirm));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, (data_r2.options == null ? null : data_r2.options.yesText) || "AbpUi::Yes"), ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0)(1, "div", 1);
    ɵɵlistener("click", function ConfirmationComponent_Conditional_0_Template_div_click_1_listener() {
      const data_r2 = ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView((data_r2.options == null ? null : data_r2.options.dismissible) ? ctx_r2.close(ctx_r2.dismiss) : null);
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 2);
    ɵɵconditionalCreate(3, ConfirmationComponent_Conditional_0_Conditional_3_Template, 3, 2, "div", 3);
    ɵɵelementStart(4, "div", 4);
    ɵɵconditionalCreate(5, ConfirmationComponent_Conditional_0_Conditional_5_Template, 2, 4, "h1", 5);
    ɵɵconditionalCreate(6, ConfirmationComponent_Conditional_0_Conditional_6_Template, 2, 4, "p", 6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 7);
    ɵɵconditionalCreate(8, ConfirmationComponent_Conditional_0_Conditional_8_Template, 2, 3, "button", 8);
    ɵɵconditionalCreate(9, ConfirmationComponent_Conditional_0_Conditional_9_Template, 2, 3, "button", 9);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const data_r2 = ctx;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵconditional(data_r2.severity || ctx_r2.isCustomIconExists(data_r2) ? 3 : -1);
    ɵɵadvance(2);
    ɵɵconditional(data_r2.title ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(data_r2.message ? 6 : -1);
    ɵɵadvance(2);
    ɵɵconditional(!(data_r2 == null ? null : data_r2.options == null ? null : data_r2.options.hideCancelBtn) ? 8 : -1);
    ɵɵadvance();
    ɵɵconditional(!(data_r2 == null ? null : data_r2.options == null ? null : data_r2.options.hideYesBtn) ? 9 : -1);
  }
}
var _c3 = ["container"];
var _c4 = () => ({
  key: "::Menu:Home",
  defaultValue: "Home"
});
function HttpErrorWrapperComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function HttpErrorWrapperComponent_Conditional_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.destroy());
    });
    ɵɵelementEnd();
  }
}
function HttpErrorWrapperComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 10);
    ɵɵlistener("click", function HttpErrorWrapperComponent_Conditional_3_Conditional_10_Template_a_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.goHome());
    });
    ɵɵelement(1, "span", 11);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, ɵɵpureFunction0(3, _c4)), " ");
  }
}
function HttpErrorWrapperComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 5)(2, "div", 6)(3, "h1");
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 7);
    ɵɵtext(7);
    ɵɵpipe(8, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 8);
    ɵɵconditionalCreate(10, HttpErrorWrapperComponent_Conditional_3_Conditional_10_Template, 4, 4, "a", 9);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate2("", ctx_r1.statusText, " ", ɵɵpipeBind1(5, 4, ctx_r1.title));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 6, ctx_r1.details), " ");
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.isHomeShow ? 10 : -1);
  }
}
var _c5 = (a0, a1) => ({
  "background-color": a0,
  "box-shadow": a1
});
function ToastComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function ToastComponent_Conditional_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close());
    });
    ɵɵelement(1, "i", 8);
    ɵɵelementEnd();
  }
}
var _forTrack0 = ($index, $item) => $item.options == null ? null : $item.options.id;
function ToastContainerComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-toast", 2);
    ɵɵlistener("remove", function ToastContainerComponent_For_2_Template_abp_toast_remove_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const toast_r3 = ctx.$implicit;
    ɵɵproperty("toast", toast_r3);
  }
}
var _c6 = ["abpHeader"];
var _c7 = ["abpBody"];
var _c8 = ["abpFooter"];
var _c9 = ["modalContent"];
function ModalComponent_ng_template_1_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ModalComponent_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, ModalComponent_ng_template_1_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtext(2, " ​ ");
    ɵɵelementStart(3, "button", 5);
    ɵɵlistener("click", function ModalComponent_ng_template_1_Conditional_0_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const modal_r2 = ɵɵnextContext().$implicit;
      return ɵɵresetView(modal_r2.dismiss());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.abpHeader());
  }
}
function ModalComponent_ng_template_1_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ModalComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, ModalComponent_ng_template_1_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.abpBody());
  }
}
function ModalComponent_ng_template_1_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ModalComponent_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, ModalComponent_ng_template_1_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.abpFooter());
  }
}
function ModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ModalComponent_ng_template_1_Conditional_0_Template, 4, 1, "div", 1);
    ɵɵconditionalCreate(1, ModalComponent_ng_template_1_Conditional_1_Template, 2, 1, "div", 2);
    ɵɵconditionalCreate(2, ModalComponent_ng_template_1_Conditional_2_Template, 2, 1, "div", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(ctx_r2.abpHeader() ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.abpBody() ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.abpFooter() ? 2 : -1);
  }
}
var _c10 = (a0, a1) => ({
  "fa-eye-slash": a0,
  "fa-eye": a1
});
function FormCheckboxComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 2);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.labelClass)("for", ctx_r0.checkboxId);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, ctx_r0.label), " ");
  }
}
function FormInputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 1);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.labelClass)("for", ctx_r0.inputId);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, ctx_r0.label), " ");
  }
}
function InternetConnectionStatusComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵelement(1, "i", 1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("ngbTooltip", ɵɵinterpolate(ɵɵpipeBind1(2, 2, "AbpUi::InternetConnectionInfo")));
  }
}
var _DateTimeAdapter = class _DateTimeAdapter {
  fromModel(value) {
    if (!value) {
      return null;
    }
    const date = new Date(value);
    if (isNaN(date)) {
      return null;
    }
    this.value = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    return this.value;
  }
  toModel(value) {
    if (!value) {
      return "";
    }
    const now = /* @__PURE__ */ new Date();
    const newValue = __spreadValues(__spreadValues({
      year: now.getUTCFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
      hour: 0,
      minute: 0,
      second: 0
    }, this.value), value);
    const date = new Date(Date.UTC(newValue.year, newValue.month - 1, newValue.day, newValue.hour, newValue.minute, newValue.second));
    return date.toISOString().replace("Z", "");
  }
};
_DateTimeAdapter.ɵfac = function DateTimeAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DateTimeAdapter)();
};
_DateTimeAdapter.ɵprov = ɵɵdefineInjectable({
  token: _DateTimeAdapter,
  factory: _DateTimeAdapter.ɵfac
});
var DateTimeAdapter = _DateTimeAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateTimeAdapter, [{
    type: Injectable
  }], null, null);
})();
var _DateAdapter = class _DateAdapter extends NgbDateAdapter {
  fromModel(value) {
    if (!value) return null;
    let date;
    if (typeof value === "string") {
      date = this.dateOf(value);
    } else {
      date = new Date(value);
    }
    if (isNaN(date)) return null;
    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };
  }
  toModel(value) {
    if (!value) return "";
    const date = new Date(value.year, value.month - 1, value.day);
    const formattedDate = formatDate(date, "yyyy-MM-dd", "en");
    return formattedDate;
  }
  dateOf(value) {
    const dateUtc = new Date(Date.parse(value));
    return new Date(dateUtc.getTime() + Math.abs(dateUtc.getTimezoneOffset() * 6e4));
  }
};
_DateAdapter.ɵfac = /* @__PURE__ */ (() => {
  let ɵDateAdapter_BaseFactory;
  return function DateAdapter_Factory(__ngFactoryType__) {
    return (ɵDateAdapter_BaseFactory || (ɵDateAdapter_BaseFactory = ɵɵgetInheritedFactory(_DateAdapter)))(__ngFactoryType__ || _DateAdapter);
  };
})();
_DateAdapter.ɵprov = ɵɵdefineInjectable({
  token: _DateAdapter,
  factory: _DateAdapter.ɵfac
});
var DateAdapter = _DateAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateAdapter, [{
    type: Injectable
  }], null, null);
})();
var _DatepickerI18nAdapter = class _DatepickerI18nAdapter extends NgbDatepickerI18n {
  constructor() {
    super(...arguments);
    this.configState = inject(ConfigStateService, {
      optional: true
    });
    this.defaultLocale = inject(LOCALE_ID);
  }
  get locale() {
    return this.configState?.getDeep("localization.currentCulture.cultureName") || this.defaultLocale;
  }
  getWeekdayLabel(weekday) {
    const date = new Date(2017, 0, weekday + 1);
    return formatDate(date, "EEEEE", this.locale);
  }
  getWeekLabel() {
    return "";
  }
  getMonthShortName(month) {
    const date = new Date(2017, month - 1, 1);
    return formatDate(date, "MMM", this.locale);
  }
  getMonthFullName(month) {
    const date = new Date(2017, month - 1, 1);
    return formatDate(date, "MMMM", this.locale);
  }
  getDayAriaLabel(date) {
    const d = new Date(date.year, date.month - 1, date.day);
    return formatDate(d, "fullDate", this.locale);
  }
};
_DatepickerI18nAdapter.ɵfac = /* @__PURE__ */ (() => {
  let ɵDatepickerI18nAdapter_BaseFactory;
  return function DatepickerI18nAdapter_Factory(__ngFactoryType__) {
    return (ɵDatepickerI18nAdapter_BaseFactory || (ɵDatepickerI18nAdapter_BaseFactory = ɵɵgetInheritedFactory(_DatepickerI18nAdapter)))(__ngFactoryType__ || _DatepickerI18nAdapter);
  };
})();
_DatepickerI18nAdapter.ɵprov = ɵɵdefineInjectable({
  token: _DatepickerI18nAdapter,
  factory: _DatepickerI18nAdapter.ɵfac
});
var DatepickerI18nAdapter = _DatepickerI18nAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatepickerI18nAdapter, [{
    type: Injectable
  }], null, null);
})();
var _TimeAdapter = class _TimeAdapter extends NgbTimeAdapter {
  fromModel(value) {
    if (!value) return null;
    const date = isTimeStr(value) ? new Date(0, 0, 1, ...value.split(":").map(Number)) : new Date(value);
    if (isNaN(date)) return null;
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }
  toModel(value) {
    if (!value) {
      return null;
    }
    const date = new Date(0, 0, 1, value.hour, value.minute, value.second);
    const formattedDate = formatDate(date, "HH:mm:ss", "en");
    return formattedDate;
  }
};
_TimeAdapter.ɵfac = /* @__PURE__ */ (() => {
  let ɵTimeAdapter_BaseFactory;
  return function TimeAdapter_Factory(__ngFactoryType__) {
    return (ɵTimeAdapter_BaseFactory || (ɵTimeAdapter_BaseFactory = ɵɵgetInheritedFactory(_TimeAdapter)))(__ngFactoryType__ || _TimeAdapter);
  };
})();
_TimeAdapter.ɵprov = ɵɵdefineInjectable({
  token: _TimeAdapter,
  factory: _TimeAdapter.ɵfac
});
var TimeAdapter = _TimeAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeAdapter, [{
    type: Injectable
  }], null, null);
})();
function isTimeStr(value) {
  return /^((2[123])|[01][0-9])(:[0-5][0-9]){1,2}$/.test(String(value));
}
var _TimepickerI18nAdapter = class _TimepickerI18nAdapter extends NgbTimepickerI18n {
  constructor() {
    super(...arguments);
    this.configState = inject(ConfigStateService, {
      optional: true
    });
    this.defaultLocale = inject(LOCALE_ID);
  }
  get locale() {
    return this.configState?.getDeep("localization.currentCulture.cultureName") || this.defaultLocale;
  }
  getMorningPeriod() {
    const date = new Date(2e3, 0, 1, 10, 0, 0);
    return formatDate(date, "a", this.locale);
  }
  getAfternoonPeriod() {
    const date = new Date(2e3, 0, 1, 22, 0, 0);
    return formatDate(date, "a", this.locale);
  }
};
_TimepickerI18nAdapter.ɵfac = /* @__PURE__ */ (() => {
  let ɵTimepickerI18nAdapter_BaseFactory;
  return function TimepickerI18nAdapter_Factory(__ngFactoryType__) {
    return (ɵTimepickerI18nAdapter_BaseFactory || (ɵTimepickerI18nAdapter_BaseFactory = ɵɵgetInheritedFactory(_TimepickerI18nAdapter)))(__ngFactoryType__ || _TimepickerI18nAdapter);
  };
})();
_TimepickerI18nAdapter.ɵprov = ɵɵdefineInjectable({
  token: _TimepickerI18nAdapter,
  factory: _TimepickerI18nAdapter.ɵfac
});
var TimepickerI18nAdapter = _TimepickerI18nAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerI18nAdapter, [{
    type: Injectable
  }], null, null);
})();
var bounceIn = animation([style({
  opacity: "0",
  display: "{{ display }}"
}), animate("{{ time}} {{ easing }}", keyframes([style({
  opacity: "0",
  transform: "{{ transform }} scale(0.0)",
  offset: 0
}), style({
  opacity: "0",
  transform: "{{ transform }} scale(0.8)",
  offset: 0.5
}), style({
  opacity: "1",
  transform: "{{ transform }} scale(1.0)",
  offset: 1
})]))], {
  params: {
    time: "350ms",
    easing: "cubic-bezier(.7,.31,.72,1.47)",
    display: "block",
    transform: "translate(-50%, -50%)"
  }
});
var collapseY = animation([style({
  height: "*",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  height: "0",
  padding: "0px"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var collapseYWithMargin = animation([style({
  "margin-top": "0"
}), animate("{{ time }} {{ easing }}", style({
  "margin-left": "-100%"
}))], {
  params: {
    time: "500ms",
    easing: "ease"
  }
});
var collapseX = animation([style({
  width: "*",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  width: "0",
  padding: "0px"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var expandY = animation([style({
  height: "0",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  height: "*",
  padding: "*"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var expandYWithMargin = animation([style({
  "margin-top": "-100%"
}), animate("{{ time }} {{ easing }}", style({
  "margin-top": "0"
}))], {
  params: {
    time: "500ms",
    easing: "ease"
  }
});
var expandX = animation([style({
  width: "0",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  width: "*",
  padding: "*"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var collapse = trigger("collapse", [state("collapsed", style({
  height: "0",
  overflow: "hidden"
})), state("expanded", style({
  height: "*",
  overflow: "hidden"
})), transition("expanded => collapsed", useAnimation(collapseY)), transition("collapsed => expanded", useAnimation(expandY))]);
var collapseWithMargin = trigger("collapseWithMargin", [state("collapsed", style({
  "margin-top": "-100%"
})), state("expanded", style({
  "margin-top": "0"
})), transition("expanded => collapsed", useAnimation(collapseYWithMargin), {
  params: {
    time: "400ms",
    easing: "linear"
  }
}), transition("collapsed => expanded", useAnimation(expandYWithMargin))]);
var collapseLinearWithMargin = trigger("collapseLinearWithMargin", [state("collapsed", style({
  "margin-top": "-100vh"
})), state("expanded", style({
  "margin-top": "0"
})), transition("expanded => collapsed", useAnimation(collapseYWithMargin, {
  params: {
    time: "200ms",
    easing: "linear"
  }
})), transition("collapsed => expanded", useAnimation(expandYWithMargin, {
  params: {
    time: "250ms",
    easing: "linear"
  }
}))]);
var fadeIn = animation([style({
  opacity: "0"
}), animate("{{ time}} {{ easing }}", style({
  opacity: "1"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var fadeOut = animation([style({
  opacity: "1"
}), animate("{{ time}} {{ easing }}", style({
  opacity: "0"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var fadeInDown = animation([style({
  opacity: "0",
  transform: "{{ transform }} translateY(-20px)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "1",
  transform: "{{ transform }} translateY(0)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeInUp = animation([style({
  opacity: "0",
  transform: "{{ transform }} translateY(20px)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "1",
  transform: "{{ transform }} translateY(0)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeInLeft = animation([style({
  opacity: "0",
  transform: "{{ transform }} translateX(20px)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "1",
  transform: "{{ transform }} translateX(0)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeInRight = animation([style({
  opacity: "0",
  transform: "{{ transform }} translateX(-20px)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "1",
  transform: "{{ transform }} translateX(0)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeOutDown = animation([style({
  opacity: "1",
  transform: "{{ transform }} translateY(0)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "0",
  transform: "{{ transform }} translateY(20px)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeOutUp = animation([style({
  opacity: "1",
  transform: "{{ transform }} translateY(0)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "0",
  transform: "{{ transform }} translateY(-20px)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeOutLeft = animation([style({
  opacity: "1",
  transform: "{{ transform }} translateX(0)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "0",
  transform: "{{ transform }} translateX(20px)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeOutRight = animation([style({
  opacity: "1",
  transform: "{{ transform }} translateX(0)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "0",
  transform: "{{ transform }} translateX(-20px)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeAnimation = trigger("fade", [transition(":enter", useAnimation(fadeIn)), transition(":leave", useAnimation(fadeOut))]);
var dialogAnimation = trigger("dialog", [transition(":enter", useAnimation(fadeInDown)), transition(":leave", useAnimation(fadeOut))]);
var slideFromBottom = trigger("slideFromBottom", [transition("* <=> *", [style({
  "margin-top": "20px",
  opacity: "0"
}), animate("0.2s ease-out", style({
  opacity: "1",
  "margin-top": "0px"
}))])]);
var toastInOut = trigger("toastInOut", [transition("* <=> *", [query(":enter", [style({
  opacity: 0,
  transform: "translateY(20px)"
}), animate("350ms ease", style({
  opacity: 1,
  transform: "translateY(0)"
}))], {
  optional: true
}), query(":leave", animate("450ms ease", style({
  opacity: 0
})), {
  optional: true
})])]);
var _BreadcrumbItemsComponent = class _BreadcrumbItemsComponent {
  constructor() {
    this.items = [];
  }
};
_BreadcrumbItemsComponent.ɵfac = function BreadcrumbItemsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbItemsComponent)();
};
_BreadcrumbItemsComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbItemsComponent,
  selectors: [["abp-breadcrumb-items"]],
  inputs: {
    items: "items"
  },
  decls: 5,
  vars: 1,
  consts: [["linkTemplate", ""], ["textTemplate", ""], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", 3, "active"], ["aria-current", "page", 1, "breadcrumb-item"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "routerLink"]],
  template: function BreadcrumbItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, BreadcrumbItemsComponent_Conditional_0_Template, 6, 0, "ol", 2);
      ɵɵtemplate(1, BreadcrumbItemsComponent_ng_template_1_Template, 3, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, BreadcrumbItemsComponent_ng_template_3_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.items.length ? 0 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, RouterLink, LocalizationPipe],
  encapsulation: 2
});
var BreadcrumbItemsComponent = _BreadcrumbItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbItemsComponent, [{
    type: Component,
    args: [{
      selector: "abp-breadcrumb-items",
      imports: [NgTemplateOutlet, RouterLink, LocalizationPipe],
      template: '@if (items.length) {\r\n  <ol class="breadcrumb">\r\n    <li class="breadcrumb-item">\r\n      <a routerLink="/"><i class="fa fa-home" aria-hidden="true"></i> </a>\r\n    </li>\r\n    @for (item of items; track $index; let last = $last) {\r\n      <li class="breadcrumb-item" [class.active]="last" aria-current="page">\r\n        <ng-container\r\n          *ngTemplateOutlet="item.path ? linkTemplate : textTemplate; context: { $implicit: item }"\r\n        ></ng-container>\r\n      </li>\r\n    }\r\n  </ol>\r\n}\r\n\r\n<ng-template #linkTemplate let-item>\r\n  <a [routerLink]="item.path"> {{ item.name | abpLocalization }}</a>\r\n</ng-template>\r\n\r\n<ng-template #textTemplate let-item>\r\n  {{ item.name | abpLocalization }}\r\n</ng-template>\r\n'
    }]
  }], null, {
    items: [{
      type: Input
    }]
  });
})();
var _BreadcrumbComponent = class _BreadcrumbComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.router = inject(Router);
    this.routes = inject(RoutesService);
    this.subscription = inject(SubscriptionService);
    this.routerEvents = inject(RouterEvents);
    this.segments = [];
  }
  ngOnInit() {
    this.subscription.addOne(this.routerEvents.getNavigationEvents("End").pipe(startWith(null), map(() => this.routes.search({
      path: getRoutePath(this.router)
    }))), (route) => {
      this.segments = [];
      if (route) {
        let node = {
          parent: route
        };
        while (node.parent) {
          node = node.parent;
          const _a = node, {
            parent,
            children,
            isLeaf,
            path
          } = _a, segment = __objRest(_a, [
            "parent",
            "children",
            "isLeaf",
            "path"
          ]);
          if (!isAdministration(segment)) this.segments.unshift(segment);
        }
        this.cdRef.detectChanges();
      }
    });
  }
};
_BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbComponent)();
};
_BreadcrumbComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbComponent,
  selectors: [["abp-breadcrumb"]],
  features: [ɵɵProvidersFeature([SubscriptionService])],
  decls: 1,
  vars: 1,
  consts: [[3, "items"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "abp-breadcrumb-items", 0);
    }
    if (rf & 2) {
      ɵɵproperty("items", ctx.segments);
    }
  },
  dependencies: [BreadcrumbItemsComponent],
  encapsulation: 2,
  changeDetection: 0
});
var BreadcrumbComponent = _BreadcrumbComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{
      selector: "abp-breadcrumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [SubscriptionService],
      imports: [BreadcrumbItemsComponent],
      template: '<abp-breadcrumb-items [items]="segments"></abp-breadcrumb-items>\r\n'
    }]
  }], null, null);
})();
function isAdministration(route) {
  return route.name === "AbpUiNavigation::Menu:Administration";
}
var _ButtonComponent = class _ButtonComponent {
  constructor() {
    this.renderer = inject(Renderer2);
    this.buttonId = "";
    this.buttonClass = "btn btn-primary";
    this.buttonType = "button";
    this.formName = void 0;
    this.loading = false;
    this.disabled = false;
    this.click = new EventEmitter();
    this.focus = new EventEmitter();
    this.blur = new EventEmitter();
    this.abpClick = new EventEmitter();
    this.abpFocus = new EventEmitter();
    this.abpBlur = new EventEmitter();
  }
  get icon() {
    return `${this.loading ? "fa fa-spinner fa-spin" : this.iconClass || "d-none"}`;
  }
  ngOnInit() {
    if (this.attributes) {
      Object.keys(this.attributes).forEach((key) => {
        if (this.attributes?.[key]) {
          this.renderer.setAttribute(this.buttonRef.nativeElement, key, this.attributes[key]);
        }
      });
    }
  }
};
_ButtonComponent.ɵfac = function ButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonComponent)();
};
_ButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: _ButtonComponent,
  selectors: [["abp-button"]],
  viewQuery: function ButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonRef = _t.first);
    }
  },
  inputs: {
    buttonId: "buttonId",
    buttonClass: "buttonClass",
    buttonType: "buttonType",
    formName: "formName",
    iconClass: "iconClass",
    loading: "loading",
    disabled: "disabled",
    attributes: "attributes"
  },
  outputs: {
    click: "click",
    focus: "focus",
    blur: "blur",
    abpClick: "abpClick",
    abpFocus: "abpFocus",
    abpBlur: "abpBlur"
  },
  ngContentSelectors: _c2,
  decls: 4,
  vars: 6,
  consts: [["button", ""], [3, "click.stop", "focus", "blur", "id", "ngClass", "disabled"], ["aria-hidden", "true", 1, "me-1", 3, "ngClass"]],
  template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 1, 0);
      ɵɵlistener("click.stop", function ButtonComponent_Template_button_click_stop_0_listener($event) {
        ɵɵrestoreView(_r1);
        ctx.click.next($event);
        return ɵɵresetView(ctx.abpClick.next($event));
      })("focus", function ButtonComponent_Template_button_focus_0_listener($event) {
        ɵɵrestoreView(_r1);
        ctx.focus.next($event);
        return ɵɵresetView(ctx.abpFocus.next($event));
      })("blur", function ButtonComponent_Template_button_blur_0_listener($event) {
        ɵɵrestoreView(_r1);
        ctx.blur.next($event);
        return ɵɵresetView(ctx.abpBlur.next($event));
      });
      ɵɵelement(2, "i", 2);
      ɵɵprojection(3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("id", ctx.buttonId)("ngClass", ctx.buttonClass)("disabled", ctx.loading || ctx.disabled);
      ɵɵattribute("type", ctx.buttonType)("form", ctx.formName);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.icon);
    }
  },
  dependencies: [CommonModule, NgClass, StopPropagationDirective],
  encapsulation: 2
});
var ButtonComponent = _ButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      selector: "abp-button",
      template: `
    <button
      #button
      [id]="buttonId"
      [attr.type]="buttonType"
      [attr.form]="formName"
      [ngClass]="buttonClass"
      [disabled]="loading || disabled"
      (click.stop)="click.next($event); abpClick.next($event)"
      (focus)="focus.next($event); abpFocus.next($event)"
      (blur)="blur.next($event); abpBlur.next($event)"
    >
      <i [ngClass]="icon" class="me-1" aria-hidden="true"></i><ng-content></ng-content>
    </button>
  `,
      imports: [CommonModule, StopPropagationDirective]
    }]
  }], null, {
    buttonId: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    buttonType: [{
      type: Input
    }],
    formName: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    click: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    abpClick: [{
      type: Output
    }],
    abpFocus: [{
      type: Output
    }],
    abpBlur: [{
      type: Output
    }],
    buttonRef: [{
      type: ViewChild,
      args: ["button", {
        static: true
      }]
    }]
  });
})();
var Confirmation;
(function(Confirmation2) {
  let Status;
  (function(Status2) {
    Status2["confirm"] = "confirm";
    Status2["reject"] = "reject";
    Status2["dismiss"] = "dismiss";
  })(Status = Confirmation2.Status || (Confirmation2.Status = {}));
})(Confirmation || (Confirmation = {}));
var CONFIRMATION_ICONS = new InjectionToken("CONFIRMATION_ICONS");
var DEFAULT_CONFIRMATION_ICONS = {
  info: "fa fa-info-circle",
  success: "fa fa-check-circle",
  warning: "fa fa-exclamation-triangle",
  error: "fa fa-times-circle",
  default: "fa fa-question-circle",
  neutral: ""
};
var _ConfirmationComponent = class _ConfirmationComponent {
  constructor() {
    this.icons = inject(CONFIRMATION_ICONS);
    this.confirm = Confirmation.Status.confirm;
    this.reject = Confirmation.Status.reject;
    this.dismiss = Confirmation.Status.dismiss;
  }
  close(status) {
    this.clear(status);
  }
  getIconClass({
    severity,
    options
  }) {
    if (options && options.icon) {
      return options.icon;
    }
    if (!this.icons) {
      return "";
    }
    if (severity) {
      return this.icons[severity];
    }
    return this.icons.default;
  }
  isCustomIconExists({
    options
  }) {
    return !!(options && (options.iconTemplate || options.icon));
  }
  isIconTemplateExits({
    options
  }) {
    return !!(options && options.iconTemplate);
  }
};
_ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmationComponent)();
};
_ConfirmationComponent.ɵcmp = ɵɵdefineComponent({
  type: _ConfirmationComponent,
  selectors: [["abp-confirmation"]],
  decls: 2,
  vars: 3,
  consts: [[1, "confirmation"], [1, "confirmation-backdrop", 3, "click"], [1, "confirmation-dialog"], [1, "icon-container", 3, "ngClass"], [1, "content"], [1, "title", 3, "innerHTML"], [1, "message", 3, "innerHTML"], [1, "footer"], ["id", "cancel", 1, "btn", "btn-outline-primary", "me-2", 3, "innerHTML"], ["id", "confirm", 1, "btn", "btn-primary", 3, "innerHTML"], [3, "outerHTML"], [1, "icon", 3, "ngClass"], ["id", "cancel", 1, "btn", "btn-outline-primary", "me-2", 3, "click", "innerHTML"], ["id", "confirm", 1, "btn", "btn-primary", 3, "click", "innerHTML"]],
  template: function ConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, ConfirmationComponent_Conditional_0_Template, 10, 5, "div", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.confirmation$)) ? 0 : -1, tmp_0_0);
    }
  },
  dependencies: [NgClass, AsyncPipe, LocalizationPipe],
  styles: [".confirmation[_ngcontent-%COMP%]{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation[_ngcontent-%COMP%]   .confirmation-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]{width:90vw}}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:40px 20px 10px}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-grow:1;display:block}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{display:block;padding:8px 20px 20px;font-size:16px;font-weight:400;text-align:center;margin-bottom:0}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;padding:20px;width:100%}"]
});
var ConfirmationComponent = _ConfirmationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationComponent, [{
    type: Component,
    args: [{
      selector: "abp-confirmation",
      imports: [NgClass, AsyncPipe, LocalizationPipe],
      template: `@if (confirmation$ | async; as data) {\r
  <div class="confirmation">\r
    <div\r
      class="confirmation-backdrop"\r
      (click)="data.options?.dismissible ? close(dismiss) : null"\r
    ></div>\r
    <div class="confirmation-dialog">\r
      @if (data.severity || isCustomIconExists(data)) {\r
        <div class="icon-container" [ngClass]="data.severity">\r
          @if (isIconTemplateExits(data)) {\r
            <div [outerHTML]="data.options.iconTemplate"></div>\r
          } @else {\r
            <i class="icon" [ngClass]="getIconClass(data)"></i>\r
          }\r
        </div>\r
      }\r
      <div class="content">\r
        @if (data.title) {\r
          <h1\r
            class="title"\r
            [innerHTML]="data.title | abpLocalization: data.options?.titleLocalizationParams"\r
          ></h1>\r
        }\r
        @if (data.message) {\r
          <p\r
            class="message"\r
            [innerHTML]="data.message | abpLocalization: data.options?.messageLocalizationParams"\r
          ></p>\r
        }\r
      </div>\r
      <div class="footer">\r
        @if (!data?.options?.hideCancelBtn) {\r
          <button\r
            id="cancel"\r
            class="btn btn-outline-primary me-2"\r
            [innerHTML]="data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization"\r
            (click)="close(reject)"\r
          ></button>\r
        }\r
        @if (!data?.options?.hideYesBtn) {\r
          <button\r
            id="confirm"\r
            class="btn btn-primary"\r
            [innerHTML]="data.options?.yesText || 'AbpUi::Yes' | abpLocalization"\r
            (click)="close(confirm)"\r
          ></button>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
}\r
`,
      styles: [".confirmation{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation .confirmation-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{display:flex;align-items:center;justify-content:center;padding:40px 20px 10px}.confirmation .confirmation-dialog .icon-container .icon{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation .confirmation-dialog .content{flex-grow:1;display:block}.confirmation .confirmation-dialog .content .title{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;padding:8px 20px 20px;font-size:16px;font-weight:400;text-align:center;margin-bottom:0}.confirmation .confirmation-dialog .footer{display:flex;align-items:center;justify-content:flex-end;padding:20px;width:100%}\n"]
    }]
  }], null, null);
})();
var _HttpErrorWrapperComponent = class _HttpErrorWrapperComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.document = inject(DOCUMENT);
    this.window = this.document.defaultView;
    this.router = inject(Router);
    this.status = 0;
    this.title = "_::Oops!";
    this.details = "_::Sorry, an error has occured.";
    this.customComponent = void 0;
    this.hideCloseIcon = false;
    this.isHomeShow = true;
  }
  get statusText() {
    return this.status ? `[${this.status}]` : "";
  }
  ngOnInit() {
    const computedStyle = this.window.getComputedStyle(this.document.body);
    const backgroundColor = computedStyle?.getPropertyValue("background-color");
    this.backgroundColor = backgroundColor || "#fff";
  }
  ngAfterViewInit() {
    if (this.customComponent) {
      const customComponentRef = createComponent(this.customComponent, {
        environmentInjector: this.environmentInjector
      });
      customComponentRef.instance.errorStatus = this.status;
      if (customComponentRef.instance.status) {
        customComponentRef.instance.status.set(this.status);
      }
      customComponentRef.instance.destroy$ = this.destroy$;
      this.appRef.attachView(customComponentRef.hostView);
      if (this.containerRef) {
        this.containerRef.nativeElement.appendChild(customComponentRef.hostView.rootNodes[0]);
      }
      customComponentRef.changeDetectorRef.detectChanges();
    }
    fromEvent(this.document, "keyup").pipe(debounceTime(150), filter((key) => key && key.key === "Escape"), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.destroy());
  }
  goHome() {
    this.router.navigateByUrl("/", {
      onSameUrlNavigation: "reload"
    });
    this.destroy();
  }
  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnDestroy() {
    this.destroy();
  }
};
_HttpErrorWrapperComponent.ɵfac = function HttpErrorWrapperComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HttpErrorWrapperComponent)();
};
_HttpErrorWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: _HttpErrorWrapperComponent,
  selectors: [["abp-http-error-wrapper"]],
  viewQuery: function HttpErrorWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  decls: 4,
  vars: 4,
  consts: [["container", ""], ["id", "abp-http-error-container", 1, "error"], ["id", "abp-close-button", "type", "button", 1, "btn-close", "me-2"], [1, "row", "centered"], ["id", "abp-close-button", "type", "button", 1, "btn-close", "me-2", 3, "click"], [1, "col-md-12"], [1, "error-template"], [1, "error-details"], [1, "error-actions"], [1, "btn", "btn-primary", "btn-md", "mt-2"], [1, "btn", "btn-primary", "btn-md", "mt-2", 3, "click"], [1, "glyphicon", "glyphicon-home"]],
  template: function HttpErrorWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵconditionalCreate(2, HttpErrorWrapperComponent_Conditional_2_Template, 1, 0, "button", 2);
      ɵɵconditionalCreate(3, HttpErrorWrapperComponent_Conditional_3_Template, 11, 8, "div", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("background-color", ctx.backgroundColor);
      ɵɵadvance(2);
      ɵɵconditional(!ctx.hideCloseIcon ? 2 : -1);
      ɵɵadvance();
      ɵɵconditional(!ctx.customComponent ? 3 : -1);
    }
  },
  dependencies: [CommonModule, LocalizationPipe],
  styles: [".error[_ngcontent-%COMP%]{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}"]
});
var HttpErrorWrapperComponent = _HttpErrorWrapperComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpErrorWrapperComponent, [{
    type: Component,
    args: [{
      selector: "abp-http-error-wrapper",
      imports: [CommonModule, LocalizationPipe],
      template: `<div\r
  #container\r
  id="abp-http-error-container"\r
  class="error"\r
  [style.backgroundColor]="backgroundColor"\r
>\r
  @if (!hideCloseIcon) {\r
    <button id="abp-close-button" type="button" class="btn-close me-2" (click)="destroy()"></button>\r
  }\r
\r
  @if (!customComponent) {\r
    <div class="row centered">\r
      <div class="col-md-12">\r
        <div class="error-template">\r
          <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r
          <div class="error-details">\r
            {{ details | abpLocalization }}\r
          </div>\r
          <div class="error-actions">\r
            @if (isHomeShow) {\r
              <a (click)="goHome()" class="btn btn-primary btn-md mt-2"\r
                ><span class="glyphicon glyphicon-home"></span>\r
                {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r
              </a>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
`,
      styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}\n"]
    }]
  }], null, {
    containerRef: [{
      type: ViewChild,
      args: ["container", {
        static: false
      }]
    }]
  });
})();
var _LoaderBarComponent = class _LoaderBarComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.subscription = inject(SubscriptionService);
    this.httpWaitService = inject(HttpWaitService);
    this.routerWaitService = inject(RouterWaitService);
    this.containerClass = "abp-loader-bar";
    this.color = "#77b6ff";
    this.progressLevel = 0;
    this.interval = new Subscription();
    this.timer = new Subscription();
    this.intervalPeriod = 350;
    this.stopDelay = 800;
    this.clearProgress = () => {
      this.progressLevel = 0;
      this.cdRef.detectChanges();
    };
    this.reportProgress = () => {
      if (this.progressLevel < 75) {
        this.progressLevel += 1 + Math.random() * 9;
      } else if (this.progressLevel < 90) {
        this.progressLevel += 0.4;
      } else if (this.progressLevel < 100) {
        this.progressLevel += 0.1;
      } else {
        this.interval.unsubscribe();
      }
      this.cdRef.detectChanges();
    };
  }
  set isLoading(value) {
    this._isLoading = value;
    this.cdRef.detectChanges();
  }
  get isLoading() {
    return this._isLoading;
  }
  get boxShadow() {
    return `0 0 10px rgba(${this.color}, 0.5)`;
  }
  ngOnInit() {
    this.subscribeLoading();
  }
  subscribeLoading() {
    this.subscription.addOne(combineLatest([this.httpWaitService.getLoading$(), this.routerWaitService.getLoading$()]), ([httpLoading, routerLoading]) => {
      if (httpLoading || routerLoading) this.startLoading();
      else this.stopLoading();
    });
  }
  ngOnDestroy() {
    this.interval.unsubscribe();
  }
  startLoading() {
    if (this.isLoading || !this.interval.closed) return;
    this.isLoading = true;
    this.progressLevel = 0;
    this.cdRef.detectChanges();
    this.interval = timer(0, this.intervalPeriod).subscribe(this.reportProgress);
    this.timer.unsubscribe();
  }
  stopLoading() {
    this.interval.unsubscribe();
    this.progressLevel = 100;
    this.isLoading = false;
    if (!this.timer.closed) return;
    this.timer = timer(this.stopDelay).subscribe(this.clearProgress);
  }
};
_LoaderBarComponent.ɵfac = function LoaderBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoaderBarComponent)();
};
_LoaderBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _LoaderBarComponent,
  selectors: [["abp-loader-bar"]],
  inputs: {
    isLoading: "isLoading",
    containerClass: "containerClass",
    color: "color"
  },
  features: [ɵɵProvidersFeature([SubscriptionService])],
  decls: 2,
  vars: 11,
  consts: [["id", "abp-loader-bar", 3, "ngClass"], [1, "abp-progress", 3, "ngStyle"]],
  template: function LoaderBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("is-loading", ctx.isLoading);
      ɵɵproperty("ngClass", ctx.containerClass);
      ɵɵadvance();
      ɵɵstyleProp("width", ctx.progressLevel, "vw");
      ɵɵclassProp("progressing", ctx.progressLevel);
      ɵɵproperty("ngStyle", ɵɵpureFunction2(8, _c5, ctx.color, ctx.boxShadow));
    }
  },
  dependencies: [NgClass, NgStyle],
  styles: [".abp-loader-bar[_ngcontent-%COMP%]{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading[_ngcontent-%COMP%]{opacity:1;transition:none}.abp-loader-bar[_ngcontent-%COMP%]   .abp-progress[_ngcontent-%COMP%]{height:3px;left:0;position:fixed;top:0}.abp-loader-bar[_ngcontent-%COMP%]   .abp-progress.progressing[_ngcontent-%COMP%]{transition:width .4s ease}"]
});
var LoaderBarComponent = _LoaderBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderBarComponent, [{
    type: Component,
    args: [{
      selector: "abp-loader-bar",
      template: `
    <div id="abp-loader-bar" [ngClass]="containerClass" [class.is-loading]="isLoading">
      <div
        class="abp-progress"
        [class.progressing]="progressLevel"
        [style.width.vw]="progressLevel"
        [ngStyle]="{
          'background-color': color,
          'box-shadow': boxShadow,
        }"
      ></div>
    </div>
  `,
      providers: [SubscriptionService],
      imports: [NgClass, NgStyle],
      styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0}.abp-loader-bar .abp-progress.progressing{transition:width .4s ease}\n"]
    }]
  }], null, {
    isLoading: [{
      type: Input
    }],
    containerClass: [{
      type: Input
    }],
    color: [{
      type: Input
    }]
  });
})();
var _LoadingComponent = class _LoadingComponent {
};
_LoadingComponent.ɵfac = function LoadingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoadingComponent)();
};
_LoadingComponent.ɵcmp = ɵɵdefineComponent({
  type: _LoadingComponent,
  selectors: [["abp-loading"]],
  decls: 2,
  vars: 0,
  consts: [[1, "abp-loading"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-pulse", "abp-spinner"]],
  template: function LoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "i", 1);
      ɵɵelementEnd();
    }
  },
  styles: [".abp-loading{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1040}.abp-loading .abp-spinner{position:absolute;top:50%;left:50%;font-size:14px;-moz-transform:translateX(-50%) translateY(-50%);-o-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);-webkit-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%)}\n"],
  encapsulation: 2
});
var LoadingComponent = _LoadingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingComponent, [{
    type: Component,
    args: [{
      selector: "abp-loading",
      template: `
    <div class="abp-loading">
      <i class="fa fa-spinner fa-pulse abp-spinner" aria-hidden="true"></i>
    </div>
  `,
      encapsulation: ViewEncapsulation.None,
      imports: [],
      styles: [".abp-loading{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1040}.abp-loading .abp-spinner{position:absolute;top:50%;left:50%;font-size:14px;-moz-transform:translateX(-50%) translateY(-50%);-o-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);-webkit-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%)}\n"]
    }]
  }], null, null);
})();
var NavItem = class {
  constructor(props) {
    Object.assign(this, props);
  }
};
var UserMenu = class extends NavItem {
};
var _ConfirmationService = class _ConfirmationService {
  constructor() {
    this.contentProjectionService = inject(ContentProjectionService);
    this.document = inject(DOCUMENT);
    this.confirmation$ = new ReplaySubject(1);
    this.clear = (status = Confirmation.Status.dismiss) => {
      this.confirmation$.next(null);
      this.status$.next(status);
    };
  }
  setContainer() {
    this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent, {
      confirmation$: this.confirmation$,
      clear: this.clear
    }));
    setTimeout(() => {
      this.containerComponentRef.changeDetectorRef.detectChanges();
    }, 0);
  }
  info(message, title, options) {
    return this.show(message, title, "info", options);
  }
  success(message, title, options) {
    return this.show(message, title, "success", options);
  }
  warn(message, title, options) {
    return this.show(message, title, "warning", options);
  }
  error(message, title, options) {
    return this.show(message, title, "error", options);
  }
  show(message, title, severity, options = {}) {
    if (!this.containerComponentRef) this.setContainer();
    this.confirmation$.next({
      message,
      title,
      severity: severity || "neutral",
      options
    });
    this.status$ = new Subject();
    const {
      dismissible = true
    } = options;
    if (dismissible) this.listenToEscape();
    return this.status$;
  }
  listenToEscape() {
    fromEvent(this.document, "keyup").pipe(takeUntil(this.status$), debounceTime(150), filter((key) => key && key.key === "Escape")).subscribe(() => {
      this.clear();
    });
  }
};
_ConfirmationService.ɵfac = function ConfirmationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmationService)();
};
_ConfirmationService.ɵprov = ɵɵdefineInjectable({
  token: _ConfirmationService,
  factory: _ConfirmationService.ɵfac,
  providedIn: "root"
});
var ConfirmationService = _ConfirmationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AbstractMenuService = class {
  get items() {
    return this._items$.value;
  }
  get items$() {
    return this._items$.asObservable();
  }
  constructor() {
    this._items$ = new BehaviorSubject([]);
    this.sortItems = (a, b) => {
      return this.sortFn(a, b);
    };
    this.sortFn = inject(SORT_COMPARE_FUNC);
  }
  addItems(newItems) {
    const items = [...this.items];
    newItems.forEach((item) => {
      const index = items.findIndex((i) => i.id === item.id);
      const data = new this.baseClass(item);
      if (index > -1) {
        items[index] = data;
        return;
      }
      items.push(data);
    });
    items.sort(this.sortItems);
    this._items$.next(items);
  }
  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index < 0) return;
    const items = [...this.items.slice(0, index), ...this.items.slice(index + 1)];
    this._items$.next(items);
  }
  patchItem(id, item) {
    const index = this.items.findIndex((i) => i.id === id);
    if (index < 0) return;
    const items = [...this.items];
    items[index] = new this.baseClass(__spreadValues(__spreadValues({}, items[index]), item));
    items.sort(this.sortItems);
    this._items$.next(items);
  }
};
var _NavItemsService = class _NavItemsService extends AbstractMenuService {
  constructor() {
    super(...arguments);
    this.baseClass = NavItem;
  }
};
_NavItemsService.ɵfac = /* @__PURE__ */ (() => {
  let ɵNavItemsService_BaseFactory;
  return function NavItemsService_Factory(__ngFactoryType__) {
    return (ɵNavItemsService_BaseFactory || (ɵNavItemsService_BaseFactory = ɵɵgetInheritedFactory(_NavItemsService)))(__ngFactoryType__ || _NavItemsService);
  };
})();
_NavItemsService.ɵprov = ɵɵdefineInjectable({
  token: _NavItemsService,
  factory: _NavItemsService.ɵfac,
  providedIn: "root"
});
var NavItemsService = _NavItemsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavItemsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _PageAlertService = class _PageAlertService {
  constructor() {
    this.alerts = new InternalStore([]);
    this.alerts$ = this.alerts.sliceState((state2) => state2);
  }
  show(alert) {
    const newAlert = __spreadProps(__spreadValues({}, alert), {
      dismissible: alert.dismissible ?? true
    });
    this.alerts.set([newAlert, ...this.alerts.state]);
  }
  remove(index) {
    const alerts = [...this.alerts.state];
    alerts.splice(index, 1);
    this.alerts.set(alerts);
  }
};
_PageAlertService.ɵfac = function PageAlertService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageAlertService)();
};
_PageAlertService.ɵprov = ɵɵdefineInjectable({
  token: _PageAlertService,
  factory: _PageAlertService.ɵfac,
  providedIn: "root"
});
var PageAlertService = _PageAlertService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageAlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ToastComponent = class _ToastComponent {
  constructor() {
    this.remove = new EventEmitter();
  }
  get severityClass() {
    if (!this.toast || !this.toast.severity) return "";
    return `abp-toast-${this.toast.severity}`;
  }
  get iconClass() {
    const {
      iconClass
    } = this.toast.options || {};
    if (iconClass) {
      return iconClass;
    }
    switch (this.toast.severity) {
      case "success":
        return "bi-check";
      case "info":
        return "bi-info-circle";
      case "warning":
        return "bi-exclamation-triangle";
      case "error":
        return "bi-shield-exclamation";
      default:
        return "bi-exclamation-triangle";
    }
  }
  ngOnInit() {
    const {
      sticky,
      life
    } = this.toast.options || {};
    if (sticky) return;
    const timeout = life || 5e3;
    setTimeout(() => {
      this.close();
    }, timeout);
  }
  close() {
    this.remove.emit(this.toast.options?.id);
  }
  tap() {
    if (this.toast.options?.tapToDismiss) this.close();
  }
};
_ToastComponent.ɵfac = function ToastComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastComponent)();
};
_ToastComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastComponent,
  selectors: [["abp-toast"]],
  inputs: {
    toast: "toast"
  },
  outputs: {
    remove: "remove"
  },
  decls: 10,
  vars: 11,
  consts: [[1, "abp-toast", 3, "click", "ngClass"], [1, "abp-toast-icon"], ["aria-hidden", "true", 1, "bi", "icon", 3, "ngClass"], [1, "abp-toast-content"], [1, "abp-toast-close-button"], [1, "abp-toast-title"], [1, "abp-toast-message", 3, "innerHTML"], [1, "abp-toast-close-button", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-x", "fs-4"]],
  template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function ToastComponent_Template_div_click_0_listener() {
        return ctx.tap();
      });
      ɵɵelementStart(1, "div", 1);
      ɵɵelement(2, "i", 2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 3);
      ɵɵconditionalCreate(4, ToastComponent_Conditional_4_Template, 2, 0, "button", 4);
      ɵɵelementStart(5, "div", 5);
      ɵɵtext(6);
      ɵɵpipe(7, "abpLocalization");
      ɵɵelementEnd();
      ɵɵelement(8, "p", 6);
      ɵɵpipe(9, "abpLocalization");
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.severityClass);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.iconClass);
      ɵɵadvance(2);
      ɵɵconditional((ctx.toast.options == null ? null : ctx.toast.options.closable) ? 4 : -1);
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 5, ctx.toast.title, ctx.toast.options == null ? null : ctx.toast.options.titleLocalizationParams), " ");
      ɵɵadvance(2);
      ɵɵproperty("innerHTML", ɵɵpipeBind2(9, 8, ctx.toast.message, ctx.toast.options == null ? null : ctx.toast.options.messageLocalizationParams), ɵɵsanitizeHtml);
    }
  },
  dependencies: [NgClass, LocalizationPipe],
  styles: [".abp-toast[_ngcontent-%COMP%]{display:grid;grid-template-columns:35px 1fr;gap:5px;margin:5px 0;padding:7px;width:350px;-webkit-user-select:none;user-select:none;z-index:9999;color:#fff;border-radius:8px;font-size:14px;box-shadow:0 0 20px #4c577d05;border:2px solid #f0f0f0;background-color:#f0f0f0;color:#000;box-shadow:0 0 10px -5px #0006}.abp-toast[_ngcontent-%COMP%]:hover{border:2px solid #e4e4e4;background-color:#e4e4e4;box-shadow:0 0 15px -5px #0006}.abp-toast[_ngcontent-%COMP%]{opacity:1}.abp-toast.abp-toast-success[_ngcontent-%COMP%]{border:2px solid #4fbf67;background-color:#4fbf67;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-success[_ngcontent-%COMP%]:hover{border:2px solid rgb(69.1,187.4,94.45);background-color:#45bb5e;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-info[_ngcontent-%COMP%]{border:2px solid #438aa7;background-color:#438aa7;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-info[_ngcontent-%COMP%]:hover{border:2px solid rgb(63.65,131.1,158.65);background-color:#40839f;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-warning[_ngcontent-%COMP%]{border:2px solid #ff9f38;background-color:#ff9f38;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-warning[_ngcontent-%COMP%]:hover{border:2px solid rgb(255,151.4984924623,40.45);background-color:#ff9728;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-error[_ngcontent-%COMP%]{border:2px solid #c00d49;background-color:#c00d49;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-error[_ngcontent-%COMP%]:hover{border:2px solid rgb(182.4,12.35,69.35);background-color:#b60c45;box-shadow:0 0 15px -5px #0006}.abp-toast[_ngcontent-%COMP%]   .abp-toast-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.abp-toast[_ngcontent-%COMP%]   .abp-toast-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:32px}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]{position:relative;display:flex;align-self:center;flex-direction:column;word-break:break-word;padding-bottom:2px}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]   .abp-toast-close-button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px 0 0;width:25px;height:100%;border:none;border-radius:50%;background:transparent;color:inherit}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]   .abp-toast-close-button[_ngcontent-%COMP%]:focus{outline:none}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]   .abp-toast-title[_ngcontent-%COMP%]{margin:0;padding:0;font-size:1rem;font-weight:600}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]   .abp-toast-message[_ngcontent-%COMP%]{margin:0;padding:0;max-width:240px}"]
});
var ToastComponent = _ToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{
      selector: "abp-toast",
      imports: [NgClass, LocalizationPipe],
      template: '<div class="abp-toast" [ngClass]="severityClass" (click)="tap()">\r\n  <div class="abp-toast-icon">\r\n    <i class="bi icon" [ngClass]="iconClass" aria-hidden="true"></i>\r\n  </div>\r\n  <div class="abp-toast-content">\r\n    @if (toast.options?.closable) {\r\n      <button class="abp-toast-close-button" (click)="close()">\r\n        <i class="bi bi-x fs-4" aria-hidden="true"></i>\r\n      </button>\r\n    }\r\n    <div class="abp-toast-title">\r\n      {{ toast.title | abpLocalization: toast.options?.titleLocalizationParams }}\r\n    </div>\r\n    <p\r\n      class="abp-toast-message"\r\n      [innerHTML]="toast.message | abpLocalization: toast.options?.messageLocalizationParams"\r\n    ></p>\r\n  </div>\r\n</div>\r\n',
      styles: [".abp-toast{display:grid;grid-template-columns:35px 1fr;gap:5px;margin:5px 0;padding:7px;width:350px;-webkit-user-select:none;user-select:none;z-index:9999;color:#fff;border-radius:8px;font-size:14px;box-shadow:0 0 20px #4c577d05;border:2px solid #f0f0f0;background-color:#f0f0f0;color:#000;box-shadow:0 0 10px -5px #0006}.abp-toast:hover{border:2px solid #e4e4e4;background-color:#e4e4e4;box-shadow:0 0 15px -5px #0006}.abp-toast{opacity:1}.abp-toast.abp-toast-success{border:2px solid #4fbf67;background-color:#4fbf67;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-success:hover{border:2px solid rgb(69.1,187.4,94.45);background-color:#45bb5e;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-info{border:2px solid #438aa7;background-color:#438aa7;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-info:hover{border:2px solid rgb(63.65,131.1,158.65);background-color:#40839f;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-warning{border:2px solid #ff9f38;background-color:#ff9f38;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-warning:hover{border:2px solid rgb(255,151.4984924623,40.45);background-color:#ff9728;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-error{border:2px solid #c00d49;background-color:#c00d49;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-error:hover{border:2px solid rgb(182.4,12.35,69.35);background-color:#b60c45;box-shadow:0 0 15px -5px #0006}.abp-toast .abp-toast-icon{display:flex;align-items:center;justify-content:center}.abp-toast .abp-toast-icon .icon{font-size:32px}.abp-toast .abp-toast-content{position:relative;display:flex;align-self:center;flex-direction:column;word-break:break-word;padding-bottom:2px}.abp-toast .abp-toast-content .abp-toast-close-button{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px 0 0;width:25px;height:100%;border:none;border-radius:50%;background:transparent;color:inherit}.abp-toast .abp-toast-content .abp-toast-close-button:focus{outline:none}.abp-toast .abp-toast-content .abp-toast-title{margin:0;padding:0;font-size:1rem;font-weight:600}.abp-toast .abp-toast-content .abp-toast-message{margin:0;padding:0;max-width:240px}\n"]
    }]
  }], null, {
    toast: [{
      type: Input
    }],
    remove: [{
      type: Output
    }]
  });
})();
var _ToastContainerComponent = class _ToastContainerComponent {
  constructor() {
    this.toasts = [];
    this.right = "30px";
    this.defaultRight = "30px";
    this.defaultMobileRight = "0";
    this.bottom = "30px";
  }
  ngOnInit() {
    this.setDefaultRight();
    this.toasts$.subscribe((toasts) => {
      this.toasts = this.toastKey ? toasts.filter((t) => {
        return t.options && t.options.containerKey !== this.toastKey;
      }) : toasts;
    });
  }
  onWindowResize() {
    this.setDefaultRight();
  }
  setDefaultRight() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768 && this.right == this.defaultRight) {
      this.right = this.defaultMobileRight;
    }
  }
  trackByFunc(index, toast) {
    if (!toast) return null;
    return toast.options?.id;
  }
};
_ToastContainerComponent.ɵfac = function ToastContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastContainerComponent)();
};
_ToastContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastContainerComponent,
  selectors: [["abp-toast-container"]],
  hostBindings: function ToastContainerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("resize", function ToastContainerComponent_resize_HostBindingHandler($event) {
        return ctx.onWindowResize($event);
      }, ɵɵresolveWindow);
    }
  },
  inputs: {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    toastKey: "toastKey"
  },
  decls: 3,
  vars: 11,
  consts: [[1, "abp-toast-container"], [3, "toast"], [3, "remove", "toast"]],
  template: function ToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵrepeaterCreate(1, ToastContainerComponent_For_2_Template, 1, 1, "abp-toast", 1, _forTrack0);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("top", ctx.top || "auto")("right", ctx.right || "auto")("bottom", ctx.bottom || "auto")("left", ctx.left || "auto")("display", ctx.toasts.length ? "flex" : "none");
      ɵɵproperty("@toastInOut", ctx.toasts.length);
      ɵɵadvance();
      ɵɵrepeater(ctx.toasts);
    }
  },
  dependencies: [ToastComponent],
  styles: [".abp-toast-container[_ngcontent-%COMP%]{position:fixed;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:350px;min-height:80px;z-index:1900}.abp-toast-container.new-on-top[_ngcontent-%COMP%]{flex-direction:column-reverse}@media only screen and (max-width:768px){.abp-toast-container[_ngcontent-%COMP%]{min-width:100%}}"],
  data: {
    animation: [toastInOut]
  }
});
var ToastContainerComponent = _ToastContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainerComponent, [{
    type: Component,
    args: [{
      selector: "abp-toast-container",
      animations: [toastInOut],
      imports: [ToastComponent],
      template: `<div\r
  class="abp-toast-container"\r
  [style.top]="top || 'auto'"\r
  [style.right]="right || 'auto'"\r
  [style.bottom]="bottom || 'auto'"\r
  [style.left]="left || 'auto'"\r
  [style.display]="toasts.length ? 'flex' : 'none'"\r
  [@toastInOut]="toasts.length"\r
>\r
  @for (toast of toasts; track toast.options?.id) {\r
    <abp-toast\r
      [toast]="toast"\r
      (remove)="remove($event)"\r
    ></abp-toast>\r
  }\r
</div>\r
`,
      styles: [".abp-toast-container{position:fixed;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:350px;min-height:80px;z-index:1900}.abp-toast-container.new-on-top{flex-direction:column-reverse}@media only screen and (max-width:768px){.abp-toast-container{min-width:100%}}\n"]
    }]
  }], null, {
    top: [{
      type: Input
    }],
    right: [{
      type: Input
    }],
    bottom: [{
      type: Input
    }],
    left: [{
      type: Input
    }],
    toastKey: [{
      type: Input
    }],
    onWindowResize: [{
      type: HostListener,
      args: ["window:resize", ["$event"]]
    }]
  });
})();
var _ToasterService = class _ToasterService {
  setContainer() {
    this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ToastContainerComponent, {
      toasts$: this.toasts$,
      remove: this.remove
    }));
    this.containerComponentRef.changeDetectorRef.detectChanges();
  }
  constructor() {
    this.toasts$ = new ReplaySubject(1);
    this.lastId = -1;
    this.toasts = [];
    this.remove = (id) => {
      this.toasts = this.toasts.filter((toast) => toast.options?.id !== id);
      this.toasts$.next(this.toasts);
    };
    this.contentProjectionService = inject(ContentProjectionService);
  }
  /**
   * Creates an info toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param options Spesific style or structural options for individual toast
   */
  info(message, title, options) {
    return this.show(message, title, "info", options);
  }
  /**
   * Creates a success toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param options Spesific style or structural options for individual toast
   */
  success(message, title, options) {
    return this.show(message, title, "success", options);
  }
  /**
   * Creates a warning toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param options Spesific style or structural options for individual toast
   */
  warn(message, title, options) {
    return this.show(message, title, "warning", options);
  }
  /**
   * Creates an error toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param options Spesific style or structural options for individual toast
   */
  error(message, title, options) {
    return this.show(message, title, "error", options);
  }
  /**
   * Creates a toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param severity Sets color of the toast. "success", "warning" etc.
   * @param options Spesific style or structural options for individual toast
   */
  show(message, title = void 0, severity = "neutral", options = {}) {
    if (!this.containerComponentRef) this.setContainer();
    const id = ++this.lastId;
    this.toasts.push({
      message,
      title,
      severity,
      options: __spreadValues({
        closable: true,
        id
      }, options)
    });
    this.toasts$.next(this.toasts);
    return id;
  }
  /**
   * Removes all open toasts at once.
   */
  clear(containerKey) {
    this.toasts = !containerKey ? [] : this.toasts.filter((toast) => toast.options?.containerKey !== containerKey);
    this.toasts$.next(this.toasts);
  }
};
_ToasterService.ɵfac = function ToasterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToasterService)();
};
_ToasterService.ɵprov = ɵɵdefineInjectable({
  token: _ToasterService,
  factory: _ToasterService.ɵfac,
  providedIn: "root"
});
var ToasterService = _ToasterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _UserMenuService = class _UserMenuService extends AbstractMenuService {
  constructor() {
    super(...arguments);
    this.baseClass = UserMenu;
  }
};
_UserMenuService.ɵfac = /* @__PURE__ */ (() => {
  let ɵUserMenuService_BaseFactory;
  return function UserMenuService_Factory(__ngFactoryType__) {
    return (ɵUserMenuService_BaseFactory || (ɵUserMenuService_BaseFactory = ɵɵgetInheritedFactory(_UserMenuService)))(__ngFactoryType__ || _UserMenuService);
  };
})();
_UserMenuService.ɵprov = ɵɵdefineInjectable({
  token: _UserMenuService,
  factory: _UserMenuService.ɵfac,
  providedIn: "root"
});
var UserMenuService = _UserMenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMenuService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var HTTP_ERROR_CONFIG = new InjectionToken("HTTP_ERROR_CONFIG");
var HTTP_ERROR_HANDLER = new InjectionToken("HTTP_ERROR_HANDLER");
var CUSTOM_ERROR_HANDLERS = new InjectionToken("CUSTOM_ERROR_HANDLERS");
var _CreateErrorComponentService = class _CreateErrorComponentService {
  constructor() {
    this.document = inject(DOCUMENT);
    this.rendererFactory = inject(RendererFactory2);
    this.routerEvents = inject(RouterEvents);
    this.injector = inject(Injector);
    this.envInjector = inject(EnvironmentInjector);
    this.httpErrorConfig = inject(HTTP_ERROR_CONFIG);
    this.componentRef = null;
    this.listenToRouterDataResolved();
  }
  listenToRouterDataResolved() {
    this.routerEvents.getEvents(ResolveEnd).pipe(filter(() => !!this.componentRef)).subscribe(() => {
      this.componentRef?.destroy();
      this.componentRef = null;
    });
  }
  getErrorHostElement() {
    return this.document.body;
  }
  isCloseIconHidden() {
    return !!this.httpErrorConfig?.errorScreen?.hideCloseIcon;
  }
  canCreateCustomError(status) {
    const {
      component,
      forWhichErrors
    } = this.httpErrorConfig?.errorScreen || {};
    if (!component || !forWhichErrors) {
      return false;
    }
    return forWhichErrors.indexOf(status) > -1;
  }
  execute(instance) {
    const renderer = this.rendererFactory.createRenderer(null, null);
    const hostElement = this.getErrorHostElement();
    const host = renderer.selectRootElement(hostElement, true);
    this.componentRef = createComponent(HttpErrorWrapperComponent, {
      environmentInjector: this.envInjector
    });
    for (const key in instance) {
      if (Object.prototype.hasOwnProperty.call(this.componentRef.instance, key)) {
        this.componentRef.instance[key] = instance[key];
      }
    }
    this.componentRef.instance.hideCloseIcon = this.isCloseIconHidden();
    const appRef = this.injector.get(ApplicationRef);
    if (this.canCreateCustomError(instance.status)) {
      this.componentRef.instance.appRef = appRef;
      this.componentRef.instance.environmentInjector = this.envInjector;
      this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen?.component;
    }
    appRef.attachView(this.componentRef.hostView);
    renderer.appendChild(host, this.componentRef.hostView.rootNodes[0]);
    const destroy$ = new Subject();
    this.componentRef.instance.destroy$ = destroy$;
    destroy$.subscribe(() => {
      this.componentRef?.destroy();
      this.componentRef = null;
    });
  }
};
_CreateErrorComponentService.ɵfac = function CreateErrorComponentService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateErrorComponentService)();
};
_CreateErrorComponentService.ɵprov = ɵɵdefineInjectable({
  token: _CreateErrorComponentService,
  factory: _CreateErrorComponentService.ɵfac,
  providedIn: "root"
});
var CreateErrorComponentService = _CreateErrorComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateErrorComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var DEFAULT_ERROR_MESSAGES = {
  defaultError: {
    title: "An error has occurred!",
    details: "Error detail not sent by server."
  },
  defaultError401: {
    title: "You are not authenticated!",
    details: "You should be authenticated (sign in) in order to perform this operation."
  },
  defaultError403: {
    title: "You are not authorized!",
    details: "You are not allowed to perform this operation."
  },
  defaultError404: {
    title: "Resource not found!",
    details: "The resource requested could not found on the server."
  },
  defaultError500: {
    title: "Internal server error",
    details: "Error detail not sent by server."
  }
};
var DEFAULT_ERROR_LOCALIZATIONS = {
  defaultError: {
    title: "AbpUi::DefaultErrorMessage",
    details: "AbpUi::DefaultErrorMessageDetail"
  },
  defaultError401: {
    title: "AbpUi::DefaultErrorMessage401",
    details: "AbpUi::DefaultErrorMessage401Detail"
  },
  defaultError403: {
    title: "AbpUi::DefaultErrorMessage403",
    details: "AbpUi::DefaultErrorMessage403Detail"
  },
  defaultError404: {
    title: "AbpUi::DefaultErrorMessage404",
    details: "AbpUi::DefaultErrorMessage404Detail"
  },
  defaultError500: {
    title: "AbpUi::500Message",
    details: "AbpUi::DefaultErrorMessage"
  }
};
var CUSTOM_HTTP_ERROR_HANDLER_PRIORITY = Object.freeze({
  veryLow: -99,
  low: -9,
  normal: 0,
  high: 9,
  veryHigh: 99
});
var HTTP_ERROR_STATUS = {
  "401": "AbpUi::401Message",
  "403": "AbpUi::403Message",
  "404": "AbpUi::404Message",
  "500": "AbpUi::500Message"
};
var HTTP_ERROR_DETAIL = {
  "401": "AbpUi::DefaultErrorMessage401Detail",
  "403": "AbpUi::DefaultErrorMessage403Detail",
  "404": "AbpUi::DefaultErrorMessage404Detail",
  "500": "AbpUi::DefaultErrorMessage"
};
function getErrorFromRequestBody(body) {
  let message;
  let title;
  if (body.details) {
    message = body.details;
    title = body.message;
  } else if (body.message) {
    title = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title
    };
    message = body.message;
  } else {
    message = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title
    };
    title = "";
  }
  return {
    message,
    title
  };
}
var _AbpFormatErrorHandlerService = class _AbpFormatErrorHandlerService {
  constructor() {
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.high;
    this.confirmationService = inject(ConfirmationService);
    this.authService = inject(AuthService);
    this.error = void 0;
  }
  navigateToLogin() {
    return this.authService.navigateToLogin();
  }
  canHandle(error) {
    if (error instanceof HttpErrorResponse && error.headers.get("_AbpErrorFormat")) {
      this.error = error;
      return true;
    }
    return false;
  }
  execute() {
    const {
      message,
      title
    } = getErrorFromRequestBody(this.error?.error?.error);
    this.confirmationService.error(message, title, {
      hideCancelBtn: true,
      yesText: "AbpAccount::Close"
    }).subscribe(() => {
      if (this.error?.status === 401) {
        this.navigateToLogin();
      }
    });
  }
};
_AbpFormatErrorHandlerService.ɵfac = function AbpFormatErrorHandlerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpFormatErrorHandlerService)();
};
_AbpFormatErrorHandlerService.ɵprov = ɵɵdefineInjectable({
  token: _AbpFormatErrorHandlerService,
  factory: _AbpFormatErrorHandlerService.ɵfac,
  providedIn: "root"
});
var AbpFormatErrorHandlerService = _AbpFormatErrorHandlerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpFormatErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TenantResolveErrorHandlerService = class _TenantResolveErrorHandlerService {
  constructor() {
    this.sessionService = inject(SessionStateService);
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.high;
    this.authService = inject(AuthService);
  }
  isTenantResolveError(error) {
    return error instanceof HttpErrorResponse && !!error.headers.get("Abp-Tenant-Resolve-Error");
  }
  canHandle(error) {
    return this.isTenantResolveError(error);
  }
  execute() {
    this.sessionService.setTenant(null);
    this.authService.logout().subscribe();
  }
};
_TenantResolveErrorHandlerService.ɵfac = function TenantResolveErrorHandlerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TenantResolveErrorHandlerService)();
};
_TenantResolveErrorHandlerService.ɵprov = ɵɵdefineInjectable({
  token: _TenantResolveErrorHandlerService,
  factory: _TenantResolveErrorHandlerService.ɵfac,
  providedIn: "root"
});
var TenantResolveErrorHandlerService = _TenantResolveErrorHandlerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantResolveErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _StatusCodeErrorHandlerService = class _StatusCodeErrorHandlerService {
  constructor() {
    this.confirmationService = inject(ConfirmationService);
    this.createErrorComponentService = inject(CreateErrorComponentService);
    this.authService = inject(AuthService);
    this.handledStatusCodes = [401, 403, 404, 500];
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.normal;
  }
  navigateToLogin() {
    this.authService.navigateToLogin();
  }
  showConfirmation(message, title) {
    return this.confirmationService.error(message, title, {
      hideCancelBtn: true,
      yesText: "AbpAccount::Close"
    });
  }
  showPage() {
    const key = `defaultError${this.status}`;
    const shouldRemoveDetail = [401, 404].indexOf(this.status) > -1;
    const instance = {
      title: {
        key: DEFAULT_ERROR_LOCALIZATIONS[key]?.title,
        defaultValue: DEFAULT_ERROR_MESSAGES[key]?.title
      },
      details: {
        key: DEFAULT_ERROR_LOCALIZATIONS[key]?.details,
        defaultValue: DEFAULT_ERROR_MESSAGES[key]?.details
      },
      status: this.status
    };
    if (shouldRemoveDetail) {
      delete instance.details;
    }
    this.createErrorComponentService.execute(instance);
  }
  canHandle(error) {
    this.status = error?.status || 0;
    return this.handledStatusCodes.indexOf(this.status) > -1;
  }
  execute() {
    const key = `defaultError${this.status}`;
    const title = {
      key: DEFAULT_ERROR_LOCALIZATIONS[key]?.title,
      defaultValue: DEFAULT_ERROR_MESSAGES[key]?.title
    };
    const message = {
      key: DEFAULT_ERROR_LOCALIZATIONS[key]?.details,
      defaultValue: DEFAULT_ERROR_MESSAGES[key]?.details
    };
    const canCreateCustomError = this.createErrorComponentService.canCreateCustomError(this.status);
    switch (this.status) {
      case 401:
      case 404:
        if (canCreateCustomError) {
          this.showPage();
          break;
        }
        if (this.status === 401) {
          this.authService.navigateToLogin();
          break;
        }
        this.showConfirmation(title, message).subscribe();
        break;
      case 403:
      case 500:
        this.showPage();
        break;
    }
  }
};
_StatusCodeErrorHandlerService.ɵfac = function StatusCodeErrorHandlerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StatusCodeErrorHandlerService)();
};
_StatusCodeErrorHandlerService.ɵprov = ɵɵdefineInjectable({
  token: _StatusCodeErrorHandlerService,
  factory: _StatusCodeErrorHandlerService.ɵfac,
  providedIn: "root"
});
var StatusCodeErrorHandlerService = _StatusCodeErrorHandlerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusCodeErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _UnknownStatusCodeErrorHandlerService = class _UnknownStatusCodeErrorHandlerService {
  constructor() {
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.normal;
    this.statusText = "Unknown Error";
    this.message = "";
    this.createErrorComponentService = inject(CreateErrorComponentService);
  }
  canHandle(error) {
    if (error && error.status === 0 && error.statusText === this.statusText) {
      this.message = error.message;
      return true;
    }
    return false;
  }
  execute() {
    this.createErrorComponentService.execute({
      title: {
        key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title
      },
      details: this.message,
      isHomeShow: false
    });
  }
};
_UnknownStatusCodeErrorHandlerService.ɵfac = function UnknownStatusCodeErrorHandlerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UnknownStatusCodeErrorHandlerService)();
};
_UnknownStatusCodeErrorHandlerService.ɵprov = ɵɵdefineInjectable({
  token: _UnknownStatusCodeErrorHandlerService,
  factory: _UnknownStatusCodeErrorHandlerService.ɵfac,
  providedIn: "root"
});
var UnknownStatusCodeErrorHandlerService = _UnknownStatusCodeErrorHandlerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnknownStatusCodeErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var styles = `
.is-invalid .form-control {
  border-color: #dc3545;
  border-style: solid !important;
  padding-right: calc(1.5em + .75rem);
  background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e);
  background-repeat: no-repeat;
  background-position: right calc(.375em + .1875rem) center;
  background-size: calc(.75em + .375rem) calc(.75em + .375rem);
}

.is-invalid .invalid-feedback,
.is-invalid + * .invalid-feedback {
  display: block;
}

.data-tables-filter {
  text-align: right;
}

[dir=rtl] .data-tables-filter {
  text-align: left;
}

.pointer {
  cursor: pointer;
}

.navbar .dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 16px;
  top: 18px;
}

.navbar .dropdown-menu {
  min-width: 215px;
}

.datatable-scroll {
  margin-bottom: 5px !important;
  width: unset !important;
}

.ui-table-scrollable-body::-webkit-scrollbar {
  height: 5px !important;
  width: 5px !important;
}

.ui-table-scrollable-body::-webkit-scrollbar-track {
  background: #ddd;
}

.ui-table-scrollable-body::-webkit-scrollbar-thumb {
  background: #8a8686;
}

.abp-ellipsis-inline {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.abp-ellipsis {
  overflow: hidden !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-widget-overlay {
  z-index: 1000;
}

.color-white {
  color: #FFF !important;
}

.custom-checkbox > label {
  cursor: pointer;
}

/* <animations */

.fade-in-top {
  animation: fadeInTop 0.2s ease-in-out;
}

.fade-out-top {
  animation: fadeOutTop 0.2s ease-in-out;
}

.abp-collapsed-height {
  -moz-transition: max-height linear 0.35s;
  -ms-transition: max-height linear 0.35s;
  -o-transition: max-height linear 0.35s;
  -webkit-transition: max-height linear 0.35s;
  overflow:hidden;
  transition:max-height 0.35s linear;
  height:auto;
  max-height: 0;
}

.abp-mh-25 {
  max-height: 25vh;
}

.abp-mh-50 {
  transition:max-height 0.65s linear;
  max-height: 50vh;
}

.abp-mh-75 {
  transition:max-height 0.85s linear;
  max-height: 75vh;
}

.abp-mh-100 {
  transition:max-height 1s linear;
  max-height: 100vh;
}

[class^="sorting"] {
  opacity: .3;
  cursor: pointer;
}
[class^="sorting"]:before {
  right: 0.5rem;
  content: "↑";
}
[class^="sorting"]:after {
  right: 0.5rem;
  content: "↓";
}

.sorting_desc {
  opacity: 1;
}
.sorting_desc:before {
  opacity: .3;
}

.sorting_asc {
  opacity: 1;
}
.sorting_asc:after {
  opacity: .3;
}
.ngx-datatable.material {
  box-shadow: none;
}
ngb-typeahead-window, ngb-typeahead-window.dropdown-menu {
  max-height: 25em;
  overflow-y: scroll !important;
  z-index: 1050;
}

.abp-modal-header {
  word-break: break-word;
}


@keyframes fadeInTop {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fadeOutTop {
  to {
    transform: translateY(-5px);
    opacity: 0;
  }
}

/* </animations */
.ngb-dp-body {
  z-index: 1055 !important;
}
`;
var THEME_SHARED_APPEND_CONTENT = new InjectionToken("THEME_SHARED_APPEND_CONTENT", {
  providedIn: "root",
  factory: () => {
    const domInsertion = inject(DomInsertionService);
    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
  }
});
var defaultNgxDatatableMessages = {
  emptyMessage: "AbpUi::NoDataAvailableInDatatable",
  errorMessage: "AbpUi::ErrorLoadingDatatable",
  totalMessage: "AbpUi::Total",
  selectedMessage: "AbpUi::Selected"
};
var NGX_DATATABLE_MESSAGES = new InjectionToken("NGX_DATATABLE_MESSAGES");
var SUPPRESS_UNSAVED_CHANGES_WARNING = new InjectionToken("SUPPRESS_UNSAVED_CHANGES_WARNING");
var LOGO_URL_TOKEN = new InjectionToken("LOGO_URL_TOKEN");
var LOGO_APP_NAME_TOKEN = new InjectionToken("LOGO_APP_NAME_TOKEN");
var _RouterErrorHandlerService = class _RouterErrorHandlerService {
  constructor() {
    this.routerEvents = inject(RouterEvents);
    this.httpErrorConfig = inject(HTTP_ERROR_CONFIG);
    this.createErrorComponentService = inject(CreateErrorComponentService);
    this.filterRouteErrors = (navigationError) => {
      if (!this.httpErrorConfig?.skipHandledErrorCodes) {
        return true;
      }
      return navigationError.error?.message?.indexOf("Cannot match") > -1 && this.httpErrorConfig.skipHandledErrorCodes.findIndex((code) => code === 404) < 0;
    };
  }
  listen() {
    this.routerEvents.getNavigationEvents("Error").pipe(filter(this.filterRouteErrors)).subscribe(() => this.show404Page());
  }
  show404Page() {
    const instance = {
      title: {
        key: DEFAULT_ERROR_LOCALIZATIONS.defaultError404.title,
        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title
      },
      status: 404
    };
    this.createErrorComponentService.execute(instance);
  }
};
_RouterErrorHandlerService.ɵfac = function RouterErrorHandlerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RouterErrorHandlerService)();
};
_RouterErrorHandlerService.ɵprov = ɵɵdefineInjectable({
  token: _RouterErrorHandlerService,
  factory: _RouterErrorHandlerService.ɵfac,
  providedIn: "root"
});
var RouterErrorHandlerService = _RouterErrorHandlerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _AbpAuthenticationErrorHandler = class _AbpAuthenticationErrorHandler {
  constructor() {
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.veryHigh;
    this.authService = inject(AuthService);
    this.configStateService = inject(ConfigStateService);
  }
  canHandle(error) {
    return error instanceof HttpErrorResponse && error.status === 401;
  }
  execute() {
    this.configStateService.refreshAppState().subscribe(({
      currentUser
    }) => {
      if (!currentUser.isAuthenticated) {
        this.authService.logout({
          noRedirectToLogoutUrl: true
        });
      }
    });
  }
};
_AbpAuthenticationErrorHandler.ɵfac = function AbpAuthenticationErrorHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpAuthenticationErrorHandler)();
};
_AbpAuthenticationErrorHandler.ɵprov = ɵɵdefineInjectable({
  token: _AbpAuthenticationErrorHandler,
  factory: _AbpAuthenticationErrorHandler.ɵfac,
  providedIn: "root"
});
var AbpAuthenticationErrorHandler = _AbpAuthenticationErrorHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpAuthenticationErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ModalRefService = class _ModalRefService {
  constructor() {
    this.modalRefs = [];
  }
  register(modal) {
    this.modalRefs.push(modal);
  }
  unregister(modal) {
    const index = this.modalRefs.indexOf(modal);
    if (index > -1) {
      this.modalRefs.splice(index, 1);
    }
  }
  dismissAll(mode) {
    this.modalRefs.forEach((modal) => modal.dismiss(mode));
  }
};
_ModalRefService.ɵfac = function ModalRefService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalRefService)();
};
_ModalRefService.ɵprov = ɵɵdefineInjectable({
  token: _ModalRefService,
  factory: _ModalRefService.ɵfac,
  providedIn: "root"
});
var ModalRefService = _ModalRefService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalRefService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ModalComponent = class _ModalComponent {
  get modalWindowRef() {
    return this.document.querySelector(`ngb-modal-window.${this.modalIdentifier}`);
  }
  get isFormDirty() {
    return Boolean(this.modalWindowRef?.querySelector(".ng-dirty"));
  }
  constructor() {
    this.confirmationService = inject(ConfirmationService);
    this.modal = inject(NgbModal);
    this.modalRefService = inject(ModalRefService);
    this.suppressUnsavedChangesWarningToken = inject(SUPPRESS_UNSAVED_CHANGES_WARNING, {
      optional: true
    });
    this.destroyRef = inject(DestroyRef);
    this.document = inject(DOCUMENT);
    this.visible = model(false);
    this.busy = input(false, {
      transform: (value) => {
        if (this.abpSubmit() && this.abpSubmit() instanceof ButtonComponent) {
          this.abpSubmit().loading = value;
        }
        return value;
      }
    });
    this.options = input({
      keyboard: true
    });
    this.suppressUnsavedChangesWarning = input(this.suppressUnsavedChangesWarningToken);
    this.modalContent = viewChild("modalContent");
    this.abpHeader = contentChild("abpHeader");
    this.abpBody = contentChild("abpBody");
    this.abpFooter = contentChild("abpFooter");
    this.abpSubmit = contentChild(ButtonComponent, {
      read: ButtonComponent
    });
    this.init = output();
    this.appear = output();
    this.disappear = output();
    this.isConfirmationOpen = false;
    this.modalIdentifier = `modal-${uuid()}`;
    effect(() => {
      this.toggle(this.visible());
    });
  }
  ngOnInit() {
    this.modalRefService.register(this);
  }
  dismiss(mode) {
    switch (mode) {
      case "hard":
        this.visible.set(false);
        break;
      case "soft":
        this.close();
        break;
      default:
        break;
    }
  }
  toggle(value) {
    this.visible.set(value);
    if (!value) {
      this.modalRef?.dismiss();
      this.disappear.emit();
      return;
    }
    setTimeout(() => this.listen(), 0);
    this.modalRef = this.modal.open(this.modalContent(), __spreadProps(__spreadValues({
      size: "md",
      centered: false,
      keyboard: false,
      scrollable: true,
      beforeDismiss: () => {
        if (!this.visible()) return true;
        this.close();
        return !this.visible();
      }
    }, this.options()), {
      windowClass: `${this.options().windowClass || ""} ${this.modalIdentifier}`
    }));
    this.appear.emit();
  }
  ngOnDestroy() {
    this.modalRefService.unregister(this);
    this.toggle(false);
  }
  close() {
    if (this.busy()) return;
    if (this.isFormDirty && !this.suppressUnsavedChangesWarning()) {
      if (this.isConfirmationOpen) return;
      this.isConfirmationOpen = true;
      this.confirmationService.warn("AbpUi::AreYouSureYouWantToCancelEditingWarningMessage", "AbpUi::AreYouSure", {
        dismissible: false
      }).subscribe((status) => {
        this.isConfirmationOpen = false;
        if (status === Confirmation.Status.confirm) {
          this.visible.set(false);
        }
      });
    } else {
      this.visible.set(false);
    }
  }
  listen() {
    if (this.modalWindowRef) {
      fromEvent(this.modalWindowRef, "keyup").pipe(takeUntilDestroyed(this.destroyRef), debounceTime(150), filter((key) => key && key.key === "Escape" && this.options().keyboard)).subscribe(() => this.close());
    }
    fromEvent(window, "beforeunload").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (this.isFormDirty && !this.suppressUnsavedChangesWarning()) {
        event.preventDefault();
      }
    });
    this.init.emit();
  }
};
_ModalComponent.ɵfac = function ModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalComponent)();
};
_ModalComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalComponent,
  selectors: [["abp-modal"]],
  contentQueries: function ModalComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuerySignal(dirIndex, ctx.abpHeader, _c6, 5);
      ɵɵcontentQuerySignal(dirIndex, ctx.abpBody, _c7, 5);
      ɵɵcontentQuerySignal(dirIndex, ctx.abpFooter, _c8, 5);
      ɵɵcontentQuerySignal(dirIndex, ctx.abpSubmit, ButtonComponent, 5, ButtonComponent);
    }
    if (rf & 2) {
      ɵɵqueryAdvance(4);
    }
  },
  viewQuery: function ModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuerySignal(ctx.modalContent, _c9, 5);
    }
    if (rf & 2) {
      ɵɵqueryAdvance();
    }
  },
  inputs: {
    visible: [1, "visible"],
    busy: [1, "busy"],
    options: [1, "options"],
    suppressUnsavedChangesWarning: [1, "suppressUnsavedChangesWarning"]
  },
  outputs: {
    visible: "visibleChange",
    init: "init",
    appear: "appear",
    disappear: "disappear"
  },
  features: [ɵɵProvidersFeature([SubscriptionService])],
  ngContentSelectors: _c2,
  decls: 3,
  vars: 0,
  consts: [["modalContent", ""], ["id", "abp-modal-header", 1, "modal-header", "abp-modal-header"], ["id", "abp-modal-body", 1, "modal-body"], ["id", "abp-modal-footer", 1, "modal-footer"], [4, "ngTemplateOutlet"], ["id", "abp-modal-close-button", "type", "button", "aria-label", "Close", 1, "btn-sm", "btn-close", 3, "click"]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, ModalComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgTemplateOutlet],
  styles: [".modal.show[_ngcontent-%COMP%]{display:block!important}.modal-backdrop[_ngcontent-%COMP%]{opacity:.8}.modal[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}.modal[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#ddd}.modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog[_ngcontent-%COMP%]{z-index:1050}"]
});
var ModalComponent = _ModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{
      selector: "abp-modal",
      providers: [SubscriptionService],
      imports: [NgTemplateOutlet],
      template: '<ng-content></ng-content>\r\n\r\n<ng-template #modalContent let-modal>\r\n  @if (abpHeader()) {\r\n    <div id="abp-modal-header" class="modal-header abp-modal-header">\r\n      <ng-container *ngTemplateOutlet="abpHeader()"></ng-container>\r\n      ​\r\n      <button\r\n        id="abp-modal-close-button"\r\n        type="button"\r\n        class="btn-sm btn-close"\r\n        aria-label="Close"\r\n        (click)="modal.dismiss()"\r\n      ></button>\r\n    </div>\r\n  }\r\n  @if (abpBody()) {\r\n    <div id="abp-modal-body" class="modal-body">\r\n      <ng-container *ngTemplateOutlet="abpBody()"></ng-container>\r\n    </div>\r\n  }\r\n  @if (abpFooter()) {\r\n    <div id="abp-modal-footer" class="modal-footer">\r\n      <ng-container *ngTemplateOutlet="abpFooter()"></ng-container>\r\n    </div>\r\n  }\r\n</ng-template>\r\n',
      styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}\n"]
    }]
  }], () => [], null);
})();
var _ModalCloseDirective = class _ModalCloseDirective {
  constructor() {
    this.modal = inject(ModalComponent, {
      optional: true
    });
    const modal = this.modal;
    if (!modal) {
      console.error("Please use abpClose within an abp-modal");
    }
  }
  onClick() {
    this.modal?.close();
  }
};
_ModalCloseDirective.ɵfac = function ModalCloseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalCloseDirective)();
};
_ModalCloseDirective.ɵdir = ɵɵdefineDirective({
  type: _ModalCloseDirective,
  selectors: [["", "abpClose", ""]],
  hostBindings: function ModalCloseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ModalCloseDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  }
});
var ModalCloseDirective = _ModalCloseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[abpClose]"
    }]
  }], () => [], {
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var _PasswordComponent = class _PasswordComponent extends AbstractNgModelComponent {
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
};
_PasswordComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵPasswordComponent_BaseFactory;
  return function PasswordComponent_Factory(__ngFactoryType__) {
    return (ɵPasswordComponent_BaseFactory || (ɵPasswordComponent_BaseFactory = ɵɵgetInheritedFactory(_PasswordComponent)))(__ngFactoryType__ || _PasswordComponent);
  };
})();
_PasswordComponent.ɵcmp = ɵɵdefineComponent({
  type: _PasswordComponent,
  selectors: [["abp-password"]],
  inputs: {
    inputId: "inputId",
    formControlName: "formControlName"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _PasswordComponent),
    multi: true
  }]), ɵɵInheritDefinitionFeature],
  decls: 4,
  vars: 7,
  consts: [["validationTarget", "", 1, "input-group"], [1, "form-control", 3, "ngModelChange", "type", "id", "ngModel"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"]],
  template: function PasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "input", 1);
      ɵɵtwoWayListener("ngModelChange", function PasswordComponent_Template_input_ngModelChange_1_listener($event) {
        ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "button", 2);
      ɵɵlistener("click", function PasswordComponent_Template_button_click_2_listener() {
        return ctx.toggleFieldTextType();
      });
      ɵɵelement(3, "i", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("type", ctx.fieldTextType ? "text" : "password")("id", ctx.inputId);
      ɵɵtwoWayProperty("ngModel", ctx.value);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c10, !ctx.fieldTextType, ctx.fieldTextType));
    }
  },
  dependencies: [NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgxValidateCoreModule, ValidationTargetDirective],
  encapsulation: 2
});
var PasswordComponent = _PasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordComponent, [{
    type: Component,
    args: [{
      selector: "abp-password",
      imports: [NgClass, FormsModule, NgxValidateCoreModule],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PasswordComponent),
        multi: true
      }],
      template: `<div class="input-group" validationTarget>\r
  <input\r
    [type]="fieldTextType ? 'text' : 'password'"\r
    class="form-control"\r
    [id]="inputId"\r
    [(ngModel)]="value"\r
  />\r
\r
  <button class="btn btn-secondary" type="button" (click)="toggleFieldTextType()">\r
    <i\r
      class="fa"\r
      aria-hidden="true"\r
      [ngClass]="{\r
        'fa-eye-slash': !fieldTextType,\r
        'fa-eye': fieldTextType\r
      }"\r
    ></i>\r
  </button>\r
</div>\r
`
    }]
  }], null, {
    inputId: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }]
  });
})();
var _CardBodyComponent = class _CardBodyComponent {
  constructor() {
    this.componentClass = "card-body";
  }
};
_CardBodyComponent.ɵfac = function CardBodyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardBodyComponent)();
};
_CardBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardBodyComponent,
  selectors: [["abp-card-body"]],
  hostVars: 2,
  hostBindings: function CardBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.componentClass);
    }
  },
  inputs: {
    cardBodyClass: "cardBodyClass",
    cardBodyStyle: "cardBodyStyle"
  },
  ngContentSelectors: _c2,
  decls: 2,
  vars: 2,
  consts: [[3, "ngClass", "ngStyle"]],
  template: function CardBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.cardBodyClass)("ngStyle", ctx.cardBodyStyle);
    }
  },
  dependencies: [NgClass, NgStyle],
  encapsulation: 2
});
var CardBodyComponent = _CardBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardBodyComponent, [{
    type: Component,
    args: [{
      selector: "abp-card-body",
      template: ` <div [ngClass]="cardBodyClass" [ngStyle]="cardBodyStyle">
    <ng-content></ng-content>
  </div>`,
      imports: [NgClass, NgStyle]
    }]
  }], null, {
    componentClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    cardBodyClass: [{
      type: Input
    }],
    cardBodyStyle: [{
      type: Input
    }]
  });
})();
var _CardComponent = class _CardComponent {
};
_CardComponent.ɵfac = function CardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardComponent)();
};
_CardComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardComponent,
  selectors: [["abp-card"]],
  inputs: {
    cardClass: "cardClass",
    cardStyle: "cardStyle"
  },
  ngContentSelectors: _c2,
  decls: 2,
  vars: 2,
  consts: [[1, "card", 3, "ngClass", "ngStyle"]],
  template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.cardClass)("ngStyle", ctx.cardStyle);
    }
  },
  dependencies: [NgClass, NgStyle],
  encapsulation: 2
});
var CardComponent = _CardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      selector: "abp-card",
      template: ` <div class="card" [ngClass]="cardClass" [ngStyle]="cardStyle">
    <ng-content></ng-content>
  </div>`,
      imports: [NgClass, NgStyle]
    }]
  }], null, {
    cardClass: [{
      type: Input
    }],
    cardStyle: [{
      type: Input
    }]
  });
})();
var _CardHeaderComponent = class _CardHeaderComponent {
  constructor() {
    this.componentClass = "card-header";
  }
};
_CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardHeaderComponent)();
};
_CardHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardHeaderComponent,
  selectors: [["abp-card-header"]],
  hostVars: 2,
  hostBindings: function CardHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.componentClass);
    }
  },
  inputs: {
    cardHeaderClass: "cardHeaderClass",
    cardHeaderStyle: "cardHeaderStyle"
  },
  ngContentSelectors: _c2,
  decls: 2,
  vars: 2,
  consts: [[3, "ngClass", "ngStyle"]],
  template: function CardHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.cardHeaderClass)("ngStyle", ctx.cardHeaderStyle);
    }
  },
  dependencies: [NgClass, NgStyle],
  encapsulation: 2
});
var CardHeaderComponent = _CardHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderComponent, [{
    type: Component,
    args: [{
      selector: "abp-card-header",
      template: `
    <div [ngClass]="cardHeaderClass" [ngStyle]="cardHeaderStyle">
      <ng-content></ng-content>
    </div>
  `,
      imports: [NgClass, NgStyle]
    }]
  }], null, {
    componentClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    cardHeaderClass: [{
      type: Input
    }],
    cardHeaderStyle: [{
      type: Input
    }]
  });
})();
var _CardFooterComponent = class _CardFooterComponent {
  constructor() {
    this.componentClass = "card-footer";
  }
};
_CardFooterComponent.ɵfac = function CardFooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardFooterComponent)();
};
_CardFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardFooterComponent,
  selectors: [["abp-card-footer"]],
  hostVars: 2,
  hostBindings: function CardFooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.componentClass);
    }
  },
  inputs: {
    cardFooterStyle: "cardFooterStyle",
    cardFooterClass: "cardFooterClass"
  },
  ngContentSelectors: _c2,
  decls: 2,
  vars: 2,
  consts: [[3, "ngStyle", "ngClass"]],
  template: function CardFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ctx.cardFooterStyle)("ngClass", ctx.cardFooterClass);
    }
  },
  dependencies: [NgClass, NgStyle],
  encapsulation: 2
});
var CardFooterComponent = _CardFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardFooterComponent, [{
    type: Component,
    args: [{
      selector: "abp-card-footer",
      template: `
    <div [ngStyle]="cardFooterStyle" [ngClass]="cardFooterClass">
      <ng-content></ng-content>
    </div>
  `,
      imports: [NgClass, NgStyle]
    }]
  }], null, {
    componentClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    cardFooterStyle: [{
      type: Input
    }],
    cardFooterClass: [{
      type: Input
    }]
  });
})();
var _CardTitleDirective = class _CardTitleDirective {
  constructor() {
    this.directiveClass = "card-title";
  }
};
_CardTitleDirective.ɵfac = function CardTitleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardTitleDirective)();
};
_CardTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _CardTitleDirective,
  selectors: [["abp-card-title"], ["", "abp-card-title", ""], ["", "abpCardTitle", ""]],
  hostVars: 2,
  hostBindings: function CardTitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.directiveClass);
    }
  }
});
var CardTitleDirective = _CardTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTitleDirective, [{
    type: Directive,
    args: [{
      selector: `abp-card-title, [abp-card-title], [abpCardTitle]`
    }]
  }], null, {
    directiveClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardSubtitleDirective = class _CardSubtitleDirective {
  constructor() {
    this.directiveClass = "card-subtitle";
  }
};
_CardSubtitleDirective.ɵfac = function CardSubtitleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardSubtitleDirective)();
};
_CardSubtitleDirective.ɵdir = ɵɵdefineDirective({
  type: _CardSubtitleDirective,
  selectors: [["abp-card-subtitle"], ["", "abp-card-subtitle", ""], ["", "abpCardSubtitle", ""]],
  hostVars: 2,
  hostBindings: function CardSubtitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.directiveClass);
    }
  }
});
var CardSubtitleDirective = _CardSubtitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: `abp-card-subtitle, [abp-card-subtitle], [abpCardSubtitle]`
    }]
  }], null, {
    directiveClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardImgTopDirective = class _CardImgTopDirective {
  constructor() {
    this.directiveClass = "card-img-top";
  }
};
_CardImgTopDirective.ɵfac = function CardImgTopDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardImgTopDirective)();
};
_CardImgTopDirective.ɵdir = ɵɵdefineDirective({
  type: _CardImgTopDirective,
  selectors: [["abp-card-img-top"], ["", "abp-card-img-top", ""], ["", "abpCardImgTop", ""]],
  hostVars: 2,
  hostBindings: function CardImgTopDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.directiveClass);
    }
  }
});
var CardImgTopDirective = _CardImgTopDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardImgTopDirective, [{
    type: Directive,
    args: [{
      selector: `abp-card-img-top, [abp-card-img-top], [abpCardImgTop]`
    }]
  }], null, {
    directiveClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardHeaderDirective = class _CardHeaderDirective {
  constructor() {
    this.directiveClass = "card-header";
  }
};
_CardHeaderDirective.ɵfac = function CardHeaderDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardHeaderDirective)();
};
_CardHeaderDirective.ɵdir = ɵɵdefineDirective({
  type: _CardHeaderDirective,
  selectors: [["abp-card-header"], ["", "abp-card-header", ""], ["", "abpCardHeader", ""]],
  hostVars: 2,
  hostBindings: function CardHeaderDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.directiveClass);
    }
  }
});
var CardHeaderDirective = _CardHeaderDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderDirective, [{
    type: Directive,
    args: [{
      selector: `abp-card-header, [abp-card-header], [abpCardHeader]`
    }]
  }], null, {
    directiveClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var CARD_DIRECTIVES = [CardTitleDirective, CardSubtitleDirective, CardImgTopDirective, CardHeaderDirective];
var CARD_COMPONENTS = [CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent];
var _CardModule = class _CardModule {
};
_CardModule.ɵfac = function CardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardModule)();
};
_CardModule.ɵmod = ɵɵdefineNgModule({
  type: _CardModule,
  imports: [CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent, CardTitleDirective, CardSubtitleDirective, CardImgTopDirective, CardHeaderDirective],
  exports: [CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent, CardTitleDirective, CardSubtitleDirective, CardImgTopDirective, CardHeaderDirective]
});
_CardModule.ɵinj = ɵɵdefineInjector({});
var CardModule = _CardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [...CARD_COMPONENTS, ...CARD_DIRECTIVES],
      exports: [...CARD_COMPONENTS, ...CARD_DIRECTIVES]
    }]
  }], null, null);
})();
var _FormCheckboxComponent = class _FormCheckboxComponent extends AbstractNgModelComponent {
  constructor() {
    super(...arguments);
    this.labelClass = "form-check-label";
    this.checkboxClass = "form-check-input";
    this.checkboxReadonly = false;
    this.checkboxBlur = new EventEmitter();
    this.checkboxFocus = new EventEmitter();
  }
};
_FormCheckboxComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵFormCheckboxComponent_BaseFactory;
  return function FormCheckboxComponent_Factory(__ngFactoryType__) {
    return (ɵFormCheckboxComponent_BaseFactory || (ɵFormCheckboxComponent_BaseFactory = ɵɵgetInheritedFactory(_FormCheckboxComponent)))(__ngFactoryType__ || _FormCheckboxComponent);
  };
})();
_FormCheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: _FormCheckboxComponent,
  selectors: [["abp-checkbox"]],
  inputs: {
    label: "label",
    labelClass: "labelClass",
    checkboxId: "checkboxId",
    checkboxStyle: "checkboxStyle",
    checkboxClass: "checkboxClass",
    checkboxReadonly: "checkboxReadonly"
  },
  outputs: {
    checkboxBlur: "checkboxBlur",
    checkboxFocus: "checkboxFocus"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _FormCheckboxComponent),
    multi: true
  }]), ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 6,
  consts: [[1, "mb-3"], ["type", "checkbox", 3, "ngModelChange", "blur", "focus", "ngModel", "id", "readonly", "ngClass", "ngStyle"], [3, "ngClass", "for"]],
  template: function FormCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "input", 1);
      ɵɵtwoWayListener("ngModelChange", function FormCheckboxComponent_Template_input_ngModelChange_1_listener($event) {
        ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      ɵɵlistener("blur", function FormCheckboxComponent_Template_input_blur_1_listener() {
        return ctx.checkboxBlur.next();
      })("focus", function FormCheckboxComponent_Template_input_focus_1_listener() {
        return ctx.checkboxFocus.next();
      });
      ɵɵelementEnd();
      ɵɵconditionalCreate(2, FormCheckboxComponent_Conditional_2_Template, 3, 5, "label", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtwoWayProperty("ngModel", ctx.value);
      ɵɵproperty("id", ctx.checkboxId)("readonly", ctx.checkboxReadonly)("ngClass", ctx.checkboxClass)("ngStyle", ctx.checkboxStyle);
      ɵɵadvance();
      ɵɵconditional(ctx.label ? 2 : -1);
    }
  },
  dependencies: [NgClass, NgStyle, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, LocalizationPipe],
  encapsulation: 2
});
var FormCheckboxComponent = _FormCheckboxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "abp-checkbox",
      template: `
    <div class="mb-3">
      <input
        type="checkbox"
        [(ngModel)]="value"
        [id]="checkboxId"
        [readonly]="checkboxReadonly"
        [ngClass]="checkboxClass"
        [ngStyle]="checkboxStyle"
        (blur)="checkboxBlur.next()"
        (focus)="checkboxFocus.next()"
      />
      @if (label) {
        <label [ngClass]="labelClass" [for]="checkboxId">
          {{ label | abpLocalization }}
        </label>
      }
    </div>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FormCheckboxComponent),
        multi: true
      }],
      imports: [NgClass, NgStyle, FormsModule, LocalizationPipe]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    labelClass: [{
      type: Input
    }],
    checkboxId: [{
      type: Input
    }],
    checkboxStyle: [{
      type: Input
    }],
    checkboxClass: [{
      type: Input
    }],
    checkboxReadonly: [{
      type: Input
    }],
    checkboxBlur: [{
      type: Output
    }],
    checkboxFocus: [{
      type: Output
    }]
  });
})();
var _FormInputComponent = class _FormInputComponent extends AbstractNgModelComponent {
  constructor() {
    super(...arguments);
    this.inputReadonly = false;
    this.label = "";
    this.labelClass = "form-label";
    this.inputPlaceholder = "";
    this.inputClass = "form-control";
    this.formBlur = new EventEmitter();
    this.formFocus = new EventEmitter();
  }
};
_FormInputComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵFormInputComponent_BaseFactory;
  return function FormInputComponent_Factory(__ngFactoryType__) {
    return (ɵFormInputComponent_BaseFactory || (ɵFormInputComponent_BaseFactory = ɵɵgetInheritedFactory(_FormInputComponent)))(__ngFactoryType__ || _FormInputComponent);
  };
})();
_FormInputComponent.ɵcmp = ɵɵdefineComponent({
  type: _FormInputComponent,
  selectors: [["abp-form-input"]],
  inputs: {
    inputId: "inputId",
    inputReadonly: "inputReadonly",
    label: "label",
    labelClass: "labelClass",
    inputPlaceholder: "inputPlaceholder",
    inputStyle: "inputStyle",
    inputClass: "inputClass"
  },
  outputs: {
    formBlur: "formBlur",
    formFocus: "formFocus"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _FormInputComponent),
    multi: true
  }]), ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 7,
  consts: [[1, "mb-3"], [3, "ngClass", "for"], ["type", "text", 3, "blur", "focus", "ngModelChange", "id", "placeholder", "readonly", "ngClass", "ngStyle", "ngModel"]],
  template: function FormInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵconditionalCreate(1, FormInputComponent_Conditional_1_Template, 3, 5, "label", 1);
      ɵɵelementStart(2, "input", 2);
      ɵɵlistener("blur", function FormInputComponent_Template_input_blur_2_listener() {
        return ctx.formBlur.next();
      })("focus", function FormInputComponent_Template_input_focus_2_listener() {
        return ctx.formFocus.next();
      });
      ɵɵtwoWayListener("ngModelChange", function FormInputComponent_Template_input_ngModelChange_2_listener($event) {
        ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(ctx.label ? 1 : -1);
      ɵɵadvance();
      ɵɵproperty("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("readonly", ctx.inputReadonly)("ngClass", ctx.inputClass)("ngStyle", ctx.inputStyle);
      ɵɵtwoWayProperty("ngModel", ctx.value);
    }
  },
  dependencies: [NgClass, NgStyle, LocalizationPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel],
  encapsulation: 2
});
var FormInputComponent = _FormInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormInputComponent, [{
    type: Component,
    args: [{
      selector: "abp-form-input",
      template: `
    <div class="mb-3">
      @if (label) {
        <label [ngClass]="labelClass" [for]="inputId">
          {{ label | abpLocalization }}
        </label>
      }
      <input
        type="text"
        [id]="inputId"
        [placeholder]="inputPlaceholder"
        [readonly]="inputReadonly"
        [ngClass]="inputClass"
        [ngStyle]="inputStyle"
        (blur)="formBlur.next()"
        (focus)="formFocus.next()"
        [(ngModel)]="value"
      />
    </div>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FormInputComponent),
        multi: true
      }],
      imports: [NgClass, NgStyle, LocalizationPipe, FormsModule]
    }]
  }], null, {
    inputId: [{
      type: Input
    }],
    inputReadonly: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    labelClass: [{
      type: Input
    }],
    inputPlaceholder: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputClass: [{
      type: Input
    }],
    formBlur: [{
      type: Output
    }],
    formFocus: [{
      type: Output
    }]
  });
})();
var _InternetConnectionStatusComponent = class _InternetConnectionStatusComponent {
  constructor() {
    this.internetConnectionService = inject(InternetConnectionService);
    this.isOnline = this.internetConnectionService.networkStatus;
  }
};
_InternetConnectionStatusComponent.ɵfac = function InternetConnectionStatusComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InternetConnectionStatusComponent)();
};
_InternetConnectionStatusComponent.ɵcmp = ɵɵdefineComponent({
  type: _InternetConnectionStatusComponent,
  selectors: [["abp-internet-status"]],
  decls: 1,
  vars: 1,
  consts: [[1, "status-icon"], ["container", "body", "placement", "left-top", 1, "fa", "fa-wifi", "text-blinking", "blink", 3, "ngbTooltip"]],
  template: function InternetConnectionStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, InternetConnectionStatusComponent_Conditional_0_Template, 3, 4, "div", 0);
    }
    if (rf & 2) {
      ɵɵconditional(!ctx.isOnline() ? 0 : -1);
    }
  },
  dependencies: [LocalizationPipe, NgbTooltip],
  styles: [".blink[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blinker .9s cubic-bezier(.5,0,1,1) infinite alternate}@keyframes _ngcontent-%COMP%_blinker{0%{color:#c1c1c1}70%{color:#fa2379}to{color:#fa2379}}.text-blinking[_ngcontent-%COMP%]{font-size:30px}.status-icon[_ngcontent-%COMP%]{position:fixed;z-index:999999;top:50%;left:50%;width:30px;text-align:center;margin-left:-15px;margin-top:-15px;translate:transform(-50%,-50%)}"]
});
var InternetConnectionStatusComponent = _InternetConnectionStatusComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternetConnectionStatusComponent, [{
    type: Component,
    args: [{
      selector: "abp-internet-status",
      imports: [LocalizationPipe, NgbTooltip],
      template: `
    @if (!isOnline()) {
      <div class="status-icon">
        <i
          ngbTooltip="{{ 'AbpUi::InternetConnectionInfo' | abpLocalization }}"
          container="body"
          placement="left-top"
          class="fa fa-wifi text-blinking blink"
        >
        </i>
      </div>
    }
  `,
      styles: [".blink{animation:blinker .9s cubic-bezier(.5,0,1,1) infinite alternate}@keyframes blinker{0%{color:#c1c1c1}70%{color:#fa2379}to{color:#fa2379}}.text-blinking{font-size:30px}.status-icon{position:fixed;z-index:999999;top:50%;left:50%;width:30px;text-align:center;margin-left:-15px;margin-top:-15px;translate:transform(-50%,-50%)}\n"]
    }]
  }], null, null);
})();
var _SpinnerComponent = class _SpinnerComponent {
};
_SpinnerComponent.ɵfac = function SpinnerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpinnerComponent)();
};
_SpinnerComponent.ɵcmp = ɵɵdefineComponent({
  type: _SpinnerComponent,
  selectors: [["abp-spinner"]],
  decls: 4,
  vars: 0,
  consts: [[1, "d-flex", "justify-content-center", "align-items-center", "border-top", 2, "height", "62px"], ["role", "status", "id", "loading", 1, "spinner-border"], [1, "visually-hidden"]],
  template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      ɵɵtext(3, "Loading...");
      ɵɵelementEnd()()();
    }
  },
  encapsulation: 2
});
var SpinnerComponent = _SpinnerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{
      selector: "abp-spinner",
      template: `
    <div class="d-flex justify-content-center align-items-center border-top" style="height: 62px">
      <div class="spinner-border" role="status" id="loading">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `
    }]
  }], null, null);
})();
var _EllipsisDirective = class _EllipsisDirective {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.elRef = inject(ElementRef);
    this.enabled = true;
  }
  get inlineClass() {
    return this.enabled && this.width;
  }
  get class() {
    return this.enabled && !this.width;
  }
  get maxWidth() {
    return this.enabled && this.width ? this.width || "170px" : void 0;
  }
  ngAfterViewInit() {
    this.title = this.title || this.elRef.nativeElement.innerText;
    this.cdRef.detectChanges();
  }
};
_EllipsisDirective.ɵfac = function EllipsisDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EllipsisDirective)();
};
_EllipsisDirective.ɵdir = ɵɵdefineDirective({
  type: _EllipsisDirective,
  selectors: [["", "abpEllipsis", ""]],
  hostVars: 7,
  hostBindings: function EllipsisDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵdomProperty("title", ctx.title);
      ɵɵstyleProp("max-width", ctx.maxWidth);
      ɵɵclassProp("abp-ellipsis-inline", ctx.inlineClass)("abp-ellipsis", ctx.class);
    }
  },
  inputs: {
    width: [0, "abpEllipsis", "width"],
    title: "title",
    enabled: [0, "abpEllipsisEnabled", "enabled"]
  }
});
var EllipsisDirective = _EllipsisDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EllipsisDirective, [{
    type: Directive,
    args: [{
      selector: "[abpEllipsis]"
    }]
  }], null, {
    width: [{
      type: Input,
      args: ["abpEllipsis"]
    }],
    title: [{
      type: HostBinding,
      args: ["title"]
    }, {
      type: Input
    }],
    enabled: [{
      type: Input,
      args: ["abpEllipsisEnabled"]
    }],
    inlineClass: [{
      type: HostBinding,
      args: ["class.abp-ellipsis-inline"]
    }],
    class: [{
      type: HostBinding,
      args: ["class.abp-ellipsis"]
    }],
    maxWidth: [{
      type: HostBinding,
      args: ["style.max-width"]
    }]
  });
})();
var _LoadingDirective = class _LoadingDirective {
  constructor() {
    this.elRef = inject(ElementRef);
    this.cdRes = inject(ComponentFactoryResolver$1);
    this.injector = inject(Injector);
    this.renderer = inject(Renderer2);
    this.position = "relative";
    this.delay = 0;
    this.rootNode = null;
    this.timerSubscription = null;
  }
  get loading() {
    return this._loading;
  }
  set loading(newValue) {
    setTimeout(() => {
      if (!newValue && this.timerSubscription) {
        this.timerSubscription.unsubscribe();
        this.timerSubscription = null;
        this._loading = newValue;
        if (this.rootNode) {
          this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
          this.rootNode = null;
        }
        return;
      }
      this.timerSubscription = timer(this.delay).pipe(take(1)).subscribe(() => {
        if (!this.componentRef) {
          this.componentRef = this.cdRes.resolveComponentFactory(LoadingComponent).create(this.injector);
        }
        if (newValue && !this.rootNode) {
          this.rootNode = this.componentRef.hostView.rootNodes[0];
          this.targetElement?.appendChild(this.rootNode);
        } else if (this.rootNode) {
          this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
          this.rootNode = null;
        }
        this._loading = newValue;
        this.timerSubscription = null;
      });
    }, 0);
  }
  ngOnInit() {
    if (!this.targetElement) {
      const {
        offsetHeight,
        offsetWidth
      } = this.elRef.nativeElement;
      if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children?.length) {
        this.targetElement = this.elRef.nativeElement.children[0];
      } else {
        this.targetElement = this.elRef.nativeElement;
      }
    }
  }
  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
};
_LoadingDirective.ɵfac = function LoadingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoadingDirective)();
};
_LoadingDirective.ɵdir = ɵɵdefineDirective({
  type: _LoadingDirective,
  selectors: [["", "abpLoading", ""]],
  hostVars: 2,
  hostBindings: function LoadingDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("position", ctx.position);
    }
  },
  inputs: {
    loading: [0, "abpLoading", "loading"],
    targetElement: [0, "abpLoadingTargetElement", "targetElement"],
    delay: [0, "abpLoadingDelay", "delay"]
  }
});
var LoadingDirective = _LoadingDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingDirective, [{
    type: Directive,
    args: [{
      selector: "[abpLoading]"
    }]
  }], null, {
    position: [{
      type: HostBinding,
      args: ["style.position"]
    }],
    loading: [{
      type: Input,
      args: ["abpLoading"]
    }],
    targetElement: [{
      type: Input,
      args: ["abpLoadingTargetElement"]
    }],
    delay: [{
      type: Input,
      args: ["abpLoadingDelay"]
    }]
  });
})();
var _NgxDatatableDefaultDirective = class _NgxDatatableDefaultDirective {
  get classes() {
    return `ngx-datatable ${this.class}`;
  }
  constructor() {
    this.table = inject(DatatableComponent);
    this.document = inject(DOCUMENT);
    this.platformId = inject(PLATFORM_ID);
    this.subscription = new Subscription();
    this.resizeDiff = 0;
    this.class = "material bordered";
    this.table.columnMode = ColumnMode.force;
    this.table.footerHeight = 50;
    this.table.headerHeight = 50;
    this.table.rowHeight = "auto";
    this.table.scrollbarH = true;
    this.table.virtualization = false;
  }
  fixHorizontalGap(scroller) {
    const {
      body,
      documentElement
    } = this.document;
    if (isPlatformBrowser(this.platformId)) {
      if (documentElement.scrollHeight !== documentElement.clientHeight) {
        if (this.resizeDiff === 0) {
          this.resizeDiff = window.innerWidth - body.offsetWidth;
          scroller.scrollWidth -= this.resizeDiff;
        }
      } else {
        scroller.scrollWidth += this.resizeDiff;
        this.resizeDiff = 0;
      }
    }
  }
  fixStyleOnWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      const subscription = fromEvent(window, "resize").pipe(debounceTime(500)).subscribe(() => {
        const {
          scroller
        } = this.table.bodyComponent;
        if (!scroller) return;
        this.fixHorizontalGap(scroller);
      });
      this.subscription.add(subscription);
    }
  }
  ngAfterViewInit() {
    this.fixStyleOnWindowResize();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_NgxDatatableDefaultDirective.ɵfac = function NgxDatatableDefaultDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxDatatableDefaultDirective)();
};
_NgxDatatableDefaultDirective.ɵdir = ɵɵdefineDirective({
  type: _NgxDatatableDefaultDirective,
  selectors: [["ngx-datatable", "default", ""]],
  hostVars: 2,
  hostBindings: function NgxDatatableDefaultDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.classes);
    }
  },
  inputs: {
    class: "class"
  },
  exportAs: ["ngxDatatableDefault"]
});
var NgxDatatableDefaultDirective = _NgxDatatableDefaultDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDatatableDefaultDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "ngx-datatable[default]",
      exportAs: "ngxDatatableDefault"
    }]
  }], () => [], {
    class: [{
      type: Input
    }],
    classes: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NgxDatatableListDirective = class _NgxDatatableListDirective {
  constructor() {
    this.table = inject(DatatableComponent);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.localizationService = inject(LocalizationService);
    this.ngxDatatableMessages = inject(NGX_DATATABLE_MESSAGES, {
      optional: true
    });
    this.viewContainerRef = inject(ViewContainerRef);
    this.renderer = inject(Renderer2);
    this.setInitialValues();
  }
  ngDoCheck() {
    this.refreshPageIfDataExist();
  }
  ngOnInit() {
    this.subscribeToPage();
    this.subscribeToSort();
    this.subscribeToRequestStatus();
  }
  ngOnChanges({
    list
  }) {
    this.subscribeToQuery();
    if (!list.firstChange) return;
    const {
      maxResultCount,
      page
    } = list.currentValue;
    this.table.limit = maxResultCount;
    this.table.offset = page;
  }
  subscribeToRequestStatus() {
    const requestStatus$ = this.list.requestStatus$.pipe(distinctUntilChanged());
    const {
      emptyMessage,
      errorMessage
    } = this.ngxDatatableMessages || defaultNgxDatatableMessages;
    requestStatus$.subscribe((status) => {
      this.table.loadingIndicator = false;
      if (status === "idle") {
        return;
      }
      if (status === "loading") {
        this.table.messages.emptyMessage = void 0;
        this.table.loadingIndicator = true;
        this.cdRef.detectChanges();
        this.updateLoadingIndicator();
        return;
      }
      if (status === "error") {
        this.table.messages.emptyMessage = this.localizationService.instant(errorMessage);
        this.viewContainerRef.clear();
        this.cdRef.markForCheck();
      }
      if (status === "success") {
        this.table.messages.emptyMessage = this.localizationService.instant(emptyMessage);
        this.viewContainerRef.clear();
      }
    });
  }
  updateLoadingIndicator() {
    const body = this.table.element.querySelector("datatable-body");
    const progress = this.table.element.querySelector("datatable-progress");
    if (!body) {
      return;
    }
    if (progress) {
      this.replaceLoadingIndicator(body, progress);
    }
  }
  replaceLoadingIndicator(parent, placeholder) {
    this.viewContainerRef.clear();
    const spinnerRef = this.viewContainerRef.createComponent(SpinnerComponent);
    const spinnerElement = spinnerRef.location.nativeElement;
    this.renderer.insertBefore(parent, spinnerElement, parent.firstChild);
    const placeholderParent = placeholder?.parentNode;
    if (placeholderParent) {
      this.renderer.removeChild(placeholderParent, placeholder);
    }
  }
  setInitialValues() {
    this.table.externalPaging = true;
    this.table.externalSorting = true;
    const {
      selectedMessage,
      totalMessage
    } = this.ngxDatatableMessages || defaultNgxDatatableMessages;
    this.table.messages = {
      totalMessage: this.localizationService.instant(totalMessage),
      selectedMessage: this.localizationService.instant(selectedMessage)
    };
  }
  subscribeToSort() {
    this.table.sort.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({
      sorts: [{
        prop,
        dir
      }]
    }) => {
      if (prop === this.list.sortKey && this.list.sortOrder === "desc") {
        this.list.sortKey = "";
        this.list.sortOrder = "";
        this.table.sorts = [];
        this.cdRef.detectChanges();
      } else {
        this.list.sortKey = prop;
        this.list.sortOrder = dir;
      }
    });
  }
  subscribeToPage() {
    this.table.page.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({
      offset
    }) => {
      this.setTablePage(offset);
    });
  }
  subscribeToQuery() {
    this.list.query$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      const offset = this.list.page;
      if (this.table.offset !== offset) this.table.offset = offset;
    });
  }
  setTablePage(pageNum) {
    this.list.page = pageNum;
    this.table.offset = pageNum;
  }
  refreshPageIfDataExist() {
    if (this.table.rows?.length < 1 && this.table.count > 0) {
      let maxPage = Math.floor(Number(this.table.count / this.list.maxResultCount));
      if (this.table.count < this.list.maxResultCount) {
        this.setTablePage(0);
        return;
      }
      if (this.table.count % this.list.maxResultCount === 0) {
        maxPage -= 1;
      }
      if (this.list.page < maxPage) {
        this.setTablePage(this.list.page);
        return;
      }
      this.setTablePage(maxPage);
    }
  }
};
_NgxDatatableListDirective.ɵfac = function NgxDatatableListDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxDatatableListDirective)();
};
_NgxDatatableListDirective.ɵdir = ɵɵdefineDirective({
  type: _NgxDatatableListDirective,
  selectors: [["ngx-datatable", "list", ""]],
  inputs: {
    list: "list"
  },
  exportAs: ["ngxDatatableList"],
  features: [ɵɵNgOnChangesFeature]
});
var NgxDatatableListDirective = _NgxDatatableListDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDatatableListDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "ngx-datatable[list]",
      exportAs: "ngxDatatableList"
    }]
  }], () => [], {
    list: [{
      type: Input
    }]
  });
})();
var _AbpVisibleDirective = class _AbpVisibleDirective {
  constructor() {
    this.viewContainerRef = inject(ViewContainerRef);
    this.templateRef = inject(TemplateRef);
    this.condition$ = of(false);
  }
  set abpVisible(value) {
    this.condition$ = checkType(value);
    this.subscribeToCondition();
  }
  ngOnInit() {
    this.updateVisibility();
  }
  ngOnDestroy() {
    this.conditionSubscription?.unsubscribe();
  }
  subscribeToCondition() {
    this.conditionSubscription = this.condition$.subscribe((value) => {
      this.isVisible = value;
      this.updateVisibility();
    });
  }
  updateVisibility() {
    this.viewContainerRef.clear();
    if (this.isVisible === false) {
      return;
    }
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
};
_AbpVisibleDirective.ɵfac = function AbpVisibleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpVisibleDirective)();
};
_AbpVisibleDirective.ɵdir = ɵɵdefineDirective({
  type: _AbpVisibleDirective,
  selectors: [["", "abpVisible", ""]],
  inputs: {
    abpVisible: "abpVisible"
  }
});
var AbpVisibleDirective = _AbpVisibleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpVisibleDirective, [{
    type: Directive,
    args: [{
      selector: "[abpVisible]"
    }]
  }], null, {
    abpVisible: [{
      type: Input
    }]
  });
})();
function checkType(value) {
  if (value instanceof Promise) {
    return from(value);
  } else if (value instanceof Observable) {
    return value;
  } else if (typeof value === "boolean") {
    return of(value);
  } else if (value === void 0 || value === null) {
    return of(true);
  } else {
    return EMPTY;
  }
}
var _DisabledDirective = class _DisabledDirective {
  constructor() {
    this.ngControl = inject(NgControl, {
      host: true
    });
    this.abpDisabled = false;
  }
  // Related issue: https://github.com/angular/angular/issues/35330
  ngOnChanges({
    abpDisabled
  }) {
    if (this.ngControl.control && abpDisabled) {
      this.ngControl.control[abpDisabled.currentValue ? "disable" : "enable"]();
    }
  }
};
_DisabledDirective.ɵfac = function DisabledDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DisabledDirective)();
};
_DisabledDirective.ɵdir = ɵɵdefineDirective({
  type: _DisabledDirective,
  selectors: [["", "abpDisabled", ""]],
  inputs: {
    abpDisabled: "abpDisabled"
  },
  features: [ɵɵNgOnChangesFeature]
});
var DisabledDirective = _DisabledDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisabledDirective, [{
    type: Directive,
    args: [{
      selector: "[abpDisabled]"
    }]
  }], null, {
    abpDisabled: [{
      type: Input
    }]
  });
})();
var eFormComponets;
(function(eFormComponets2) {
  eFormComponets2["FormInputComponent"] = "FormInputComponent";
  eFormComponets2["FormCheckboxComponent"] = "FormCheckboxComponent";
})(eFormComponets || (eFormComponets = {}));
var _DocumentDirHandlerService = class _DocumentDirHandlerService {
  constructor() {
    this.injector = inject(Injector);
    this.dir = new BehaviorSubject("ltr");
    this.dir$ = this.dir.asObservable();
    this.listenToLanguageChanges();
  }
  listenToLanguageChanges() {
    const l10n = this.injector.get(LocalizationService);
    l10n.currentLang$.pipe(map((locale) => getLocaleDirection(locale))).subscribe((dir) => {
      this.dir.next(dir);
      this.setBodyDir(dir);
    });
  }
  setBodyDir(dir) {
    this.injector.get(DOCUMENT).body.dir = dir;
    this.injector.get(DOCUMENT).dir = dir;
  }
};
_DocumentDirHandlerService.ɵfac = function DocumentDirHandlerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentDirHandlerService)();
};
_DocumentDirHandlerService.ɵprov = ɵɵdefineInjectable({
  token: _DocumentDirHandlerService,
  factory: _DocumentDirHandlerService.ɵfac
});
var DocumentDirHandlerService = _DocumentDirHandlerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentDirHandlerService, [{
    type: Injectable
  }], () => [], null);
})();
var _ErrorHandler = class _ErrorHandler {
  constructor() {
    this.injector = inject(Injector);
    this.httpErrorReporter = inject(HttpErrorReporterService);
    this.confirmationService = inject(ConfirmationService);
    this.routerErrorHandlerService = inject(RouterErrorHandlerService);
    this.httpErrorConfig = inject(HTTP_ERROR_CONFIG);
    this.customErrorHandlers = inject(CUSTOM_ERROR_HANDLERS);
    this.httpErrorHandler = inject(HTTP_ERROR_HANDLER, {
      optional: true
    });
    this.executeErrorHandler = (error) => {
      if (this.httpErrorHandler) {
        return this.httpErrorHandler(this.injector, error);
      }
      return of(error);
    };
    this.filterRestErrors = ({
      status
    }) => {
      if (typeof status !== "number") return false;
      if (!this.httpErrorConfig?.skipHandledErrorCodes) {
        return true;
      }
      return this.httpErrorConfig.skipHandledErrorCodes?.findIndex((code) => code === status) < 0;
    };
    this.listenToRestError();
    this.listenToRouterError();
  }
  listenToRouterError() {
    this.routerErrorHandlerService.listen();
  }
  listenToRestError() {
    this.httpErrorReporter.reporter$.pipe(filter(this.filterRestErrors), switchMap(this.executeErrorHandler)).subscribe((err) => this.handleError(err));
  }
  sortHttpErrorHandlers(a, b) {
    return (b.priority || 0) - (a.priority || 0);
  }
  handleError(err) {
    if (this.customErrorHandlers && this.customErrorHandlers.length) {
      const errorHandlerService = this.customErrorHandlers.sort(this.sortHttpErrorHandlers).find((service) => service.canHandle(err));
      if (errorHandlerService) {
        errorHandlerService.execute();
        return;
      }
    }
    this.showError().subscribe();
  }
  showError() {
    const title = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title
    };
    const message = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.details,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.details
    };
    return this.confirmationService.error(message, title, {
      hideCancelBtn: true,
      yesText: "AbpAccount::Close"
    });
  }
};
_ErrorHandler.ɵfac = function ErrorHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ErrorHandler)();
};
_ErrorHandler.ɵprov = ɵɵdefineInjectable({
  token: _ErrorHandler,
  factory: _ErrorHandler.ɵfac,
  providedIn: "root"
});
var ErrorHandler = _ErrorHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NG_BOOTSTRAP_CONFIG_PROVIDERS = [{
  provide: NgbDatepickerI18n,
  useClass: DatepickerI18nAdapter
}, {
  provide: NgbTimepickerI18n,
  useClass: TimepickerI18nAdapter
}, provideAppInitializer(() => {
  configureNgBootstrap();
})];
function configureNgBootstrap() {
  const datepicker = inject(NgbInputDatepickerConfig);
  const typeahead = inject(NgbTypeaheadConfig);
  datepicker.container = "body";
  typeahead.container = "body";
}
var THEME_SHARED_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
})];
function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([{
    path: void 0,
    name: "AbpUiNavigation::Menu:Administration",
    iconClass: "fa fa-wrench",
    order: 100
  }]);
}
var tenantNotFoundProvider = {
  provide: TENANT_NOT_FOUND_BY_NAME,
  useFactory: function() {
    const confirm = inject(ConfirmationService);
    const document = inject(DOCUMENT);
    return (response) => {
      const {
        error
      } = response.error;
      const appRoot = document.querySelector("app-root div.donut");
      if (appRoot) {
        appRoot.remove();
      }
      confirm.error(error.details, error.message, {
        hideCancelBtn: true,
        hideYesBtn: true
      });
    };
  }
};
var DEFAULT_HANDLERS_PROVIDERS = [{
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: TenantResolveErrorHandlerService
}, {
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: AbpFormatErrorHandlerService
}, {
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: StatusCodeErrorHandlerService
}, {
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: UnknownStatusCodeErrorHandlerService
}, {
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: AbpAuthenticationErrorHandler
}];
var DEFAULT_VALIDATION_BLUEPRINTS = {
  creditCard: "AbpValidation::ThisFieldIsNotAValidCreditCardNumber.",
  email: "AbpValidation::ThisFieldIsNotAValidEmailAddress.",
  invalid: "AbpValidation::ThisFieldIsNotValid.",
  max: "AbpValidation::ThisFieldMustBeLessOrEqual{0}[{{ max }}]",
  maxlength: "AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]",
  min: "AbpValidation::ThisFieldMustBeGreaterThanOrEqual{0}[{{ min }}]",
  minlength: "AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]",
  ngbDate: "AbpValidation::ThisFieldIsNotValid.",
  passwordMismatch: "AbpIdentity::Volo.Abp.Identity:PasswordConfirmationFailed",
  range: "AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]",
  required: "AbpValidation::ThisFieldIsRequired.",
  url: "AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl",
  passwordRequiresLower: "AbpIdentity::Volo.Abp.Identity:PasswordRequiresLower",
  passwordRequiresUpper: "AbpIdentity::Volo.Abp.Identity:PasswordRequiresUpper",
  passwordRequiresDigit: "AbpIdentity::Volo.Abp.Identity:PasswordRequiresDigit",
  passwordRequiresNonAlphanumeric: "AbpIdentity::Volo.Abp.Identity:PasswordRequiresNonAlphanumeric",
  usernamePattern: "AbpIdentity::Volo.Abp.Identity:InvalidUserName[{{ actualValue }}]",
  customMessage: "{{ customMessage }}"
};
function isNumber(value) {
  return !isNaN(toInteger(value));
}
function toInteger(value) {
  return parseInt(`${value}`, 10);
}
var _DateParserFormatter = class _DateParserFormatter extends NgbDateParserFormatter {
  constructor() {
    super();
    this.configState = inject(ConfigStateService);
    this.locale = inject(LOCALE_ID);
  }
  parse(value) {
    if (value) {
      const dateParts = value.trim().split("-");
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {
          year: toInteger(dateParts[0]),
          month: -1,
          day: -1
        };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: -1
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: toInteger(dateParts[2])
        };
      }
    }
    return null;
  }
  format(date) {
    if (!date) return "";
    const localization = this.configState.getOne("localization");
    const dateFormat = localization.currentCulture?.dateTimeFormat?.shortDatePattern || "yyyy-MM-dd";
    return formatDate(new Date(date.year, date.month - 1, date.day), dateFormat, this.locale);
  }
};
_DateParserFormatter.ɵfac = function DateParserFormatter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DateParserFormatter)();
};
_DateParserFormatter.ɵprov = ɵɵdefineInjectable({
  token: _DateParserFormatter,
  factory: _DateParserFormatter.ɵfac
});
var DateParserFormatter = _DateParserFormatter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateParserFormatter, [{
    type: Injectable
  }], () => [], null);
})();
var {
  minLength,
  maxLength
} = Validators;
function getPasswordValidators(injector) {
  const getRule = getRuleFn(injector);
  const passwordRulesArr = [];
  let requiredLength = 1;
  if (getRule("RequireDigit") === "true") {
    passwordRulesArr.push("number");
  }
  if (getRule("RequireLowercase") === "true") {
    passwordRulesArr.push("small");
  }
  if (getRule("RequireUppercase") === "true") {
    passwordRulesArr.push("capital");
  }
  if (getRule("RequireNonAlphanumeric") === "true") {
    passwordRulesArr.push("special");
  }
  if (Number.isInteger(+getRule("RequiredLength"))) {
    requiredLength = +getRule("RequiredLength");
  }
  const passwordValidators = passwordRulesArr.map((rule) => validatePassword(rule));
  return [...passwordValidators, minLength(requiredLength), maxLength(128)];
}
function getRuleFn(injector) {
  const configState = injector.get(ConfigStateService);
  return (key) => {
    const passwordRules = configState.getSettings("Identity.Password");
    return (passwordRules[`Abp.Identity.Password.${key}`] || "").toLowerCase();
  };
}
var errorMessageMap = {
  small: "passwordRequiresLower",
  capital: "passwordRequiresUpper",
  number: "passwordRequiresDigit",
  special: "passwordRequiresNonAlphanumeric"
};
function validatePassword(shouldContain) {
  return (control) => {
    if (!control.value) return null;
    const value = normalizeDiacritics(control.value);
    const regexMap = {
      small: /.*[a-z].*/,
      capital: /.*[A-Z].*/,
      number: /.*[0-9].*/,
      special: /.*[^0-9a-zA-Z].*/
    };
    const regex = regexMap[shouldContain];
    const isValid = regex.test(value);
    if (isValid) {
      return null;
    }
    const error = errorMessageMap[shouldContain];
    return {
      [error]: true
    };
  };
}
var ThemeSharedFeatureKind;
(function(ThemeSharedFeatureKind2) {
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["HttpErrorConfig"] = 0] = "HttpErrorConfig";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["ValidationBluePrint"] = 1] = "ValidationBluePrint";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["ValidationErrorsFn"] = 2] = "ValidationErrorsFn";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["ValidateOnSubmit"] = 3] = "ValidateOnSubmit";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["Validation"] = 4] = "Validation";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["ConfirmationIcons"] = 5] = "ConfirmationIcons";
})(ThemeSharedFeatureKind || (ThemeSharedFeatureKind = {}));
function makeThemeSharedFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function withHttpErrorConfig(httpErrorConfig) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.HttpErrorConfig, [{
    provide: HTTP_ERROR_CONFIG,
    useValue: httpErrorConfig
  }]);
}
function withValidationBluePrint(bluePrints) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.ValidationBluePrint, [{
    provide: VALIDATION_BLUEPRINTS,
    useValue: __spreadValues(__spreadValues({}, DEFAULT_VALIDATION_BLUEPRINTS), bluePrints || {})
  }]);
}
function withValidationMapErrorsFn(mapErrorsFn) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.ValidationErrorsFn, [{
    provide: VALIDATION_MAP_ERRORS_FN,
    useValue: mapErrorsFn || defaultMapErrorsFn
  }]);
}
function withValidateOnSubmit(validateOnSubmit) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.ValidateOnSubmit, [{
    provide: VALIDATION_VALIDATE_ON_SUBMIT,
    useValue: validateOnSubmit
  }]);
}
function withConfirmationIcon(confirmationIcons) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.HttpErrorConfig, [{
    provide: CONFIRMATION_ICONS,
    useValue: __spreadValues(__spreadValues({}, DEFAULT_CONFIRMATION_ICONS), confirmationIcons || {})
  }]);
}
function provideAbpThemeShared(...features) {
  const providers = [provideAppInitializer(() => {
    inject(ErrorHandler);
    inject(THEME_SHARED_APPEND_CONTENT);
    inject(DocumentDirHandlerService);
  }), THEME_SHARED_ROUTE_PROVIDERS, {
    provide: HTTP_ERROR_CONFIG,
    useValue: void 0
  }, {
    provide: NgbDateParserFormatter,
    useClass: DateParserFormatter
  }, NG_BOOTSTRAP_CONFIG_PROVIDERS, {
    provide: VALIDATION_BLUEPRINTS,
    useValue: __spreadValues({}, DEFAULT_VALIDATION_BLUEPRINTS)
  }, {
    provide: VALIDATION_MAP_ERRORS_FN,
    useValue: defaultMapErrorsFn
  }, {
    provide: VALIDATION_VALIDATE_ON_SUBMIT,
    useValue: void 0
  }, DocumentDirHandlerService, {
    provide: CONFIRMATION_ICONS,
    useValue: __spreadValues({}, DEFAULT_CONFIRMATION_ICONS)
  }, tenantNotFoundProvider, DEFAULT_HANDLERS_PROVIDERS];
  for (const feature of features) {
    providers.push(...feature.ɵproviders);
  }
  return makeEnvironmentProviders(providers);
}
var LogoFeatureKind;
(function(LogoFeatureKind2) {
  LogoFeatureKind2[LogoFeatureKind2["Options"] = 0] = "Options";
})(LogoFeatureKind || (LogoFeatureKind = {}));
function makeLogoFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function withEnvironmentOptions(options = {}) {
  const {
    name,
    logoUrl
  } = options.application || {};
  return makeLogoFeature(LogoFeatureKind.Options, [{
    provide: LOGO_URL_TOKEN,
    useValue: logoUrl || ""
  }, {
    provide: LOGO_APP_NAME_TOKEN,
    useValue: name || "ProjectName"
  }]);
}
function provideLogo(...features) {
  const providers = [];
  features.forEach(({
    ɵproviders
  }) => providers.push(...ɵproviders));
  return makeEnvironmentProviders(providers);
}
var THEME_SHARED_EXPORTS = [BreadcrumbComponent, BreadcrumbItemsComponent, ButtonComponent, ConfirmationComponent, LoaderBarComponent, LoadingComponent, ModalComponent, ToastComponent, ToastContainerComponent, LoadingDirective, ModalCloseDirective, FormInputComponent, FormCheckboxComponent, HttpErrorWrapperComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule, DisabledDirective, AbpVisibleDirective, NgxDatatableListDirective, NgxDatatableDefaultDirective, PasswordComponent];
var _BaseThemeSharedModule = class _BaseThemeSharedModule {
};
_BaseThemeSharedModule.ɵfac = function BaseThemeSharedModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseThemeSharedModule)();
};
_BaseThemeSharedModule.ɵmod = ɵɵdefineNgModule({
  type: _BaseThemeSharedModule,
  imports: [BreadcrumbComponent, BreadcrumbItemsComponent, ButtonComponent, ConfirmationComponent, LoaderBarComponent, LoadingComponent, ModalComponent, ToastComponent, ToastContainerComponent, LoadingDirective, ModalCloseDirective, FormInputComponent, FormCheckboxComponent, HttpErrorWrapperComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule, DisabledDirective, AbpVisibleDirective, NgxDatatableListDirective, NgxDatatableDefaultDirective, PasswordComponent],
  exports: [BreadcrumbComponent, BreadcrumbItemsComponent, ButtonComponent, ConfirmationComponent, LoaderBarComponent, LoadingComponent, ModalComponent, ToastComponent, ToastContainerComponent, LoadingDirective, ModalCloseDirective, FormInputComponent, FormCheckboxComponent, HttpErrorWrapperComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule, DisabledDirective, AbpVisibleDirective, NgxDatatableListDirective, NgxDatatableDefaultDirective, PasswordComponent]
});
_BaseThemeSharedModule.ɵinj = ɵɵdefineInjector({
  imports: [ButtonComponent, FormInputComponent, FormCheckboxComponent, HttpErrorWrapperComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule, PasswordComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule]
});
var BaseThemeSharedModule = _BaseThemeSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseThemeSharedModule, [{
    type: NgModule,
    args: [{
      imports: [...THEME_SHARED_EXPORTS],
      declarations: [],
      exports: [...THEME_SHARED_EXPORTS]
    }]
  }], null, null);
})();
var _ThemeSharedModule = class _ThemeSharedModule {
  /**
   * @deprecated forRoot method is deprecated, use `provideAbpThemeShared` *function* for config settings.
   */
  static forRoot({
    httpErrorConfig,
    validation = {},
    confirmationIcons = {}
  } = {}) {
    return {
      ngModule: _ThemeSharedModule,
      providers: [provideAbpThemeShared(withHttpErrorConfig(httpErrorConfig), withValidationBluePrint(validation.blueprints), withValidationMapErrorsFn(validation.mapErrorsFn), withValidateOnSubmit(validation.validateOnSubmit), withConfirmationIcon(confirmationIcons))]
    };
  }
};
_ThemeSharedModule.ɵfac = function ThemeSharedModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeSharedModule)();
};
_ThemeSharedModule.ɵmod = ɵɵdefineNgModule({
  type: _ThemeSharedModule,
  imports: [BaseThemeSharedModule],
  exports: [BaseThemeSharedModule]
});
_ThemeSharedModule.ɵinj = ɵɵdefineInjector({
  imports: [BaseThemeSharedModule, BaseThemeSharedModule]
});
var ThemeSharedModule = _ThemeSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeSharedModule, [{
    type: NgModule,
    args: [{
      imports: [BaseThemeSharedModule],
      exports: [BaseThemeSharedModule]
    }]
  }], null, null);
})();

export {
  DateTimeAdapter,
  DateAdapter,
  DatepickerI18nAdapter,
  TimeAdapter,
  TimepickerI18nAdapter,
  bounceIn,
  collapseY,
  collapseYWithMargin,
  collapseX,
  expandY,
  expandYWithMargin,
  expandX,
  collapse,
  collapseWithMargin,
  collapseLinearWithMargin,
  fadeIn,
  fadeOut,
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeOutDown,
  fadeOutUp,
  fadeOutLeft,
  fadeOutRight,
  fadeAnimation,
  dialogAnimation,
  slideFromBottom,
  toastInOut,
  BreadcrumbItemsComponent,
  BreadcrumbComponent,
  ButtonComponent,
  Confirmation,
  CONFIRMATION_ICONS,
  DEFAULT_CONFIRMATION_ICONS,
  ConfirmationComponent,
  HttpErrorWrapperComponent,
  LoaderBarComponent,
  LoadingComponent,
  NavItem,
  UserMenu,
  ConfirmationService,
  NavItemsService,
  PageAlertService,
  ToastComponent,
  ToastContainerComponent,
  ToasterService,
  UserMenuService,
  HTTP_ERROR_CONFIG,
  HTTP_ERROR_HANDLER,
  CUSTOM_ERROR_HANDLERS,
  CreateErrorComponentService,
  DEFAULT_ERROR_MESSAGES,
  DEFAULT_ERROR_LOCALIZATIONS,
  CUSTOM_HTTP_ERROR_HANDLER_PRIORITY,
  HTTP_ERROR_STATUS,
  HTTP_ERROR_DETAIL,
  getErrorFromRequestBody,
  AbpFormatErrorHandlerService,
  TenantResolveErrorHandlerService,
  StatusCodeErrorHandlerService,
  UnknownStatusCodeErrorHandlerService,
  THEME_SHARED_APPEND_CONTENT,
  defaultNgxDatatableMessages,
  NGX_DATATABLE_MESSAGES,
  SUPPRESS_UNSAVED_CHANGES_WARNING,
  LOGO_URL_TOKEN,
  LOGO_APP_NAME_TOKEN,
  RouterErrorHandlerService,
  AbpAuthenticationErrorHandler,
  ModalRefService,
  ModalComponent,
  ModalCloseDirective,
  PasswordComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardFooterComponent,
  CardTitleDirective,
  CardSubtitleDirective,
  CardImgTopDirective,
  CardHeaderDirective,
  CARD_DIRECTIVES,
  CARD_COMPONENTS,
  CardModule,
  FormCheckboxComponent,
  FormInputComponent,
  InternetConnectionStatusComponent,
  SpinnerComponent,
  EllipsisDirective,
  LoadingDirective,
  NgxDatatableDefaultDirective,
  NgxDatatableListDirective,
  AbpVisibleDirective,
  DisabledDirective,
  eFormComponets,
  DocumentDirHandlerService,
  ErrorHandler,
  NG_BOOTSTRAP_CONFIG_PROVIDERS,
  configureNgBootstrap,
  THEME_SHARED_ROUTE_PROVIDERS,
  configureRoutes,
  tenantNotFoundProvider,
  DEFAULT_HANDLERS_PROVIDERS,
  DEFAULT_VALIDATION_BLUEPRINTS,
  DateParserFormatter,
  getPasswordValidators,
  validatePassword,
  ThemeSharedFeatureKind,
  withHttpErrorConfig,
  withValidationBluePrint,
  withValidationMapErrorsFn,
  withValidateOnSubmit,
  withConfirmationIcon,
  provideAbpThemeShared,
  LogoFeatureKind,
  withEnvironmentOptions,
  provideLogo,
  THEME_SHARED_EXPORTS,
  BaseThemeSharedModule,
  ThemeSharedModule
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.0.7
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-7M2NWIIB.js.map
