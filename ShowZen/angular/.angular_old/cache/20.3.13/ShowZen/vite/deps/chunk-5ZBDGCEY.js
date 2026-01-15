import {
  AbpVisibleDirective,
  DateAdapter,
  DateTimeAdapter,
  DisabledDirective,
  EllipsisDirective,
  NgxDatatableDefaultDirective,
  NgxDatatableListDirective,
  ThemeSharedModule,
  TimeAdapter
} from "./chunk-7M2NWIIB.js";
import {
  NgbDateAdapter,
  NgbDatepickerModule,
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownModule,
  NgbDropdownToggle,
  NgbInputDatepicker,
  NgbTimeAdapter,
  NgbTimepicker,
  NgbTimepickerModule,
  NgbTooltip,
  NgbTooltipModule,
  NgbTypeahead,
  NgbTypeaheadModule
} from "./chunk-YX3SHI5G.js";
import {
  DataTableColumnCellDirective,
  DataTableColumnDirective,
  DataTableColumnHeaderDirective,
  DatatableComponent,
  NgxDatatableModule,
  SelectionType
} from "./chunk-HXT4IF3A.js";
import {
  AbpValidators,
  ConfigStateService,
  CoreModule,
  LocalizationPipe,
  LocalizationService,
  PermissionDirective,
  PermissionService,
  RestService,
  ShowPasswordDirective,
  TimezoneService,
  TrackByService,
  UtcToLocalPipe,
  collectionCompare,
  createLocalizationPipeKeyGenerator,
  escapeHtmlChars
} from "./chunk-YNSF2OKM.js";
import {
  NgxValidateCoreModule,
  ValidationDirective,
  ValidationStyleDirective,
  ValidationTargetDirective
} from "./chunk-KYW4FKB6.js";
import {
  CheckboxControlValueAccessor,
  ControlContainer,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgSelectMultipleOption
} from "./chunk-XJ5KBAN7.js";
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
  Directive,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgModule,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  computed,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
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
  merge
} from "./chunk-576P5TAG.js";
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  pipe,
  switchMap,
  take,
  zip
} from "./chunk-2K3BB2X3.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-SYKYUVZG.js";

// node_modules/@abp/utils/dist/fesm2015/abp-utils.js
var ListNode = class {
  constructor(value) {
    this.value = value;
  }
};
var LinkedList = class _LinkedList {
  constructor() {
    this.size = 0;
  }
  get head() {
    return this.first;
  }
  get tail() {
    return this.last;
  }
  get length() {
    return this.size;
  }
  attach(value, previousNode, nextNode) {
    if (!previousNode)
      return this.addHead(value);
    if (!nextNode)
      return this.addTail(value);
    const node = new ListNode(value);
    node.previous = previousNode;
    previousNode.next = node;
    node.next = nextNode;
    nextNode.previous = node;
    this.size++;
    return node;
  }
  attachMany(values, previousNode, nextNode) {
    if (!values.length)
      return [];
    if (!previousNode)
      return this.addManyHead(values);
    if (!nextNode)
      return this.addManyTail(values);
    const list = new _LinkedList();
    list.addManyTail(values);
    list.first.previous = previousNode;
    previousNode.next = list.first;
    list.last.next = nextNode;
    nextNode.previous = list.last;
    this.size += values.length;
    return list.toNodeArray();
  }
  detach(node) {
    if (!node.previous)
      return this.dropHead();
    if (!node.next)
      return this.dropTail();
    node.previous.next = node.next;
    node.next.previous = node.previous;
    this.size--;
    return node;
  }
  add(value) {
    return {
      after: (...params) => this.addAfter.call(this, value, ...params),
      before: (...params) => this.addBefore.call(this, value, ...params),
      byIndex: (position) => this.addByIndex(value, position),
      head: () => this.addHead(value),
      tail: () => this.addTail(value)
    };
  }
  addMany(values) {
    return {
      after: (...params) => this.addManyAfter.call(this, values, ...params),
      before: (...params) => this.addManyBefore.call(this, values, ...params),
      byIndex: (position) => this.addManyByIndex(values, position),
      head: () => this.addManyHead(values),
      tail: () => this.addManyTail(values)
    };
  }
  addAfter(value, previousValue, compareFn = collectionCompare) {
    const previous = this.find((node) => compareFn(node.value, previousValue));
    return previous ? this.attach(value, previous, previous.next) : this.addTail(value);
  }
  addBefore(value, nextValue, compareFn = collectionCompare) {
    const next = this.find((node) => compareFn(node.value, nextValue));
    return next ? this.attach(value, next.previous, next) : this.addHead(value);
  }
  addByIndex(value, position) {
    if (position < 0)
      position += this.size;
    else if (position >= this.size)
      return this.addTail(value);
    if (position <= 0)
      return this.addHead(value);
    const next = this.get(position);
    return this.attach(value, next.previous, next);
  }
  addHead(value) {
    const node = new ListNode(value);
    node.next = this.first;
    if (this.first)
      this.first.previous = node;
    else
      this.last = node;
    this.first = node;
    this.size++;
    return node;
  }
  addTail(value) {
    const node = new ListNode(value);
    if (this.first) {
      node.previous = this.last;
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
    }
    this.size++;
    return node;
  }
  addManyAfter(values, previousValue, compareFn = collectionCompare) {
    const previous = this.find((node) => compareFn(node.value, previousValue));
    return previous ? this.attachMany(values, previous, previous.next) : this.addManyTail(values);
  }
  addManyBefore(values, nextValue, compareFn = collectionCompare) {
    const next = this.find((node) => compareFn(node.value, nextValue));
    return next ? this.attachMany(values, next.previous, next) : this.addManyHead(values);
  }
  addManyByIndex(values, position) {
    if (position < 0)
      position += this.size;
    if (position <= 0)
      return this.addManyHead(values);
    if (position >= this.size)
      return this.addManyTail(values);
    const next = this.get(position);
    return this.attachMany(values, next.previous, next);
  }
  addManyHead(values) {
    return values.reduceRight((nodes, value) => {
      nodes.unshift(this.addHead(value));
      return nodes;
    }, []);
  }
  addManyTail(values) {
    return values.map((value) => this.addTail(value));
  }
  drop() {
    return {
      byIndex: (position) => this.dropByIndex(position),
      byValue: (...params) => this.dropByValue.apply(this, params),
      byValueAll: (...params) => this.dropByValueAll.apply(this, params),
      head: () => this.dropHead(),
      tail: () => this.dropTail()
    };
  }
  dropMany(count) {
    return {
      byIndex: (position) => this.dropManyByIndex(count, position),
      head: () => this.dropManyHead(count),
      tail: () => this.dropManyTail(count)
    };
  }
  dropByIndex(position) {
    if (position < 0)
      position += this.size;
    const current = this.get(position);
    return current ? this.detach(current) : void 0;
  }
  dropByValue(value, compareFn = collectionCompare) {
    const position = this.findIndex((node) => compareFn(node.value, value));
    return position < 0 ? void 0 : this.dropByIndex(position);
  }
  dropByValueAll(value, compareFn = collectionCompare) {
    const dropped = [];
    for (let current = this.first, position = 0; current; position++, current = current.next) {
      if (compareFn(current.value, value)) {
        dropped.push(this.dropByIndex(position - dropped.length));
      }
    }
    return dropped;
  }
  dropHead() {
    const head = this.first;
    if (head) {
      this.first = head.next;
      if (this.first)
        this.first.previous = void 0;
      else
        this.last = void 0;
      this.size--;
      return head;
    }
    return void 0;
  }
  dropTail() {
    const tail = this.last;
    if (tail) {
      this.last = tail.previous;
      if (this.last)
        this.last.next = void 0;
      else
        this.first = void 0;
      this.size--;
      return tail;
    }
    return void 0;
  }
  dropManyByIndex(count, position) {
    if (count <= 0)
      return [];
    if (position < 0)
      position = Math.max(position + this.size, 0);
    else if (position >= this.size)
      return [];
    count = Math.min(count, this.size - position);
    const dropped = [];
    while (count--) {
      const current = this.get(position);
      dropped.push(this.detach(current));
    }
    return dropped;
  }
  dropManyHead(count) {
    if (count <= 0)
      return [];
    count = Math.min(count, this.size);
    const dropped = [];
    while (count--)
      dropped.unshift(this.dropHead());
    return dropped;
  }
  dropManyTail(count) {
    if (count <= 0)
      return [];
    count = Math.min(count, this.size);
    const dropped = [];
    while (count--)
      dropped.push(this.dropTail());
    return dropped;
  }
  find(predicate) {
    for (let current = this.first, position = 0; current; position++, current = current.next) {
      if (predicate(current, position, this))
        return current;
    }
    return void 0;
  }
  findIndex(predicate) {
    for (let current = this.first, position = 0; current; position++, current = current.next) {
      if (predicate(current, position, this))
        return position;
    }
    return -1;
  }
  forEach(iteratorFn) {
    for (let node = this.first, position = 0; node; position++, node = node.next) {
      iteratorFn(node, position, this);
    }
  }
  get(position) {
    return this.find((_, index) => position === index);
  }
  indexOf(value, compareFn = collectionCompare) {
    return this.findIndex((node) => compareFn(node.value, value));
  }
  toArray() {
    const array = new Array(this.size);
    this.forEach((node, index) => array[index] = node.value);
    return array;
  }
  toNodeArray() {
    const array = new Array(this.size);
    this.forEach((node, index) => array[index] = node);
    return array;
  }
  toString(mapperFn = JSON.stringify) {
    return this.toArray().map((value) => mapperFn(value)).join(" <-> ");
  }
  // Cannot use Generator type because of ng-packagr
  *[Symbol.iterator]() {
    for (let node = this.first, position = 0; node; position++, node = node.next) {
      yield node.value;
    }
  }
};

// node_modules/@abp/ng.components/fesm2022/abp-ng.components-extensible.mjs
var _forTrack0 = ($index, $item) => $item.value;
function ExtensibleFormMultiselectComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const option_r2 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "::" + option_r2.key), " ");
  }
}
function ExtensibleFormMultiselectComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const option_r2 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", option_r2.key, " ");
  }
}
function ExtensibleFormMultiselectComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "input", 2);
    ɵɵlistener("change", function ExtensibleFormMultiselectComponent_For_2_Template_input_change_1_listener($event) {
      const option_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onCheckboxChange(option_r2.value, $event.target.checked));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 3);
    ɵɵconditionalCreate(3, ExtensibleFormMultiselectComponent_For_2_Conditional_3_Template, 2, 3)(4, ExtensibleFormMultiselectComponent_For_2_Conditional_4_Template, 1, 1);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("id", "checkbox_" + option_r2.value)("disabled", ctx_r2.disabled)("checked", ctx_r2.isChecked(option_r2.value));
    ɵɵadvance();
    ɵɵproperty("for", "checkbox_" + option_r2.value);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.prop().isExtra ? 3 : 4);
  }
}
var _c0 = ["field"];
var _c1 = () => ({
  $implicit: "form-check-label"
});
var _c2 = () => ({
  standalone: true
});
var _c3 = (a0, a1) => ({
  "fa-eye-slash": a0,
  "fa-eye": a1
});
function ExtensibleFormPropComponent_ng_container_0_Case_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", ctx_r0.prop.template)("ngComponentOutletInjector", ctx_r0.injectorForCustomComponent);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_3_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_3_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "input", 11, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop.id)("formControlName", ctx_r0.prop.name)("autocomplete", ctx_r0.prop.autocomplete)("type", ctx_r0.getType(ctx_r0.prop))("abpDisabled", ctx_r0.disabled)("readonly", ctx_r0.readonly);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("formControlName", ctx_r0.prop.name);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_5_ng_template_3_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "input", 12, 1);
    ɵɵtemplate(3, ExtensibleFormPropComponent_ng_container_0_Case_5_ng_template_3_Template, 0, 0, "ng-template", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop.id)("formControlName", ctx_r0.prop.name)("abpDisabled", ctx_r0.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", label_r2)("ngTemplateOutletContext", ɵɵpureFunction0(5, _c1));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const option_r3 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "::" + option_r3.key), " ");
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const option_r3 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", option_r3.key, " ");
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 15);
    ɵɵconditionalCreate(1, ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Conditional_1_Template, 2, 3)(2, ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Conditional_2_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngValue", option_r3.value);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.prop.isExtra ? 1 : 2);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_6_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelementStart(1, "select", 14, 1);
    ɵɵrepeaterCreate(3, ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Template, 3, 2, "option", 15, _forTrack0);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop.id)("formControlName", ctx_r0.prop.name)("abpDisabled", ctx_r0.disabled);
    ɵɵadvance(2);
    ɵɵrepeater(ɵɵpipeBind1(5, 4, ctx_r0.options$));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_7_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_7_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "abp-extensible-form-multi-select", 16);
    ɵɵpipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("prop", ctx_r0.prop)("options", ɵɵpipeBind1(2, 5, ctx_r0.options$))("formControlName", ctx_r0.prop.name)("abpDisabled", ctx_r0.disabled);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_8_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_8_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelementStart(1, "div", 17, 2)(3, "input", 18, 1);
    ɵɵtwoWayListener("ngModelChange", function ExtensibleFormPropComponent_ng_container_0_Case_8_Template_input_ngModelChange_3_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r0.typeaheadModel, $event) || (ctx_r0.typeaheadModel = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("selectItem", function ExtensibleFormPropComponent_ng_container_0_Case_8_Template_input_selectItem_3_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.setTypeaheadValue($event.item));
    })("blur", function ExtensibleFormPropComponent_ng_container_0_Case_8_Template_input_blur_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.setTypeaheadValue(ctx_r0.typeaheadModel));
    });
    ɵɵelementEnd();
    ɵɵelement(5, "input", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const typeahead_r5 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance(3);
    ɵɵclassProp("is-invalid", typeahead_r5.classList.contains("is-invalid"));
    ɵɵproperty("id", ctx_r0.prop.id)("autocomplete", ctx_r0.prop.autocomplete)("abpDisabled", ctx_r0.disabled)("ngbTypeahead", ctx_r0.search)("editable", false)("inputFormatter", ctx_r0.typeaheadFormatter)("resultFormatter", ctx_r0.typeaheadFormatter)("ngModelOptions", ɵɵpureFunction0(13, _c2));
    ɵɵtwoWayProperty("ngModel", ctx_r0.typeaheadModel);
    ɵɵadvance(2);
    ɵɵproperty("formControlName", ctx_r0.prop.name);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_9_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_9_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelementStart(1, "input", 19, 3);
    ɵɵlistener("click", function ExtensibleFormPropComponent_ng_container_0_Case_9_Template_input_click_1_listener() {
      ɵɵrestoreView(_r6);
      const datepicker_r7 = ɵɵreference(2);
      return ɵɵresetView(datepicker_r7.open());
    })("keyup.space", function ExtensibleFormPropComponent_ng_container_0_Case_9_Template_input_keyup_space_1_listener() {
      ɵɵrestoreView(_r6);
      const datepicker_r7 = ɵɵreference(2);
      return ɵɵresetView(datepicker_r7.open());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop.id)("formControlName", ctx_r0.prop.name);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_10_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_10_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "ngb-timepicker", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("formControlName", ctx_r0.prop.name);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_11_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_11_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "abp-extensible-date-time-picker", 21);
    ɵɵpipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("prop", ctx_r0.prop)("meridian", ɵɵpipeBind1(2, 3, ctx_r0.meridian$));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_12_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_12_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "textarea", 22, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop.id)("formControlName", ctx_r0.prop.name)("abpDisabled", ctx_r0.disabled)("readonly", ctx_r0.readonly);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_13_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_13_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelementStart(1, "div", 23);
    ɵɵelement(2, "input", 24);
    ɵɵelementStart(3, "button", 25);
    ɵɵlistener("click", function ExtensibleFormPropComponent_ng_container_0_Case_13_Template_button_click_3_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.showPassword = !ctx_r0.showPassword);
    });
    ɵɵelement(4, "i", 26);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance(2);
    ɵɵproperty("id", ctx_r0.prop.id)("formControlName", ctx_r0.prop.name)("abpShowPassword", ctx_r0.showPassword);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(5, _c3, !ctx_r0.showPassword, ctx_r0.showPassword));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small", 8);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, ctx_r0.prop.formText));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, ExtensibleFormPropComponent_ng_container_0_Case_1_Template, 1, 2, "ng-container");
    ɵɵelementStart(2, "div", 5);
    ɵɵconditionalCreate(3, ExtensibleFormPropComponent_ng_container_0_Case_3_Template, 3, 7)(4, ExtensibleFormPropComponent_ng_container_0_Case_4_Template, 1, 1, "input", 6)(5, ExtensibleFormPropComponent_ng_container_0_Case_5_Template, 4, 6, "div", 7)(6, ExtensibleFormPropComponent_ng_container_0_Case_6_Template, 6, 6)(7, ExtensibleFormPropComponent_ng_container_0_Case_7_Template, 3, 7)(8, ExtensibleFormPropComponent_ng_container_0_Case_8_Template, 6, 14)(9, ExtensibleFormPropComponent_ng_container_0_Case_9_Template, 3, 3)(10, ExtensibleFormPropComponent_ng_container_0_Case_10_Template, 2, 2)(11, ExtensibleFormPropComponent_ng_container_0_Case_11_Template, 3, 5)(12, ExtensibleFormPropComponent_ng_container_0_Case_12_Template, 3, 5)(13, ExtensibleFormPropComponent_ng_container_0_Case_13_Template, 5, 8);
    ɵɵconditionalCreate(14, ExtensibleFormPropComponent_ng_container_0_Conditional_14_Template, 3, 3, "small", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_2_0 = ctx_r0.getComponent(ctx_r0.prop)) === "template" ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.containerClassName);
    ɵɵadvance();
    ɵɵconditional((tmp_4_0 = ctx_r0.getComponent(ctx_r0.prop)) === "input" ? 3 : tmp_4_0 === "hidden" ? 4 : tmp_4_0 === "checkbox" ? 5 : tmp_4_0 === "select" ? 6 : tmp_4_0 === "multiselect" ? 7 : tmp_4_0 === "typeahead" ? 8 : tmp_4_0 === "date" ? 9 : tmp_4_0 === "time" ? 10 : tmp_4_0 === "dateTime" ? 11 : tmp_4_0 === "textarea" ? 12 : tmp_4_0 === "passwordinputgroup" ? 13 : -1);
    ɵɵadvance(11);
    ɵɵconditional(ctx_r0.prop.formText ? 14 : -1);
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, ctx_r0.prop.displayTextResolver(ctx_r0.data)), " ");
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "::" + ctx_r0.prop.displayName), " ");
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, ctx_r0.prop.displayName), " ");
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleFormPropComponent_ng_template_1_Conditional_3_Conditional_0_Template, 2, 3)(1, ExtensibleFormPropComponent_ng_template_1_Conditional_3_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.prop.isExtra ? 0 : 1);
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 29);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngbTooltip", ɵɵpipeBind1(1, 2, ctx_r0.prop.tooltip.text))("placement", ctx_r0.prop.tooltip.placement || "auto");
  }
}
function ExtensibleFormPropComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 27)(1, "span", 28);
    ɵɵconditionalCreate(2, ExtensibleFormPropComponent_ng_template_1_Conditional_2_Template, 2, 3)(3, ExtensibleFormPropComponent_ng_template_1_Conditional_3_Template, 2, 1);
    ɵɵtext(4);
    ɵɵconditionalCreate(5, ExtensibleFormPropComponent_ng_template_1_Conditional_5_Template, 2, 4, "i", 29);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const classes_r9 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("htmlFor", ctx_r0.prop.id)("ngClass", classes_r9 || "form-label d-inline-block");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.prop.displayTextResolver ? 2 : 3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.asterisk, " ");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.prop.tooltip ? 5 : -1);
  }
}
var _c4 = (a0, a1, a2) => ({
  groupedProp: a0,
  data: a1,
  isFirstGroup: a2
});
var _forTrack1 = ($index, $item) => $item.name;
function ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelementContainer(1, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    const groupedProp_r3 = ctx_r1.$implicit;
    const ɵ$index_2_r4 = ctx_r1.$index;
    ɵɵnextContext(2);
    const propListTemplate_r5 = ɵɵreference(2);
    ɵɵproperty("ngClass", groupedProp_r3.group == null ? null : groupedProp_r3.group.className);
    ɵɵattribute("data-name", (groupedProp_r3.group == null ? null : groupedProp_r3.group.name) || (groupedProp_r3.group == null ? null : groupedProp_r3.group.className));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", propListTemplate_r5)("ngTemplateOutletContext", ɵɵpureFunction3(4, _c4, groupedProp_r3, data_r1, ɵ$index_2_r4 === 0));
  }
}
function ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const data_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    const groupedProp_r3 = ctx_r1.$implicit;
    const ɵ$index_2_r4 = ctx_r1.$index;
    ɵɵnextContext(2);
    const propListTemplate_r5 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", propListTemplate_r5)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c4, groupedProp_r3, data_r1, ɵ$index_2_r4 === 0));
  }
}
function ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Conditional_1_Template, 2, 8, "div", 2)(2, ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Conditional_2_Template, 1, 6, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    const groupedProp_r3 = ctx_r1.$implicit;
    const ɵ$index_2_r4 = ctx_r1.$index;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r5.isAnyGroupMemberVisible(ɵ$index_2_r4, data_r1) && (groupedProp_r3.group == null ? null : groupedProp_r3.group.className) ? 1 : 2);
  }
}
function ExtensibleFormComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Template, 3, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const groupedProp_r3 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("abpPropDataFromList", groupedProp_r3.formPropList)("abpPropDataWithRecord", ctx_r5.record);
  }
}
function ExtensibleFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, ExtensibleFormComponent_Conditional_0_For_1_Template, 1, 2, "ng-container", null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵrepeater(ctx_r5.groupedPropList.items);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 4);
    ɵɵelement(1, "abp-extensible-form-prop", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const prop_r7 = ɵɵnextContext(2).$implicit;
    const data_r8 = ɵɵnextContext().data;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("formGroupName", ctx_r5.extraPropertiesKey);
    ɵɵadvance();
    ɵɵclassMap(prop_r7.className);
    ɵɵproperty("prop", prop_r7)("data", data_r8);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-extensible-form-prop", 7);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    const prop_r7 = ctx_r8.$implicit;
    const ɵ$index_17_r10 = ctx_r8.$index;
    const ctx_r10 = ɵɵnextContext();
    const data_r8 = ctx_r10.data;
    const isFirstGroup_r12 = ctx_r10.isFirstGroup;
    ɵɵclassMap(prop_r7.className);
    ɵɵproperty("prop", prop_r7)("data", data_r8)("first", ɵ$index_17_r10 === 0)("isFirstGroup", isFirstGroup_r12);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_1_Conditional_0_Template, 1, 6, "abp-extensible-form-prop", 6);
  }
  if (rf & 2) {
    const prop_r7 = ɵɵnextContext(2).$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r5.form.get(prop_r7.name) ? 0 : -1);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_0_Template, 2, 5, "ng-container", 4)(1, ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const prop_r7 = ɵɵnextContext().$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r5.extraProperties.controls[prop_r7.name] ? 0 : 1);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const prop_r7 = ctx.$implicit;
    const data_r8 = ɵɵnextContext().data;
    ɵɵconditional(prop_r7.visible(data_r8) ? 0 : -1);
  }
}
function ExtensibleFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, ExtensibleFormComponent_ng_template_1_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const groupedProp_r13 = ctx.groupedProp;
    ɵɵrepeater(groupedProp_r13.formPropList);
  }
}
var _c5 = (a0) => ({
  $implicit: a0
});
var _forTrack2 = ($index, $item) => $item.text;
function GridActionsComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    ɵɵnextContext(2);
    const dropDownBtnItemTmp_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", dropDownBtnItemTmp_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, action_r1));
  }
}
function GridActionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "button", 5);
    ɵɵelement(2, "i", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 7);
    ɵɵrepeaterCreate(6, GridActionsComponent_Conditional_0_For_7_Template, 1, 4, "ng-container", 4, _forTrack2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassProp("me-1", ctx_r2.icon);
    ɵɵproperty("ngClass", ctx_r2.icon);
    ɵɵadvance();
    ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 4, ctx_r2.text), " ");
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r2.actionList);
  }
}
function GridActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const btnTmp_r4 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", btnTmp_r4)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, ctx_r2.actionList.get(0).value));
  }
}
function GridActionsComponent_ng_template_2_Conditional_0_button_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GridActionsComponent_ng_template_2_Conditional_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function GridActionsComponent_ng_template_2_Conditional_0_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const action_r6 = ɵɵnextContext(2).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(action_r6.action(ctx_r2.data));
    });
    ɵɵtemplate(1, GridActionsComponent_ng_template_2_Conditional_0_button_0_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r6 = ɵɵnextContext(2).$implicit;
    ɵɵnextContext();
    const buttonContentTmp_r7 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buttonContentTmp_r7)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, action_r6));
  }
}
function GridActionsComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GridActionsComponent_ng_template_2_Conditional_0_button_0_Template, 2, 4, "button", 9);
  }
  if (rf & 2) {
    const action_r6 = ɵɵnextContext().$implicit;
    ɵɵproperty("abpPermission", action_r6.permission)("abpPermissionRunChangeDetection", false);
  }
}
function GridActionsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, GridActionsComponent_ng_template_2_Conditional_0_Template, 1, 2, "button", 8);
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(action_r6.visible(ctx_r2.data) ? 0 : -1);
  }
}
function GridActionsComponent_ng_template_4_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r8 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, action_r8.text));
  }
}
function GridActionsComponent_ng_template_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r8 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, action_r8.text));
  }
}
function GridActionsComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, GridActionsComponent_ng_template_4_Conditional_1_Conditional_0_Template, 3, 3, "span")(1, GridActionsComponent_ng_template_4_Conditional_1_Conditional_1_Template, 3, 3, "div", 12);
  }
  if (rf & 2) {
    const action_r8 = ɵɵnextContext().$implicit;
    ɵɵconditional(action_r8.icon ? 0 : 1);
  }
}
function GridActionsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 6);
    ɵɵconditionalCreate(1, GridActionsComponent_ng_template_4_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const action_r8 = ctx.$implicit;
    ɵɵclassProp("me-1", action_r8.icon && !action_r8.showOnlyIcon);
    ɵɵproperty("ngClass", action_r8.icon);
    ɵɵadvance();
    ɵɵconditional(!action_r8.showOnlyIcon ? 1 : -1);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵpipe(1, "abpLocalization");
    ɵɵlistener("click", function GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r9);
      const action_r10 = ɵɵnextContext(3).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(action_r10.action(ctx_r2.data));
    });
    ɵɵtemplate(2, GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext(3).$implicit;
    ɵɵnextContext();
    const buttonContentTmp_r7 = ɵɵreference(5);
    ɵɵstyleMap(action_r10.btnStyle);
    ɵɵclassMap(action_r10.btnClass);
    ɵɵproperty("ngbTooltip", ɵɵpipeBind1(1, 8, action_r10.tooltip.text))("placement", action_r10.tooltip.placement || "auto");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", buttonContentTmp_r7)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c5, action_r10));
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_Template, 3, 12, "button", 15);
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("abpPermission", action_r10.permission)("abpPermissionRunChangeDetection", false);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r11);
      const action_r10 = ɵɵnextContext(3).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(action_r10.action(ctx_r2.data));
    });
    ɵɵtemplate(1, GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext(3).$implicit;
    ɵɵnextContext();
    const buttonContentTmp_r7 = ɵɵreference(5);
    ɵɵstyleMap(action_r10.btnStyle);
    ɵɵclassMap(action_r10.btnClass);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buttonContentTmp_r7)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c5, action_r10));
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_Template, 2, 8, "button", 17);
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("abpPermission", action_r10.permission)("abpPermissionRunChangeDetection", false);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_Template, 1, 2, "button", 13)(1, GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_Template, 1, 2, "button", 14);
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext().$implicit;
    ɵɵconditional(action_r10.tooltip ? 0 : 1);
  }
}
function GridActionsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, GridActionsComponent_ng_template_6_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const action_r10 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(action_r10.visible(ctx_r2.data) ? 0 : -1);
  }
}
var _c6 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8)(1, "input", 9);
    ɵɵlistener("change", function ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_1_Conditional_0_Template_input_change_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      const allRowsSelected_r5 = ctx_r3.allRowsSelected;
      const selectFn_r6 = ctx_r3.selectFn;
      return ɵɵresetView(selectFn_r6(!allRowsSelected_r5));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const allRowsSelected_r5 = ɵɵnextContext().allRowsSelected;
    ɵɵadvance();
    ɵɵproperty("checked", allRowsSelected_r5);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_1_Conditional_0_Template, 2, 1, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1._selectionType !== "single" ? 0 : -1);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10)(1, "input", 11);
    ɵɵlistener("change", function ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_2_Conditional_0_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r7);
      const onCheckboxChangeFn_r8 = ɵɵnextContext().onCheckboxChangeFn;
      return ɵɵresetView(onCheckboxChangeFn_r8($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const isSelected_r9 = ɵɵnextContext().isSelected;
    ɵɵadvance();
    ɵɵproperty("checked", isSelected_r9);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10)(1, "input", 12);
    ɵɵlistener("change", function ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_2_Conditional_1_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r10);
      const onCheckboxChangeFn_r8 = ɵɵnextContext().onCheckboxChangeFn;
      return ɵɵresetView(onCheckboxChangeFn_r8($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const isSelected_r9 = ɵɵnextContext().isSelected;
    ɵɵadvance();
    ɵɵproperty("checked", isSelected_r9);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_2_Conditional_0_Template, 2, 1, "div", 10);
    ɵɵconditionalCreate(1, ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_2_Conditional_1_Template, 2, 1, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1._selectionType === "single" ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1._selectionType !== "single" ? 1 : -1);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-datatable-column", 3);
    ɵɵtemplate(1, ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_1_Template, 1, 1, "ng-template", 6)(2, ExtensibleTableComponent_Conditional_0_Conditional_1_ng_template_2_Template, 2, 2, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_2_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-grid-actions", 14);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    const row_r12 = ctx_r10.row;
    const i_r13 = ctx_r10.rowIndex;
    ɵɵproperty("index", i_r13)("record", row_r12);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_2_ng_template_1_Conditional_0_Template, 1, 2, "abp-grid-actions", 14);
  }
  if (rf & 2) {
    const row_r12 = ɵɵnextContext().row;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.isVisibleActions(row_r12) ? 0 : -1);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13)(1, ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const i_r13 = ctx.rowIndex;
    const gridActions_r14 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.actionsTemplate || gridActions_r14)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c6, row_r12, i_r13));
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-datatable-column", 4);
    ɵɵpipe(1, "abpLocalization");
    ɵɵtemplate(2, ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_2_Template, 3, 5, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ɵɵpipeBind1(1, 5, ctx_r1.actionsText))("maxWidth", ctx_r1._actionsColumnWidth() ?? void 0)("width", ctx_r1._actionsColumnWidth() ?? 200)("canAutoResize", !ctx_r1._actionsColumnWidth())("sortable", false);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 18);
    ɵɵpipe(1, "abpLocalization");
    ɵɵlistener("click", function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_2_Conditional_0_Template_span_click_0_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r15 = ɵɵnextContext();
      const column_r17 = ctx_r15.column;
      const sortFn_r18 = ctx_r15.sortFn;
      const prop_r19 = ɵɵnextContext(2).$implicit;
      return ɵɵresetView(prop_r19.sortable && sortFn_r18(column_r17));
    });
    ɵɵtext(2);
    ɵɵelement(3, "i", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r17 = ɵɵnextContext().column;
    const prop_r19 = ɵɵnextContext(2).$implicit;
    ɵɵclassProp("pointer", prop_r19.sortable);
    ɵɵproperty("ngbTooltip", ɵɵpipeBind1(1, 5, prop_r19.tooltip.text))("placement", prop_r19.tooltip.placement || "auto");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", column_r17.name, " ");
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 20);
    ɵɵlistener("click", function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_2_Conditional_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r20);
      const ctx_r15 = ɵɵnextContext();
      const column_r17 = ctx_r15.column;
      const sortFn_r18 = ctx_r15.sortFn;
      const prop_r19 = ɵɵnextContext(2).$implicit;
      return ɵɵresetView(prop_r19.sortable && sortFn_r18(column_r17));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r17 = ɵɵnextContext().column;
    const prop_r19 = ɵɵnextContext(2).$implicit;
    ɵɵclassProp("pointer", prop_r19.sortable);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", column_r17.name, " ");
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_2_Conditional_0_Template, 4, 7, "span", 16)(1, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_2_Conditional_1_Template, 2, 3, "span", 17);
  }
  if (rf & 2) {
    const prop_r19 = ɵɵnextContext(2).$implicit;
    ɵɵconditional(prop_r19.tooltip ? 0 : 1);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "abpUtcToLocal");
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "abpUtcToLocal");
    ɵɵpipe(5, "abpLocalization");
    ɵɵlistener("click", function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r21 = ɵɵnextContext(4);
      const row_r23 = ctx_r21.row;
      const i_r24 = ctx_r21.index;
      const prop_r19 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(prop_r19.action && prop_r19.action({
        getInjected: ctx_r1.getInjected,
        record: row_r23,
        index: i_r24
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r23 = ɵɵnextContext(4).row;
    const prop_r19 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("pointer", prop_r19.action);
    ɵɵproperty("innerHTML", !prop_r19.isExtra ? ɵɵpipeBind2(2, 6, ɵɵpipeBind1(1, 4, row_r23["_" + prop_r19.name] == null ? null : row_r23["_" + prop_r19.name].value), prop_r19.type) : ɵɵpipeBind1(5, 14, "::" + ɵɵpipeBind2(4, 11, ɵɵpipeBind1(3, 9, row_r23["_" + prop_r19.name] == null ? null : row_r23["_" + prop_r19.name].value), prop_r19.type)), ɵɵsanitizeHtml)("ngClass", ctx_r1.entityPropTypeClasses[prop_r19.type]);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "abpLocalization");
    ɵɵlistener("click", function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r25);
      const ctx_r21 = ɵɵnextContext(4);
      const row_r23 = ctx_r21.row;
      const i_r24 = ctx_r21.index;
      const prop_r19 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(prop_r19.action && prop_r19.action({
        getInjected: ctx_r1.getInjected,
        record: row_r23,
        index: i_r24
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r23 = ɵɵnextContext(4).row;
    const prop_r19 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("pointer", prop_r19.action);
    ɵɵproperty("innerHTML", !prop_r19.isExtra ? ɵɵpipeBind1(1, 4, row_r23["_" + prop_r19.name] == null ? null : row_r23["_" + prop_r19.name].value) : ɵɵpipeBind1(3, 8, "::" + ɵɵpipeBind1(2, 6, row_r23["_" + prop_r19.name] == null ? null : row_r23["_" + prop_r19.name].value)), ɵɵsanitizeHtml)("ngClass", ctx_r1.entityPropTypeClasses[prop_r19.type]);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_0_Template, 6, 16, "div", 23)(1, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_1_Template, 4, 10, "div", 23);
  }
  if (rf & 2) {
    const prop_r19 = ɵɵnextContext(5).$implicit;
    ɵɵconditional(prop_r19.type === "datetime" || prop_r19.type === "date" || prop_r19.type === "time" ? 0 : 1);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 25);
  }
  if (rf & 2) {
    const row_r23 = ɵɵnextContext(3).row;
    const prop_r19 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngComponentOutlet", row_r23["_" + prop_r19.name].component)("ngComponentOutletInjector", row_r23["_" + prop_r19.name].injector);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Template, 2, 1)(2, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_2_Template, 1, 2, "ng-container");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r23 = ɵɵnextContext(2).row;
    const prop_r19 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵconditional(!row_r23["_" + prop_r19.name].component ? 1 : 2);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 22);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r23 = ɵɵnextContext().row;
    const prop_r19 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("abpVisible", row_r23["_" + prop_r19.name] == null ? null : row_r23["_" + prop_r19.name].visible);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 21);
  }
  if (rf & 2) {
    const prop_r19 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("abpPermission", prop_r19.permission)("abpPermissionRunChangeDetection", false);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-datatable-column", 5);
    ɵɵpipe(1, "abpLocalization");
    ɵɵtemplate(2, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_2_Template, 2, 1, "ng-template", 6)(3, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_ng_template_3_Template, 1, 2, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r25 = ɵɵnextContext();
    const prop_r19 = ctx_r25.$implicit;
    const ɵ$index_41_r27 = ctx_r25.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("width", ctx_r1.columnWidths[ɵ$index_41_r27] ?? 200)("canAutoResize", !ctx_r1.columnWidths[ɵ$index_41_r27])("name", ɵɵpipeBind1(1, 5, prop_r19.isExtra ? "::" + prop_r19.displayName : prop_r19.displayName))("prop", prop_r19.name)("sortable", prop_r19.sortable);
  }
}
function ExtensibleTableComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleTableComponent_Conditional_0_For_4_ngx_datatable_column_0_Template, 4, 7, "ngx-datatable-column", 15);
  }
  if (rf & 2) {
    const prop_r19 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("abpVisible", prop_r19.columnVisible(ctx_r1.getInjected));
  }
}
function ExtensibleTableComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-datatable", 2);
    ɵɵlistener("activate", function ExtensibleTableComponent_Conditional_0_Template_ngx_datatable_activate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.tableActivate.emit($event));
    })("select", function ExtensibleTableComponent_Conditional_0_Template_ngx_datatable_select_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelect($event));
    })("scroll", function ExtensibleTableComponent_Conditional_0_Template_ngx_datatable_scroll_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onScroll($event));
    });
    ɵɵconditionalCreate(1, ExtensibleTableComponent_Conditional_0_Conditional_1_Template, 3, 5, "ngx-datatable-column", 3);
    ɵɵconditionalCreate(2, ExtensibleTableComponent_Conditional_0_Conditional_2_Template, 3, 7, "ngx-datatable-column", 4);
    ɵɵrepeaterCreate(3, ExtensibleTableComponent_Conditional_0_For_4_Template, 1, 1, "ngx-datatable-column", 5, _forTrack1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r1.getTableHeight());
    ɵɵproperty("rows", ctx_r1.data)("count", ctx_r1.recordsTotal)("list", ctx_r1.list)("selectionType", ctx_r1.selectable ? ctx_r1._selectionType : void 0)("selected", ctx_r1.selected)("scrollbarV", ctx_r1.infiniteScroll)("loadingIndicator", ctx_r1.infiniteScroll && ctx_r1.isLoading)("footerHeight", ctx_r1.infiniteScroll ? false : 50);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.selectable ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.actionsTemplate || ctx_r1.actionList.length && ctx_r1.hasAtLeastOnePermittedAction ? 2 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.propList);
  }
}
var _forTrack3 = ($index, $item) => $item.component || $item.action;
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 4);
    ɵɵpipe(1, "createInjector");
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngComponentOutlet", ctx)("ngComponentOutletInjector", ɵɵpipeBind3(1, 2, ctx_r1.record, action_r1, ctx_r1));
  }
}
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const action_r1 = ɵɵnextContext(4).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(action_r1.action(ctx_r1.data));
    });
    ɵɵelement(1, "i", 7);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const toolbarAction_r4 = ctx;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", (toolbarAction_r4 == null ? null : toolbarAction_r4.btnClass) ? toolbarAction_r4 == null ? null : toolbarAction_r4.btnClass : ctx_r1.defaultBtnClass);
    ɵɵadvance();
    ɵɵclassProp("me-1", toolbarAction_r4 == null ? null : toolbarAction_r4.icon);
    ɵɵproperty("ngClass", toolbarAction_r4 == null ? null : toolbarAction_r4.icon);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, toolbarAction_r4 == null ? null : toolbarAction_r4.text), " ");
  }
}
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Conditional_0_Template, 4, 7, "button", 5);
  }
  if (rf & 2) {
    let tmp_14_0;
    const action_r1 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional((tmp_14_0 = ctx_r1.asToolbarAction(action_r1).value) ? 0 : -1, tmp_14_0);
  }
}
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_1_Template, 2, 6, "ng-container")(2, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Template, 1, 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const action_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵconditional((tmp_13_0 = action_r1.component) ? 1 : 2, tmp_13_0);
  }
}
function PageToolbarComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Template, 3, 1, "ng-container", 3);
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("abpPermission", action_r1.permission)("abpPermissionRunChangeDetection", false);
  }
}
function PageToolbarComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵconditionalCreate(1, PageToolbarComponent_For_2_Conditional_1_Template, 1, 2, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    const ɵ$index_3_r5 = ctx.$index;
    const ɵ$count_3_r6 = ctx.$count;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("pe-0", ɵ$index_3_r5 === ɵ$count_3_r6 - 1);
    ɵɵadvance();
    ɵɵconditional(action_r1.visible(ctx_r1.data) ? 1 : -1);
  }
}
function selfFactory(dependency) {
  return dependency;
}
var _ExtensibleDateTimePickerComponent = class _ExtensibleDateTimePickerComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.prop = input();
    this.meridian = input(false);
    this.placement = input("bottom-left");
  }
  setDate(dateStr) {
    this.date.writeValue(dateStr);
  }
  setTime(dateStr) {
    this.time.writeValue(dateStr);
  }
};
_ExtensibleDateTimePickerComponent.ɵfac = function ExtensibleDateTimePickerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExtensibleDateTimePickerComponent)();
};
_ExtensibleDateTimePickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _ExtensibleDateTimePickerComponent,
  selectors: [["abp-extensible-date-time-picker"]],
  viewQuery: function ExtensibleDateTimePickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NgbInputDatepicker, 5);
      ɵɵviewQuery(NgbTimepicker, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.date = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.time = _t.first);
    }
  },
  inputs: {
    prop: [1, "prop"],
    meridian: [1, "meridian"],
    placement: [1, "placement"]
  },
  exportAs: ["abpExtensibleDateTimePicker"],
  features: [ɵɵProvidersFeature([], [{
    provide: ControlContainer,
    useFactory: selfFactory,
    deps: [[new Optional(), new SkipSelf(), ControlContainer]]
  }, {
    provide: NgbDateAdapter,
    useClass: DateTimeAdapter
  }, {
    provide: NgbTimeAdapter,
    useClass: DateTimeAdapter
  }])],
  decls: 4,
  vars: 5,
  consts: [["datepicker", "ngbDatepicker"], ["timepicker", ""], ["ngbDatepicker", "", "type", "text", 1, "form-control", 3, "ngModelChange", "click", "keyup.space", "id", "formControlName", "placement"], [3, "ngModelChange", "formControlName", "meridian"]],
  template: function ExtensibleDateTimePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "input", 2, 0);
      ɵɵlistener("ngModelChange", function ExtensibleDateTimePickerComponent_Template_input_ngModelChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.setTime($event));
      })("click", function ExtensibleDateTimePickerComponent_Template_input_click_0_listener() {
        ɵɵrestoreView(_r1);
        const datepicker_r2 = ɵɵreference(1);
        return ɵɵresetView(datepicker_r2.open());
      })("keyup.space", function ExtensibleDateTimePickerComponent_Template_input_keyup_space_0_listener() {
        ɵɵrestoreView(_r1);
        const datepicker_r2 = ɵɵreference(1);
        return ɵɵresetView(datepicker_r2.open());
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "ngb-timepicker", 3, 1);
      ɵɵlistener("ngModelChange", function ExtensibleDateTimePickerComponent_Template_ngb_timepicker_ngModelChange_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.setDate($event));
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("id", ctx.prop().id)("formControlName", ctx.prop().name)("placement", ctx.placement());
      ɵɵadvance(2);
      ɵɵproperty("formControlName", ctx.prop().name)("meridian", ctx.meridian());
    }
  },
  dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlName, NgbDatepickerModule, NgbInputDatepicker, NgbTimepickerModule, NgbTimepicker, NgxValidateCoreModule, ValidationDirective],
  encapsulation: 2,
  changeDetection: 0
});
var ExtensibleDateTimePickerComponent = _ExtensibleDateTimePickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleDateTimePickerComponent, [{
    type: Component,
    args: [{
      exportAs: "abpExtensibleDateTimePicker",
      imports: [ReactiveFormsModule, NgbDatepickerModule, NgbTimepickerModule, NgxValidateCoreModule],
      selector: "abp-extensible-date-time-picker",
      template: `
    <input
      [id]="prop().id"
      [formControlName]="prop().name"
      (ngModelChange)="setTime($event)"
      (click)="datepicker.open()"
      (keyup.space)="datepicker.open()"
      ngbDatepicker
      #datepicker="ngbDatepicker"
      type="text"
      class="form-control"
      [placement]="placement()"
    />
    <ngb-timepicker
      #timepicker
      [formControlName]="prop().name"
      (ngModelChange)="setDate($event)"
      [meridian]="meridian()"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      viewProviders: [{
        provide: ControlContainer,
        useFactory: selfFactory,
        deps: [[new Optional(), new SkipSelf(), ControlContainer]]
      }, {
        provide: NgbDateAdapter,
        useClass: DateTimeAdapter
      }, {
        provide: NgbTimeAdapter,
        useClass: DateTimeAdapter
      }]
    }]
  }], null, {
    date: [{
      type: ViewChild,
      args: [NgbInputDatepicker]
    }],
    time: [{
      type: ViewChild,
      args: [NgbTimepicker]
    }]
  });
})();
var EXTENSIONS_IDENTIFIER = new InjectionToken("EXTENSIONS_IDENTIFIER");
var EXTENSIONS_ACTION_TYPE = new InjectionToken("EXTENSIONS_ACTION_TYPE");
var EXTENSIONS_ACTION_DATA = new InjectionToken("EXTENSIONS_ACTION_DATA");
var EXTENSIONS_ACTION_CALLBACK = new InjectionToken("EXTENSIONS_ACTION_DATA");
var PROP_DATA_STREAM = new InjectionToken("PROP_DATA_STREAM");
var ROW_RECORD = new InjectionToken("ROW_RECORD");
var ENTITY_PROP_TYPE_CLASSES = new InjectionToken("ENTITY_PROP_TYPE_CLASSES", {
  factory: () => ({})
});
var EXTENSIONS_FORM_PROP = new InjectionToken("EXTENSIONS_FORM_PROP");
var EXTENSIONS_FORM_PROP_DATA = new InjectionToken("EXTENSIONS_FORM_PROP_DATA");
var EXTRA_PROPERTIES_KEY = "extraProperties";
var PropList = class extends LinkedList {
};
var PropData = class {
  get data() {
    return {
      getInjected: this.getInjected,
      index: this.index,
      record: this.record
    };
  }
};
var Prop = class {
  constructor(type, name, displayName, permission, visible = (_) => true, isExtra = false, template, className, formText, tooltip, displayTextResolver) {
    this.type = type;
    this.name = name;
    this.displayName = displayName;
    this.permission = permission;
    this.visible = visible;
    this.isExtra = isExtra;
    this.template = template;
    this.className = className;
    this.formText = formText;
    this.tooltip = tooltip;
    this.displayTextResolver = displayTextResolver;
    this.displayName = this.displayName || this.name;
  }
};
var PropsFactory = class {
  constructor() {
    this.contributorCallbacks = {};
  }
  get(name) {
    this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
    return new this._ctor(this.contributorCallbacks[name]);
  }
};
var Props = class {
  get props() {
    const propList = new this._ctor();
    this.callbackList.forEach((callback) => callback(propList));
    return propList;
  }
  constructor(callbackList) {
    this.callbackList = callbackList;
  }
  addContributor(contributeCallback) {
    this.callbackList.push(contributeCallback);
  }
  clearContributors() {
    while (this.callbackList.length) this.callbackList.pop();
  }
};
var FormPropList = class extends PropList {
};
var FormProps = class extends Props {
  constructor() {
    super(...arguments);
    this._ctor = FormPropList;
  }
};
var GroupedFormPropList = class {
  constructor() {
    this.items = [];
    this.count = 1;
  }
  addItem(item) {
    const groupName = item.group?.name;
    let group = this.items.find((i) => i.group?.name === groupName);
    if (group) {
      group.formPropList.addTail(item);
    } else {
      group = {
        formPropList: new FormPropList(),
        group: item.group || {
          name: `default${this.count++}`,
          className: item.group?.className
        }
      };
      group.formPropList.addHead(item);
      this.items.push(group);
    }
  }
};
var CreateFormPropsFactory = class extends PropsFactory {
  constructor() {
    super(...arguments);
    this._ctor = FormProps;
  }
};
var EditFormPropsFactory = class extends PropsFactory {
  constructor() {
    super(...arguments);
    this._ctor = FormProps;
  }
};
var FormProp = class _FormProp extends Prop {
  constructor(options) {
    super(options.type, options.name, options.displayName || "", options.permission || "", options.visible, options.isExtra, options.template, options.className, options.formText, options.tooltip);
    this.group = options.group;
    this.className = options.className;
    this.formText = options.formText;
    this.tooltip = options.tooltip;
    this.asyncValidators = options.asyncValidators || ((_) => []);
    this.validators = options.validators || ((_) => []);
    this.disabled = options.disabled || ((_) => false);
    this.readonly = options.readonly || ((_) => false);
    this.autocomplete = options.autocomplete || "off";
    this.options = options.options;
    this.id = options.id || options.name;
    const defaultValue = options.defaultValue;
    this.defaultValue = isFalsyValue(defaultValue) ? defaultValue : defaultValue || "";
    this.displayTextResolver = options.displayTextResolver;
  }
  static create(options) {
    return new _FormProp(options);
  }
  static createMany(arrayOfOptions) {
    return arrayOfOptions.map(_FormProp.create);
  }
};
var FormPropData = class extends PropData {
  constructor(injector, record) {
    super();
    this.record = record;
    this.getInjected = injector.get.bind(injector);
  }
};
function isFalsyValue(defaultValue) {
  return [0, "", false].indexOf(defaultValue) > -1;
}
var TYPEAHEAD_TEXT_SUFFIX = "_Text";
var TYPEAHEAD_TEXT_SUFFIX_REGEX = /_Text$/;
function createTypeaheadOptions(lookup) {
  return (data, searchText) => searchText && data ? data.getInjected(RestService).request({
    method: "GET",
    url: lookup.url || "",
    params: {
      [lookup.filterParamName || ""]: searchText
    }
  }, {
    apiName: "Default"
  }).pipe(map((response) => {
    const list = response[lookup.resultListPropertyName || ""];
    const mapToOption = (item) => ({
      key: item[lookup.displayPropertyName || ""],
      value: item[lookup.valuePropertyName || ""]
    });
    return list.map(mapToOption);
  })) : of([]);
}
function getTypeaheadType(lookup, name) {
  if (!lookup.url) {
    return name.endsWith(TYPEAHEAD_TEXT_SUFFIX) ? "hidden" : void 0;
  } else {
    return "typeahead";
  }
}
function createTypeaheadDisplayNameGenerator(displayNameGeneratorFn, properties) {
  return (displayName, fallback) => {
    const name = removeTypeaheadTextSuffix(fallback.name || "");
    return displayNameGeneratorFn(displayName || properties[name].displayName, {
      name,
      resource: fallback.resource
    });
  };
}
function addTypeaheadTextSuffix(name) {
  return name + TYPEAHEAD_TEXT_SUFFIX;
}
function hasTypeaheadTextSuffix(name) {
  return TYPEAHEAD_TEXT_SUFFIX_REGEX.test(name);
}
function removeTypeaheadTextSuffix(name) {
  return name.replace(TYPEAHEAD_TEXT_SUFFIX_REGEX, "");
}
var _configStateService;
var _ExtensibleFormPropService = class _ExtensibleFormPropService {
  constructor() {
    __privateAdd(this, _configStateService);
    __privateSet(this, _configStateService, inject(ConfigStateService));
    this.meridian$ = __privateGet(this, _configStateService).getDeep$("localization.currentCulture.dateTimeFormat.shortTimePattern").pipe(map((shortTimePattern) => (shortTimePattern || "").includes("tt")));
  }
  isRequired(validator) {
    return validator === Validators.required || validator === AbpValidators.required || validator.name === "required";
  }
  getComponent(prop) {
    if (prop.template) {
      return "template";
    }
    switch (prop.type) {
      case "boolean":
        return "checkbox";
      case "date":
        return "date";
      case "datetime":
        return "dateTime";
      case "hidden":
        return "hidden";
      case "multiselect":
        return "multiselect";
      case "text":
        return "textarea";
      case "time":
        return "time";
      case "typeahead":
        return "typeahead";
      case "passwordinputgroup":
        return "passwordinputgroup";
      default:
        return prop.options ? "select" : "input";
    }
  }
  getType(prop) {
    switch (prop.type) {
      case "date":
      case "string":
        return "text";
      case "boolean":
        return "checkbox";
      case "number":
        return "number";
      case "email":
        return "email";
      case "password":
        return "password";
      case "passwordinputgroup":
        return "passwordinputgroup";
      default:
        return "hidden";
    }
  }
  calcAsterisks(validators) {
    if (!validators) return "";
    const required = validators.find((v) => this.isRequired(v));
    return required ? "*" : "";
  }
};
_configStateService = new WeakMap();
_ExtensibleFormPropService.ɵfac = function ExtensibleFormPropService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExtensibleFormPropService)();
};
_ExtensibleFormPropService.ɵprov = ɵɵdefineInjectable({
  token: _ExtensibleFormPropService,
  factory: _ExtensibleFormPropService.ɵfac
});
var ExtensibleFormPropService = _ExtensibleFormPropService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleFormPropService, [{
    type: Injectable
  }], null, null);
})();
var EXTENSIBLE_FORM_MULTI_SELECT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ExtensibleFormMultiselectComponent),
  multi: true
};
var _ExtensibleFormMultiselectComponent = class _ExtensibleFormMultiselectComponent {
  constructor() {
    this.prop = input.required();
    this.options = input.required();
    this.selectedValues = [];
    this.disabled = false;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  isChecked(value) {
    return this.selectedValues.includes(value);
  }
  onCheckboxChange(value, checked) {
    this.selectedValues = checked ? [...this.selectedValues, value] : this.selectedValues.filter((item) => item !== value);
    this.onChange(this.selectedValues);
    this.onTouched();
  }
  writeValue(value) {
    this.selectedValues = Array.isArray(value) ? [...value] : [];
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
};
_ExtensibleFormMultiselectComponent.ɵfac = function ExtensibleFormMultiselectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExtensibleFormMultiselectComponent)();
};
_ExtensibleFormMultiselectComponent.ɵcmp = ɵɵdefineComponent({
  type: _ExtensibleFormMultiselectComponent,
  selectors: [["abp-extensible-form-multi-select"]],
  inputs: {
    prop: [1, "prop"],
    options: [1, "options"]
  },
  features: [ɵɵProvidersFeature([EXTENSIBLE_FORM_MULTI_SELECT_CONTROL_VALUE_ACCESSOR])],
  decls: 3,
  vars: 1,
  consts: [[3, "id"], ["validationTarget", "", 1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "disabled", "checked"], [3, "for"]],
  template: function ExtensibleFormMultiselectComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵrepeaterCreate(1, ExtensibleFormMultiselectComponent_For_2_Template, 5, 5, "div", 1, _forTrack0);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("id", ctx.prop().id);
      ɵɵadvance();
      ɵɵrepeater(ctx.options());
    }
  },
  dependencies: [LocalizationPipe, NgxValidateCoreModule, ValidationTargetDirective],
  encapsulation: 2,
  changeDetection: 0
});
var ExtensibleFormMultiselectComponent = _ExtensibleFormMultiselectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleFormMultiselectComponent, [{
    type: Component,
    args: [{
      selector: "abp-extensible-form-multi-select",
      template: `
    <div [id]="prop().id">
      @for (option of options(); track option.value) {
        <div class="form-check" validationTarget>
          <input
            type="checkbox"
            class="form-check-input"
            [id]="'checkbox_' + option.value"
            [disabled]="disabled"
            [checked]="isChecked(option.value)"
            (change)="onCheckboxChange(option.value, $event.target.checked)"
          />
          <label [for]="'checkbox_' + option.value">
            @if (prop().isExtra) {
              {{ '::' + option.key | abpLocalization }}
            } @else {
              {{ option.key }}
            }
          </label>
        </div>
      }
    </div>
  `,
      providers: [EXTENSIBLE_FORM_MULTI_SELECT_CONTROL_VALUE_ACCESSOR],
      imports: [LocalizationPipe, NgxValidateCoreModule],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var _groupDirective;
var _ExtensibleFormPropComponent = class _ExtensibleFormPropComponent {
  constructor() {
    __privateAdd(this, _groupDirective);
    this.service = inject(ExtensibleFormPropService);
    this.cdRef = inject(ChangeDetectorRef);
    this.track = inject(TrackByService);
    __privateSet(this, _groupDirective, inject(FormGroupDirective));
    this.injector = inject(Injector);
    this.form = __privateGet(this, _groupDirective).form;
    this.asterisk = "";
    this.containerClassName = "mb-2";
    this.showPassword = false;
    this.options$ = of([]);
    this.validators = [];
    this.passwordKey = "ThemeShared.Extensions.PasswordComponent";
    this.disabledFn = (data) => false;
    this.search = (text$) => text$ ? text$.pipe(debounceTime(300), distinctUntilChanged(), switchMap((text) => this.prop?.options?.(this.data, text) || of([]))) : of([]);
    this.typeaheadFormatter = (option) => option.key;
    this.meridian$ = this.service.meridian$;
  }
  get disabled() {
    return this.disabledFn(this.data);
  }
  setTypeaheadValue(selectedOption) {
    this.typeaheadModel = selectedOption || {
      key: null,
      value: null
    };
    const {
      key,
      value
    } = this.typeaheadModel;
    const [keyControl, valueControl] = this.getTypeaheadControls();
    if (valueControl?.value && !value) valueControl.markAsDirty();
    keyControl?.setValue(key);
    valueControl?.setValue(value);
  }
  get isInvalid() {
    const control = this.form.get(this.prop.name);
    return control?.touched && control.invalid;
  }
  getTypeaheadControls() {
    const {
      name
    } = this.prop;
    const extraPropName = `${EXTRA_PROPERTIES_KEY}.${name}`;
    const keyControl = this.form.get(addTypeaheadTextSuffix(extraPropName)) || this.form.get(addTypeaheadTextSuffix(name));
    const valueControl = this.form.get(extraPropName) || this.form.get(name);
    return [keyControl, valueControl];
  }
  setAsterisk() {
    this.asterisk = this.service.calcAsterisks(this.validators);
  }
  ngAfterViewInit() {
    if (this.isFirstGroup && this.first && this.fieldRef) {
      requestAnimationFrame(() => {
        this.fieldRef.nativeElement.focus();
      });
    }
  }
  getComponent(prop) {
    return this.service.getComponent(prop);
  }
  getType(prop) {
    return this.service.getType(prop);
  }
  ngOnChanges({
    prop,
    data
  }) {
    const currentProp = prop?.currentValue;
    const {
      options,
      readonly,
      disabled,
      validators,
      className,
      template
    } = currentProp || {};
    if (template) {
      this.injectorForCustomComponent = Injector.create({
        providers: [{
          provide: EXTENSIONS_FORM_PROP,
          useValue: currentProp
        }, {
          provide: EXTENSIONS_FORM_PROP_DATA,
          useValue: data?.currentValue?.record
        }, {
          provide: ControlContainer,
          useExisting: FormGroupDirective
        }],
        parent: this.injector
      });
    }
    if (options) this.options$ = options(this.data);
    if (readonly) this.readonly = readonly(this.data);
    if (disabled) {
      this.disabledFn = disabled;
    }
    if (validators) {
      this.validators = validators(this.data);
      this.setAsterisk();
    }
    if (className !== void 0) {
      this.containerClassName = className;
    }
    const [keyControl, valueControl] = this.getTypeaheadControls();
    if (keyControl && valueControl) this.typeaheadModel = {
      key: keyControl.value,
      value: valueControl.value
    };
  }
};
_groupDirective = new WeakMap();
_ExtensibleFormPropComponent.ɵfac = function ExtensibleFormPropComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExtensibleFormPropComponent)();
};
_ExtensibleFormPropComponent.ɵcmp = ɵɵdefineComponent({
  type: _ExtensibleFormPropComponent,
  selectors: [["abp-extensible-form-prop"]],
  viewQuery: function ExtensibleFormPropComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fieldRef = _t.first);
    }
  },
  inputs: {
    data: "data",
    prop: "prop",
    first: "first",
    isFirstGroup: "isFirstGroup"
  },
  features: [ɵɵProvidersFeature([ExtensibleFormPropService], [{
    provide: ControlContainer,
    useFactory: selfFactory,
    deps: [[new Optional(), new SkipSelf(), ControlContainer]]
  }, {
    provide: NgbDateAdapter,
    useClass: DateAdapter
  }, {
    provide: NgbTimeAdapter,
    useClass: TimeAdapter
  }]), ɵɵNgOnChangesFeature],
  decls: 3,
  vars: 2,
  consts: [["label", ""], ["field", ""], ["typeahead", ""], ["datepicker", "ngbDatepicker"], [4, "abpPermission", "abpPermissionRunChangeDetection"], [1, "mb-2", 3, "ngClass"], ["type", "hidden", 3, "formControlName"], ["validationTarget", "", 1, "form-check"], [1, "text-muted", "d-block"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [3, "ngTemplateOutlet"], [1, "form-control", 3, "id", "formControlName", "autocomplete", "type", "abpDisabled", "readonly"], ["type", "checkbox", 1, "form-check-input", 3, "id", "formControlName", "abpDisabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-select", "form-control", 3, "id", "formControlName", "abpDisabled"], [3, "ngValue"], [3, "prop", "options", "formControlName", "abpDisabled"], ["validationStyle", "", "validationTarget", "", 1, "position-relative"], [1, "form-control", 3, "ngModelChange", "selectItem", "blur", "id", "autocomplete", "abpDisabled", "ngbTypeahead", "editable", "inputFormatter", "resultFormatter", "ngModelOptions", "ngModel"], ["ngbDatepicker", "", "type", "text", 1, "form-control", 3, "click", "keyup.space", "id", "formControlName"], [3, "formControlName"], [3, "prop", "meridian"], [1, "form-control", 3, "id", "formControlName", "abpDisabled", "readonly"], ["validationTarget", "", 1, "input-group", "form-group"], [1, "form-control", 3, "id", "formControlName", "abpShowPassword"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"], [3, "htmlFor", "ngClass"], [1, "d-inline-flex", "align-items-center", "gap-1", "text-nowrap"], ["container", "body", 1, "bi", "bi-info-circle", 3, "ngbTooltip", "placement"]],
  template: function ExtensibleFormPropComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Template, 15, 4, "ng-container", 4)(1, ExtensibleFormPropComponent_ng_template_1_Template, 6, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("abpPermission", ctx.prop.permission)("abpPermissionRunChangeDetection", false);
    }
  },
  dependencies: [ExtensibleDateTimePickerComponent, ExtensibleFormMultiselectComponent, NgbDatepickerModule, NgbInputDatepicker, NgbTimepickerModule, NgbTimepicker, ReactiveFormsModule, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, FormControlName, DisabledDirective, NgxValidateCoreModule, ValidationStyleDirective, ValidationTargetDirective, ValidationDirective, NgbTooltip, NgbTypeaheadModule, NgbTypeahead, ShowPasswordDirective, PermissionDirective, LocalizationPipe, AsyncPipe, NgClass, NgComponentOutlet, NgTemplateOutlet, FormsModule, NgModel],
  encapsulation: 2,
  changeDetection: 0
});
var ExtensibleFormPropComponent = _ExtensibleFormPropComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleFormPropComponent, [{
    type: Component,
    args: [{
      selector: "abp-extensible-form-prop",
      imports: [ExtensibleDateTimePickerComponent, ExtensibleFormMultiselectComponent, NgbDatepickerModule, NgbTimepickerModule, ReactiveFormsModule, DisabledDirective, NgxValidateCoreModule, NgbTooltip, NgbTypeaheadModule, ShowPasswordDirective, PermissionDirective, LocalizationPipe, AsyncPipe, NgClass, NgComponentOutlet, NgTemplateOutlet, FormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ExtensibleFormPropService],
      viewProviders: [{
        provide: ControlContainer,
        useFactory: selfFactory,
        deps: [[new Optional(), new SkipSelf(), ControlContainer]]
      }, {
        provide: NgbDateAdapter,
        useClass: DateAdapter
      }, {
        provide: NgbTimeAdapter,
        useClass: TimeAdapter
      }],
      template: `<ng-container *abpPermission="prop.permission; runChangeDetection: false">\r
  @switch (getComponent(prop)) {\r
    @case ('template') {\r
      <ng-container *ngComponentOutlet="prop.template; injector: injectorForCustomComponent" />\r
    }\r
  }\r
\r
  <div [ngClass]="containerClassName" class="mb-2">\r
    @switch (getComponent(prop)) {\r
      @case ('input') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <input\r
          #field\r
          [id]="prop.id"\r
          [formControlName]="prop.name"\r
          [autocomplete]="prop.autocomplete"\r
          [type]="getType(prop)"\r
          [abpDisabled]="disabled"\r
          [readonly]="readonly"\r
          class="form-control"\r
        />\r
      }\r
      @case ('hidden') {\r
        <input [formControlName]="prop.name" type="hidden" />\r
      }\r
      @case ('checkbox') {\r
        <div class="form-check" validationTarget>\r
          <input\r
            #field\r
            [id]="prop.id"\r
            [formControlName]="prop.name"\r
            [abpDisabled]="disabled"\r
            type="checkbox"\r
            class="form-check-input"\r
          />\r
          <ng-template\r
            [ngTemplateOutlet]="label"\r
            [ngTemplateOutletContext]="{ $implicit: 'form-check-label' }"\r
          />\r
        </div>\r
      }\r
      @case ('select') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <select\r
          #field\r
          [id]="prop.id"\r
          [formControlName]="prop.name"\r
          [abpDisabled]="disabled"\r
          class="form-select form-control"\r
        >\r
          @for (option of options$ | async; track option.value) {\r
            <option [ngValue]="option.value">\r
              @if (prop.isExtra) {\r
                {{ '::' + option.key | abpLocalization }}\r
              } @else {\r
                {{ option.key }}\r
              }\r
            </option>\r
          }\r
        </select>\r
      }\r
      @case ('multiselect') {\r
        <ng-template [ngTemplateOutlet]="label"></ng-template>\r
        <abp-extensible-form-multi-select\r
          [prop]="prop"\r
          [options]="options$ | async"\r
          [formControlName]="prop.name"\r
          [abpDisabled]="disabled"\r
        />\r
      }\r
      @case ('typeahead') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <div #typeahead class="position-relative" validationStyle validationTarget>\r
          <input\r
            #field\r
            [id]="prop.id"\r
            [autocomplete]="prop.autocomplete"\r
            [abpDisabled]="disabled"\r
            [ngbTypeahead]="search"\r
            [editable]="false"\r
            [inputFormatter]="typeaheadFormatter"\r
            [resultFormatter]="typeaheadFormatter"\r
            [ngModelOptions]="{ standalone: true }"\r
            [(ngModel)]="typeaheadModel"\r
            (selectItem)="setTypeaheadValue($event.item)"\r
            (blur)="setTypeaheadValue(typeaheadModel)"\r
            [class.is-invalid]="typeahead.classList.contains('is-invalid')"\r
            class="form-control"\r
          />\r
          <input [formControlName]="prop.name" type="hidden" />\r
        </div>\r
      }\r
      @case ('date') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <input\r
          [id]="prop.id"\r
          [formControlName]="prop.name"\r
          (click)="datepicker.open()"\r
          (keyup.space)="datepicker.open()"\r
          ngbDatepicker\r
          #datepicker="ngbDatepicker"\r
          type="text"\r
          class="form-control"\r
        />\r
      }\r
      @case ('time') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <ngb-timepicker [formControlName]="prop.name" />\r
      }\r
      @case ('dateTime') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <abp-extensible-date-time-picker [prop]="prop" [meridian]="meridian$ | async" />\r
      }\r
      @case ('textarea') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <textarea\r
          #field\r
          [id]="prop.id"\r
          [formControlName]="prop.name"\r
          [abpDisabled]="disabled"\r
          [readonly]="readonly"\r
          class="form-control"\r
        ></textarea>\r
      }\r
      @case ('passwordinputgroup') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <div class="input-group form-group" validationTarget>\r
          <input\r
            class="form-control"\r
            [id]="prop.id"\r
            [formControlName]="prop.name"\r
            [abpShowPassword]="showPassword"\r
          />\r
          <button class="btn btn-secondary" type="button" (click)="showPassword = !showPassword">\r
            <i\r
              class="fa"\r
              aria-hidden="true"\r
              [ngClass]="{\r
                'fa-eye-slash': !showPassword,\r
                'fa-eye': showPassword,\r
              }"\r
            ></i>\r
          </button>\r
        </div>\r
      }\r
    }\r
\r
    @if (prop.formText) {\r
      <small class="text-muted d-block">{{ prop.formText | abpLocalization }}</small>\r
    }\r
  </div>\r
</ng-container>\r
\r
<ng-template #label let-classes>\r
  <label [htmlFor]="prop.id" [ngClass]="classes || 'form-label d-inline-block'">\r
    <span class="d-inline-flex align-items-center gap-1 text-nowrap">\r
      @if (prop.displayTextResolver) {\r
        {{ prop.displayTextResolver(data) | abpLocalization }}\r
      } @else {\r
        @if (prop.isExtra) {\r
          {{ '::' + prop.displayName | abpLocalization }}\r
        } @else {\r
          {{ prop.displayName | abpLocalization }}\r
        }\r
      }\r
      {{ asterisk }}\r
      @if (prop.tooltip) {\r
        <i\r
          [ngbTooltip]="prop.tooltip.text | abpLocalization"\r
          [placement]="prop.tooltip.placement || 'auto'"\r
          container="body"\r
          class="bi bi-info-circle"\r
        ></i>\r
      }\r
    </span>\r
  </label>\r
</ng-template>\r
`
    }]
  }], null, {
    data: [{
      type: Input
    }],
    prop: [{
      type: Input
    }],
    first: [{
      type: Input
    }],
    isFirstGroup: [{
      type: Input
    }],
    fieldRef: [{
      type: ViewChild,
      args: ["field"]
    }]
  });
})();
var ActionList = class extends LinkedList {
};
var ActionData = class {
  get data() {
    return {
      getInjected: this.getInjected,
      index: this.index,
      record: this.record
    };
  }
};
var Action = class {
  constructor(permission, visible = () => true, action = () => {
  }, btnClass, btnStyle) {
    this.permission = permission;
    this.visible = visible;
    this.action = action;
    this.btnClass = btnClass;
    this.btnStyle = btnStyle;
  }
};
var ActionsFactory = class {
  constructor() {
    this.contributorCallbacks = {};
  }
  get(name) {
    this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
    return new this._ctor(this.contributorCallbacks[name]);
  }
};
var Actions = class {
  get actions() {
    const actionList = new this._ctor();
    this.callbackList.forEach((callback) => callback(actionList));
    return actionList;
  }
  constructor(callbackList) {
    this.callbackList = callbackList;
  }
  addContributor(contributeCallback) {
    this.callbackList.push(contributeCallback);
  }
  clearContributors() {
    while (this.callbackList.length) this.callbackList.pop();
  }
};
var EntityActionList = class extends ActionList {
};
var EntityActions = class extends Actions {
  constructor() {
    super(...arguments);
    this._ctor = EntityActionList;
  }
};
var EntityActionsFactory = class extends ActionsFactory {
  constructor() {
    super(...arguments);
    this._ctor = EntityActions;
  }
};
var EntityAction = class _EntityAction extends Action {
  constructor(options) {
    super(options.permission || "", options.visible, options.action);
    this.text = options.text;
    this.icon = options.icon || "";
    this.btnClass = options.btnClass || "btn btn-primary text-center";
    this.btnStyle = options.btnStyle;
    this.showOnlyIcon = options.showOnlyIcon || false;
    this.tooltip = options.tooltip;
  }
  static create(options) {
    return new _EntityAction(options);
  }
  static createMany(arrayOfOptions) {
    return arrayOfOptions.map(_EntityAction.create);
  }
};
var EntityPropList = class extends PropList {
};
var EntityProps = class extends Props {
  constructor() {
    super(...arguments);
    this._ctor = EntityPropList;
  }
};
var EntityPropsFactory = class extends PropsFactory {
  constructor() {
    super(...arguments);
    this._ctor = EntityProps;
  }
};
var EntityProp = class _EntityProp extends Prop {
  constructor(options) {
    super(options.type, options.name, options.displayName || "", options.permission || "", options.visible, options.isExtra);
    this.columnVisible = options.columnVisible || (() => true);
    this.columnWidth = options.columnWidth;
    this.sortable = options.sortable || false;
    this.valueResolver = options.valueResolver || ((data) => of(escapeHtmlChars(data.record[this.name])));
    if (options.action) {
      this.action = options.action;
    }
    if (options.component) {
      this.component = options.component;
    }
    if (options.enumList) {
      this.enumList = options.enumList;
    }
    this.tooltip = options.tooltip;
  }
  static create(options) {
    return new _EntityProp(options);
  }
  static createMany(arrayOfOptions) {
    return arrayOfOptions.map(_EntityProp.create);
  }
};
var ToolbarActionList = class extends ActionList {
};
var ToolbarActions = class extends Actions {
  constructor() {
    super(...arguments);
    this._ctor = ToolbarActionList;
  }
};
var ToolbarActionsFactory = class extends ActionsFactory {
  constructor() {
    super(...arguments);
    this._ctor = ToolbarActions;
  }
};
var ToolbarAction = class _ToolbarAction extends Action {
  constructor(options) {
    super(options.permission || "", options.visible, options.action);
    this.text = options.text;
    this.icon = options.icon || "";
    if (options.btnClass) {
      this.btnClass = options.btnClass;
    }
  }
  static create(options) {
    return new _ToolbarAction(options);
  }
  static createMany(arrayOfOptions) {
    return arrayOfOptions.map(_ToolbarAction.create);
  }
};
var _ExtensionsService = class _ExtensionsService {
  constructor() {
    this.entityActions = new EntityActionsFactory();
    this.toolbarActions = new ToolbarActionsFactory();
    this.entityProps = new EntityPropsFactory();
    this.createFormProps = new CreateFormPropsFactory();
    this.editFormProps = new EditFormPropsFactory();
  }
};
_ExtensionsService.ɵfac = function ExtensionsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExtensionsService)();
};
_ExtensionsService.ɵprov = ɵɵdefineInjectable({
  token: _ExtensionsService,
  factory: _ExtensionsService.ɵfac,
  providedIn: "root"
});
var ExtensionsService = _ExtensionsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _PropDataDirective = class _PropDataDirective extends PropData {
  constructor() {
    const injector = inject(Injector);
    super();
    this.tempRef = inject(TemplateRef);
    this.vcRef = inject(ViewContainerRef);
    this.getInjected = injector.get.bind(injector);
  }
  ngOnChanges() {
    this.vcRef.clear();
    this.vcRef.createEmbeddedView(this.tempRef, {
      $implicit: this.data,
      index: 0
    });
  }
  ngOnDestroy() {
    this.vcRef.clear();
  }
};
_PropDataDirective.ɵfac = function PropDataDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PropDataDirective)();
};
_PropDataDirective.ɵdir = ɵɵdefineDirective({
  type: _PropDataDirective,
  selectors: [["", "abpPropData", ""]],
  inputs: {
    propList: [0, "abpPropDataFromList", "propList"],
    record: [0, "abpPropDataWithRecord", "record"],
    index: [0, "abpPropDataAtIndex", "index"]
  },
  exportAs: ["abpPropData"],
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var PropDataDirective = _PropDataDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropDataDirective, [{
    type: Directive,
    args: [{
      exportAs: "abpPropData",
      selector: "[abpPropData]"
    }]
  }], () => [], {
    propList: [{
      type: Input,
      args: ["abpPropDataFromList"]
    }],
    record: [{
      type: Input,
      args: ["abpPropDataWithRecord"]
    }],
    index: [{
      type: Input,
      args: ["abpPropDataAtIndex"]
    }]
  });
})();
var _ExtensibleFormComponent = class _ExtensibleFormComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.track = inject(TrackByService);
    this.container = inject(ControlContainer);
    this.extensions = inject(ExtensionsService);
    this.identifier = inject(EXTENSIONS_IDENTIFIER);
    this.extraPropertiesKey = EXTRA_PROPERTIES_KEY;
  }
  set selectedRecord(record) {
    const type = !record || JSON.stringify(record) === "{}" ? "create" : "edit";
    const propList = this.extensions[`${type}FormProps`].get(this.identifier).props;
    this.groupedPropList = this.createGroupedList(propList);
    this.record = record;
  }
  get form() {
    return this.container ? this.container.control : {
      controls: {}
    };
  }
  get extraProperties() {
    return this.form.controls.extraProperties || {
      controls: {}
    };
  }
  createGroupedList(propList) {
    const groupedFormPropList = new GroupedFormPropList();
    propList.forEach((item) => {
      groupedFormPropList.addItem(item.value);
    });
    return groupedFormPropList;
  }
  //TODO: Reactor this method
  isAnyGroupMemberVisible(index, data) {
    const {
      items
    } = this.groupedPropList;
    const formPropList = items[index].formPropList.toArray();
    return formPropList.some((prop) => prop.visible(data));
  }
};
_ExtensibleFormComponent.ɵfac = function ExtensibleFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExtensibleFormComponent)();
};
_ExtensibleFormComponent.ɵcmp = ɵɵdefineComponent({
  type: _ExtensibleFormComponent,
  selectors: [["abp-extensible-form"]],
  viewQuery: function ExtensibleFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ExtensibleFormPropComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formProps = _t);
    }
  },
  inputs: {
    selectedRecord: "selectedRecord"
  },
  exportAs: ["abpExtensibleForm"],
  features: [ɵɵProvidersFeature([], [{
    provide: ControlContainer,
    useFactory: selfFactory,
    deps: [[new Optional(), new SkipSelf(), ControlContainer]]
  }])],
  decls: 3,
  vars: 1,
  consts: [["propListTemplate", ""], [4, "abpPropData", "abpPropDataFromList", "abpPropDataWithRecord"], [3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "formGroupName"], [3, "prop", "data"], [3, "class", "prop", "data", "first", "isFirstGroup"], [3, "prop", "data", "first", "isFirstGroup"]],
  template: function ExtensibleFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, ExtensibleFormComponent_Conditional_0_Template, 2, 0);
      ɵɵtemplate(1, ExtensibleFormComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.form ? 0 : -1);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet, PropDataDirective, ReactiveFormsModule, NgControlStatusGroup, FormGroupName, ExtensibleFormPropComponent],
  encapsulation: 2,
  changeDetection: 0
});
var ExtensibleFormComponent = _ExtensibleFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleFormComponent, [{
    type: Component,
    args: [{
      exportAs: "abpExtensibleForm",
      selector: "abp-extensible-form",
      imports: [NgClass, NgTemplateOutlet, PropDataDirective, ReactiveFormsModule, ExtensibleFormPropComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      viewProviders: [{
        provide: ControlContainer,
        useFactory: selfFactory,
        deps: [[new Optional(), new SkipSelf(), ControlContainer]]
      }],
      template: '@if (form) {\r\n  @for (groupedProp of groupedPropList.items; track i; let i = $index; let first = $first) {\r\n    <ng-container *abpPropData="let data; fromList: groupedProp.formPropList; withRecord: record">\r\n      @if (isAnyGroupMemberVisible(i, data) && groupedProp.group?.className) {\r\n        <div\r\n          [ngClass]="groupedProp.group?.className"\r\n          [attr.data-name]="groupedProp.group?.name || groupedProp.group?.className"\r\n        >\r\n          <ng-container\r\n            [ngTemplateOutlet]="propListTemplate"\r\n            [ngTemplateOutletContext]="{ groupedProp: groupedProp, data: data, isFirstGroup: first}"\r\n          >\r\n          </ng-container>\r\n        </div>\r\n      } @else {\r\n        <ng-container\r\n          [ngTemplateOutlet]="propListTemplate"\r\n          [ngTemplateOutletContext]="{ groupedProp: groupedProp, data: data, isFirstGroup: first }"\r\n        >\r\n        </ng-container>\r\n      }\r\n    </ng-container>\r\n  }\r\n}\r\n\r\n<ng-template let-groupedProp="groupedProp" let-data="data" let-isFirstGroup="isFirstGroup" #propListTemplate>\r\n  @for (prop of groupedProp.formPropList; let index = $index; let first = $first; track prop.name) {\r\n    @if (prop.visible(data)) {\r\n      @if (extraProperties.controls[prop.name]) {\r\n        <ng-container [formGroupName]="extraPropertiesKey">\r\n          <abp-extensible-form-prop [prop]="prop" [data]="data" [class]="prop.className" />\r\n        </ng-container>\r\n      } @else {\r\n        @if (form.get(prop.name)) {\r\n          <abp-extensible-form-prop\r\n            [class]="prop.className"\r\n            [prop]="prop"\r\n            [data]="data"\r\n            [first]="first"\r\n            [isFirstGroup]="isFirstGroup"\r\n          />\r\n        }\r\n      }\r\n    }\r\n  }\r\n</ng-template>\r\n'
    }]
  }], null, {
    formProps: [{
      type: ViewChildren,
      args: [ExtensibleFormPropComponent]
    }],
    selectedRecord: [{
      type: Input
    }]
  });
})();
var _AbstractActionsComponent = class _AbstractActionsComponent extends ActionData {
  constructor() {
    const injector = inject(Injector);
    super();
    this.getInjected = injector.get.bind(injector);
    const extensions = injector.get(ExtensionsService);
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    const type = injector.get(EXTENSIONS_ACTION_TYPE);
    this.actionList = extensions[type].get(name).actions;
  }
};
_AbstractActionsComponent.ɵfac = function AbstractActionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbstractActionsComponent)();
};
_AbstractActionsComponent.ɵdir = ɵɵdefineDirective({
  type: _AbstractActionsComponent,
  inputs: {
    record: "record"
  },
  features: [ɵɵInheritDefinitionFeature]
});
var AbstractActionsComponent = _AbstractActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractActionsComponent, [{
    type: Directive
  }], () => [], {
    record: [{
      type: Input
    }]
  });
})();
var _GridActionsComponent = class _GridActionsComponent extends AbstractActionsComponent {
  constructor() {
    super();
    this.icon = "fa fa-cog";
    this.text = "";
    this.trackByFn = (_, item) => item.text;
  }
};
_GridActionsComponent.ɵfac = function GridActionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GridActionsComponent)();
};
_GridActionsComponent.ɵcmp = ɵɵdefineComponent({
  type: _GridActionsComponent,
  selectors: [["abp-grid-actions"]],
  inputs: {
    icon: "icon",
    index: "index",
    text: "text"
  },
  exportAs: ["abpGridActions"],
  features: [ɵɵProvidersFeature([{
    provide: EXTENSIONS_ACTION_TYPE,
    useValue: "entityActions"
  }]), ɵɵInheritDefinitionFeature],
  decls: 8,
  vars: 2,
  consts: [["dropDownBtnItemTmp", ""], ["buttonContentTmp", ""], ["btnTmp", ""], ["ngbDropdown", "", "container", "body", 1, "d-inline-block"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-toggle", "dropdown", "aria-haspopup", "true", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "btn-sm", "dropdown-toggle"], [3, "ngClass"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", "type", "button"], ["ngbDropdownItem", "", "type", "button", 3, "click", 4, "abpPermission", "abpPermissionRunChangeDetection"], ["ngbDropdownItem", "", "type", "button", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["abpEllipsis", ""], ["type", "button", "triggers", "hover", "container", "body", 3, "class", "style", "ngbTooltip", "placement"], ["type", "button", 3, "class", "style"], ["type", "button", "triggers", "hover", "container", "body", 3, "class", "style", "ngbTooltip", "placement", "click", 4, "abpPermission", "abpPermissionRunChangeDetection"], ["type", "button", "triggers", "hover", "container", "body", 3, "click", "ngbTooltip", "placement"], ["type", "button", 3, "class", "style", "click", 4, "abpPermission", "abpPermissionRunChangeDetection"], ["type", "button", 3, "click"]],
  template: function GridActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, GridActionsComponent_Conditional_0_Template, 8, 6, "div", 3);
      ɵɵconditionalCreate(1, GridActionsComponent_Conditional_1_Template, 1, 4, "ng-container", 4);
      ɵɵtemplate(2, GridActionsComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, GridActionsComponent_ng_template_4_Template, 2, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, GridActionsComponent_ng_template_6_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.actionList.length > 1 ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.actionList.length === 1 ? 1 : -1);
    }
  },
  dependencies: [NgbDropdownModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, EllipsisDirective, PermissionDirective, NgClass, LocalizationPipe, NgTemplateOutlet, NgbTooltipModule, NgbTooltip],
  encapsulation: 2,
  changeDetection: 0
});
var GridActionsComponent = _GridActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridActionsComponent, [{
    type: Component,
    args: [{
      exportAs: "abpGridActions",
      imports: [NgbDropdownModule, EllipsisDirective, PermissionDirective, NgClass, LocalizationPipe, NgTemplateOutlet, NgbTooltipModule],
      selector: "abp-grid-actions",
      providers: [{
        provide: EXTENSIONS_ACTION_TYPE,
        useValue: "entityActions"
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (actionList.length > 1) {\r
  <div ngbDropdown container="body" class="d-inline-block">\r
    <button\r
      class="btn btn-primary btn-sm dropdown-toggle"\r
      data-toggle="dropdown"\r
      aria-haspopup="true"\r
      ngbDropdownToggle\r
    >\r
      <i [ngClass]="icon" [class.me-1]="icon"></i>{{ text | abpLocalization }}\r
    </button>\r
    <div ngbDropdownMenu>\r
      @for (action of actionList; track action.text) {\r
        <ng-container\r
          [ngTemplateOutlet]="dropDownBtnItemTmp"\r
          [ngTemplateOutletContext]="{ $implicit: action }"\r
        >\r
        </ng-container>\r
      }\r
    </div>\r
  </div>\r
}\r
\r
@if (actionList.length === 1) {\r
  <ng-container\r
    [ngTemplateOutlet]="btnTmp"\r
    [ngTemplateOutletContext]="{ $implicit: actionList.get(0).value }"\r
  ></ng-container>\r
}\r
\r
<ng-template #dropDownBtnItemTmp let-action>\r
  @if (action.visible(data)) {\r
    <button\r
      ngbDropdownItem\r
      *abpPermission="action.permission; runChangeDetection: false"\r
      (click)="action.action(data)"\r
      type="button"\r
    >\r
      <ng-container\r
        *ngTemplateOutlet="buttonContentTmp; context: { $implicit: action }"\r
      ></ng-container>\r
    </button>\r
  }\r
</ng-template>\r
\r
<ng-template #buttonContentTmp let-action>\r
  <i [ngClass]="action.icon" [class.me-1]="action.icon && !action.showOnlyIcon"></i>\r
  @if (!action.showOnlyIcon) {\r
    @if (action.icon) {\r
      <span>{{ action.text | abpLocalization }}</span>\r
    } @else {\r
      <div abpEllipsis>{{ action.text | abpLocalization }}</div>\r
    }\r
  }\r
</ng-template>\r
\r
<ng-template #btnTmp let-action>\r
  @if (action.visible(data)) {\r
    @if (action.tooltip) {\r
      <button\r
        *abpPermission="action.permission; runChangeDetection: false"\r
        (click)="action.action(data)"\r
        type="button"\r
        [class]="action.btnClass"\r
        [style]="action.btnStyle"\r
        [ngbTooltip]="action.tooltip.text | abpLocalization"\r
        [placement]="action.tooltip.placement || 'auto'"\r
        triggers="hover"\r
        container="body"\r
      >\r
        <ng-container\r
          *ngTemplateOutlet="buttonContentTmp; context: { $implicit: action }"\r
        ></ng-container>\r
      </button>\r
    } @else {\r
      <button\r
        *abpPermission="action.permission; runChangeDetection: false"\r
        (click)="action.action(data)"\r
        type="button"\r
        [class]="action.btnClass"\r
        [style]="action.btnStyle"\r
      >\r
        <ng-container\r
          *ngTemplateOutlet="buttonContentTmp; context: { $implicit: action }"\r
        ></ng-container>\r
      </button>\r
    }\r
  }\r
</ng-template>\r
`
    }]
  }], () => [], {
    icon: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    text: [{
      type: Input
    }]
  });
})();
var DEFAULT_ACTIONS_COLUMN_WIDTH = 150;
var _injector;
var _ExtensibleTableComponent = class _ExtensibleTableComponent {
  constructor() {
    __privateAdd(this, _injector);
    __privateSet(this, _injector, inject(Injector));
    this.getInjected = __privateGet(this, _injector).get.bind(__privateGet(this, _injector));
    this.cdr = inject(ChangeDetectorRef);
    this.locale = inject(LOCALE_ID);
    this.config = inject(ConfigStateService);
    this.timeZoneService = inject(TimezoneService);
    this.entityPropTypeClasses = inject(ENTITY_PROP_TYPE_CLASSES);
    this.permissionService = inject(PermissionService);
    this.platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.tableActivate = new EventEmitter();
    this.selectable = false;
    this._selectionType = SelectionType.multiClick;
    this.selected = [];
    this.selectionChange = new EventEmitter();
    this.infiniteScroll = false;
    this.isLoading = false;
    this.scrollThreshold = 10;
    this.loadMore = new EventEmitter();
    this.trackByFn = (_, item) => item.name;
    this._actionsColumnWidth = signal(DEFAULT_ACTIONS_COLUMN_WIDTH);
    this.loadMoreSubject = new Subject();
    this.loadMoreSubscription = this.loadMoreSubject.pipe(debounceTime(100), distinctUntilChanged()).subscribe(() => this.triggerLoadMore());
    this.columnWidths = computed(() => {
      return this.propList.toArray().map((prop) => prop.columnWidth);
    });
    const extensions = __privateGet(this, _injector).get(ExtensionsService);
    const name = __privateGet(this, _injector).get(EXTENSIONS_IDENTIFIER);
    this.propList = extensions.entityProps.get(name).props;
    this.actionList = extensions["entityActions"].get(name).actions;
    this.hasAtLeastOnePermittedAction = this.permissionService.filterItemsByPolicy(this.actionList.toArray().map((action) => ({
      requiredPolicy: action.permission
    }))).length > 0;
  }
  set actionsText(value) {
    this._actionsText = value;
  }
  get actionsText() {
    return this._actionsText ?? (this.actionList.length >= 1 ? "AbpUi::Actions" : "");
  }
  set actionsColumnWidth(width) {
    this._actionsColumnWidth.set(width ? Number(width) : void 0);
  }
  set selectionType(value) {
    this._selectionType = typeof value === "string" ? SelectionType[value] : value;
  }
  getIcon(value) {
    return value ? '<div class="text-success"><i class="fa fa-check" aria-hidden="true"></i></div>' : '<div class="text-danger"><i class="fa fa-times" aria-hidden="true"></i></div>';
  }
  getEnum(rowValue, list) {
    if (!list || list.length < 1) return rowValue;
    const {
      key
    } = list.find(({
      value
    }) => value === rowValue) || {};
    return key;
  }
  getContent(prop, data) {
    return prop.valueResolver(data).pipe(map((value) => {
      switch (prop.type) {
        case "boolean":
          return this.getIcon(value);
        case "enum":
          return this.getEnum(value, prop.enumList || []);
        default:
          return value;
      }
    }));
  }
  ngOnChanges({
    data
  }) {
    if (!data?.currentValue) return;
    if (data.currentValue.length < 1) {
      this.list.totalCount = this.recordsTotal;
    }
    this.data = data.currentValue.map((record, index) => {
      this.propList.forEach((prop) => {
        const propData = {
          getInjected: this.getInjected,
          record,
          index
        };
        const value = this.getContent(prop.value, propData);
        const propKey = `_${prop.value.name}`;
        record[propKey] = {
          visible: prop.value.visible(propData),
          value
        };
        if (prop.value.component) {
          record[propKey].injector = Injector.create({
            providers: [{
              provide: PROP_DATA_STREAM,
              useValue: value
            }, {
              provide: ROW_RECORD,
              useValue: record
            }],
            parent: __privateGet(this, _injector)
          });
          record[propKey].component = prop.value.component;
        }
      });
      return record;
    });
  }
  isVisibleActions(rowData) {
    const actions = this.actionList.toArray();
    const visibleActions = actions.filter((action) => {
      const {
        visible,
        permission
      } = action;
      let isVisible = true;
      let hasPermission = true;
      if (visible) {
        isVisible = visible({
          record: rowData,
          getInjected: this.getInjected
        });
      }
      if (permission) {
        hasPermission = this.permissionService.getGrantedPolicy(permission);
      }
      return isVisible && hasPermission;
    });
    return visibleActions.length > 0;
  }
  onSelect({
    selected
  }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.selectionChange.emit(selected);
  }
  onScroll(scrollEvent) {
    if (!this.shouldHandleScroll()) {
      return;
    }
    const target = scrollEvent.target;
    if (!target) {
      return;
    }
    if (this.isNearScrollBottom(target)) {
      this.loadMoreSubject.next();
    }
  }
  shouldHandleScroll() {
    return this.infiniteScroll && !this.isLoading;
  }
  isNearScrollBottom(element) {
    const {
      offsetHeight,
      scrollTop,
      scrollHeight
    } = element;
    return offsetHeight + scrollTop >= scrollHeight - this.scrollThreshold;
  }
  triggerLoadMore() {
    this.loadMore.emit();
  }
  getTableHeight() {
    if (!this.infiniteScroll) return "auto";
    return this.tableHeight ? `${this.tableHeight}px` : "auto";
  }
  ngAfterViewInit() {
    if (!this.infiniteScroll) {
      this.list?.requestStatus$?.pipe(filter((status) => status === "loading")).subscribe(() => {
        this.data = [];
        this.cdr.markForCheck();
      });
    }
  }
  ngOnDestroy() {
    this.loadMoreSubscription.unsubscribe();
  }
};
_injector = new WeakMap();
_ExtensibleTableComponent.ɵfac = function ExtensibleTableComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExtensibleTableComponent)();
};
_ExtensibleTableComponent.ɵcmp = ɵɵdefineComponent({
  type: _ExtensibleTableComponent,
  selectors: [["abp-extensible-table"]],
  inputs: {
    actionsText: "actionsText",
    data: "data",
    list: "list",
    recordsTotal: "recordsTotal",
    actionsColumnWidth: "actionsColumnWidth",
    actionsTemplate: "actionsTemplate",
    selectable: "selectable",
    selectionType: "selectionType",
    selected: "selected",
    infiniteScroll: "infiniteScroll",
    isLoading: "isLoading",
    scrollThreshold: "scrollThreshold",
    tableHeight: "tableHeight"
  },
  outputs: {
    tableActivate: "tableActivate",
    selectionChange: "selectionChange",
    loadMore: "loadMore"
  },
  exportAs: ["abpExtensibleTable"],
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [["gridActions", ""], ["default", "", 3, "rows", "count", "list", "selectionType", "selected", "scrollbarV", "height", "loadingIndicator", "footerHeight"], ["default", "", 3, "activate", "select", "scroll", "rows", "count", "list", "selectionType", "selected", "scrollbarV", "loadingIndicator", "footerHeight"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], [3, "name", "maxWidth", "width", "canAutoResize", "sortable"], [3, "width", "canAutoResize", "name", "prop", "sortable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", "table-check", 3, "change", "checked"], [1, "h-100", "form-check", "form-check-sm", "form-check-custom", "form-check-solid"], ["type", "radio", 1, "form-check-input", 3, "change", "checked"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["text", "AbpUi::Actions", 3, "index", "record"], [3, "width", "canAutoResize", "name", "prop", "sortable", 4, "abpVisible"], ["container", "body", 3, "ngbTooltip", "placement", "pointer"], [3, "pointer"], ["container", "body", 3, "click", "ngbTooltip", "placement"], ["aria-hidden", "true", 1, "fa", "fa-info-circle"], [3, "click"], [4, "abpPermission", "abpPermissionRunChangeDetection"], [4, "abpVisible"], [3, "innerHTML", "ngClass", "pointer"], [3, "click", "innerHTML", "ngClass"], [4, "ngComponentOutlet", "ngComponentOutletInjector"]],
  template: function ExtensibleTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_Template, 5, 12, "ngx-datatable", 1);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.isBrowser ? 0 : -1);
    }
  },
  dependencies: [AbpVisibleDirective, NgxDatatableModule, DatatableComponent, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, GridActionsComponent, NgbTooltip, NgxDatatableDefaultDirective, NgxDatatableListDirective, PermissionDirective, LocalizationPipe, UtcToLocalPipe, AsyncPipe, NgTemplateOutlet, NgComponentOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var ExtensibleTableComponent = _ExtensibleTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleTableComponent, [{
    type: Component,
    args: [{
      exportAs: "abpExtensibleTable",
      selector: "abp-extensible-table",
      imports: [AbpVisibleDirective, NgxDatatableModule, GridActionsComponent, NgbTooltip, NgxDatatableDefaultDirective, NgxDatatableListDirective, PermissionDirective, LocalizationPipe, UtcToLocalPipe, AsyncPipe, NgTemplateOutlet, NgComponentOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (isBrowser) {\r
  <ngx-datatable\r
  default\r
  [rows]="data"\r
  [count]="recordsTotal"\r
  [list]="list"\r
  [selectionType]="selectable ? _selectionType : undefined"\r
  (activate)="tableActivate.emit($event)"\r
  (select)="onSelect($event)"\r
  [selected]="selected"\r
  (scroll)="onScroll($event)"\r
  [scrollbarV]="infiniteScroll"\r
  [style.height]="getTableHeight()"\r
  [loadingIndicator]="infiniteScroll && isLoading"\r
  [footerHeight]="infiniteScroll ? false : 50"\r
>\r
@if(selectable) {\r
  <ngx-datatable-column [width]="50" [sortable]="false" [canAutoResize]="false" [draggable]="false" [resizeable]="false">\r
\r
    <ng-template ngx-datatable-header-template let-value="value" let-allRowsSelected="allRowsSelected"\r
      let-selectFn="selectFn">\r
      @if (_selectionType !== 'single') {\r
      <div class="form-check">\r
        <input class="form-check-input table-check" type="checkbox" [checked]="allRowsSelected"\r
          (change)="selectFn(!allRowsSelected)" />\r
      </div>\r
      }\r
    </ng-template>\r
\r
    <ng-template ngx-datatable-cell-template let-value="value" let-row="row" let-isSelected="isSelected"\r
      let-onCheckboxChangeFn="onCheckboxChangeFn">\r
      @if(_selectionType === 'single') {\r
      <div class="h-100 form-check form-check-sm form-check-custom form-check-solid">\r
        <input class="form-check-input" type="radio" [checked]="isSelected" (change)="onCheckboxChangeFn($event)" />\r
      </div>\r
      }\r
      @if (_selectionType !== 'single') {\r
      <div class="h-100 form-check form-check-sm form-check-custom form-check-solid">\r
        <input class="form-check-input" type="checkbox" [checked]="isSelected" (change)="onCheckboxChangeFn($event)" />\r
      </div>\r
      }\r
    </ng-template>\r
\r
  </ngx-datatable-column>\r
  }\r
  @if (actionsTemplate || (actionList.length && hasAtLeastOnePermittedAction)) {\r
    <ngx-datatable-column\r
      [name]="actionsText | abpLocalization"\r
      [maxWidth]="_actionsColumnWidth() ?? undefined"\r
      [width]="_actionsColumnWidth() ?? 200"\r
      [canAutoResize]="!_actionsColumnWidth()"\r
      [sortable]="false"\r
    >\r
      <ng-template let-row="row" let-i="rowIndex" ngx-datatable-cell-template>\r
        <ng-container\r
          *ngTemplateOutlet="actionsTemplate || gridActions; context: { $implicit: row, index: i }"\r
        ></ng-container>\r
        <ng-template #gridActions>\r
          @if (isVisibleActions(row)) {\r
            <abp-grid-actions [index]="i" [record]="row" text="AbpUi::Actions"></abp-grid-actions>\r
          }\r
        </ng-template>\r
      </ng-template>\r
    </ngx-datatable-column>\r
  }\r
  @for (prop of propList; track prop.name; let i = $index) {\r
    <ngx-datatable-column\r
      *abpVisible="prop.columnVisible(getInjected)"\r
      [width]="columnWidths[i] ?? 200"\r
      [canAutoResize]="!columnWidths[i]"\r
      [name]="(prop.isExtra ? '::' + prop.displayName : prop.displayName) | abpLocalization"\r
      [prop]="prop.name"\r
      [sortable]="prop.sortable"\r
    >\r
      <ng-template ngx-datatable-header-template let-column="column" let-sortFn="sortFn">\r
        @if (prop.tooltip) {\r
          <span\r
            [ngbTooltip]="prop.tooltip.text | abpLocalization"\r
            [placement]="prop.tooltip.placement || 'auto'"\r
            container="body"\r
            [class.pointer]="prop.sortable"\r
            (click)="prop.sortable && sortFn(column)"\r
          >\r
            {{ column.name }} <i class="fa fa-info-circle" aria-hidden="true"></i>\r
          </span>\r
        } @else {\r
          <span\r
            [class.pointer]="prop.sortable"\r
            (click)="prop.sortable && sortFn(column)"\r
          >\r
            {{ column.name }}\r
          </span>\r
        }\r
      </ng-template>\r
      <ng-template let-row="row" let-i="index" ngx-datatable-cell-template>\r
        <ng-container *abpPermission="prop.permission; runChangeDetection: false">\r
          <ng-container *abpVisible="row['_' + prop.name]?.visible">\r
            @if (!row['_' + prop.name].component) {\r
              @if (prop.type === 'datetime' || prop.type === 'date' || prop.type === 'time') {\r
                <div\r
                  [innerHTML]="\r
                  !prop.isExtra\r
                    ? (row['_' + prop.name]?.value | async | abpUtcToLocal:prop.type)\r
                    : ('::' + (row['_' + prop.name]?.value | async | abpUtcToLocal:prop.type) | abpLocalization)\r
                "\r
                  (click)="\r
                  prop.action && prop.action({ getInjected: getInjected, record: row, index: i })\r
                "\r
                  [ngClass]="entityPropTypeClasses[prop.type]"\r
                  [class.pointer]="prop.action"\r
                ></div>\r
              } @else {\r
                <div\r
                  [innerHTML]="\r
                  !prop.isExtra\r
                    ? (row['_' + prop.name]?.value | async)\r
                    : ('::' + (row['_' + prop.name]?.value | async) | abpLocalization)\r
                "\r
                  (click)="\r
                  prop.action && prop.action({ getInjected: getInjected, record: row, index: i })\r
                "\r
                  [ngClass]="entityPropTypeClasses[prop.type]"\r
                  [class.pointer]="prop.action"\r
                ></div>\r
              }\r
            } @else {\r
              <ng-container\r
                *ngComponentOutlet="\r
                  row['_' + prop.name].component;\r
                  injector: row['_' + prop.name].injector\r
                "\r
              ></ng-container>\r
            }\r
          </ng-container>\r
        </ng-container>\r
      </ng-template>\r
    </ngx-datatable-column>\r
  }\r
</ngx-datatable>\r
}\r
`
    }]
  }], () => [], {
    actionsText: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    list: [{
      type: Input
    }],
    recordsTotal: [{
      type: Input
    }],
    actionsColumnWidth: [{
      type: Input
    }],
    actionsTemplate: [{
      type: Input
    }],
    tableActivate: [{
      type: Output
    }],
    selectable: [{
      type: Input
    }],
    selectionType: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    infiniteScroll: [{
      type: Input
    }],
    isLoading: [{
      type: Input
    }],
    scrollThreshold: [{
      type: Input
    }],
    loadMore: [{
      type: Output
    }],
    tableHeight: [{
      type: Input
    }]
  });
})();
var _CreateInjectorPipe = class _CreateInjectorPipe {
  transform(_, action, context) {
    const get = (token, notFoundValue, options) => {
      const componentData = context.getData();
      const componentDataCallback = (data) => {
        data = data ?? context.getData();
        return action.action(data);
      };
      let extensionData;
      switch (token) {
        case EXTENSIONS_ACTION_DATA:
          extensionData = componentData;
          break;
        case EXTENSIONS_ACTION_CALLBACK:
          extensionData = componentDataCallback;
          break;
        default:
          extensionData = context.getInjected.call(context.injector, token, notFoundValue, options);
      }
      return extensionData;
    };
    return {
      get
    };
  }
};
_CreateInjectorPipe.ɵfac = function CreateInjectorPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateInjectorPipe)();
};
_CreateInjectorPipe.ɵpipe = ɵɵdefinePipe({
  name: "createInjector",
  type: _CreateInjectorPipe,
  pure: true
});
var CreateInjectorPipe = _CreateInjectorPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateInjectorPipe, [{
    type: Pipe,
    args: [{
      name: "createInjector"
    }]
  }], null, null);
})();
var _PageToolbarComponent = class _PageToolbarComponent extends AbstractActionsComponent {
  constructor() {
    const injector = inject(Injector);
    super();
    this.defaultBtnClass = "btn btn-sm btn-primary";
    this.getData = () => this.data;
    this.trackByFn = (_, item) => item.action || item.component;
    this.injector = injector;
  }
  asToolbarAction(value) {
    return {
      value
    };
  }
};
_PageToolbarComponent.ɵfac = function PageToolbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageToolbarComponent)();
};
_PageToolbarComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageToolbarComponent,
  selectors: [["abp-page-toolbar"]],
  exportAs: ["abpPageToolbar"],
  features: [ɵɵProvidersFeature([{
    provide: EXTENSIONS_ACTION_TYPE,
    useValue: "toolbarActions"
  }]), ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 0,
  consts: [["id", "AbpContentToolbar", 1, "row", "justify-content-end", "mx-0", "gap-2"], [1, "col-auto", "px-0", "pt-0", 3, "pe-0"], [1, "col-auto", "px-0", "pt-0"], [4, "abpPermission", "abpPermissionRunChangeDetection"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["type", "button", 1, "d-inline-flex", "align-items-center", "gap-1", 3, "ngClass"], ["type", "button", 1, "d-inline-flex", "align-items-center", "gap-1", 3, "click", "ngClass"], [3, "ngClass"]],
  template: function PageToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵrepeaterCreate(1, PageToolbarComponent_For_2_Template, 2, 3, "div", 1, _forTrack3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵrepeater(ctx.actionList);
    }
  },
  dependencies: [CreateInjectorPipe, PermissionDirective, LocalizationPipe, NgClass, NgComponentOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var PageToolbarComponent = _PageToolbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageToolbarComponent, [{
    type: Component,
    args: [{
      exportAs: "abpPageToolbar",
      selector: "abp-page-toolbar",
      imports: [CreateInjectorPipe, PermissionDirective, LocalizationPipe, NgClass, NgComponentOutlet],
      providers: [{
        provide: EXTENSIONS_ACTION_TYPE,
        useValue: "toolbarActions"
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="row justify-content-end mx-0 gap-2" id="AbpContentToolbar">\r\n  @for (action of actionList; track action.component || action.action; let last = $last) {\r\n  <div class="col-auto px-0 pt-0" [class.pe-0]="last">\r\n    @if (action.visible(data)) {\r\n    <ng-container *abpPermission="action.permission; runChangeDetection: false">\r\n      @if (action.component; as component) {\r\n      <ng-container\r\n        *ngComponentOutlet="component; injector: record | createInjector: action:this"\r\n      ></ng-container>\r\n\r\n      }@else {\r\n         @if (asToolbarAction(action).value; as toolbarAction ) {\r\n          <button\r\n            (click)="action.action(data)"\r\n            type="button"\r\n            [ngClass]="toolbarAction?.btnClass ? toolbarAction?.btnClass : defaultBtnClass"\r\n            class="d-inline-flex align-items-center gap-1"\r\n          >\r\n            <i [ngClass]="toolbarAction?.icon" [class.me-1]="toolbarAction?.icon"></i>\r\n            {{ toolbarAction?.text | abpLocalization }}\r\n          </button>\r\n        } \r\n      }\r\n    </ng-container>\r\n    }\r\n  </div>\r\n  }\r\n</div>\r\n\r\n'
    }]
  }], () => [], null);
})();
var objectExtensions = Object.freeze({
  __proto__: null
});
var EXTENSIBLE_FORM_VIEW_PROVIDER = {
  provide: ControlContainer,
  useExisting: FormGroupDirective
};
function mergeWithDefaultActions(extension, defaultActions, ...contributors) {
  Object.keys(defaultActions).forEach((name) => {
    const actions = extension.get(name);
    actions.clearContributors();
    actions.addContributor((actionList) => actionList.addManyTail(defaultActions[name]));
    contributors.forEach((contributor) => (contributor[name] || []).forEach((callback) => actions.addContributor(callback)));
  });
}
function generateFormFromProps(data) {
  const extensions = data.getInjected(ExtensionsService);
  const identifier = data.getInjected(EXTENSIONS_IDENTIFIER);
  const form = new UntypedFormGroup({});
  const extraForm = new UntypedFormGroup({});
  form.addControl(EXTRA_PROPERTIES_KEY, extraForm);
  const record = data.record || {};
  const type = JSON.stringify(record) === "{}" ? "create" : "edit";
  const props = extensions[`${type}FormProps`].get(identifier).props;
  const extraProperties = record[EXTRA_PROPERTIES_KEY] || {};
  props.forEach(({
    value: prop
  }) => {
    const name = prop.name;
    const isExtraProperty = prop.isExtra || name in extraProperties;
    let value = void 0;
    if (isExtraProperty) {
      value = extraProperties[name];
    } else if (name in record) {
      value = record[name];
    }
    if (typeof value === "undefined") value = prop.defaultValue;
    if (value) {
      let adapter;
      switch (prop.type) {
        case "date":
          adapter = new DateAdapter();
          value = adapter.toModel(adapter.fromModel(value));
          break;
        case "time":
          adapter = new TimeAdapter();
          value = adapter.toModel(adapter.fromModel(value));
          break;
        case "datetime":
          adapter = new DateTimeAdapter();
          value = adapter.toModel(adapter.fromModel(value));
          break;
        default:
          break;
      }
    }
    const formControl = new UntypedFormControl(value, {
      asyncValidators: prop.asyncValidators(data),
      validators: prop.validators(data)
    });
    (isExtraProperty ? extraForm : form).addControl(name, formControl);
  });
  return form;
}
function createExtraPropertyValueResolver(name) {
  return (data) => of(data.record[EXTRA_PROPERTIES_KEY][name]);
}
function mergeWithDefaultProps(extension, defaultProps, ...contributors) {
  Object.keys(defaultProps).forEach((name) => {
    const props = extension.get(name);
    props.clearContributors();
    props.addContributor((propList) => propList.addManyTail(defaultProps[name]));
    contributors.forEach((contributor) => (contributor[name] || []).forEach((callback) => props.addContributor(callback)));
  });
}
function checkPolicies(injector, properties) {
  const configState = injector.get(ConfigStateService);
  const permission = injector.get(PermissionService);
  const props = Object.entries(properties);
  const checkPolicy = (policy) => {
    const {
      permissions,
      globalFeatures,
      features
    } = policy || {};
    const checks = [{
      items: permissions?.permissionNames,
      requiresAll: permissions?.requiresAll,
      check: (item) => permission.getGrantedPolicy(item)
    }, {
      items: globalFeatures?.features,
      requiresAll: globalFeatures?.requiresAll,
      check: (item) => configState.getGlobalFeatureIsEnabled(item)
    }, {
      items: features?.features,
      requiresAll: features?.requiresAll,
      check: (item) => configState.getFeatureIsEnabled(item)
    }];
    return checks.every(({
      items,
      requiresAll,
      check
    }) => {
      if (!items?.length) {
        return true;
      }
      return requiresAll ? items.every(check) : items.some(check);
    });
  };
  props.forEach(([name, property]) => {
    if (property.policy && !checkPolicy(property.policy)) {
      delete properties[name];
    }
  });
}
function createEnum(members) {
  const enumObject = {};
  members.forEach(({
    name = "",
    value
  }) => {
    enumObject[enumObject[name] = value] = name;
  });
  return enumObject;
}
function createEnumValueResolver(enumType, lookupEnum, propName) {
  return (data) => {
    const value = data.record[EXTRA_PROPERTIES_KEY][propName];
    const key = lookupEnum.transformed[value];
    const l10n = data.getInjected(LocalizationService);
    const localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
    return createLocalizationStream(l10n, localizeEnum(key));
  };
}
function createEnumOptions(enumType, lookupEnum) {
  return (data) => {
    const l10n = data.getInjected(LocalizationService);
    const localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
    return createLocalizationStream(l10n, lookupEnum.fields.map(({
      name = "",
      value
    }) => ({
      key: localizeEnum(name),
      value
    })));
  };
}
function createLocalizationStream(l10n, mapTarget) {
  return merge(of(null), l10n.languageChange$).pipe(map(() => mapTarget));
}
function createEnumLocalizer(l10n, enumType, lookupEnum) {
  const resource = lookupEnum.localizationResource;
  const shortType = getShortEnumType(enumType);
  return (key) => l10n.localizeWithFallbackSync([resource || ""], ["Enum:" + shortType + "." + key, shortType + "." + key, key], key);
}
function getShortEnumType(enumType) {
  return enumType.split(".").pop();
}
function createDisplayNameLocalizationPipeKeyGenerator(localization) {
  const generateLocalizationPipeKey = createLocalizationPipeKeyGenerator(localization);
  return (displayName, fallback) => {
    if (displayName && displayName.name) return generateLocalizationPipeKey([displayName.resource || ""], [displayName.name], displayName.name);
    const key = generateLocalizationPipeKey([fallback.resource || ""], ["DisplayName:" + fallback.name], void 0);
    if (key) return key;
    return generateLocalizationPipeKey([fallback.resource || ""], [fallback.name || ""], fallback.name);
  };
}
function getValidatorsFromProperty(property) {
  const validators = [];
  property.attributes.forEach((attr) => {
    if (attr.typeSimple && attr.typeSimple in AbpValidators) {
      validators.push(AbpValidators[attr.typeSimple](attr.config));
    }
  });
  return validators;
}
function selectObjectExtensions(configState) {
  return configState.getOne$("objectExtensions");
}
function selectLocalization(configState) {
  return configState.getOne$("localization");
}
function selectEnums(configState) {
  return selectObjectExtensions(configState).pipe(map((extensions) => Object.keys(extensions.enums).reduce((acc, key) => {
    const {
      fields,
      localizationResource
    } = extensions.enums[key];
    acc[key] = {
      fields,
      localizationResource,
      transformed: createEnum(fields)
    };
    return acc;
  }, {})));
}
function getObjectExtensionEntitiesFromStore(injector, moduleKey) {
  const configState = injector.get(ConfigStateService);
  return selectObjectExtensions(configState).pipe(map((extensions) => {
    if (!extensions) return null;
    return (extensions.modules[moduleKey] || {}).entities;
  }), map((entities) => isUndefined(entities) ? {} : entities), filter(Boolean), take(1));
}
function mapEntitiesToContributors(injector, resource) {
  const configState = injector.get(ConfigStateService);
  return pipe(switchMap((entities) => zip(selectLocalization(configState), selectEnums(configState)).pipe(map(([localization, enums]) => {
    const generateDisplayName = createDisplayNameLocalizationPipeKeyGenerator(localization);
    return Object.keys(entities).reduce((acc, key) => {
      acc.prop[key] = [];
      acc.createForm[key] = [];
      acc.editForm[key] = [];
      const entity = entities[key];
      if (!entity) {
        return acc;
      }
      const properties = entity.properties;
      if (!properties) {
        return acc;
      }
      checkPolicies(injector, properties);
      const mapPropertiesToContributors = createPropertiesToContributorsMapper(generateDisplayName, resource, enums);
      return mapPropertiesToContributors(properties, acc, key);
    }, {
      prop: {},
      createForm: {},
      editForm: {}
    });
  }))), take(1));
}
function createPropertiesToContributorsMapper(generateDisplayName, resource, enums) {
  return (properties, contributors, key) => {
    const isExtra = true;
    const generateTypeaheadDisplayName = createTypeaheadDisplayNameGenerator(generateDisplayName, properties);
    Object.keys(properties).forEach((name) => {
      const property = properties[name];
      const propName = name;
      const lookup = property.ui.lookup || {};
      const type = getTypeaheadType(lookup, name) || getTypeFromProperty(property);
      const generateDN = hasTypeaheadTextSuffix(name) ? generateTypeaheadDisplayName : generateDisplayName;
      const displayName = generateDN(property.displayName, {
        name,
        resource
      });
      if (property.ui.onTable.isVisible) {
        const sortable = Boolean(property.ui.onTable.isSortable);
        const columnWidth = type === "boolean" ? 150 : 250;
        const valueResolver = type === "enum" && property.type ? createEnumValueResolver(property.type, enums[property.type], propName) : createExtraPropertyValueResolver(propName);
        const entityProp = new EntityProp({
          type,
          name: propName,
          displayName,
          sortable,
          columnWidth,
          valueResolver,
          isExtra
        });
        const contributor = (propList) => propList.addTail(entityProp);
        contributors.prop[key].push(contributor);
      }
      const isOnCreateForm = property.ui.onCreateForm.isVisible;
      const isOnEditForm = property.ui.onEditForm.isVisible;
      if (isOnCreateForm || isOnEditForm) {
        const defaultValue = property.defaultValue;
        const formText = property.formText;
        const validators = () => getValidatorsFromProperty(property);
        let options;
        if (type === "enum") options = createEnumOptions(propName, enums[property.type || ""]);
        else if (type === "typeahead") options = createTypeaheadOptions(lookup);
        const formProp = new FormProp({
          type,
          name: propName,
          displayName,
          options,
          defaultValue,
          validators,
          isExtra,
          formText
        });
        const formContributor = (propList) => propList.addTail(formProp);
        if (isOnCreateForm) contributors.createForm[key].push(formContributor);
        if (isOnEditForm) contributors.editForm[key].push(formContributor);
      }
    });
    return contributors;
  };
}
function getTypeFromProperty(property) {
  return property?.typeSimple?.replace(/\?$/, "");
}
function isUndefined(obj) {
  return typeof obj === "undefined";
}
var importWithExport = [DisabledDirective, ExtensibleDateTimePickerComponent, ExtensibleFormPropComponent, GridActionsComponent, PropDataDirective, PageToolbarComponent, CreateInjectorPipe, ExtensibleFormComponent, ExtensibleTableComponent, ExtensibleFormMultiselectComponent];
var _ExtensibleModule = class _ExtensibleModule {
};
_ExtensibleModule.ɵfac = function ExtensibleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExtensibleModule)();
};
_ExtensibleModule.ɵmod = ɵɵdefineNgModule({
  type: _ExtensibleModule,
  imports: [CoreModule, ThemeSharedModule, NgxValidateCoreModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule, NgbTypeaheadModule, NgbTooltipModule, DisabledDirective, ExtensibleDateTimePickerComponent, ExtensibleFormPropComponent, GridActionsComponent, PropDataDirective, PageToolbarComponent, CreateInjectorPipe, ExtensibleFormComponent, ExtensibleTableComponent, ExtensibleFormMultiselectComponent],
  exports: [DisabledDirective, ExtensibleDateTimePickerComponent, ExtensibleFormPropComponent, GridActionsComponent, PropDataDirective, PageToolbarComponent, CreateInjectorPipe, ExtensibleFormComponent, ExtensibleTableComponent, ExtensibleFormMultiselectComponent]
});
_ExtensibleModule.ɵinj = ɵɵdefineInjector({
  imports: [CoreModule, ThemeSharedModule, NgxValidateCoreModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule, NgbTypeaheadModule, NgbTooltipModule, ExtensibleDateTimePickerComponent, ExtensibleFormPropComponent, GridActionsComponent, ExtensibleFormComponent, ExtensibleTableComponent, ExtensibleFormMultiselectComponent]
});
var ExtensibleModule = _ExtensibleModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CoreModule, ThemeSharedModule, NgxValidateCoreModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule, NgbTypeaheadModule, NgbTooltipModule, ...importWithExport],
      exports: [...importWithExport]
    }]
  }], null, null);
})();

export {
  EXTENSIONS_IDENTIFIER,
  EXTENSIONS_FORM_PROP,
  FormProp,
  FormPropData,
  EntityAction,
  EntityProp,
  ToolbarAction,
  ExtensionsService,
  ExtensibleFormComponent,
  ExtensibleTableComponent,
  PageToolbarComponent,
  EXTENSIBLE_FORM_VIEW_PROVIDER,
  mergeWithDefaultActions,
  generateFormFromProps,
  mergeWithDefaultProps,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors
};
//# sourceMappingURL=chunk-5ZBDGCEY.js.map
