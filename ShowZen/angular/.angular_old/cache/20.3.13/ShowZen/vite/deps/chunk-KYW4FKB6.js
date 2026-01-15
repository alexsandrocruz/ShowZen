import {
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControl,
  ReactiveFormsModule
} from "./chunk-XJ5KBAN7.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-PL5KB4ZG.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef$1,
  ContentChild,
  Directive,
  ElementRef,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  Renderer2,
  Self,
  SkipSelf,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OHEE3L26.js";
import {
  NEVER,
  merge
} from "./chunk-576P5TAG.js";
import {
  ReplaySubject,
  Subject,
  Subscription,
  filter,
  map,
  mapTo,
  takeUntil,
  tap
} from "./chunk-2K3BB2X3.js";
import {
  __spreadValues
} from "./chunk-SYKYUVZG.js";

// node_modules/@ngx-validate/core/fesm2020/ngx-validate-core.mjs
function ValidationErrorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(error_r1.message);
  }
}
var BLUEPRINTS = {
  email: "Please enter a valid email address.",
  max: "Max. value should be {{ max }}. ({{ actual }} entered)",
  maxlength: "Max. {{ requiredLength }} characters are allowed. (has {{ actualLength }})",
  min: "Min. value should be {{ min }}. ({{ actual }} entered)",
  minlength: "Min. {{ requiredLength }} characters are required. (has {{ actualLength }})",
  pattern: "Invalid pattern. Please review your input.",
  required: "This field is required.",
  passwordMismatch: "Passwords do not match.",
  invalidPassword: "Password should include {{ description }}."
};
var VALIDATION_BLUEPRINTS = new InjectionToken("validation.blueprints");
var VALIDATION_ERROR_TEMPLATE = new InjectionToken("validation.error.template");
var VALIDATION_INVALID_CLASSES = new InjectionToken("validation.invalid.classes");
var VALIDATION_MAP_ERRORS_FN = new InjectionToken("validation.map.errors.fn");
var VALIDATION_TARGET_SELECTOR = new InjectionToken("validation.target.selector");
var VALIDATION_VALIDATE_ON_SUBMIT = new InjectionToken("validation.validate.on.submit");
function evalPropTruthy(prop) {
  return prop || typeof prop === "string";
}
var CHARMAP = {
  á: "a",
  Á: "A",
  À: "A",
  à: "a",
  Ă: "A",
  ă: "a",
  Ắ: "A",
  ắ: "a",
  ằ: "a",
  Ằ: "A",
  Ẵ: "A",
  ẵ: "a",
  ẳ: "a",
  Ẳ: "A",
  â: "a",
  Â: "A",
  ấ: "a",
  Ấ: "A",
  ầ: "a",
  Ầ: "A",
  ǎ: "a",
  Ǎ: "A",
  å: "a",
  Å: "A",
  Ǻ: "A",
  ǻ: "a",
  ä: "a",
  Ä: "A",
  a̋: "a",
  A̋: "A",
  Ã: "A",
  ã: "a",
  A̧: "A",
  a̧: "a",
  Ą: "A",
  ą: "a",
  ā: "a",
  Ā: "A",
  ȁ: "a",
  Ȁ: "A",
  ȃ: "a",
  Ȃ: "A",
  Ặ: "A",
  ặ: "a",
  æ: "a",
  Æ: "A",
  Ǽ: "A",
  ǽ: "a",
  b̌: "b",
  B̌: "B",
  b̧: "b",
  B̧: "B",
  ć: "c",
  Ć: "C",
  c̆: "c",
  C̆: "C",
  ĉ: "c",
  Ĉ: "C",
  č: "c",
  Č: "C",
  ċ: "c",
  Ċ: "C",
  Ç: "C",
  ç: "c",
  Ḉ: "C",
  ḉ: "c",
  č̣: "c",
  Č̣: "C",
  Ď: "D",
  ď: "d",
  ḑ: "d",
  Ḑ: "D",
  đ: "d",
  Đ: "D",
  Ð: "D",
  ð: "d",
  É: "E",
  é: "e",
  È: "E",
  è: "e",
  Ĕ: "E",
  ĕ: "e",
  ê: "e",
  Ê: "E",
  Ế: "E",
  ế: "e",
  ề: "e",
  Ề: "E",
  Ê̌: "E",
  ê̌: "e",
  Ě: "E",
  ě: "e",
  ë: "e",
  Ë: "E",
  e̋: "e",
  E̋: "E",
  Ė: "E",
  ė: "e",
  Ȩ: "E",
  ȩ: "e",
  ḝ: "e",
  Ḝ: "E",
  Ę: "E",
  ę: "e",
  Ē: "E",
  ē: "e",
  Ḗ: "E",
  ḗ: "e",
  Ḕ: "E",
  ḕ: "e",
  Ȅ: "E",
  ȅ: "e",
  Ȇ: "E",
  ȇ: "e",
  ɛ̧: "e",
  Ɛ̧: "E",
  f̌: "f",
  F̌: "F",
  ƒ: "f",
  ǵ: "g",
  Ǵ: "G",
  ğ: "g",
  Ğ: "G",
  Ĝ: "G",
  ĝ: "g",
  ǧ: "g",
  Ǧ: "G",
  Ġ: "G",
  ġ: "g",
  ģ: "g",
  Ģ: "G",
  Ĥ: "H",
  ĥ: "h",
  ȟ: "h",
  Ȟ: "H",
  ḩ: "h",
  Ḩ: "H",
  ħ: "h",
  Ħ: "H",
  ḫ: "h",
  Ḫ: "H",
  í: "i",
  Í: "I",
  Ì: "I",
  ì: "i",
  Ĭ: "I",
  ĭ: "i",
  Î: "I",
  î: "i",
  ǐ: "i",
  Ǐ: "I",
  ï: "i",
  Ï: "I",
  ḯ: "i",
  Ḯ: "I",
  I̋: "I",
  i̋: "i",
  ĩ: "i",
  Ĩ: "I",
  İ: "I",
  I̧: "I",
  i̧: "i",
  Į: "I",
  į: "i",
  ī: "i",
  Ī: "I",
  ȉ: "i",
  Ȉ: "I",
  ȋ: "i",
  Ȋ: "I",
  ĳ: "i",
  Ĳ: "I",
  ı: "i",
  Ɨ̧: "I",
  ɨ̧: "i",
  ĵ: "j",
  Ĵ: "J",
  ǰ: "j",
  J̌: "J",
  Ḱ: "K",
  ḱ: "k",
  k̆: "k",
  K̆: "K",
  ǩ: "k",
  Ǩ: "K",
  ķ: "k",
  Ķ: "K",
  Ĺ: "L",
  ĺ: "l",
  Ľ: "L",
  ľ: "l",
  ļ: "l",
  Ļ: "L",
  ł: "l",
  Ł: "l",
  Ŀ: "L",
  ŀ: "l",
  Ḿ: "M",
  ḿ: "m",
  m̆: "m",
  M̆: "M",
  m̌: "m",
  M̌: "M",
  M̧: "M",
  m̧: "m",
  Ń: "N",
  ń: "n",
  Ǹ: "N",
  ǹ: "n",
  n̆: "n",
  N̆: "N",
  Ň: "N",
  ň: "n",
  ñ: "n",
  Ñ: "N",
  Ņ: "N",
  ņ: "n",
  ó: "o",
  Ó: "O",
  Ò: "O",
  ò: "o",
  Ŏ: "O",
  ŏ: "o",
  Ô: "O",
  ô: "o",
  ố: "o",
  Ố: "O",
  ồ: "o",
  Ồ: "O",
  Ǒ: "O",
  ǒ: "o",
  Ö: "O",
  ö: "o",
  ő: "o",
  Ő: "O",
  Õ: "O",
  õ: "o",
  ṍ: "o",
  Ṍ: "O",
  Ø: "O",
  ø: "o",
  Ǿ: "O",
  ǿ: "o",
  o̧: "o",
  O̧: "O",
  Ō: "O",
  ō: "o",
  ṓ: "o",
  Ṓ: "O",
  ṑ: "o",
  Ṑ: "O",
  ȍ: "o",
  Ȍ: "O",
  ȏ: "o",
  Ȏ: "O",
  ơ: "o",
  Ơ: "O",
  œ: "o",
  Œ: "O",
  ṕ: "p",
  Ṕ: "P",
  p̆: "p",
  P̆: "P",
  P̌: "P",
  p̌: "p",
  Q̌: "Q",
  q̌: "q",
  Q̧: "Q",
  q̧: "q",
  ŕ: "r",
  Ŕ: "R",
  r̆: "r",
  R̆: "R",
  Ř: "R",
  ř: "r",
  ŗ: "r",
  Ŗ: "R",
  Ř̩: "R",
  ř̩: "r",
  ȑ: "r",
  Ȑ: "R",
  Ȓ: "R",
  ȓ: "r",
  Ś: "S",
  ś: "s",
  Ṥ: "S",
  ṥ: "s",
  Ŝ: "S",
  ŝ: "s",
  š: "s",
  Š: "S",
  Ṧ: "S",
  ṧ: "s",
  ş: "s",
  Ş: "S",
  ș: "s",
  Ș: "S",
  ſ: "s",
  T̆: "T",
  t̆: "t",
  Ť: "T",
  ť: "t",
  ţ: "t",
  Ţ: "T",
  Ț: "T",
  ț: "t",
  ŧ: "t",
  Ŧ: "T",
  Ú: "U",
  ú: "u",
  ù: "u",
  Ù: "U",
  ŭ: "u",
  Ŭ: "U",
  Û: "U",
  û: "u",
  ǔ: "u",
  Ǔ: "U",
  Ů: "U",
  ů: "u",
  ü: "u",
  Ü: "U",
  ǘ: "u",
  Ǘ: "U",
  Ǜ: "U",
  ǜ: "u",
  ǚ: "u",
  Ǚ: "U",
  ǖ: "u",
  Ǖ: "U",
  Ű: "U",
  ű: "u",
  ũ: "u",
  Ũ: "U",
  Ṹ: "U",
  ṹ: "u",
  u̧: "u",
  U̧: "U",
  Ų: "U",
  ų: "u",
  Ū: "U",
  ū: "u",
  ȕ: "u",
  Ȕ: "U",
  Ȗ: "U",
  ȗ: "u",
  ư: "u",
  Ư: "U",
  ứ: "u",
  Ứ: "U",
  ừ: "u",
  Ừ: "U",
  V̆: "V",
  v̆: "v",
  v̌: "v",
  V̌: "V",
  Ẃ: "W",
  ẃ: "w",
  Ẁ: "W",
  ẁ: "w",
  ŵ: "w",
  Ŵ: "W",
  W̌: "W",
  w̌: "w",
  x́: "x",
  X́: "X",
  X̆: "X",
  x̆: "x",
  x̌: "x",
  X̌: "X",
  X̧: "X",
  x̧: "x",
  Ý: "Y",
  ý: "y",
  Ỳ: "Y",
  ỳ: "y",
  y̆: "y",
  Y̆: "Y",
  Ŷ: "Y",
  ŷ: "y",
  y̌: "y",
  Y̌: "Y",
  ÿ: "y",
  Ÿ: "Y",
  ź: "z",
  Ź: "Z",
  Ž: "Z",
  ž: "z",
  Ż: "Z",
  ż: "z",
  Z̧: "Z",
  z̧: "z"
};
function interpolate(text) {
  return "{{\\s*(" + text + ")\\s*}}";
}
function mapReplace(blueprint, map2, interpolation) {
  if (typeof blueprint !== "string") return "";
  if (typeof map2 !== "object") return blueprint;
  const expression = Object.keys(map2).join("|");
  const mapRegExp = new RegExp(interpolation ? interpolate(expression) : expression, "g");
  return blueprint.replace(mapRegExp, (match) => {
    if (interpolation) return String(map2[match.replace(/\{\{\s*|\s*\}\}/g, "")]);
    return String(map2[match]);
  });
}
function normalizeDiacritics(text) {
  return mapReplace(text, CHARMAP);
}
function addCommas(list) {
  return list.reduce((acc, item, index, {
    length
  }) => acc + (!index ? "" : length < 3 ? " and " : index === length - 1 ? ", and " : ", ") + item, "");
}
function generateValidationError(key, params, blueprint) {
  return {
    key,
    params,
    message: mapReplace(blueprint, params, true)
  };
}
var defaultMapErrorsFn = (errors) => {
  return errors;
};
function takeUntilDestroy(component) {
  const proto = Object.getPrototypeOf(component);
  const onDestroy = proto.ngOnDestroy;
  const destroy$ = new Subject();
  proto.ngOnDestroy = function() {
    onDestroy.apply(this, arguments);
    destroy$.next();
    destroy$.complete();
  };
  return takeUntil(destroy$);
}
var AbstractValidationDirective = class {
  constructor(injector) {
    this.injector = injector;
    this.config = {
      blueprints: injector.get(VALIDATION_BLUEPRINTS),
      errorTemplate: injector.get(VALIDATION_ERROR_TEMPLATE),
      invalidClasses: injector.get(VALIDATION_INVALID_CLASSES),
      mapErrorsFn: injector.get(VALIDATION_MAP_ERRORS_FN),
      targetSelector: injector.get(VALIDATION_TARGET_SELECTOR),
      validateOnSubmit: injector.get(VALIDATION_VALIDATE_ON_SUBMIT)
    };
    this.elRef = injector.get(ElementRef);
  }
  get group() {
    return (this.groupRef || {}).form || (this.groupName || {}).control;
  }
  get parent() {
    return this.parentRef || {
      getStream: () => null
    };
  }
  get blueprints() {
    return __spreadValues(__spreadValues({}, BLUEPRINTS), this._blueprints || this.parent.blueprints || this.config.blueprints || {});
  }
  get errorTemplate() {
    return this._errorTemplate || this.parent.errorTemplate || this.config.errorTemplate;
  }
  get invalidClasses() {
    return this._invalidClasses || this.parent.invalidClasses || this.config.invalidClasses;
  }
  get mapErrorsFn() {
    return this._mapErrorsFn || this.parent.mapErrorsFn || this.config.mapErrorsFn;
  }
  get skipValidation() {
    return evalPropTruthy(this._skipValidation) || this.parent.skipValidation || this.config.skipValidation;
  }
  get targetSelector() {
    return this._targetSelector || this.parent.targetSelector || this.config.targetSelector;
  }
  get validateOnSubmit() {
    return evalPropTruthy(this._validateOnSubmit) || this.parent.validateOnSubmit || this.config.validateOnSubmit;
  }
  getStream(streamName) {
    return merge(this[streamName + "$"] ? this[streamName + "$"].asObservable() : NEVER, this.parent.getStream(streamName) || NEVER);
  }
  ngOnDestroy() {
  }
};
AbstractValidationDirective.ɵfac = function AbstractValidationDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AbstractValidationDirective)(ɵɵdirectiveInject(Injector));
};
AbstractValidationDirective.ɵdir = ɵɵdefineDirective({
  type: AbstractValidationDirective,
  selectors: [["abstractValidationDirective"]],
  inputs: {
    _blueprints: [0, "blueprints", "_blueprints"],
    _errorTemplate: [0, "errorTemplate", "_errorTemplate"],
    _invalidClasses: [0, "invalidClasses", "_invalidClasses"],
    _mapErrorsFn: [0, "mapErrorsFn", "_mapErrorsFn"],
    _skipValidation: [0, "skipValidation", "_skipValidation"],
    _targetSelector: [0, "targetSelector", "_targetSelector"],
    _validateOnSubmit: [0, "validateOnSubmit", "_validateOnSubmit"]
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidationDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line */
      selector: "abstractValidationDirective"
    }]
  }], function() {
    return [{
      type: Injector
    }];
  }, {
    _blueprints: [{
      type: Input,
      args: ["blueprints"]
    }],
    _errorTemplate: [{
      type: Input,
      args: ["errorTemplate"]
    }],
    _invalidClasses: [{
      type: Input,
      args: ["invalidClasses"]
    }],
    _mapErrorsFn: [{
      type: Input,
      args: ["mapErrorsFn"]
    }],
    _skipValidation: [{
      type: Input,
      args: ["skipValidation"]
    }],
    _targetSelector: [{
      type: Input,
      args: ["targetSelector"]
    }],
    _validateOnSubmit: [{
      type: Input,
      args: ["validateOnSubmit"]
    }]
  });
})();
var ValidationErrorComponent = class {
  constructor() {
    this.trackByFn = (_, item) => item.key;
  }
  get errors() {
    return this.validationErrors || [];
  }
};
ValidationErrorComponent.ɵfac = function ValidationErrorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ValidationErrorComponent)();
};
ValidationErrorComponent.ɵcmp = ɵɵdefineComponent({
  type: ValidationErrorComponent,
  selectors: [["validation-error"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [["class", "invalid-feedback", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "invalid-feedback"]],
  template: function ValidationErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ValidationErrorComponent_div_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.errors)("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationErrorComponent, [{
    type: Component,
    args: [{
      selector: "validation-error",
      template: `
    <div *ngFor="let error of errors; trackBy: trackByFn" class="invalid-feedback">{{ error.message }}</div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
var ValidationTargetDirective = class {
  constructor(vcRef) {
    this.vcRef = vcRef;
  }
};
ValidationTargetDirective.ɵfac = function ValidationTargetDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ValidationTargetDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
ValidationTargetDirective.ɵdir = ɵɵdefineDirective({
  type: ValidationTargetDirective,
  selectors: [["", "validationTarget", ""]],
  exportAs: ["validationTarget"],
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationTargetDirective, [{
    type: Directive,
    args: [{
      selector: "[validationTarget]",
      exportAs: "validationTarget"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var ValidationContainerDirective = class {
};
ValidationContainerDirective.ɵfac = function ValidationContainerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ValidationContainerDirective)();
};
ValidationContainerDirective.ɵdir = ɵɵdefineDirective({
  type: ValidationContainerDirective,
  selectors: [["", "validationContainer", ""]],
  contentQueries: function ValidationContainerDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ValidationTargetDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.targetRef = _t.first);
    }
  },
  exportAs: ["validationContainer"],
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[validationContainer]",
      exportAs: "validationContainer"
    }]
  }], null, {
    targetRef: [{
      type: ContentChild,
      args: [ValidationTargetDirective]
    }]
  });
})();
var ValidationGroupDirective = class extends AbstractValidationDirective {
  constructor(injector, cdRef, groupName, groupRef, parentRef) {
    super(injector);
    this.injector = injector;
    this.cdRef = cdRef;
    this.groupName = groupName;
    this.groupRef = groupRef;
    this.parentRef = parentRef;
    this.status$ = new ReplaySubject(1);
    this.submit$ = new ReplaySubject(1);
    this.value$ = new ReplaySubject(1);
    this.subs = new Subscription();
  }
  subscribeToFormSubmit() {
    this.elRef.nativeElement.onsubmit = (event) => {
      if (this.group.invalid) event.preventDefault();
      this.submit$.next(this.group);
      this.cdRef.markForCheck();
    };
  }
  subscribeToStatusChanges() {
    this.subs.add(this.group.statusChanges.subscribe(() => {
      this.status$.next(this.group);
      this.cdRef.markForCheck();
    }));
  }
  subscribeToValueChanges() {
    this.subs.add(this.group.valueChanges.subscribe(() => {
      this.value$.next(this.group);
      this.cdRef.markForCheck();
    }));
  }
  ngAfterViewInit() {
    if (!this.parentRef) this.subscribeToFormSubmit();
    this.subscribeToStatusChanges();
    this.subscribeToValueChanges();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
};
ValidationGroupDirective.ɵfac = function ValidationGroupDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ValidationGroupDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FormGroupName, 10), ɵɵdirectiveInject(FormGroupDirective, 10), ɵɵdirectiveInject(ValidationGroupDirective, 12));
};
ValidationGroupDirective.ɵdir = ɵɵdefineDirective({
  type: ValidationGroupDirective,
  selectors: [["", "formGroup", ""], ["", "formGroupName", ""]],
  exportAs: ["validationGroup"],
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationGroupDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line */
      selector: "[formGroup],[formGroupName]",
      exportAs: "validationGroup"
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ChangeDetectorRef
    }, {
      type: FormGroupName,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }]
    }, {
      type: FormGroupDirective,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }]
    }, {
      type: ValidationGroupDirective,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }]
    }];
  }, null);
})();
var ValidationStyleDirective = class {
  constructor(elRef) {
    this.elRef = elRef;
  }
};
ValidationStyleDirective.ɵfac = function ValidationStyleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ValidationStyleDirective)(ɵɵdirectiveInject(ElementRef));
};
ValidationStyleDirective.ɵdir = ɵɵdefineDirective({
  type: ValidationStyleDirective,
  selectors: [["", "validationStyle", ""]],
  exportAs: ["validationStyle"],
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationStyleDirective, [{
    type: Directive,
    args: [{
      selector: "[validationStyle]",
      exportAs: "validationStyle"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var ValidationDirective = class extends AbstractValidationDirective {
  constructor(injector, cdRef, control, renderer, vcRef, parentRef, markRef, targetRef, containerRef, formGroupDirective) {
    super(injector);
    this.injector = injector;
    this.cdRef = cdRef;
    this.control = control;
    this.renderer = renderer;
    this.vcRef = vcRef;
    this.parentRef = parentRef;
    this.markRef = markRef;
    this.targetRef = targetRef;
    this.containerRef = containerRef;
    this.formGroupDirective = formGroupDirective;
    this.isSubmitted = false;
    this.subscriptions = new Subscription();
  }
  get validation$() {
    return merge(this.parent.getStream("status").pipe(mapTo(null)), this.parent.getStream("value").pipe(mapTo(null)), this.parent.getStream("submit"));
  }
  buildErrors(errors) {
    return Object.keys(errors || {}).map((key) => generateValidationError(key, errors[key], this.blueprints[key]));
  }
  insertErrorClasses() {
    this.renderer.addClass(this.markElement, this.invalidClasses);
  }
  insertErrors(errors) {
    const template = this.errorTemplate;
    const targetRef = this.containerRef ? this.containerRef.targetRef : this.targetRef;
    const vcRef = targetRef ? targetRef.vcRef : this.vcRef;
    this.errorRef = template instanceof TemplateRef ? vcRef.createEmbeddedView(template, {
      $implicit: errors
    }, vcRef.length) : vcRef.createComponent(template, {
      index: vcRef.length,
      injector: this.injector
    });
    if (this.errorRef instanceof ComponentRef$1 && this.errorRef.instance) this.errorRef.instance.validationErrors = errors;
  }
  removeErrorClasses() {
    this.renderer.removeClass(this.markElement, this.invalidClasses);
  }
  removeErrors() {
    if (this.errorRef) {
      this.errorRef.destroy();
      this.errorRef = null;
    }
  }
  setMarkElement() {
    this.markElement = (this.markRef ? this.markRef.elRef.nativeElement : this.targetSelector ? this.elRef.nativeElement.closest(this.targetSelector) : null) || this.elRef.nativeElement;
  }
  shouldValidate(errors) {
    return errors.length && this.control.dirty && (!this.validateOnSubmit || this.isSubmitted);
  }
  subscribeToValidation() {
    let cached;
    this.subscriptions.add(this.validation$.pipe(filter(() => !this.skipValidation), tap((form) => {
      if (form && this.formGroupDirective.submitted) {
        this.control.control.markAsDirty();
        this.isSubmitted = true;
      }
    }), map(() => this.mapErrorsFn(this.buildErrors(this.control.errors), this.buildErrors((this.parentRef.group || {}).errors), this.control))).subscribe((errors) => {
      if (cached === JSON.stringify(errors)) return;
      this.removeErrors();
      if (this.shouldValidate(errors)) {
        this.insertErrors(errors);
        if (!cached) this.insertErrorClasses();
        cached = JSON.stringify(errors);
      } else {
        this.removeErrorClasses();
        cached = "";
      }
      this.cdRef.markForCheck();
    }));
  }
  ngAfterViewInit() {
    this.setMarkElement();
    this.subscribeToValidation();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
ValidationDirective.ɵfac = function ValidationDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ValidationDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgControl, 2), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ValidationGroupDirective, 4), ɵɵdirectiveInject(ValidationStyleDirective, 12), ɵɵdirectiveInject(ValidationTargetDirective, 12), ɵɵdirectiveInject(ValidationContainerDirective, 8), ɵɵdirectiveInject(FormGroupDirective, 8));
};
ValidationDirective.ɵdir = ɵɵdefineDirective({
  type: ValidationDirective,
  selectors: [["", "formControl", ""], ["", "formControlName", ""]],
  exportAs: ["validationDirective"],
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line */
      selector: "[formControl],[formControlName]",
      exportAs: "validationDirective"
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgControl,
      decorators: [{
        type: Self
      }]
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: ValidationGroupDirective,
      decorators: [{
        type: SkipSelf
      }]
    }, {
      type: ValidationStyleDirective,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }]
    }, {
      type: ValidationTargetDirective,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }]
    }, {
      type: ValidationContainerDirective,
      decorators: [{
        type: Optional
      }]
    }, {
      type: FormGroupDirective,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var NgxValidateCoreModule = class _NgxValidateCoreModule {
  static forRoot(config = {}) {
    return {
      ngModule: _NgxValidateCoreModule,
      providers: [{
        provide: VALIDATION_BLUEPRINTS,
        useValue: config.blueprints || BLUEPRINTS
      }, {
        provide: VALIDATION_ERROR_TEMPLATE,
        useValue: config.errorTemplate || ValidationErrorComponent
      }, {
        provide: VALIDATION_INVALID_CLASSES,
        useValue: config.invalidClasses || "is-invalid"
      }, {
        provide: VALIDATION_MAP_ERRORS_FN,
        useValue: config.mapErrorsFn || defaultMapErrorsFn
      }, {
        provide: VALIDATION_TARGET_SELECTOR,
        useValue: config.targetSelector
      }, {
        provide: VALIDATION_VALIDATE_ON_SUBMIT,
        useValue: config.validateOnSubmit
      }]
    };
  }
};
NgxValidateCoreModule.ɵfac = function NgxValidateCoreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxValidateCoreModule)();
};
NgxValidateCoreModule.ɵmod = ɵɵdefineNgModule({
  type: NgxValidateCoreModule,
  declarations: [ValidationErrorComponent, AbstractValidationDirective, ValidationContainerDirective, ValidationGroupDirective, ValidationStyleDirective, ValidationTargetDirective, ValidationDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ValidationContainerDirective, ValidationGroupDirective, ValidationStyleDirective, ValidationTargetDirective, ValidationDirective]
});
NgxValidateCoreModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxValidateCoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      exports: [ValidationContainerDirective, ValidationGroupDirective, ValidationStyleDirective, ValidationTargetDirective, ValidationDirective],
      declarations: [ValidationErrorComponent, AbstractValidationDirective, ValidationContainerDirective, ValidationGroupDirective, ValidationStyleDirective, ValidationTargetDirective, ValidationDirective]
    }]
  }], null, null);
})();
function comparePasswords([controlName1, controlName2]) {
  return (group) => {
    const password = group.get(controlName1).value;
    const repeat = group.get(controlName2).value;
    return !password || !repeat || password === repeat ? null : {
      passwordMismatch: {
        fields: [controlName1, controlName2]
      }
    };
  };
}
function validatePassword(shouldContain = ["small", "capital", "number", "special"]) {
  return (control) => {
    if (!control.value) return null;
    const value = normalizeDiacritics(control.value);
    const regex = {
      small: /.*[a-z].*/,
      capital: /.*[A-Z].*/,
      number: /.*[0-9].*/,
      special: /.*[^0-9a-zA-Z].*/
    };
    const missing = shouldContain.filter((key) => !regex[key].test(value));
    return missing.length ? {
      invalidPassword: {
        missing,
        description: addCommas(missing.map((key) => ({
          small: "a small letter",
          capital: "a capital",
          number: "a number",
          special: "a special character"
        })[key]))
      }
    } : null;
  };
}

export {
  BLUEPRINTS,
  VALIDATION_BLUEPRINTS,
  VALIDATION_ERROR_TEMPLATE,
  VALIDATION_INVALID_CLASSES,
  VALIDATION_MAP_ERRORS_FN,
  VALIDATION_TARGET_SELECTOR,
  VALIDATION_VALIDATE_ON_SUBMIT,
  evalPropTruthy,
  interpolate,
  mapReplace,
  normalizeDiacritics,
  addCommas,
  generateValidationError,
  defaultMapErrorsFn,
  takeUntilDestroy,
  AbstractValidationDirective,
  ValidationErrorComponent,
  ValidationTargetDirective,
  ValidationContainerDirective,
  ValidationGroupDirective,
  ValidationStyleDirective,
  ValidationDirective,
  NgxValidateCoreModule,
  comparePasswords,
  validatePassword
};
//# sourceMappingURL=chunk-KYW4FKB6.js.map
