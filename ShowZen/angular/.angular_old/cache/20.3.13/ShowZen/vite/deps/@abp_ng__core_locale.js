import {
  differentLocales
} from "./chunk-YNSF2OKM.js";
import "./chunk-KYW4FKB6.js";
import "./chunk-OALXQWG3.js";
import "./chunk-XJ5KBAN7.js";
import "./chunk-A4AOUQJ4.js";
import "./chunk-ZKYDULWF.js";
import "./chunk-7TTFZDGB.js";
import {
  isPlatformBrowser
} from "./chunk-PL5KB4ZG.js";
import {
  PLATFORM_ID,
  inject,
  isDevMode
} from "./chunk-OHEE3L26.js";
import "./chunk-576P5TAG.js";
import "./chunk-UQGLAMHP.js";
import "./chunk-2K3BB2X3.js";
import {
  __async,
  __spreadValues
} from "./chunk-SYKYUVZG.js";

// node_modules/@abp/ng.core/fesm2022/abp-ng.core-locale.mjs
var localeMap = {};
function loadLocale(locale) {
  const list = {
    ar: () => import("./ar-BFNOV2DL.js"),
    cs: () => import("./cs-HWEQWS4A.js"),
    en: () => import("./en-RR2A3AKM.js"),
    "en-GB": () => import("./en-GB-RBRXSDBB.js"),
    es: () => import("./es-2GCX2Y35.js"),
    de: () => import("./de-ZO4XILAK.js"),
    fi: () => import("./fi-JGCSGOO3.js"),
    fr: () => import("./fr-AMRNY7TF.js"),
    hi: () => import("./hi-EUVXZ4BQ.js"),
    hu: () => import("./hu-J6EHHYQY.js"),
    is: () => import("./is-YWAPRVYO.js"),
    it: () => import("./it-Y3A4ZOEF.js"),
    pt: () => import("./pt-OVA4TLQH.js"),
    tr: () => import("./tr-UCYMGL63.js"),
    ru: () => import("./ru-K4KQI6AK.js"),
    ro: () => import("./ro-6X2QDCJK.js"),
    sk: () => import("./sk-MDLMPSL3.js"),
    sl: () => import("./sl-747BAM22.js"),
    "zh-Hans": () => import("./zh-Hans-EP2IJAEE.js"),
    "zh-Hant": () => import("./zh-Hant-AEYPLZBL.js")
  };
  return list[locale]();
}
function registerLocaleForEsBuild({ cultureNameLocaleFileMap = {}, errorHandlerFn = defaultLocalErrorHandlerFn } = {}) {
  return (locale) => {
    localeMap = __spreadValues(__spreadValues({}, differentLocales), cultureNameLocaleFileMap);
    const l = localeMap[locale] || locale;
    const localeSupportList = "ar|cs|en|en-GB|es|de|fi|fr|hi|hu|is|it|pt|tr|ru|ro|sk|sl|zh-Hans|zh-Hant".split("|");
    if (localeSupportList.indexOf(l) == -1) {
      return;
    }
    return new Promise((resolve, reject) => {
      return loadLocale(l).then((val) => {
        let module = val;
        while (module.default) {
          module = module.default;
        }
        resolve({ default: module });
      }).catch((error) => {
        errorHandlerFn({
          resolve,
          reject,
          error,
          locale
        });
      });
    });
  };
}
function registerLocale({ cultureNameLocaleFileMap = {}, errorHandlerFn = defaultLocalErrorHandlerFn } = {}) {
  return (locale) => {
    localeMap = __spreadValues(__spreadValues({}, differentLocales), cultureNameLocaleFileMap);
    const localePath = `/locales/${localeMap[locale] || locale}`;
    return new Promise((resolve, reject) => {
      return import(
        /* webpackMode: "lazy-once" */
        /* webpackChunkName: "locales"*/
        /* webpackInclude: /[/\\](ar|cs|en|en-GB|es|de|fi|fr|hi|hu|is|it|pt|tr|ru|ro|sk|sl|zh-Hans|zh-Hant)\.(mjs|js)$/ */
        /* webpackExclude: /[/\\]global|extra/ */
        /* @vite-ignore */
        `@angular/common${localePath}`
      ).then((val) => {
        let module = val;
        while (module.default) {
          module = module.default;
        }
        resolve({ default: module });
      }).catch((error) => {
        errorHandlerFn({
          resolve,
          reject,
          error,
          locale
        });
      });
    });
  };
}
function safeRegisterLocale() {
  return (locale) => {
    const platformId = inject(PLATFORM_ID);
    if (!isPlatformBrowser(platformId)) {
      return Promise.resolve({ default: null });
    }
    return registerLocale()(locale);
  };
}
var extraLocales = {};
function storeLocaleData(data, localeId) {
  extraLocales[localeId] = data;
}
function defaultLocalErrorHandlerFn(_0) {
  return __async(this, arguments, function* ({ locale, resolve }) {
    if (extraLocales[locale]) {
      resolve({ default: extraLocales[localeMap[locale] || locale] });
      return;
    }
    if (isDevMode()) {
      console.error(`Cannot find the ${locale} locale file. You can check how can add new culture at https://abp.io/docs/latest/framework/ui/angular/localization#adding-a-new-culture`);
    }
    resolve();
  });
}
export {
  defaultLocalErrorHandlerFn,
  registerLocale,
  registerLocaleForEsBuild,
  safeRegisterLocale,
  storeLocaleData
};
//# sourceMappingURL=@abp_ng__core_locale.js.map
