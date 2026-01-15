import {
  APP_STARTED_WITH_SSR,
  AbpCookieStorageService,
  AbpLocalStorageService,
  AbpWindowService,
  AbstractAuthErrorFilter,
  ApiInterceptor,
  AuthErrorFilterService,
  AuthGuard,
  AuthService,
  CHECK_AUTHENTICATION_STATE_FN_KEY,
  CORE_OPTIONS,
  ConfigStateService,
  EnvironmentService,
  HttpErrorReporterService,
  HttpWaitService,
  IS_EXTERNAL_REQUEST,
  NAVIGATE_TO_MANAGE_PROFILE,
  PIPE_TO_LOGIN_FN_KEY,
  SessionStateService,
  TENANT_KEY,
  asyncAuthGuard,
  authGuard,
  collectionCompare,
  noop
} from "./chunk-YNSF2OKM.js";
import "./chunk-KYW4FKB6.js";
import "./chunk-OALXQWG3.js";
import "./chunk-XJ5KBAN7.js";
import {
  Router
} from "./chunk-A4AOUQJ4.js";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-ZKYDULWF.js";
import "./chunk-7TTFZDGB.js";
import {
  CommonModule,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-PL5KB4ZG.js";
import {
  DOCUMENT,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Optional,
  PLATFORM_ID,
  REQUEST,
  RESPONSE_INIT,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-OHEE3L26.js";
import {
  firstValueFrom,
  lastValueFrom,
  merge
} from "./chunk-576P5TAG.js";
import "./chunk-UQGLAMHP.js";
import {
  EMPTY,
  Subject,
  catchError,
  combineLatest,
  debounceTime,
  delay,
  filter,
  finalize,
  first,
  from,
  map,
  mergeMap,
  of,
  pipe,
  race,
  switchMap,
  take,
  tap,
  throwError,
  timeout,
  timer
} from "./chunk-2K3BB2X3.js";
import {
  __async,
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadValues,
  __superGet
} from "./chunk-SYKYUVZG.js";

// node_modules/angular-oauth2-oidc/fesm2022/angular-oauth2-oidc.mjs
var NullValidationHandler = class {
  validateSignature(validationParams) {
    return Promise.resolve(null);
  }
  validateAtHash(validationParams) {
    return Promise.resolve(true);
  }
};
var OAuthModuleConfig = class {
};
var DateTimeProvider = class {
};
var _SystemDateTimeProvider = class _SystemDateTimeProvider extends DateTimeProvider {
  now() {
    return Date.now();
  }
  new() {
    return /* @__PURE__ */ new Date();
  }
};
_SystemDateTimeProvider.ɵfac = /* @__PURE__ */ (() => {
  let ɵSystemDateTimeProvider_BaseFactory;
  return function SystemDateTimeProvider_Factory(__ngFactoryType__) {
    return (ɵSystemDateTimeProvider_BaseFactory || (ɵSystemDateTimeProvider_BaseFactory = ɵɵgetInheritedFactory(_SystemDateTimeProvider)))(__ngFactoryType__ || _SystemDateTimeProvider);
  };
})();
_SystemDateTimeProvider.ɵprov = ɵɵdefineInjectable({
  token: _SystemDateTimeProvider,
  factory: _SystemDateTimeProvider.ɵfac
});
var SystemDateTimeProvider = _SystemDateTimeProvider;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemDateTimeProvider, [{
    type: Injectable
  }], null, null);
})();
var OAuthLogger = class {
};
var OAuthStorage = class {
};
var _MemoryStorage = class _MemoryStorage {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  getItem(key) {
    return this.data.get(key);
  }
  removeItem(key) {
    this.data.delete(key);
  }
  setItem(key, data) {
    this.data.set(key, data);
  }
};
_MemoryStorage.ɵfac = function MemoryStorage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MemoryStorage)();
};
_MemoryStorage.ɵprov = ɵɵdefineInjectable({
  token: _MemoryStorage,
  factory: _MemoryStorage.ɵfac
});
var MemoryStorage = _MemoryStorage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MemoryStorage, [{
    type: Injectable
  }], null, null);
})();
var OAuthEvent = class {
  constructor(type) {
    this.type = type;
  }
};
var OAuthSuccessEvent = class extends OAuthEvent {
  constructor(type, info = null) {
    super(type);
    this.info = info;
  }
};
var OAuthInfoEvent = class extends OAuthEvent {
  constructor(type, info = null) {
    super(type);
    this.info = info;
  }
};
var OAuthErrorEvent = class extends OAuthEvent {
  constructor(type, reason, params = null) {
    super(type);
    this.reason = reason;
    this.params = params;
  }
};
function b64DecodeUnicode(str) {
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  return decodeURIComponent(atob(base64).split("").map(function(c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function base64UrlEncode(str) {
  const base64 = btoa(str);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
var AuthConfig = class {
  constructor(json) {
    this.clientId = "";
    this.redirectUri = "";
    this.postLogoutRedirectUri = "";
    this.redirectUriAsPostLogoutRedirectUriFallback = true;
    this.loginUrl = "";
    this.scope = "openid profile";
    this.resource = "";
    this.rngUrl = "";
    this.oidc = true;
    this.requestAccessToken = true;
    this.options = null;
    this.issuer = "";
    this.logoutUrl = "";
    this.clearHashAfterLogin = true;
    this.tokenEndpoint = null;
    this.revocationEndpoint = null;
    this.customTokenParameters = [];
    this.userinfoEndpoint = null;
    this.responseType = "";
    this.showDebugInformation = false;
    this.silentRefreshRedirectUri = "";
    this.silentRefreshMessagePrefix = "";
    this.silentRefreshShowIFrame = false;
    this.siletRefreshTimeout = 1e3 * 20;
    this.silentRefreshTimeout = 1e3 * 20;
    this.dummyClientSecret = "";
    this.requireHttps = "remoteOnly";
    this.strictDiscoveryDocumentValidation = true;
    this.jwks = null;
    this.customQueryParams = null;
    this.silentRefreshIFrameName = "angular-oauth-oidc-silent-refresh-iframe";
    this.timeoutFactor = 0.75;
    this.sessionChecksEnabled = false;
    this.sessionCheckIntervall = 3 * 1e3;
    this.sessionCheckIFrameUrl = null;
    this.sessionCheckIFrameName = "angular-oauth-oidc-check-session-iframe";
    this.disableAtHashCheck = false;
    this.skipSubjectCheck = false;
    this.useIdTokenHintForSilentRefresh = false;
    this.skipIssuerCheck = false;
    this.nonceStateSeparator = ";";
    this.useHttpBasicAuth = false;
    this.decreaseExpirationBySec = 0;
    this.waitForTokenInMsec = 0;
    this.disablePKCE = false;
    this.preserveRequestedRoute = false;
    this.disableIdTokenTimer = false;
    this.checkOrigin = false;
    this.openUri = (uri) => {
      location.href = uri;
    };
    if (json) {
      Object.assign(this, json);
    }
  }
};
var WebHttpUrlEncodingCodec = class {
  encodeKey(k) {
    return encodeURIComponent(k);
  }
  encodeValue(v) {
    return encodeURIComponent(v);
  }
  decodeKey(k) {
    return decodeURIComponent(k);
  }
  decodeValue(v) {
    return decodeURIComponent(v);
  }
};
var ValidationHandler = class {
};
var _UrlHelperService = class _UrlHelperService {
  getHashFragmentParams(customHashFragment) {
    let hash2 = customHashFragment || window.location.hash;
    hash2 = decodeURIComponent(hash2);
    if (hash2.indexOf("#") !== 0) {
      return {};
    }
    const questionMarkPosition = hash2.indexOf("?");
    if (questionMarkPosition > -1) {
      hash2 = hash2.substr(questionMarkPosition + 1);
    } else {
      hash2 = hash2.substr(1);
    }
    return this.parseQueryString(hash2);
  }
  parseQueryString(queryString) {
    const data = {};
    let pair, separatorIndex, escapedKey, escapedValue, key, value;
    if (queryString === null) {
      return data;
    }
    const pairs = queryString.split("&");
    for (let i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      separatorIndex = pair.indexOf("=");
      if (separatorIndex === -1) {
        escapedKey = pair;
        escapedValue = null;
      } else {
        escapedKey = pair.substr(0, separatorIndex);
        escapedValue = pair.substr(separatorIndex + 1);
      }
      key = decodeURIComponent(escapedKey);
      value = decodeURIComponent(escapedValue);
      if (key.substr(0, 1) === "/") {
        key = key.substr(1);
      }
      data[key] = value;
    }
    return data;
  }
};
_UrlHelperService.ɵfac = function UrlHelperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlHelperService)();
};
_UrlHelperService.ɵprov = ɵɵdefineInjectable({
  token: _UrlHelperService,
  factory: _UrlHelperService.ɵfac
});
var UrlHelperService = _UrlHelperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHelperService, [{
    type: Injectable
  }], null, null);
})();
var digestLength = 32;
var blockSize = 64;
var K = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
function hashBlocks(w, v, p, pos, len) {
  let a, b, c, d, e, f, g, h, u, i, j, t1, t2;
  while (len >= 64) {
    a = v[0];
    b = v[1];
    c = v[2];
    d = v[3];
    e = v[4];
    f = v[5];
    g = v[6];
    h = v[7];
    for (i = 0; i < 16; i++) {
      j = pos + i * 4;
      w[i] = (p[j] & 255) << 24 | (p[j + 1] & 255) << 16 | (p[j + 2] & 255) << 8 | p[j + 3] & 255;
    }
    for (i = 16; i < 64; i++) {
      u = w[i - 2];
      t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
      u = w[i - 15];
      t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
      w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
    }
    for (i = 0; i < 64; i++) {
      t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
      t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    v[0] += a;
    v[1] += b;
    v[2] += c;
    v[3] += d;
    v[4] += e;
    v[5] += f;
    v[6] += g;
    v[7] += h;
    pos += 64;
    len -= 64;
  }
  return pos;
}
var Hash = class {
  constructor() {
    this.digestLength = digestLength;
    this.blockSize = blockSize;
    this.state = new Int32Array(8);
    this.temp = new Int32Array(64);
    this.buffer = new Uint8Array(128);
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
    this.reset();
  }
  // Resets hash state making it possible
  // to re-use this instance to hash other data.
  reset() {
    this.state[0] = 1779033703;
    this.state[1] = 3144134277;
    this.state[2] = 1013904242;
    this.state[3] = 2773480762;
    this.state[4] = 1359893119;
    this.state[5] = 2600822924;
    this.state[6] = 528734635;
    this.state[7] = 1541459225;
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
    return this;
  }
  // Cleans internal buffers and re-initializes hash state.
  clean() {
    for (let i = 0; i < this.buffer.length; i++) {
      this.buffer[i] = 0;
    }
    for (let i = 0; i < this.temp.length; i++) {
      this.temp[i] = 0;
    }
    this.reset();
  }
  // Updates hash state with the given data.
  //
  // Optionally, length of the data can be specified to hash
  // fewer bytes than data.length.
  //
  // Throws error when trying to update already finalized hash:
  // instance must be reset to use it again.
  update(data, dataLength = data.length) {
    if (this.finished) {
      throw new Error("SHA256: can't update because hash was finished.");
    }
    let dataPos = 0;
    this.bytesHashed += dataLength;
    if (this.bufferLength > 0) {
      while (this.bufferLength < 64 && dataLength > 0) {
        this.buffer[this.bufferLength++] = data[dataPos++];
        dataLength--;
      }
      if (this.bufferLength === 64) {
        hashBlocks(this.temp, this.state, this.buffer, 0, 64);
        this.bufferLength = 0;
      }
    }
    if (dataLength >= 64) {
      dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
      dataLength %= 64;
    }
    while (dataLength > 0) {
      this.buffer[this.bufferLength++] = data[dataPos++];
      dataLength--;
    }
    return this;
  }
  // Finalizes hash state and puts hash into out.
  //
  // If hash was already finalized, puts the same value.
  finish(out) {
    if (!this.finished) {
      const bytesHashed = this.bytesHashed;
      const left = this.bufferLength;
      const bitLenHi = bytesHashed / 536870912 | 0;
      const bitLenLo = bytesHashed << 3;
      const padLength = bytesHashed % 64 < 56 ? 64 : 128;
      this.buffer[left] = 128;
      for (let i = left + 1; i < padLength - 8; i++) {
        this.buffer[i] = 0;
      }
      this.buffer[padLength - 8] = bitLenHi >>> 24 & 255;
      this.buffer[padLength - 7] = bitLenHi >>> 16 & 255;
      this.buffer[padLength - 6] = bitLenHi >>> 8 & 255;
      this.buffer[padLength - 5] = bitLenHi >>> 0 & 255;
      this.buffer[padLength - 4] = bitLenLo >>> 24 & 255;
      this.buffer[padLength - 3] = bitLenLo >>> 16 & 255;
      this.buffer[padLength - 2] = bitLenLo >>> 8 & 255;
      this.buffer[padLength - 1] = bitLenLo >>> 0 & 255;
      hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
      this.finished = true;
    }
    for (let i = 0; i < 8; i++) {
      out[i * 4 + 0] = this.state[i] >>> 24 & 255;
      out[i * 4 + 1] = this.state[i] >>> 16 & 255;
      out[i * 4 + 2] = this.state[i] >>> 8 & 255;
      out[i * 4 + 3] = this.state[i] >>> 0 & 255;
    }
    return this;
  }
  // Returns the final hash digest.
  digest() {
    const out = new Uint8Array(this.digestLength);
    this.finish(out);
    return out;
  }
  // Internal function for use in HMAC for optimization.
  _saveState(out) {
    for (let i = 0; i < this.state.length; i++) {
      out[i] = this.state[i];
    }
  }
  // Internal function for use in HMAC for optimization.
  _restoreState(from2, bytesHashed) {
    for (let i = 0; i < this.state.length; i++) {
      this.state[i] = from2[i];
    }
    this.bytesHashed = bytesHashed;
    this.finished = false;
    this.bufferLength = 0;
  }
};
function hash(data) {
  const h = new Hash().update(data);
  const digest = h.digest();
  h.clean();
  return digest;
}
var hkdfSalt = new Uint8Array(digestLength);
var HashHandler = class {
};
function decodeUTF8(s) {
  if (typeof s !== "string") throw new TypeError("expected string");
  const d = s, b = new Uint8Array(d.length);
  for (let i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
  return b;
}
function encodeUTF8(arr) {
  const s = [];
  for (let i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
  return s.join("");
}
var _DefaultHashHandler = class _DefaultHashHandler {
  calcHash(valueToHash, algorithm) {
    return __async(this, null, function* () {
      const candHash = encodeUTF8(hash(decodeUTF8(valueToHash)));
      return candHash;
    });
  }
  toHashString2(byteArray) {
    let result = "";
    for (const e of byteArray) {
      result += String.fromCharCode(e);
    }
    return result;
  }
  toHashString(buffer) {
    const byteArray = new Uint8Array(buffer);
    let result = "";
    for (const e of byteArray) {
      result += String.fromCharCode(e);
    }
    return result;
  }
};
_DefaultHashHandler.ɵfac = function DefaultHashHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultHashHandler)();
};
_DefaultHashHandler.ɵprov = ɵɵdefineInjectable({
  token: _DefaultHashHandler,
  factory: _DefaultHashHandler.ɵfac
});
var DefaultHashHandler = _DefaultHashHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultHashHandler, [{
    type: Injectable
  }], null, null);
})();
var _OAuthService = class _OAuthService extends AuthConfig {
  constructor(ngZone, http, storage, tokenValidationHandler, config, urlHelper, logger, crypto, document2, dateTimeService) {
    super();
    this.ngZone = ngZone;
    this.http = http;
    this.config = config;
    this.urlHelper = urlHelper;
    this.logger = logger;
    this.crypto = crypto;
    this.dateTimeService = dateTimeService;
    this.discoveryDocumentLoaded = false;
    this.state = "";
    this.eventsSubject = new Subject();
    this.discoveryDocumentLoadedSubject = new Subject();
    this.grantTypesSupported = [];
    this.inImplicitFlow = false;
    this.saveNoncesInLocalStorage = false;
    this.debug("angular-oauth2-oidc v10");
    this.document = document2;
    if (!config) {
      config = {};
    }
    this.discoveryDocumentLoaded$ = this.discoveryDocumentLoadedSubject.asObservable();
    this.events = this.eventsSubject.asObservable();
    if (tokenValidationHandler) {
      this.tokenValidationHandler = tokenValidationHandler;
    }
    if (config) {
      this.configure(config);
    }
    try {
      if (storage) {
        this.setStorage(storage);
      } else if (typeof sessionStorage !== "undefined") {
        this.setStorage(sessionStorage);
      }
    } catch (e) {
      console.error("No OAuthStorage provided and cannot access default (sessionStorage).Consider providing a custom OAuthStorage implementation in your module.", e);
    }
    if (this.checkLocalStorageAccessable()) {
      const ua = window?.navigator?.userAgent;
      const msie = ua?.includes("MSIE ") || ua?.includes("Trident");
      if (msie) {
        this.saveNoncesInLocalStorage = true;
      }
    }
    this.setupRefreshTimer();
  }
  checkLocalStorageAccessable() {
    if (typeof window === "undefined") return false;
    const test = "test";
    try {
      if (typeof window["localStorage"] === "undefined") return false;
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * Use this method to configure the service
   * @param config the configuration
   */
  configure(config) {
    Object.assign(this, new AuthConfig(), config);
    this.config = Object.assign({}, new AuthConfig(), config);
    if (this.sessionChecksEnabled) {
      this.setupSessionCheck();
    }
    this.configChanged();
  }
  configChanged() {
    this.setupRefreshTimer();
  }
  restartSessionChecksIfStillLoggedIn() {
    if (this.hasValidIdToken()) {
      this.initSessionCheck();
    }
  }
  restartRefreshTimerIfStillLoggedIn() {
    this.setupExpirationTimers();
  }
  setupSessionCheck() {
    this.events.pipe(filter((e) => e.type === "token_received")).subscribe(() => {
      this.initSessionCheck();
    });
  }
  /**
   * Will set up up silent refreshing for when the token is
   * about to expire. When the user is logged out via this.logOut method, the
   * silent refreshing will pause and not refresh the tokens until the user is
   * logged back in via receiving a new token.
   * @param params Additional parameter to pass
   * @param listenTo Set up automatic refresh of a specific token type
   */
  setupAutomaticSilentRefresh(params = {}, listenTo, noPrompt = true) {
    let shouldRunSilentRefresh = true;
    this.clearAutomaticRefreshTimer();
    this.automaticRefreshSubscription = this.events.pipe(tap((e) => {
      if (e.type === "token_received") {
        shouldRunSilentRefresh = true;
      } else if (e.type === "logout") {
        shouldRunSilentRefresh = false;
      }
    }), filter((e) => e.type === "token_expires" && (listenTo == null || listenTo === "any" || e.info === listenTo)), debounceTime(1e3)).subscribe(() => {
      if (shouldRunSilentRefresh) {
        this.refreshInternal(params, noPrompt).catch(() => {
          this.debug("Automatic silent refresh did not work");
        });
      }
    });
    this.restartRefreshTimerIfStillLoggedIn();
  }
  refreshInternal(params, noPrompt) {
    if (!this.useSilentRefresh && this.responseType === "code") {
      return this.refreshToken();
    } else {
      return this.silentRefresh(params, noPrompt);
    }
  }
  /**
   * Convenience method that first calls `loadDiscoveryDocument(...)` and
   * directly chains using the `then(...)` part of the promise to call
   * the `tryLogin(...)` method.
   *
   * @param options LoginOptions to pass through to `tryLogin(...)`
   */
  loadDiscoveryDocumentAndTryLogin(options = null) {
    return this.loadDiscoveryDocument().then(() => {
      return this.tryLogin(options);
    });
  }
  /**
   * Convenience method that first calls `loadDiscoveryDocumentAndTryLogin(...)`
   * and if then chains to `initLoginFlow()`, but only if there is no valid
   * IdToken or no valid AccessToken.
   *
   * @param options LoginOptions to pass through to `tryLogin(...)`
   */
  loadDiscoveryDocumentAndLogin(options = null) {
    options = options || {};
    return this.loadDiscoveryDocumentAndTryLogin(options).then(() => {
      if (!this.hasValidIdToken() || !this.hasValidAccessToken()) {
        const state = typeof options.state === "string" ? options.state : "";
        this.initLoginFlow(state);
        return false;
      } else {
        return true;
      }
    });
  }
  debug(...args) {
    if (this.showDebugInformation) {
      this.logger.debug(...args);
    }
  }
  validateUrlFromDiscoveryDocument(url) {
    const errors = [];
    const httpsCheck = this.validateUrlForHttps(url);
    const issuerCheck = this.validateUrlAgainstIssuer(url);
    if (!httpsCheck) {
      errors.push("https for all urls required. Also for urls received by discovery.");
    }
    if (!issuerCheck) {
      errors.push("Every url in discovery document has to start with the issuer url.Also see property strictDiscoveryDocumentValidation.");
    }
    return errors;
  }
  validateUrlForHttps(url) {
    if (!url) {
      return true;
    }
    const lcUrl = url.toLowerCase();
    if (this.requireHttps === false) {
      return true;
    }
    if ((lcUrl.match(/^http:\/\/localhost($|[:/])/) || lcUrl.match(/^http:\/\/localhost($|[:/])/)) && this.requireHttps === "remoteOnly") {
      return true;
    }
    return lcUrl.startsWith("https://");
  }
  assertUrlNotNullAndCorrectProtocol(url, description) {
    if (!url) {
      throw new Error(`'${description}' should not be null`);
    }
    if (!this.validateUrlForHttps(url)) {
      throw new Error(`'${description}' must use HTTPS (with TLS), or config value for property 'requireHttps' must be set to 'false' and allow HTTP (without TLS).`);
    }
  }
  validateUrlAgainstIssuer(url) {
    if (!this.strictDiscoveryDocumentValidation) {
      return true;
    }
    if (!url) {
      return true;
    }
    return url.toLowerCase().startsWith(this.issuer.toLowerCase());
  }
  setupRefreshTimer() {
    if (typeof window === "undefined") {
      this.debug("timer not supported on this plattform");
      return;
    }
    if (this.hasValidIdToken() || this.hasValidAccessToken()) {
      this.clearAccessTokenTimer();
      this.clearIdTokenTimer();
      this.setupExpirationTimers();
    }
    if (this.tokenReceivedSubscription) this.tokenReceivedSubscription.unsubscribe();
    this.tokenReceivedSubscription = this.events.pipe(filter((e) => e.type === "token_received")).subscribe(() => {
      this.clearAccessTokenTimer();
      this.clearIdTokenTimer();
      this.setupExpirationTimers();
    });
  }
  setupExpirationTimers() {
    if (this.hasValidAccessToken()) {
      this.setupAccessTokenTimer();
    }
    if (!this.disableIdTokenTimer && this.hasValidIdToken()) {
      this.setupIdTokenTimer();
    }
  }
  setupAccessTokenTimer() {
    const expiration = this.getAccessTokenExpiration();
    const storedAt = this.getAccessTokenStoredAt();
    const timeout2 = this.calcTimeout(storedAt, expiration);
    this.ngZone.runOutsideAngular(() => {
      this.accessTokenTimeoutSubscription = of(new OAuthInfoEvent("token_expires", "access_token")).pipe(delay(timeout2)).subscribe((e) => {
        this.ngZone.run(() => {
          this.eventsSubject.next(e);
        });
      });
    });
  }
  setupIdTokenTimer() {
    const expiration = this.getIdTokenExpiration();
    const storedAt = this.getIdTokenStoredAt();
    const timeout2 = this.calcTimeout(storedAt, expiration);
    this.ngZone.runOutsideAngular(() => {
      this.idTokenTimeoutSubscription = of(new OAuthInfoEvent("token_expires", "id_token")).pipe(delay(timeout2)).subscribe((e) => {
        this.ngZone.run(() => {
          this.eventsSubject.next(e);
        });
      });
    });
  }
  /**
   * Stops timers for automatic refresh.
   * To restart it, call setupAutomaticSilentRefresh again.
   */
  stopAutomaticRefresh() {
    this.clearAccessTokenTimer();
    this.clearIdTokenTimer();
    this.clearAutomaticRefreshTimer();
  }
  clearAccessTokenTimer() {
    if (this.accessTokenTimeoutSubscription) {
      this.accessTokenTimeoutSubscription.unsubscribe();
    }
  }
  clearIdTokenTimer() {
    if (this.idTokenTimeoutSubscription) {
      this.idTokenTimeoutSubscription.unsubscribe();
    }
  }
  clearAutomaticRefreshTimer() {
    if (this.automaticRefreshSubscription) {
      this.automaticRefreshSubscription.unsubscribe();
    }
  }
  calcTimeout(storedAt, expiration) {
    const now = this.dateTimeService.now();
    const delta = (expiration - storedAt) * this.timeoutFactor - (now - storedAt);
    const duration = Math.max(0, delta);
    const maxTimeoutValue = 2147483647;
    return duration > maxTimeoutValue ? maxTimeoutValue : duration;
  }
  /**
   * DEPRECATED. Use a provider for OAuthStorage instead:
   *
   * { provide: OAuthStorage, useFactory: oAuthStorageFactory }
   * export function oAuthStorageFactory(): OAuthStorage { return localStorage; }
   * Sets a custom storage used to store the received
   * tokens on client side. By default, the browser's
   * sessionStorage is used.
   * @ignore
   *
   * @param storage
   */
  setStorage(storage) {
    this._storage = storage;
    this.configChanged();
  }
  /**
   * Loads the discovery document to configure most
   * properties of this service. The url of the discovery
   * document is infered from the issuer's url according
   * to the OpenId Connect spec. To use another url you
   * can pass it to optional parameter fullUrl.
   *
   * @param fullUrl
   */
  loadDiscoveryDocument(fullUrl = null) {
    return new Promise((resolve, reject) => {
      if (!fullUrl) {
        fullUrl = this.issuer || "";
        if (!fullUrl.endsWith("/")) {
          fullUrl += "/";
        }
        fullUrl += ".well-known/openid-configuration";
      }
      if (!this.validateUrlForHttps(fullUrl)) {
        reject("issuer  must use HTTPS (with TLS), or config value for property 'requireHttps' must be set to 'false' and allow HTTP (without TLS).");
        return;
      }
      this.http.get(fullUrl).subscribe((doc) => {
        if (!this.validateDiscoveryDocument(doc)) {
          this.eventsSubject.next(new OAuthErrorEvent("discovery_document_validation_error", null));
          reject("discovery_document_validation_error");
          return;
        }
        this.loginUrl = doc.authorization_endpoint;
        this.logoutUrl = doc.end_session_endpoint || this.logoutUrl;
        this.grantTypesSupported = doc.grant_types_supported;
        this.issuer = doc.issuer;
        this.tokenEndpoint = doc.token_endpoint;
        this.userinfoEndpoint = doc.userinfo_endpoint || this.userinfoEndpoint;
        this.jwksUri = doc.jwks_uri;
        this.sessionCheckIFrameUrl = doc.check_session_iframe || this.sessionCheckIFrameUrl;
        this.discoveryDocumentLoaded = true;
        this.discoveryDocumentLoadedSubject.next(doc);
        this.revocationEndpoint = doc.revocation_endpoint || this.revocationEndpoint;
        if (this.sessionChecksEnabled) {
          this.restartSessionChecksIfStillLoggedIn();
        }
        this.loadJwks().then((jwks) => {
          const result = {
            discoveryDocument: doc,
            jwks
          };
          const event = new OAuthSuccessEvent("discovery_document_loaded", result);
          this.eventsSubject.next(event);
          resolve(event);
          return;
        }).catch((err) => {
          this.eventsSubject.next(new OAuthErrorEvent("discovery_document_load_error", err));
          reject(err);
          return;
        });
      }, (err) => {
        this.logger.error("error loading discovery document", err);
        this.eventsSubject.next(new OAuthErrorEvent("discovery_document_load_error", err));
        reject(err);
      });
    });
  }
  loadJwks() {
    return new Promise((resolve, reject) => {
      if (this.jwksUri) {
        this.http.get(this.jwksUri).subscribe((jwks) => {
          this.jwks = jwks;
          resolve(jwks);
        }, (err) => {
          this.logger.error("error loading jwks", err);
          this.eventsSubject.next(new OAuthErrorEvent("jwks_load_error", err));
          reject(err);
        });
      } else {
        resolve(null);
      }
    });
  }
  validateDiscoveryDocument(doc) {
    let errors;
    if (!this.skipIssuerCheck && doc.issuer !== this.issuer) {
      this.logger.error("invalid issuer in discovery document", "expected: " + this.issuer, "current: " + doc.issuer);
      return false;
    }
    errors = this.validateUrlFromDiscoveryDocument(doc.authorization_endpoint);
    if (errors.length > 0) {
      this.logger.error("error validating authorization_endpoint in discovery document", errors);
      return false;
    }
    errors = this.validateUrlFromDiscoveryDocument(doc.end_session_endpoint);
    if (errors.length > 0) {
      this.logger.error("error validating end_session_endpoint in discovery document", errors);
      return false;
    }
    errors = this.validateUrlFromDiscoveryDocument(doc.token_endpoint);
    if (errors.length > 0) {
      this.logger.error("error validating token_endpoint in discovery document", errors);
    }
    errors = this.validateUrlFromDiscoveryDocument(doc.revocation_endpoint);
    if (errors.length > 0) {
      this.logger.error("error validating revocation_endpoint in discovery document", errors);
    }
    errors = this.validateUrlFromDiscoveryDocument(doc.userinfo_endpoint);
    if (errors.length > 0) {
      this.logger.error("error validating userinfo_endpoint in discovery document", errors);
      return false;
    }
    errors = this.validateUrlFromDiscoveryDocument(doc.jwks_uri);
    if (errors.length > 0) {
      this.logger.error("error validating jwks_uri in discovery document", errors);
      return false;
    }
    if (this.sessionChecksEnabled && !doc.check_session_iframe) {
      this.logger.warn("sessionChecksEnabled is activated but discovery document does not contain a check_session_iframe field");
    }
    return true;
  }
  /**
   * Uses password flow to exchange userName and password for an
   * access_token. After receiving the access_token, this method
   * uses it to query the userinfo endpoint in order to get information
   * about the user in question.
   *
   * When using this, make sure that the property oidc is set to false.
   * Otherwise, stricter validations take place that make this operation
   * fail.
   *
   * @param userName
   * @param password
   * @param headers Optional additional http-headers.
   */
  fetchTokenUsingPasswordFlowAndLoadUserProfile(userName, password, headers = new HttpHeaders()) {
    return this.fetchTokenUsingPasswordFlow(userName, password, headers).then(() => this.loadUserProfile());
  }
  /**
   * Loads the user profile by accessing the user info endpoint defined by OpenId Connect.
   *
   * When using this with OAuth2 password flow, make sure that the property oidc is set to false.
   * Otherwise, stricter validations take place that make this operation fail.
   */
  loadUserProfile() {
    if (!this.hasValidAccessToken()) {
      throw new Error("Can not load User Profile without access_token");
    }
    if (!this.validateUrlForHttps(this.userinfoEndpoint)) {
      throw new Error("userinfoEndpoint must use HTTPS (with TLS), or config value for property 'requireHttps' must be set to 'false' and allow HTTP (without TLS).");
    }
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders().set("Authorization", "Bearer " + this.getAccessToken());
      this.http.get(this.userinfoEndpoint, {
        headers,
        observe: "response",
        responseType: "text"
      }).subscribe((response) => {
        this.debug("userinfo received", JSON.stringify(response));
        if (response.headers.get("content-type").startsWith("application/json")) {
          let info = JSON.parse(response.body);
          const existingClaims = this.getIdentityClaims() || {};
          if (!this.skipSubjectCheck) {
            if (this.oidc && (!existingClaims["sub"] || info.sub !== existingClaims["sub"])) {
              const err = "if property oidc is true, the received user-id (sub) has to be the user-id of the user that has logged in with oidc.\nif you are not using oidc but just oauth2 password flow set oidc to false";
              reject(err);
              return;
            }
          }
          info = Object.assign({}, existingClaims, info);
          this._storage.setItem("id_token_claims_obj", JSON.stringify(info));
          this.eventsSubject.next(new OAuthSuccessEvent("user_profile_loaded"));
          resolve({
            info
          });
        } else {
          this.debug("userinfo is not JSON, treating it as JWE/JWS");
          this.eventsSubject.next(new OAuthSuccessEvent("user_profile_loaded"));
          resolve(JSON.parse(response.body));
        }
      }, (err) => {
        this.logger.error("error loading user info", err);
        this.eventsSubject.next(new OAuthErrorEvent("user_profile_load_error", err));
        reject(err);
      });
    });
  }
  /**
   * Uses password flow to exchange userName and password for an access_token.
   * @param userName
   * @param password
   * @param headers Optional additional http-headers.
   */
  fetchTokenUsingPasswordFlow(userName, password, headers = new HttpHeaders()) {
    const parameters = {
      username: userName,
      password
    };
    return this.fetchTokenUsingGrant("password", parameters, headers);
  }
  /**
   * Uses a custom grant type to retrieve tokens.
   * @param grantType Grant type.
   * @param parameters Parameters to pass.
   * @param headers Optional additional HTTP headers.
   */
  fetchTokenUsingGrant(grantType, parameters, headers = new HttpHeaders()) {
    this.assertUrlNotNullAndCorrectProtocol(this.tokenEndpoint, "tokenEndpoint");
    let params = new HttpParams({
      encoder: new WebHttpUrlEncodingCodec()
    }).set("grant_type", grantType).set("scope", this.scope);
    if (this.useHttpBasicAuth) {
      const header = btoa(`${this.clientId}:${this.dummyClientSecret}`);
      headers = headers.set("Authorization", "Basic " + header);
    }
    if (!this.useHttpBasicAuth) {
      params = params.set("client_id", this.clientId);
    }
    if (!this.useHttpBasicAuth && this.dummyClientSecret) {
      params = params.set("client_secret", this.dummyClientSecret);
    }
    if (this.customQueryParams) {
      for (const key of Object.getOwnPropertyNames(this.customQueryParams)) {
        params = params.set(key, this.customQueryParams[key]);
      }
    }
    for (const key of Object.keys(parameters)) {
      params = params.set(key, parameters[key]);
    }
    headers = headers.set("Content-Type", "application/x-www-form-urlencoded");
    return new Promise((resolve, reject) => {
      this.http.post(this.tokenEndpoint, params, {
        headers
      }).subscribe((tokenResponse) => {
        this.debug("tokenResponse", tokenResponse);
        this.storeAccessTokenResponse(tokenResponse.access_token, tokenResponse.refresh_token, tokenResponse.expires_in || this.fallbackAccessTokenExpirationTimeInSec, tokenResponse.scope, this.extractRecognizedCustomParameters(tokenResponse));
        if (this.oidc && tokenResponse.id_token) {
          this.processIdToken(tokenResponse.id_token, tokenResponse.access_token).then((result) => {
            this.storeIdToken(result);
            resolve(tokenResponse);
          });
        }
        this.eventsSubject.next(new OAuthSuccessEvent("token_received"));
        resolve(tokenResponse);
      }, (err) => {
        this.logger.error("Error performing ${grantType} flow", err);
        this.eventsSubject.next(new OAuthErrorEvent("token_error", err));
        reject(err);
      });
    });
  }
  /**
   * Refreshes the token using a refresh_token.
   * This does not work for implicit flow, b/c
   * there is no refresh_token in this flow.
   * A solution for this is provided by the
   * method silentRefresh.
   */
  refreshToken() {
    this.assertUrlNotNullAndCorrectProtocol(this.tokenEndpoint, "tokenEndpoint");
    return new Promise((resolve, reject) => {
      let params = new HttpParams({
        encoder: new WebHttpUrlEncodingCodec()
      }).set("grant_type", "refresh_token").set("scope", this.scope).set("refresh_token", this._storage.getItem("refresh_token"));
      let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
      if (this.useHttpBasicAuth) {
        const header = btoa(`${this.clientId}:${this.dummyClientSecret}`);
        headers = headers.set("Authorization", "Basic " + header);
      }
      if (!this.useHttpBasicAuth) {
        params = params.set("client_id", this.clientId);
      }
      if (!this.useHttpBasicAuth && this.dummyClientSecret) {
        params = params.set("client_secret", this.dummyClientSecret);
      }
      if (this.customQueryParams) {
        for (const key of Object.getOwnPropertyNames(this.customQueryParams)) {
          params = params.set(key, this.customQueryParams[key]);
        }
      }
      this.http.post(this.tokenEndpoint, params, {
        headers
      }).pipe(switchMap((tokenResponse) => {
        if (this.oidc && tokenResponse.id_token) {
          return from(this.processIdToken(tokenResponse.id_token, tokenResponse.access_token, true)).pipe(tap((result) => this.storeIdToken(result)), map(() => tokenResponse));
        } else {
          return of(tokenResponse);
        }
      })).subscribe((tokenResponse) => {
        this.debug("refresh tokenResponse", tokenResponse);
        this.storeAccessTokenResponse(tokenResponse.access_token, tokenResponse.refresh_token, tokenResponse.expires_in || this.fallbackAccessTokenExpirationTimeInSec, tokenResponse.scope, this.extractRecognizedCustomParameters(tokenResponse));
        this.eventsSubject.next(new OAuthSuccessEvent("token_received"));
        this.eventsSubject.next(new OAuthSuccessEvent("token_refreshed"));
        resolve(tokenResponse);
      }, (err) => {
        this.logger.error("Error refreshing token", err);
        this.eventsSubject.next(new OAuthErrorEvent("token_refresh_error", err));
        reject(err);
      });
    });
  }
  removeSilentRefreshEventListener() {
    if (this.silentRefreshPostMessageEventListener) {
      window.removeEventListener("message", this.silentRefreshPostMessageEventListener);
      this.silentRefreshPostMessageEventListener = null;
    }
  }
  setupSilentRefreshEventListener() {
    this.removeSilentRefreshEventListener();
    this.silentRefreshPostMessageEventListener = (e) => {
      const message = this.processMessageEventMessage(e);
      if (this.checkOrigin && e.origin !== location.origin) {
        console.error("wrong origin requested silent refresh!");
      }
      this.tryLogin({
        customHashFragment: message,
        preventClearHashAfterLogin: true,
        customRedirectUri: this.silentRefreshRedirectUri || this.redirectUri
      }).catch((err) => this.debug("tryLogin during silent refresh failed", err));
    };
    window.addEventListener("message", this.silentRefreshPostMessageEventListener);
  }
  /**
   * Performs a silent refresh for implicit flow.
   * Use this method to get new tokens when/before
   * the existing tokens expire.
   */
  silentRefresh(params = {}, noPrompt = true) {
    const claims = this.getIdentityClaims() || {};
    if (this.useIdTokenHintForSilentRefresh && this.hasValidIdToken()) {
      params["id_token_hint"] = this.getIdToken();
    }
    if (!this.validateUrlForHttps(this.loginUrl)) {
      throw new Error("loginUrl  must use HTTPS (with TLS), or config value for property 'requireHttps' must be set to 'false' and allow HTTP (without TLS).");
    }
    if (typeof this.document === "undefined") {
      throw new Error("silent refresh is not supported on this platform");
    }
    const existingIframe = this.document.getElementById(this.silentRefreshIFrameName);
    if (existingIframe) {
      this.document.body.removeChild(existingIframe);
    }
    this.silentRefreshSubject = claims["sub"];
    const iframe = this.document.createElement("iframe");
    iframe.id = this.silentRefreshIFrameName;
    this.setupSilentRefreshEventListener();
    const redirectUri = this.silentRefreshRedirectUri || this.redirectUri;
    this.createLoginUrl(null, null, redirectUri, noPrompt, params).then((url) => {
      iframe.setAttribute("src", url);
      if (!this.silentRefreshShowIFrame) {
        iframe.style["display"] = "none";
      }
      this.document.body.appendChild(iframe);
    });
    const errors = this.events.pipe(filter((e) => e instanceof OAuthErrorEvent), first());
    const success = this.events.pipe(filter((e) => e.type === "token_received"), first());
    const timeout2 = of(new OAuthErrorEvent("silent_refresh_timeout", null)).pipe(delay(this.silentRefreshTimeout));
    return race([errors, success, timeout2]).pipe(map((e) => {
      if (e instanceof OAuthErrorEvent) {
        if (e.type === "silent_refresh_timeout") {
          this.eventsSubject.next(e);
        } else {
          e = new OAuthErrorEvent("silent_refresh_error", e);
          this.eventsSubject.next(e);
        }
        throw e;
      } else if (e.type === "token_received") {
        e = new OAuthSuccessEvent("silently_refreshed");
        this.eventsSubject.next(e);
      }
      return e;
    })).toPromise();
  }
  /**
   * This method exists for backwards compatibility.
   * {@link OAuthService#initLoginFlowInPopup} handles both code
   * and implicit flows.
   */
  initImplicitFlowInPopup(options) {
    return this.initLoginFlowInPopup(options);
  }
  initLoginFlowInPopup(options) {
    options = options || {};
    return this.createLoginUrl(null, null, this.silentRefreshRedirectUri, false, {
      display: "popup"
    }).then((url) => {
      return new Promise((resolve, reject) => {
        const checkForPopupClosedInterval = 500;
        let windowRef = null;
        if (!options.windowRef) {
          windowRef = window.open(url, "ngx-oauth2-oidc-login", this.calculatePopupFeatures(options));
        } else if (options.windowRef && !options.windowRef.closed) {
          windowRef = options.windowRef;
          windowRef.location.href = url;
        }
        let checkForPopupClosedTimer;
        const tryLogin = (hash2) => {
          this.tryLogin({
            customHashFragment: hash2,
            preventClearHashAfterLogin: true,
            customRedirectUri: this.silentRefreshRedirectUri
          }).then(() => {
            cleanup();
            resolve(true);
          }, (err) => {
            cleanup();
            reject(err);
          });
        };
        const checkForPopupClosed = () => {
          if (!windowRef || windowRef.closed) {
            cleanup();
            reject(new OAuthErrorEvent("popup_closed", {}));
          }
        };
        if (!windowRef) {
          reject(new OAuthErrorEvent("popup_blocked", {}));
        } else {
          checkForPopupClosedTimer = window.setInterval(checkForPopupClosed, checkForPopupClosedInterval);
        }
        const cleanup = () => {
          window.clearInterval(checkForPopupClosedTimer);
          window.removeEventListener("storage", storageListener);
          window.removeEventListener("message", listener);
          if (windowRef !== null) {
            windowRef.close();
          }
          windowRef = null;
        };
        const listener = (e) => {
          const message = this.processMessageEventMessage(e);
          if (message && message !== null) {
            window.removeEventListener("storage", storageListener);
            tryLogin(message);
          } else {
            console.log("false event firing");
          }
        };
        const storageListener = (event) => {
          if (event.key === "auth_hash") {
            window.removeEventListener("message", listener);
            tryLogin(event.newValue);
          }
        };
        window.addEventListener("message", listener);
        window.addEventListener("storage", storageListener);
      });
    });
  }
  calculatePopupFeatures(options) {
    const height = options.height || 470;
    const width = options.width || 500;
    const left = window.screenLeft + (window.outerWidth - width) / 2;
    const top = window.screenTop + (window.outerHeight - height) / 2;
    return `location=no,toolbar=no,width=${width},height=${height},top=${top},left=${left}`;
  }
  processMessageEventMessage(e) {
    let expectedPrefix = "#";
    if (this.silentRefreshMessagePrefix) {
      expectedPrefix += this.silentRefreshMessagePrefix;
    }
    if (!e || !e.data || typeof e.data !== "string") {
      return;
    }
    const prefixedMessage = e.data;
    if (!prefixedMessage.startsWith(expectedPrefix)) {
      return;
    }
    return "#" + prefixedMessage.substr(expectedPrefix.length);
  }
  canPerformSessionCheck() {
    if (!this.sessionChecksEnabled) {
      return false;
    }
    if (!this.sessionCheckIFrameUrl) {
      console.warn("sessionChecksEnabled is activated but there is no sessionCheckIFrameUrl");
      return false;
    }
    const sessionState = this.getSessionState();
    if (!sessionState) {
      console.warn("sessionChecksEnabled is activated but there is no session_state");
      return false;
    }
    if (typeof this.document === "undefined") {
      return false;
    }
    return true;
  }
  setupSessionCheckEventListener() {
    this.removeSessionCheckEventListener();
    this.sessionCheckEventListener = (e) => {
      const origin = e.origin.toLowerCase();
      const issuer = this.issuer.toLowerCase();
      this.debug("sessionCheckEventListener");
      if (!issuer.startsWith(origin)) {
        this.debug("sessionCheckEventListener", "wrong origin", origin, "expected", issuer, "event", e);
        return;
      }
      switch (e.data) {
        case "unchanged":
          this.ngZone.run(() => {
            this.handleSessionUnchanged();
          });
          break;
        case "changed":
          this.ngZone.run(() => {
            this.handleSessionChange();
          });
          break;
        case "error":
          this.ngZone.run(() => {
            this.handleSessionError();
          });
          break;
      }
      this.debug("got info from session check inframe", e);
    };
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener("message", this.sessionCheckEventListener);
    });
  }
  handleSessionUnchanged() {
    this.debug("session check", "session unchanged");
    this.eventsSubject.next(new OAuthInfoEvent("session_unchanged"));
  }
  handleSessionChange() {
    this.eventsSubject.next(new OAuthInfoEvent("session_changed"));
    this.stopSessionCheckTimer();
    if (!this.useSilentRefresh && this.responseType === "code") {
      this.refreshToken().then(() => {
        this.debug("token refresh after session change worked");
      }).catch(() => {
        this.debug("token refresh did not work after session changed");
        this.eventsSubject.next(new OAuthInfoEvent("session_terminated"));
        this.logOut(true);
      });
    } else if (this.silentRefreshRedirectUri) {
      this.silentRefresh().catch(() => this.debug("silent refresh failed after session changed"));
      this.waitForSilentRefreshAfterSessionChange();
    } else {
      this.eventsSubject.next(new OAuthInfoEvent("session_terminated"));
      this.logOut(true);
    }
  }
  waitForSilentRefreshAfterSessionChange() {
    this.events.pipe(filter((e) => e.type === "silently_refreshed" || e.type === "silent_refresh_timeout" || e.type === "silent_refresh_error"), first()).subscribe((e) => {
      if (e.type !== "silently_refreshed") {
        this.debug("silent refresh did not work after session changed");
        this.eventsSubject.next(new OAuthInfoEvent("session_terminated"));
        this.logOut(true);
      }
    });
  }
  handleSessionError() {
    this.stopSessionCheckTimer();
    this.eventsSubject.next(new OAuthInfoEvent("session_error"));
  }
  removeSessionCheckEventListener() {
    if (this.sessionCheckEventListener) {
      window.removeEventListener("message", this.sessionCheckEventListener);
      this.sessionCheckEventListener = null;
    }
  }
  initSessionCheck() {
    if (!this.canPerformSessionCheck()) {
      return;
    }
    const existingIframe = this.document.getElementById(this.sessionCheckIFrameName);
    if (existingIframe) {
      this.document.body.removeChild(existingIframe);
    }
    const iframe = this.document.createElement("iframe");
    iframe.id = this.sessionCheckIFrameName;
    this.setupSessionCheckEventListener();
    const url = this.sessionCheckIFrameUrl;
    iframe.setAttribute("src", url);
    iframe.style.display = "none";
    this.document.body.appendChild(iframe);
    this.startSessionCheckTimer();
  }
  startSessionCheckTimer() {
    this.stopSessionCheckTimer();
    this.ngZone.runOutsideAngular(() => {
      this.sessionCheckTimer = setInterval(this.checkSession.bind(this), this.sessionCheckIntervall);
    });
  }
  stopSessionCheckTimer() {
    if (this.sessionCheckTimer) {
      clearInterval(this.sessionCheckTimer);
      this.sessionCheckTimer = null;
    }
  }
  checkSession() {
    const iframe = this.document.getElementById(this.sessionCheckIFrameName);
    if (!iframe) {
      this.logger.warn("checkSession did not find iframe", this.sessionCheckIFrameName);
    }
    const sessionState = this.getSessionState();
    if (!sessionState) {
      this.stopSessionCheckTimer();
    }
    const message = this.clientId + " " + sessionState;
    iframe.contentWindow.postMessage(message, this.issuer);
  }
  createLoginUrl() {
    return __async(this, arguments, function* (state = "", loginHint = "", customRedirectUri = "", noPrompt = false, params = {}) {
      const that = this;
      let redirectUri;
      if (customRedirectUri) {
        redirectUri = customRedirectUri;
      } else {
        redirectUri = this.redirectUri;
      }
      const nonce = yield this.createAndSaveNonce();
      if (state) {
        state = nonce + this.config.nonceStateSeparator + encodeURIComponent(state);
      } else {
        state = nonce;
      }
      if (!this.requestAccessToken && !this.oidc) {
        throw new Error("Either requestAccessToken or oidc or both must be true");
      }
      if (this.config.responseType) {
        this.responseType = this.config.responseType;
      } else {
        if (this.oidc && this.requestAccessToken) {
          this.responseType = "id_token token";
        } else if (this.oidc && !this.requestAccessToken) {
          this.responseType = "id_token";
        } else {
          this.responseType = "token";
        }
      }
      const seperationChar = that.loginUrl.indexOf("?") > -1 ? "&" : "?";
      let scope = that.scope;
      if (this.oidc && !scope.match(/(^|\s)openid($|\s)/)) {
        scope = "openid " + scope;
      }
      let url = that.loginUrl + seperationChar + "response_type=" + encodeURIComponent(that.responseType) + "&client_id=" + encodeURIComponent(that.clientId) + "&state=" + encodeURIComponent(state) + "&redirect_uri=" + encodeURIComponent(redirectUri) + "&scope=" + encodeURIComponent(scope);
      if (this.responseType.includes("code") && !this.disablePKCE) {
        const [challenge, verifier] = yield this.createChallangeVerifierPairForPKCE();
        if (this.saveNoncesInLocalStorage && typeof window["localStorage"] !== "undefined") {
          localStorage.setItem("PKCE_verifier", verifier);
        } else {
          this._storage.setItem("PKCE_verifier", verifier);
        }
        url += "&code_challenge=" + challenge;
        url += "&code_challenge_method=S256";
      }
      if (loginHint) {
        url += "&login_hint=" + encodeURIComponent(loginHint);
      }
      if (that.resource) {
        url += "&resource=" + encodeURIComponent(that.resource);
      }
      if (that.oidc) {
        url += "&nonce=" + encodeURIComponent(nonce);
      }
      if (noPrompt) {
        url += "&prompt=none";
      }
      for (const key of Object.keys(params)) {
        url += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      }
      if (this.customQueryParams) {
        for (const key of Object.getOwnPropertyNames(this.customQueryParams)) {
          url += "&" + key + "=" + encodeURIComponent(this.customQueryParams[key]);
        }
      }
      return url;
    });
  }
  initImplicitFlowInternal(additionalState = "", params = "") {
    if (this.inImplicitFlow) {
      return;
    }
    this.inImplicitFlow = true;
    if (!this.validateUrlForHttps(this.loginUrl)) {
      throw new Error("loginUrl  must use HTTPS (with TLS), or config value for property 'requireHttps' must be set to 'false' and allow HTTP (without TLS).");
    }
    let addParams = {};
    let loginHint = null;
    if (typeof params === "string") {
      loginHint = params;
    } else if (typeof params === "object") {
      addParams = params;
    }
    this.createLoginUrl(additionalState, loginHint, null, false, addParams).then(this.config.openUri).catch((error) => {
      console.error("Error in initImplicitFlow", error);
      this.inImplicitFlow = false;
    });
  }
  /**
   * Starts the implicit flow and redirects to user to
   * the auth servers' login url.
   *
   * @param additionalState Optional state that is passed around.
   *  You'll find this state in the property `state` after `tryLogin` logged in the user.
   * @param params Hash with additional parameter. If it is a string, it is used for the
   *               parameter loginHint (for the sake of compatibility with former versions)
   */
  initImplicitFlow(additionalState = "", params = "") {
    if (this.loginUrl !== "") {
      this.initImplicitFlowInternal(additionalState, params);
    } else {
      this.events.pipe(filter((e) => e.type === "discovery_document_loaded")).subscribe(() => this.initImplicitFlowInternal(additionalState, params));
    }
  }
  /**
   * Reset current implicit flow
   *
   * @description This method allows resetting the current implict flow in order to be initialized again.
   */
  resetImplicitFlow() {
    this.inImplicitFlow = false;
  }
  callOnTokenReceivedIfExists(options) {
    const that = this;
    if (options.onTokenReceived) {
      const tokenParams = {
        idClaims: that.getIdentityClaims(),
        idToken: that.getIdToken(),
        accessToken: that.getAccessToken(),
        state: that.state
      };
      options.onTokenReceived(tokenParams);
    }
  }
  storeAccessTokenResponse(accessToken, refreshToken, expiresIn, grantedScopes, customParameters) {
    this._storage.setItem("access_token", accessToken);
    if (grantedScopes && !Array.isArray(grantedScopes)) {
      this._storage.setItem("granted_scopes", JSON.stringify(grantedScopes.split(" ")));
    } else if (grantedScopes && Array.isArray(grantedScopes)) {
      this._storage.setItem("granted_scopes", JSON.stringify(grantedScopes));
    }
    this._storage.setItem("access_token_stored_at", "" + this.dateTimeService.now());
    if (expiresIn) {
      const expiresInMilliSeconds = expiresIn * 1e3;
      const now = this.dateTimeService.new();
      const expiresAt = now.getTime() + expiresInMilliSeconds;
      this._storage.setItem("expires_at", "" + expiresAt);
    }
    if (refreshToken) {
      this._storage.setItem("refresh_token", refreshToken);
    }
    if (customParameters) {
      customParameters.forEach((value, key) => {
        this._storage.setItem(key, value);
      });
    }
  }
  /**
   * Delegates to tryLoginImplicitFlow for the sake of compatability
   * @param options Optional options.
   */
  tryLogin(options = null) {
    if (this.config.responseType === "code") {
      return this.tryLoginCodeFlow(options).then(() => true);
    } else {
      return this.tryLoginImplicitFlow(options);
    }
  }
  parseQueryString(queryString) {
    if (!queryString || queryString.length === 0) {
      return {};
    }
    if (queryString.charAt(0) === "?") {
      queryString = queryString.substr(1);
    }
    return this.urlHelper.parseQueryString(queryString);
  }
  tryLoginCodeFlow(options = null) {
    return __async(this, null, function* () {
      options = options || {};
      const querySource = options.customHashFragment ? options.customHashFragment.substring(1) : window.location.search;
      const parts = this.getCodePartsFromUrl(querySource);
      const code = parts["code"];
      const state = parts["state"];
      const sessionState = parts["session_state"];
      if (!options.preventClearHashAfterLogin) {
        const href = location.origin + location.pathname + location.search.replace(/code=[^&$]*/, "").replace(/scope=[^&$]*/, "").replace(/state=[^&$]*/, "").replace(/session_state=[^&$]*/, "").replace(/^\?&/, "?").replace(/&$/, "").replace(/^\?$/, "").replace(/&+/g, "&").replace(/\?&/, "?").replace(/\?$/, "") + location.hash;
        history.replaceState(null, window.name, href);
      }
      const [nonceInState, userState] = this.parseState(state);
      this.state = userState;
      if (parts["error"]) {
        this.debug("error trying to login");
        this.handleLoginError(options, parts);
        const err = new OAuthErrorEvent("code_error", {}, parts);
        this.eventsSubject.next(err);
        return Promise.reject(err);
      }
      if (!options.disableNonceCheck) {
        if (!nonceInState) {
          this.saveRequestedRoute();
          return Promise.resolve();
        }
        if (!options.disableOAuth2StateCheck) {
          const success = this.validateNonce(nonceInState);
          if (!success) {
            const event = new OAuthErrorEvent("invalid_nonce_in_state", null);
            this.eventsSubject.next(event);
            return Promise.reject(event);
          }
        }
      }
      this.storeSessionState(sessionState);
      if (code) {
        yield this.getTokenFromCode(code, options);
        this.restoreRequestedRoute();
        return Promise.resolve();
      } else {
        return Promise.resolve();
      }
    });
  }
  saveRequestedRoute() {
    if (this.config.preserveRequestedRoute) {
      this._storage.setItem("requested_route", window.location.pathname + window.location.search);
    }
  }
  restoreRequestedRoute() {
    const requestedRoute = this._storage.getItem("requested_route");
    if (requestedRoute) {
      history.replaceState(null, "", window.location.origin + requestedRoute);
    }
  }
  /**
   * Retrieve the returned auth code from the redirect uri that has been called.
   * If required also check hash, as we could use hash location strategy.
   */
  getCodePartsFromUrl(queryString) {
    if (!queryString || queryString.length === 0) {
      return this.urlHelper.getHashFragmentParams();
    }
    if (queryString.charAt(0) === "?") {
      queryString = queryString.substr(1);
    }
    return this.urlHelper.parseQueryString(queryString);
  }
  /**
   * Get token using an intermediate code. Works for the Authorization Code flow.
   */
  getTokenFromCode(code, options) {
    let params = new HttpParams({
      encoder: new WebHttpUrlEncodingCodec()
    }).set("grant_type", "authorization_code").set("code", code).set("redirect_uri", options.customRedirectUri || this.redirectUri);
    if (!this.disablePKCE) {
      let PKCEVerifier;
      if (this.saveNoncesInLocalStorage && typeof window["localStorage"] !== "undefined") {
        PKCEVerifier = localStorage.getItem("PKCE_verifier");
      } else {
        PKCEVerifier = this._storage.getItem("PKCE_verifier");
      }
      if (!PKCEVerifier) {
        console.warn("No PKCE verifier found in oauth storage!");
      } else {
        params = params.set("code_verifier", PKCEVerifier);
      }
    }
    return this.fetchAndProcessToken(params, options);
  }
  fetchAndProcessToken(params, options) {
    options = options || {};
    this.assertUrlNotNullAndCorrectProtocol(this.tokenEndpoint, "tokenEndpoint");
    let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    if (this.useHttpBasicAuth) {
      const header = btoa(`${this.clientId}:${this.dummyClientSecret}`);
      headers = headers.set("Authorization", "Basic " + header);
    }
    if (!this.useHttpBasicAuth) {
      params = params.set("client_id", this.clientId);
    }
    if (!this.useHttpBasicAuth && this.dummyClientSecret) {
      params = params.set("client_secret", this.dummyClientSecret);
    }
    return new Promise((resolve, reject) => {
      if (this.customQueryParams) {
        for (const key of Object.getOwnPropertyNames(this.customQueryParams)) {
          params = params.set(key, this.customQueryParams[key]);
        }
      }
      this.http.post(this.tokenEndpoint, params, {
        headers
      }).subscribe((tokenResponse) => {
        this.debug("refresh tokenResponse", tokenResponse);
        this.storeAccessTokenResponse(tokenResponse.access_token, tokenResponse.refresh_token, tokenResponse.expires_in || this.fallbackAccessTokenExpirationTimeInSec, tokenResponse.scope, this.extractRecognizedCustomParameters(tokenResponse));
        if (this.oidc && tokenResponse.id_token) {
          this.processIdToken(tokenResponse.id_token, tokenResponse.access_token, options.disableNonceCheck).then((result) => {
            this.storeIdToken(result);
            this.eventsSubject.next(new OAuthSuccessEvent("token_received"));
            this.eventsSubject.next(new OAuthSuccessEvent("token_refreshed"));
            resolve(tokenResponse);
          }).catch((reason) => {
            this.eventsSubject.next(new OAuthErrorEvent("token_validation_error", reason));
            console.error("Error validating tokens");
            console.error(reason);
            reject(reason);
          });
        } else {
          this.eventsSubject.next(new OAuthSuccessEvent("token_received"));
          this.eventsSubject.next(new OAuthSuccessEvent("token_refreshed"));
          resolve(tokenResponse);
        }
      }, (err) => {
        console.error("Error getting token", err);
        this.eventsSubject.next(new OAuthErrorEvent("token_error", err));
        reject(err);
      });
    });
  }
  /**
   * Checks whether there are tokens in the hash fragment
   * as a result of the implicit flow. These tokens are
   * parsed, validated and used to sign the user in to the
   * current client.
   *
   * @param options Optional options.
   */
  tryLoginImplicitFlow(options = null) {
    options = options || {};
    let parts;
    if (options.customHashFragment) {
      parts = this.urlHelper.getHashFragmentParams(options.customHashFragment);
    } else {
      parts = this.urlHelper.getHashFragmentParams();
    }
    this.debug("parsed url", parts);
    const state = parts["state"];
    const [nonceInState, userState] = this.parseState(state);
    this.state = userState;
    if (parts["error"]) {
      this.debug("error trying to login");
      this.handleLoginError(options, parts);
      const err = new OAuthErrorEvent("token_error", {}, parts);
      this.eventsSubject.next(err);
      return Promise.reject(err);
    }
    const accessToken = parts["access_token"];
    const idToken = parts["id_token"];
    const sessionState = parts["session_state"];
    const grantedScopes = parts["scope"];
    if (!this.requestAccessToken && !this.oidc) {
      return Promise.reject("Either requestAccessToken or oidc (or both) must be true.");
    }
    if (this.requestAccessToken && !accessToken) {
      return Promise.resolve(false);
    }
    if (this.requestAccessToken && !options.disableOAuth2StateCheck && !state) {
      return Promise.resolve(false);
    }
    if (this.oidc && !idToken) {
      return Promise.resolve(false);
    }
    if (this.sessionChecksEnabled && !sessionState) {
      this.logger.warn("session checks (Session Status Change Notification) were activated in the configuration but the id_token does not contain a session_state claim");
    }
    if (this.requestAccessToken && !options.disableNonceCheck) {
      const success = this.validateNonce(nonceInState);
      if (!success) {
        const event = new OAuthErrorEvent("invalid_nonce_in_state", null);
        this.eventsSubject.next(event);
        return Promise.reject(event);
      }
    }
    if (this.requestAccessToken) {
      this.storeAccessTokenResponse(accessToken, null, parts["expires_in"] || this.fallbackAccessTokenExpirationTimeInSec, grantedScopes);
    }
    if (!this.oidc) {
      this.eventsSubject.next(new OAuthSuccessEvent("token_received"));
      if (this.clearHashAfterLogin && !options.preventClearHashAfterLogin) {
        this.clearLocationHash();
      }
      this.callOnTokenReceivedIfExists(options);
      return Promise.resolve(true);
    }
    return this.processIdToken(idToken, accessToken, options.disableNonceCheck).then((result) => {
      if (options.validationHandler) {
        return options.validationHandler({
          accessToken,
          idClaims: result.idTokenClaims,
          idToken: result.idToken,
          state
        }).then(() => result);
      }
      return result;
    }).then((result) => {
      this.storeIdToken(result);
      this.storeSessionState(sessionState);
      if (this.clearHashAfterLogin && !options.preventClearHashAfterLogin) {
        this.clearLocationHash();
      }
      this.eventsSubject.next(new OAuthSuccessEvent("token_received"));
      this.callOnTokenReceivedIfExists(options);
      this.inImplicitFlow = false;
      return true;
    }).catch((reason) => {
      this.eventsSubject.next(new OAuthErrorEvent("token_validation_error", reason));
      this.logger.error("Error validating tokens");
      this.logger.error(reason);
      return Promise.reject(reason);
    });
  }
  parseState(state) {
    let nonce = state;
    let userState = "";
    if (state) {
      const idx = state.indexOf(this.config.nonceStateSeparator);
      if (idx > -1) {
        nonce = state.substr(0, idx);
        userState = state.substr(idx + this.config.nonceStateSeparator.length);
      }
    }
    return [nonce, userState];
  }
  validateNonce(nonceInState) {
    let savedNonce;
    if (this.saveNoncesInLocalStorage && typeof window["localStorage"] !== "undefined") {
      savedNonce = localStorage.getItem("nonce");
    } else {
      savedNonce = this._storage.getItem("nonce");
    }
    if (savedNonce !== nonceInState) {
      const err = "Validating access_token failed, wrong state/nonce.";
      console.error(err, savedNonce, nonceInState);
      return false;
    }
    return true;
  }
  storeIdToken(idToken) {
    this._storage.setItem("id_token", idToken.idToken);
    this._storage.setItem("id_token_claims_obj", idToken.idTokenClaimsJson);
    this._storage.setItem("id_token_expires_at", "" + idToken.idTokenExpiresAt);
    this._storage.setItem("id_token_stored_at", "" + this.dateTimeService.now());
  }
  storeSessionState(sessionState) {
    this._storage.setItem("session_state", sessionState);
  }
  getSessionState() {
    return this._storage.getItem("session_state");
  }
  handleLoginError(options, parts) {
    if (options.onLoginError) {
      options.onLoginError(parts);
    }
    if (this.clearHashAfterLogin && !options.preventClearHashAfterLogin) {
      this.clearLocationHash();
    }
  }
  getClockSkewInMsec(defaultSkewMsc = 6e5) {
    if (!this.clockSkewInSec && this.clockSkewInSec !== 0) {
      return defaultSkewMsc;
    }
    return this.clockSkewInSec * 1e3;
  }
  /**
   * @ignore
   */
  processIdToken(idToken, accessToken, skipNonceCheck = false) {
    const tokenParts = idToken.split(".");
    const headerBase64 = this.padBase64(tokenParts[0]);
    const headerJson = b64DecodeUnicode(headerBase64);
    const header = JSON.parse(headerJson);
    const claimsBase64 = this.padBase64(tokenParts[1]);
    const claimsJson = b64DecodeUnicode(claimsBase64);
    const claims = JSON.parse(claimsJson);
    let savedNonce;
    if (this.saveNoncesInLocalStorage && typeof window["localStorage"] !== "undefined") {
      savedNonce = localStorage.getItem("nonce");
    } else {
      savedNonce = this._storage.getItem("nonce");
    }
    if (Array.isArray(claims.aud)) {
      if (claims.aud.every((v) => v !== this.clientId)) {
        const err = "Wrong audience: " + claims.aud.join(",");
        this.logger.warn(err);
        return Promise.reject(err);
      }
    } else {
      if (claims.aud !== this.clientId) {
        const err = "Wrong audience: " + claims.aud;
        this.logger.warn(err);
        return Promise.reject(err);
      }
    }
    if (!claims.sub) {
      const err = "No sub claim in id_token";
      this.logger.warn(err);
      return Promise.reject(err);
    }
    if (this.sessionChecksEnabled && this.silentRefreshSubject && this.silentRefreshSubject !== claims["sub"]) {
      const err = `After refreshing, we got an id_token for another user (sub). Expected sub: ${this.silentRefreshSubject}, received sub: ${claims["sub"]}`;
      this.logger.warn(err);
      return Promise.reject(err);
    }
    if (!claims.iat) {
      const err = "No iat claim in id_token";
      this.logger.warn(err);
      return Promise.reject(err);
    }
    if (!this.skipIssuerCheck && claims.iss !== this.issuer) {
      const err = "Wrong issuer: " + claims.iss;
      this.logger.warn(err);
      return Promise.reject(err);
    }
    if (!skipNonceCheck && claims.nonce !== savedNonce) {
      const err = "Wrong nonce: " + claims.nonce;
      this.logger.warn(err);
      return Promise.reject(err);
    }
    if (Object.prototype.hasOwnProperty.call(this, "responseType") && (this.responseType === "code" || this.responseType === "id_token")) {
      this.disableAtHashCheck = true;
    }
    if (!this.disableAtHashCheck && this.requestAccessToken && !claims["at_hash"]) {
      const err = "An at_hash is needed!";
      this.logger.warn(err);
      return Promise.reject(err);
    }
    const now = this.dateTimeService.now();
    const issuedAtMSec = claims.iat * 1e3;
    const expiresAtMSec = claims.exp * 1e3;
    const clockSkewInMSec = this.getClockSkewInMsec();
    if (issuedAtMSec - clockSkewInMSec >= now || expiresAtMSec + clockSkewInMSec - this.decreaseExpirationBySec <= now) {
      const err = "Token has expired";
      console.error(err);
      console.error({
        now,
        issuedAtMSec,
        expiresAtMSec
      });
      return Promise.reject(err);
    }
    const validationParams = {
      accessToken,
      idToken,
      jwks: this.jwks,
      idTokenClaims: claims,
      idTokenHeader: header,
      loadKeys: () => this.loadJwks()
    };
    if (this.disableAtHashCheck) {
      return this.checkSignature(validationParams).then(() => {
        const result = {
          idToken,
          idTokenClaims: claims,
          idTokenClaimsJson: claimsJson,
          idTokenHeader: header,
          idTokenHeaderJson: headerJson,
          idTokenExpiresAt: expiresAtMSec
        };
        return result;
      });
    }
    return this.checkAtHash(validationParams).then((atHashValid) => {
      if (!this.disableAtHashCheck && this.requestAccessToken && !atHashValid) {
        const err = "Wrong at_hash";
        this.logger.warn(err);
        return Promise.reject(err);
      }
      return this.checkSignature(validationParams).then(() => {
        const atHashCheckEnabled = !this.disableAtHashCheck;
        const result = {
          idToken,
          idTokenClaims: claims,
          idTokenClaimsJson: claimsJson,
          idTokenHeader: header,
          idTokenHeaderJson: headerJson,
          idTokenExpiresAt: expiresAtMSec
        };
        if (atHashCheckEnabled) {
          return this.checkAtHash(validationParams).then((atHashValid2) => {
            if (this.requestAccessToken && !atHashValid2) {
              const err = "Wrong at_hash";
              this.logger.warn(err);
              return Promise.reject(err);
            } else {
              return result;
            }
          });
        } else {
          return result;
        }
      });
    });
  }
  /**
   * Returns the received claims about the user.
   */
  getIdentityClaims() {
    const claims = this._storage.getItem("id_token_claims_obj");
    if (!claims) {
      return null;
    }
    return JSON.parse(claims);
  }
  /**
   * Returns the granted scopes from the server.
   */
  getGrantedScopes() {
    const scopes = this._storage.getItem("granted_scopes");
    if (!scopes) {
      return null;
    }
    return JSON.parse(scopes);
  }
  /**
   * Returns the current id_token.
   */
  getIdToken() {
    return this._storage ? this._storage.getItem("id_token") : null;
  }
  padBase64(base64data) {
    while (base64data.length % 4 !== 0) {
      base64data += "=";
    }
    return base64data;
  }
  /**
   * Returns the current access_token.
   */
  getAccessToken() {
    return this._storage ? this._storage.getItem("access_token") : null;
  }
  getRefreshToken() {
    return this._storage ? this._storage.getItem("refresh_token") : null;
  }
  /**
   * Returns the expiration date of the access_token
   * as milliseconds since 1970.
   */
  getAccessTokenExpiration() {
    if (!this._storage.getItem("expires_at")) {
      return null;
    }
    return parseInt(this._storage.getItem("expires_at"), 10);
  }
  getAccessTokenStoredAt() {
    return parseInt(this._storage.getItem("access_token_stored_at"), 10);
  }
  getIdTokenStoredAt() {
    return parseInt(this._storage.getItem("id_token_stored_at"), 10);
  }
  /**
   * Returns the expiration date of the id_token
   * as milliseconds since 1970.
   */
  getIdTokenExpiration() {
    if (!this._storage.getItem("id_token_expires_at")) {
      return null;
    }
    return parseInt(this._storage.getItem("id_token_expires_at"), 10);
  }
  /**
   * Checkes, whether there is a valid access_token.
   */
  hasValidAccessToken() {
    if (this.getAccessToken()) {
      const expiresAt = this._storage.getItem("expires_at");
      const now = this.dateTimeService.new();
      if (expiresAt && parseInt(expiresAt, 10) - this.decreaseExpirationBySec < now.getTime() - this.getClockSkewInMsec()) {
        return false;
      }
      return true;
    }
    return false;
  }
  /**
   * Checks whether there is a valid id_token.
   */
  hasValidIdToken() {
    if (this.getIdToken()) {
      const expiresAt = this._storage.getItem("id_token_expires_at");
      const now = this.dateTimeService.new();
      if (expiresAt && parseInt(expiresAt, 10) - this.decreaseExpirationBySec < now.getTime() - this.getClockSkewInMsec()) {
        return false;
      }
      return true;
    }
    return false;
  }
  /**
   * Retrieve a saved custom property of the TokenReponse object. Only if predefined in authconfig.
   */
  getCustomTokenResponseProperty(requestedProperty) {
    return this._storage && this.config.customTokenParameters && this.config.customTokenParameters.indexOf(requestedProperty) >= 0 && this._storage.getItem(requestedProperty) !== null ? JSON.parse(this._storage.getItem(requestedProperty)) : null;
  }
  /**
   * Returns the auth-header that can be used
   * to transmit the access_token to a service
   */
  authorizationHeader() {
    return "Bearer " + this.getAccessToken();
  }
  logOut(customParameters = {}, state = "") {
    let noRedirectToLogoutUrl = false;
    if (typeof customParameters === "boolean") {
      noRedirectToLogoutUrl = customParameters;
      customParameters = {};
    }
    const id_token = this.getIdToken();
    this._storage.removeItem("access_token");
    this._storage.removeItem("id_token");
    this._storage.removeItem("refresh_token");
    if (this.saveNoncesInLocalStorage) {
      localStorage.removeItem("nonce");
      localStorage.removeItem("PKCE_verifier");
    } else {
      this._storage.removeItem("nonce");
      this._storage.removeItem("PKCE_verifier");
    }
    this._storage.removeItem("expires_at");
    this._storage.removeItem("id_token_claims_obj");
    this._storage.removeItem("id_token_expires_at");
    this._storage.removeItem("id_token_stored_at");
    this._storage.removeItem("access_token_stored_at");
    this._storage.removeItem("granted_scopes");
    this._storage.removeItem("session_state");
    if (this.config.customTokenParameters) {
      this.config.customTokenParameters.forEach((customParam) => this._storage.removeItem(customParam));
    }
    this.silentRefreshSubject = null;
    this.eventsSubject.next(new OAuthInfoEvent("logout"));
    if (!this.logoutUrl) {
      return;
    }
    if (noRedirectToLogoutUrl) {
      return;
    }
    let logoutUrl;
    if (!this.validateUrlForHttps(this.logoutUrl)) {
      throw new Error("logoutUrl  must use HTTPS (with TLS), or config value for property 'requireHttps' must be set to 'false' and allow HTTP (without TLS).");
    }
    if (this.logoutUrl.indexOf("{{") > -1) {
      logoutUrl = this.logoutUrl.replace(/\{\{id_token\}\}/, encodeURIComponent(id_token)).replace(/\{\{client_id\}\}/, encodeURIComponent(this.clientId));
    } else {
      let params = new HttpParams({
        encoder: new WebHttpUrlEncodingCodec()
      });
      if (id_token) {
        params = params.set("id_token_hint", id_token);
      }
      const postLogoutUrl = this.postLogoutRedirectUri || this.redirectUriAsPostLogoutRedirectUriFallback && this.redirectUri || "";
      if (postLogoutUrl) {
        params = params.set("post_logout_redirect_uri", postLogoutUrl);
        if (state) {
          params = params.set("state", state);
        }
      }
      for (const key in customParameters) {
        params = params.set(key, customParameters[key]);
      }
      logoutUrl = this.logoutUrl + (this.logoutUrl.indexOf("?") > -1 ? "&" : "?") + params.toString();
    }
    this.config.openUri(logoutUrl);
  }
  /**
   * @ignore
   */
  createAndSaveNonce() {
    const that = this;
    return this.createNonce().then(function(nonce) {
      if (that.saveNoncesInLocalStorage && typeof window["localStorage"] !== "undefined") {
        localStorage.setItem("nonce", nonce);
      } else {
        that._storage.setItem("nonce", nonce);
      }
      return nonce;
    });
  }
  /**
   * @ignore
   */
  ngOnDestroy() {
    this.clearAccessTokenTimer();
    this.clearIdTokenTimer();
    this.removeSilentRefreshEventListener();
    const silentRefreshFrame = this.document.getElementById(this.silentRefreshIFrameName);
    if (silentRefreshFrame) {
      silentRefreshFrame.remove();
    }
    this.stopSessionCheckTimer();
    this.removeSessionCheckEventListener();
    const sessionCheckFrame = this.document.getElementById(this.sessionCheckIFrameName);
    if (sessionCheckFrame) {
      sessionCheckFrame.remove();
    }
  }
  createNonce() {
    return new Promise((resolve) => {
      if (this.rngUrl) {
        throw new Error("createNonce with rng-web-api has not been implemented so far");
      }
      const unreserved = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
      let size = 45;
      let id = "";
      const crypto = typeof self === "undefined" ? null : self.crypto || self["msCrypto"];
      if (crypto) {
        let bytes = new Uint8Array(size);
        crypto.getRandomValues(bytes);
        if (!bytes.map) {
          bytes.map = Array.prototype.map;
        }
        bytes = bytes.map((x) => unreserved.charCodeAt(x % unreserved.length));
        id = String.fromCharCode.apply(null, bytes);
      } else {
        while (0 < size--) {
          id += unreserved[Math.random() * unreserved.length | 0];
        }
      }
      resolve(base64UrlEncode(id));
    });
  }
  checkAtHash(params) {
    return __async(this, null, function* () {
      if (!this.tokenValidationHandler) {
        this.logger.warn("No tokenValidationHandler configured. Cannot check at_hash.");
        return true;
      }
      return this.tokenValidationHandler.validateAtHash(params);
    });
  }
  checkSignature(params) {
    if (!this.tokenValidationHandler) {
      this.logger.warn("No tokenValidationHandler configured. Cannot check signature.");
      return Promise.resolve(null);
    }
    return this.tokenValidationHandler.validateSignature(params);
  }
  /**
   * Start the implicit flow or the code flow,
   * depending on your configuration.
   */
  initLoginFlow(additionalState = "", params = {}) {
    if (this.responseType === "code") {
      return this.initCodeFlow(additionalState, params);
    } else {
      return this.initImplicitFlow(additionalState, params);
    }
  }
  /**
   * Starts the authorization code flow and redirects to user to
   * the auth servers login url.
   */
  initCodeFlow(additionalState = "", params = {}) {
    if (this.loginUrl !== "") {
      this.initCodeFlowInternal(additionalState, params);
    } else {
      this.events.pipe(filter((e) => e.type === "discovery_document_loaded")).subscribe(() => this.initCodeFlowInternal(additionalState, params));
    }
  }
  initCodeFlowInternal(additionalState = "", params = {}) {
    if (!this.validateUrlForHttps(this.loginUrl)) {
      throw new Error("loginUrl  must use HTTPS (with TLS), or config value for property 'requireHttps' must be set to 'false' and allow HTTP (without TLS).");
    }
    let addParams = {};
    let loginHint = null;
    if (typeof params === "string") {
      loginHint = params;
    } else if (typeof params === "object") {
      addParams = params;
    }
    this.createLoginUrl(additionalState, loginHint, null, false, addParams).then(this.config.openUri).catch((error) => {
      console.error("Error in initAuthorizationCodeFlow");
      console.error(error);
    });
  }
  createChallangeVerifierPairForPKCE() {
    return __async(this, null, function* () {
      if (!this.crypto) {
        throw new Error("PKCE support for code flow needs a CryptoHander. Did you import the OAuthModule using forRoot() ?");
      }
      const verifier = yield this.createNonce();
      const challengeRaw = yield this.crypto.calcHash(verifier, "sha-256");
      const challenge = base64UrlEncode(challengeRaw);
      return [challenge, verifier];
    });
  }
  extractRecognizedCustomParameters(tokenResponse) {
    const foundParameters = /* @__PURE__ */ new Map();
    if (!this.config.customTokenParameters) {
      return foundParameters;
    }
    this.config.customTokenParameters.forEach((recognizedParameter) => {
      if (tokenResponse[recognizedParameter]) {
        foundParameters.set(recognizedParameter, JSON.stringify(tokenResponse[recognizedParameter]));
      }
    });
    return foundParameters;
  }
  /**
   * Revokes the auth token to secure the vulnarability
   * of the token issued allowing the authorization server to clean
   * up any security credentials associated with the authorization
   */
  revokeTokenAndLogout(customParameters = {}, ignoreCorsIssues = false) {
    const revokeEndpoint = this.revocationEndpoint;
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    if (!accessToken) {
      return Promise.resolve();
    }
    let params = new HttpParams({
      encoder: new WebHttpUrlEncodingCodec()
    });
    let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    if (this.useHttpBasicAuth) {
      const header = btoa(`${this.clientId}:${this.dummyClientSecret}`);
      headers = headers.set("Authorization", "Basic " + header);
    }
    if (!this.useHttpBasicAuth) {
      params = params.set("client_id", this.clientId);
    }
    if (!this.useHttpBasicAuth && this.dummyClientSecret) {
      params = params.set("client_secret", this.dummyClientSecret);
    }
    if (this.customQueryParams) {
      for (const key of Object.getOwnPropertyNames(this.customQueryParams)) {
        params = params.set(key, this.customQueryParams[key]);
      }
    }
    return new Promise((resolve, reject) => {
      let revokeAccessToken;
      let revokeRefreshToken;
      if (accessToken) {
        const revokationParams = params.set("token", accessToken).set("token_type_hint", "access_token");
        revokeAccessToken = this.http.post(revokeEndpoint, revokationParams, {
          headers
        });
      } else {
        revokeAccessToken = of(null);
      }
      if (refreshToken) {
        const revokationParams = params.set("token", refreshToken).set("token_type_hint", "refresh_token");
        revokeRefreshToken = this.http.post(revokeEndpoint, revokationParams, {
          headers
        });
      } else {
        revokeRefreshToken = of(null);
      }
      if (ignoreCorsIssues) {
        revokeAccessToken = revokeAccessToken.pipe(catchError((err) => {
          if (err.status === 0) {
            return of(null);
          }
          return throwError(err);
        }));
        revokeRefreshToken = revokeRefreshToken.pipe(catchError((err) => {
          if (err.status === 0) {
            return of(null);
          }
          return throwError(err);
        }));
      }
      combineLatest([revokeAccessToken, revokeRefreshToken]).subscribe((res) => {
        this.logOut(customParameters);
        resolve(res);
        this.logger.info("Token successfully revoked");
      }, (err) => {
        this.logger.error("Error revoking token", err);
        this.eventsSubject.next(new OAuthErrorEvent("token_revoke_error", err));
        reject(err);
      });
    });
  }
  /**
   * Clear location.hash if it's present
   */
  clearLocationHash() {
    if (location.hash != "") {
      location.hash = "";
    }
  }
};
_OAuthService.ɵfac = function OAuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OAuthService)(ɵɵinject(NgZone), ɵɵinject(HttpClient), ɵɵinject(OAuthStorage, 8), ɵɵinject(ValidationHandler, 8), ɵɵinject(AuthConfig, 8), ɵɵinject(UrlHelperService), ɵɵinject(OAuthLogger), ɵɵinject(HashHandler, 8), ɵɵinject(DOCUMENT), ɵɵinject(DateTimeProvider));
};
_OAuthService.ɵprov = ɵɵdefineInjectable({
  token: _OAuthService,
  factory: _OAuthService.ɵfac
});
var OAuthService = _OAuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthService, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }, {
    type: HttpClient
  }, {
    type: OAuthStorage,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ValidationHandler,
    decorators: [{
      type: Optional
    }]
  }, {
    type: AuthConfig,
    decorators: [{
      type: Optional
    }]
  }, {
    type: UrlHelperService
  }, {
    type: OAuthLogger
  }, {
    type: HashHandler,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: DateTimeProvider
  }], null);
})();
var OAuthResourceServerErrorHandler = class {
};
var OAuthNoopResourceServerErrorHandler = class {
  handleError(err) {
    return throwError(err);
  }
};
var _DefaultOAuthInterceptor = class _DefaultOAuthInterceptor {
  constructor(oAuthService, errorHandler, moduleConfig) {
    this.oAuthService = oAuthService;
    this.errorHandler = errorHandler;
    this.moduleConfig = moduleConfig;
  }
  checkUrl(url) {
    if (this.moduleConfig.resourceServer.customUrlValidation) {
      return this.moduleConfig.resourceServer.customUrlValidation(url);
    }
    if (this.moduleConfig.resourceServer.allowedUrls) {
      return !!this.moduleConfig.resourceServer.allowedUrls.find((u) => url.toLowerCase().startsWith(u.toLowerCase()));
    }
    return true;
  }
  intercept(req, next) {
    const url = req.url.toLowerCase();
    if (!this.moduleConfig || !this.moduleConfig.resourceServer || !this.checkUrl(url)) {
      return next.handle(req);
    }
    const sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;
    if (!sendAccessToken) {
      return next.handle(req).pipe(catchError((err) => this.errorHandler.handleError(err)));
    }
    return merge(of(this.oAuthService.getAccessToken()).pipe(filter((token) => !!token)), this.oAuthService.events.pipe(
      filter((e) => e.type === "token_received"),
      timeout(this.oAuthService.waitForTokenInMsec || 0),
      catchError(() => of(null)),
      // timeout is not an error
      map(() => this.oAuthService.getAccessToken())
    )).pipe(take(1), mergeMap((token) => {
      if (token) {
        const header = "Bearer " + token;
        const headers = req.headers.set("Authorization", header);
        req = req.clone({
          headers
        });
      }
      return next.handle(req).pipe(catchError((err) => this.errorHandler.handleError(err)));
    }));
  }
};
_DefaultOAuthInterceptor.ɵfac = function DefaultOAuthInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultOAuthInterceptor)(ɵɵinject(OAuthService), ɵɵinject(OAuthResourceServerErrorHandler), ɵɵinject(OAuthModuleConfig, 8));
};
_DefaultOAuthInterceptor.ɵprov = ɵɵdefineInjectable({
  token: _DefaultOAuthInterceptor,
  factory: _DefaultOAuthInterceptor.ɵfac
});
var DefaultOAuthInterceptor = _DefaultOAuthInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultOAuthInterceptor, [{
    type: Injectable
  }], () => [{
    type: OAuthService
  }, {
    type: OAuthResourceServerErrorHandler
  }, {
    type: OAuthModuleConfig,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function createDefaultLogger() {
  return console;
}
function createDefaultStorage() {
  return typeof sessionStorage !== "undefined" ? sessionStorage : new MemoryStorage();
}
function provideOAuthClient(config = null, validationHandlerClass = NullValidationHandler) {
  return makeEnvironmentProviders([OAuthService, UrlHelperService, {
    provide: OAuthLogger,
    useFactory: createDefaultLogger
  }, {
    provide: OAuthStorage,
    useFactory: createDefaultStorage
  }, {
    provide: ValidationHandler,
    useClass: validationHandlerClass
  }, {
    provide: HashHandler,
    useClass: DefaultHashHandler
  }, {
    provide: OAuthResourceServerErrorHandler,
    useClass: OAuthNoopResourceServerErrorHandler
  }, {
    provide: OAuthModuleConfig,
    useValue: config
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: DefaultOAuthInterceptor,
    multi: true
  }, {
    provide: DateTimeProvider,
    useClass: SystemDateTimeProvider
  }]);
}
var _OAuthModule = class _OAuthModule {
  static forRoot(config = null, validationHandlerClass = NullValidationHandler) {
    return {
      ngModule: _OAuthModule,
      providers: [provideOAuthClient(config, validationHandlerClass)]
    };
  }
};
_OAuthModule.ɵfac = function OAuthModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OAuthModule)();
};
_OAuthModule.ɵmod = ɵɵdefineNgModule({
  type: _OAuthModule,
  imports: [CommonModule]
});
_OAuthModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var OAuthModule = _OAuthModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [],
      exports: []
    }]
  }], null, null);
})();
var AUTH_CONFIG = new InjectionToken("AUTH_CONFIG");

// node_modules/@abp/ng.oauth/fesm2022/abp-ng.oauth.mjs
var NavigateToManageProfileProvider = {
  provide: NAVIGATE_TO_MANAGE_PROFILE,
  useFactory: () => {
    const environment = inject(EnvironmentService);
    return () => {
      const env = environment.getEnvironment();
      if (!env.oAuthConfig) {
        console.warn("The oAuthConfig env is missing on environment.ts");
        return;
      }
      const {
        issuer
      } = env.oAuthConfig;
      const path = issuer.endsWith("/") ? issuer : `${issuer}/`;
      window.open(`${path}Account/Manage?returnUrl=${window.location.href}`, "_self");
    };
  }
};
var _AbpOAuthGuard = class _AbpOAuthGuard {
  constructor() {
    this.oAuthService = inject(OAuthService);
    this.authService = inject(AuthService);
  }
  canActivate(route, state) {
    const hasValidAccessToken = this.oAuthService.hasValidAccessToken();
    if (hasValidAccessToken) {
      return true;
    }
    const params = {
      returnUrl: state.url
    };
    this.authService.navigateToLogin(params);
    return false;
  }
};
_AbpOAuthGuard.ɵfac = function AbpOAuthGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpOAuthGuard)();
};
_AbpOAuthGuard.ɵprov = ɵɵdefineInjectable({
  token: _AbpOAuthGuard,
  factory: _AbpOAuthGuard.ɵfac,
  providedIn: "root"
});
var AbpOAuthGuard = _AbpOAuthGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpOAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var abpOAuthGuard = (route, state) => {
  const oAuthService = inject(OAuthService);
  const authService = inject(AuthService);
  const platformId = inject(PLATFORM_ID);
  const resInit = inject(RESPONSE_INIT);
  const environmentService = inject(EnvironmentService);
  const hasValidAccessToken = oAuthService.hasValidAccessToken();
  if (hasValidAccessToken) {
    return true;
  }
  const params = {
    returnUrl: state.url
  };
  if (isPlatformServer(platformId) && resInit) {
    const ssrAuthorizationUrl = environmentService.getEnvironment().oAuthConfig.ssrAuthorizationUrl;
    const url = buildLoginUrl(ssrAuthorizationUrl, params);
    const headers = new Headers(resInit.headers);
    headers.set("Location", url);
    resInit.status = 302;
    resInit.statusText = "Found";
    resInit.headers = headers;
    return;
  }
  authService.navigateToLogin(params);
  return false;
};
var buildLoginUrl = (path, params) => {
  if (!params || Object.keys(params).length === 0) return path;
  const usp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v == null) continue;
    Array.isArray(v) ? v.forEach((x) => usp.append(k, String(x))) : usp.set(k, String(v));
  }
  return `${path}?${usp.toString()}`;
};
var asyncAbpOAuthGuard = (route, state) => {
  const oAuthService = inject(OAuthService);
  const authService = inject(AuthService);
  const environmentService = inject(EnvironmentService);
  const platformId = inject(PLATFORM_ID);
  const resInit = inject(RESPONSE_INIT);
  const {
    oAuthConfig
  } = environmentService.getEnvironment();
  if (oAuthConfig?.responseType === "code") {
    return firstValueFrom(timer(0, 100).pipe(map(() => oAuthService.hasValidAccessToken()), filter(Boolean), take(1), timeout(3e3), catchError(() => {
      if (isPlatformServer(platformId) && resInit) {
        const ssrAuthorizationUrl = environmentService.getEnvironment().oAuthConfig.ssrAuthorizationUrl;
        const url = buildLoginUrl(ssrAuthorizationUrl, {
          returnUrl: state.url
        });
        const headers = new Headers(resInit.headers);
        headers.set("Location", url);
        resInit.status = 302;
        resInit.statusText = "Found";
        resInit.headers = headers;
        return;
      }
      authService.navigateToLogin({
        returnUrl: state.url
      });
      return of(false);
    })));
  }
  if (oAuthService.hasValidAccessToken()) {
    return true;
  }
  authService.navigateToLogin({
    returnUrl: state.url
  });
  return false;
};
var _OAuthConfigurationHandler = class _OAuthConfigurationHandler {
  constructor() {
    this.oAuthService = inject(OAuthService);
    this.environmentService = inject(EnvironmentService);
    this.options = inject(CORE_OPTIONS);
    this.listenToSetEnvironment();
  }
  listenToSetEnvironment() {
    this.environmentService.createOnUpdateStream((state) => state).pipe(map((environment) => environment.oAuthConfig), filter((config) => !collectionCompare(config, this.options.environment.oAuthConfig))).subscribe((config) => {
      this.oAuthService.configure(config);
    });
  }
};
_OAuthConfigurationHandler.ɵfac = function OAuthConfigurationHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OAuthConfigurationHandler)();
};
_OAuthConfigurationHandler.ɵprov = ɵɵdefineInjectable({
  token: _OAuthConfigurationHandler,
  factory: _OAuthConfigurationHandler.ɵfac,
  providedIn: "root"
});
var OAuthConfigurationHandler = _OAuthConfigurationHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthConfigurationHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _OAuthApiInterceptor = class _OAuthApiInterceptor {
  constructor() {
    this.oAuthService = inject(OAuthService);
    this.sessionState = inject(SessionStateService);
    this.httpWaitService = inject(HttpWaitService);
    this.tenantKey = inject(TENANT_KEY);
  }
  intercept(request, next) {
    this.httpWaitService.addRequest(request);
    const isExternalRequest = request.context?.get(IS_EXTERNAL_REQUEST);
    const newRequest = isExternalRequest ? request : request.clone({
      setHeaders: this.getAdditionalHeaders(request.headers)
    });
    return next.handle(newRequest).pipe(finalize(() => this.httpWaitService.deleteRequest(request)));
  }
  getAdditionalHeaders(existingHeaders) {
    const headers = {};
    const token = this.oAuthService.getAccessToken();
    if (!existingHeaders?.has("Authorization") && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const lang = this.sessionState.getLanguage();
    if (!existingHeaders?.has("Accept-Language") && lang) {
      headers["Accept-Language"] = lang;
    }
    const tenant = this.sessionState.getTenant();
    if (!existingHeaders?.has(this.tenantKey) && tenant?.id) {
      headers[this.tenantKey] = tenant.id;
    }
    headers["X-Requested-With"] = "XMLHttpRequest";
    return headers;
  }
};
_OAuthApiInterceptor.ɵfac = function OAuthApiInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OAuthApiInterceptor)();
};
_OAuthApiInterceptor.ɵprov = ɵɵdefineInjectable({
  token: _OAuthApiInterceptor,
  factory: _OAuthApiInterceptor.ɵfac,
  providedIn: "root"
});
var OAuthApiInterceptor = _OAuthApiInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthApiInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function clearOAuthStorage(injector) {
  const storage = injector.get(OAuthStorage);
  const keys = ["access_token", "id_token", "refresh_token", "nonce", "PKCE_verifier", "expires_at", "id_token_claims_obj", "id_token_expires_at", "id_token_stored_at", "access_token_stored_at", "granted_scopes", "session_state"];
  keys.forEach((key) => storage.removeItem(key));
}
var COOKIES = new InjectionToken("COOKIES");
var _ServerTokenStorageService = class _ServerTokenStorageService {
  constructor(req) {
    this.req = req;
    this.cookies = /* @__PURE__ */ new Map();
    this.cookiesStr = inject(COOKIES, {
      optional: true
    });
    const cookieHeader = this.req?.headers.get("cookie") ?? this.cookiesStr ?? "";
    for (const part of cookieHeader.split(";")) {
      const i = part.indexOf("=");
      if (i > -1) {
        const k = part.slice(0, i).trim();
        const v = decodeURIComponent(part.slice(i + 1).trim());
        this.cookies.set(k, v);
      }
    }
  }
  getItem(key) {
    const fromCookie = this.cookies.get(key);
    if (fromCookie) {
      return fromCookie;
    }
    return "";
  }
  setItem(_k, _v) {
  }
  removeItem(_k) {
  }
};
_ServerTokenStorageService.ɵfac = function ServerTokenStorageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServerTokenStorageService)(ɵɵinject(REQUEST, 8));
};
_ServerTokenStorageService.ɵprov = ɵɵdefineInjectable({
  token: _ServerTokenStorageService,
  factory: _ServerTokenStorageService.ɵfac,
  providedIn: null
});
var ServerTokenStorageService = _ServerTokenStorageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServerTokenStorageService, [{
    type: Injectable,
    args: [{
      providedIn: null
    }]
  }], () => [{
    type: Request,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [REQUEST]
    }]
  }], null);
})();
var MockStorage = class {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  get length() {
    return this.data.size;
  }
  clear() {
    this.data.clear();
  }
  getItem(key) {
    return this.data.get(key) || null;
  }
  key(index) {
    return Array.from(this.data.keys())[index] || null;
  }
  removeItem(key) {
    this.data.delete(key);
  }
  setItem(key, value) {
    this.data.set(key, value);
  }
};
function oAuthStorageFactory() {
  const platformId = inject(PLATFORM_ID);
  const appStartedWithSSR = inject(APP_STARTED_WITH_SSR);
  if (appStartedWithSSR) {
    return isPlatformBrowser(platformId) ? inject(BrowserTokenStorageService) : inject(ServerTokenStorageService);
  }
  return inject(AbpLocalStorageService);
}
var _rememberMe;
var _RememberMeService = class _RememberMeService {
  constructor() {
    __privateAdd(this, _rememberMe);
    __privateSet(this, _rememberMe, "remember_me");
    this.localStorageService = inject(AbpLocalStorageService);
    this.cookieStorageService = inject(AbpCookieStorageService);
    this.appStartedWithSsr = inject(APP_STARTED_WITH_SSR, {
      optional: true
    });
  }
  set(remember) {
    if (this.appStartedWithSsr) {
      this.cookieStorageService.setItem(__privateGet(this, _rememberMe), JSON.stringify(remember));
      return;
    }
    this.localStorageService.setItem(__privateGet(this, _rememberMe), JSON.stringify(remember));
  }
  remove() {
    if (this.appStartedWithSsr) {
      this.cookieStorageService.removeItem(__privateGet(this, _rememberMe));
      return;
    }
    this.localStorageService.removeItem(__privateGet(this, _rememberMe));
  }
  get() {
    if (this.appStartedWithSsr) {
      return Boolean(JSON.parse(this.cookieStorageService.getItem(__privateGet(this, _rememberMe)) || "false"));
    }
    return Boolean(JSON.parse(this.localStorageService.getItem(__privateGet(this, _rememberMe)) || "false"));
  }
  getFromToken(accessToken) {
    let tokenBody = accessToken.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    while (tokenBody.length % 4 !== 0) {
      tokenBody += "=";
    }
    try {
      const parsedToken = JSON.parse(atob(tokenBody));
      return Boolean(parsedToken[__privateGet(this, _rememberMe)]);
    } catch {
      return false;
    }
  }
};
_rememberMe = new WeakMap();
_RememberMeService.ɵfac = function RememberMeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RememberMeService)();
};
_RememberMeService.ɵprov = ɵɵdefineInjectable({
  token: _RememberMeService,
  factory: _RememberMeService.ɵfac,
  providedIn: "root"
});
var RememberMeService = _RememberMeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RememberMeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var pipeToLogin = function(params, injector) {
  const configState = injector.get(ConfigStateService);
  const router = injector.get(Router);
  const rememberMeService = injector.get(RememberMeService);
  const authService = injector.get(AuthService);
  return pipe(switchMap(() => configState.refreshAppState()), tap(() => {
    rememberMeService.set(params.rememberMe || rememberMeService.get() || rememberMeService.getFromToken(authService.getAccessToken()));
    if (params.redirectUrl) router.navigate([params.redirectUrl]);
  }));
};
function isTokenExpired(expireDate) {
  const currentDate = (/* @__PURE__ */ new Date()).getTime();
  return expireDate < currentDate;
}
var checkAccessToken = function(injector) {
  const configState = injector.get(ConfigStateService);
  const oAuth = injector.get(OAuthService);
  if (oAuth.hasValidAccessToken() && !configState.getDeep("currentUser.id")) {
    clearOAuthStorage(this.injector);
  }
};
var AuthFlowStrategy = class {
  constructor(injector) {
    this.injector = injector;
    this.catchError = (err) => {
      this.httpErrorReporter.reportError(err);
      return of(null);
    };
    this.httpErrorReporter = injector.get(HttpErrorReporterService);
    this.environment = injector.get(EnvironmentService);
    this.configState = injector.get(ConfigStateService);
    this.oAuthService = injector.get(OAuthService);
    this.sessionState = injector.get(SessionStateService);
    this.localStorageService = injector.get(AbpLocalStorageService);
    this.oAuthConfig = this.environment.getEnvironment().oAuthConfig || {};
    this.tenantKey = injector.get(TENANT_KEY);
    this.router = injector.get(Router);
    this.oAuthErrorFilterService = injector.get(OAuthErrorFilterService);
    this.rememberMeService = injector.get(RememberMeService);
    this.windowService = injector.get(AbpWindowService);
    this.listenToOauthErrors();
  }
  init() {
    return __async(this, null, function* () {
      if (this.oAuthConfig.clientId) {
        const shouldClear = shouldStorageClear(this.oAuthConfig.clientId, this.injector);
        if (shouldClear) clearOAuthStorage(this.injector);
      }
      this.oAuthService.configure(this.oAuthConfig);
      this.oAuthService.events.pipe(filter((event) => event.type === "token_refresh_error")).subscribe(() => this.navigateToLogin());
      this.navigateToPreviousUrl();
      return this.oAuthService.loadDiscoveryDocument().then(() => {
        const isTokenExpire = isTokenExpired(this.oAuthService.getAccessTokenExpiration());
        if (isTokenExpire && this.oAuthService.getRefreshToken()) {
          return this.refreshToken();
        }
        return Promise.resolve();
      }).catch(this.catchError);
    });
  }
  navigateToPreviousUrl() {
    const {
      responseType
    } = this.oAuthConfig;
    if (responseType === "code") {
      this.oAuthService.events.pipe(filter((event) => event.type === "token_received" && !!this.oAuthService.state), take(1), map(() => {
        const redirectUri = decodeURIComponent(this.oAuthService.state);
        if (redirectUri && redirectUri !== "/") {
          return redirectUri;
        }
        return "/";
      }), switchMap((redirectUri) => this.configState.getOne$("currentUser").pipe(filter((user) => !!user?.isAuthenticated), tap(() => this.router.navigateByUrl(redirectUri))))).subscribe();
    }
  }
  refreshToken() {
    return this.oAuthService.refreshToken().catch(() => clearOAuthStorage(this.injector));
  }
  listenToOauthErrors() {
    this.oAuthService.events.pipe(filter((event) => event instanceof OAuthErrorEvent), tap((err) => {
      const shouldSkip = this.oAuthErrorFilterService.run(err);
      if (!shouldSkip) {
        clearOAuthStorage(this.injector);
      }
    }), switchMap(() => this.configState.refreshAppState())).subscribe();
  }
};
function shouldStorageClear(clientId, injector) {
  const storage = injector.get(OAuthStorage);
  const key = "abpOAuthClientId";
  if (!storage.getItem(key)) {
    storage.setItem(key, clientId);
    return false;
  }
  const shouldClear = storage.getItem(key) !== clientId;
  if (shouldClear) storage.setItem(key, clientId);
  return shouldClear;
}
var AuthCodeFlowStrategy = class _AuthCodeFlowStrategy extends AuthFlowStrategy {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.isInternalAuth = false;
    this.platformId = injector.get(PLATFORM_ID);
    this.appStartedWithSSR = injector.get(APP_STARTED_WITH_SSR);
    this.document = injector.get(DOCUMENT);
  }
  init() {
    return __async(this, null, function* () {
      this.checkRememberMeOption();
      this.listenToTokenReceived();
      if (!this.appStartedWithSSR && isPlatformBrowser(this.platformId)) {
        return __superGet(_AuthCodeFlowStrategy.prototype, this, "init").call(this).then(() => this.oAuthService.tryLogin().catch(noop)).then(() => {
          this.oAuthService.setupAutomaticSilentRefresh();
        });
      }
    });
  }
  checkRememberMeOption() {
    const accessToken = this.oAuthService.getAccessToken();
    const isTokenExpire = isTokenExpired(this.oAuthService.getAccessTokenExpiration());
    let rememberMe = this.rememberMeService.get();
    if (accessToken && !rememberMe) {
      const rememberMeValue = this.rememberMeService.getFromToken(accessToken);
      this.rememberMeService.set(!!rememberMeValue);
    }
    rememberMe = this.rememberMeService.get();
    if (accessToken && isTokenExpire && !rememberMe) {
      this.rememberMeService.remove();
      this.oAuthService.logOut();
    }
  }
  getCultureParams(queryParams) {
    const lang = this.sessionState.getLanguage();
    const culture = {
      culture: lang,
      "ui-culture": lang
    };
    return __spreadValues(__spreadValues({}, lang && culture), queryParams);
  }
  setUICulture() {
    if (isPlatformBrowser(this.platformId)) {
      const urlParams = new URLSearchParams(window.location.search);
      this.configState.uiCultureFromAuthCodeFlow = urlParams.get("ui-culture");
    }
  }
  replaceURLParams() {
    if (isPlatformBrowser(this.platformId)) {
      const location2 = this.windowService.window.location;
      const history2 = this.windowService.window.history;
      const query = location2.search.replace(/([?&])iss=[^&]*&?/, "$1").replace(/([?&])culture=[^&]*&?/, "$1").replace(/([?&])ui-culture=[^&]*&?/, "$1").replace(/[?&]+$/, "");
      const href = location2.origin + location2.pathname + query + location2.hash;
      history2.replaceState(null, "", href);
    }
  }
  listenToTokenReceived() {
    if (isPlatformBrowser(this.platformId) && !this.appStartedWithSSR) {
      this.oAuthService.events.pipe(filter((event) => event.type === "token_received"), tap(() => {
        this.setUICulture();
        this.replaceURLParams();
      }), take(1)).subscribe();
    }
  }
  navigateToLogin(queryParams) {
    if (isPlatformBrowser(this.platformId)) {
      if (this.appStartedWithSSR) {
        if (this.document.defaultView) {
          this.document.defaultView.location.replace("/authorize");
        }
      } else {
        let additionalState = "";
        if (queryParams?.returnUrl) {
          additionalState = queryParams.returnUrl;
        }
        const cultureParams = this.getCultureParams(queryParams);
        this.oAuthService.initCodeFlow(additionalState, cultureParams);
      }
    }
  }
  checkIfInternalAuth(queryParams) {
    if (isPlatformBrowser(this.platformId)) {
      this.oAuthService.initCodeFlow("", this.getCultureParams(queryParams));
      return false;
    }
  }
  logout(queryParams) {
    this.rememberMeService.remove();
    if (this.appStartedWithSSR) {
      if (this.document.defaultView) {
        this.document.defaultView.location.replace("/logout");
      }
    } else {
      if (queryParams?.noRedirectToLogoutUrl) {
        this.router.navigate(["/"]);
        return from(this.oAuthService.revokeTokenAndLogout(true));
      }
      return from(this.oAuthService.revokeTokenAndLogout(this.getCultureParams(queryParams)));
    }
  }
  login(queryParams) {
    if (isPlatformBrowser(this.platformId)) {
      this.oAuthService.initCodeFlow("", this.getCultureParams(queryParams));
      return of(null);
    }
  }
};
var AuthPasswordFlowStrategy = class _AuthPasswordFlowStrategy extends AuthFlowStrategy {
  constructor() {
    super(...arguments);
    this.isInternalAuth = true;
  }
  listenToTokenExpiration() {
    this.oAuthService.events.pipe(filter((event) => event instanceof OAuthInfoEvent && event.type === "token_expires" && event.info === "access_token")).subscribe(() => {
      if (this.oAuthService.getRefreshToken()) {
        this.refreshToken();
      } else {
        this.oAuthService.logOut();
        this.rememberMeService.remove();
        this.configState.refreshAppState().subscribe();
      }
    });
  }
  init() {
    return __async(this, null, function* () {
      this.checkRememberMeOption();
      return __superGet(_AuthPasswordFlowStrategy.prototype, this, "init").call(this).then(() => this.listenToTokenExpiration());
    });
  }
  checkRememberMeOption() {
    const accessToken = this.oAuthService.getAccessToken();
    const isTokenExpire = isTokenExpired(this.oAuthService.getAccessTokenExpiration());
    const rememberMe = this.rememberMeService.get();
    if (accessToken && isTokenExpire && !rememberMe) {
      this.rememberMeService.remove();
      this.oAuthService.logOut();
    }
  }
  navigateToLogin(queryParams) {
    const router = this.injector.get(Router);
    return router.navigate(["/account/login"], {
      queryParams
    });
  }
  checkIfInternalAuth() {
    return true;
  }
  login(params) {
    const tenant = this.sessionState.getTenant();
    return from(this.oAuthService.fetchTokenUsingPasswordFlow(params.username, params.password, new HttpHeaders(__spreadValues({}, tenant && tenant.id && {
      [this.tenantKey]: tenant.id
    })))).pipe(pipeToLogin(params, this.injector));
  }
  logout() {
    const router = this.injector.get(Router);
    const noRedirectToLogoutUrl = true;
    return from(this.oAuthService.revokeTokenAndLogout(noRedirectToLogoutUrl)).pipe(switchMap(() => this.configState.refreshAppState()), tap(() => {
      this.rememberMeService.remove();
      router.navigateByUrl("/");
    }));
  }
  refreshToken() {
    return this.oAuthService.refreshToken().catch(() => {
      clearOAuthStorage(this.injector);
      this.rememberMeService.remove();
    });
  }
};
var AUTH_FLOW_STRATEGY = {
  Code(injector) {
    return new AuthCodeFlowStrategy(injector);
  },
  Password(injector) {
    return new AuthPasswordFlowStrategy(injector);
  }
};
var _AbpOAuthService = class _AbpOAuthService {
  get oidc() {
    return this.oAuthService.oidc;
  }
  set oidc(value) {
    this.oAuthService.oidc = value;
  }
  get isInternalAuth() {
    return this.strategy.isInternalAuth;
  }
  constructor() {
    this.injector = inject(Injector);
    this.appStartedWithSsr = this.injector.get(APP_STARTED_WITH_SSR);
    this.platformId = this.injector.get(PLATFORM_ID);
    this.document = this.injector.get(DOCUMENT);
    this.oAuthService = this.injector.get(OAuthService);
  }
  init() {
    return __async(this, null, function* () {
      const environmentService = this.injector.get(EnvironmentService);
      const result$ = environmentService.getEnvironment$().pipe(map((env) => env?.oAuthConfig), filter(Boolean), tap((oAuthConfig) => {
        this.strategy = oAuthConfig.responseType === "code" ? AUTH_FLOW_STRATEGY.Code(this.injector) : AUTH_FLOW_STRATEGY.Password(this.injector);
      }), switchMap(() => from(this.strategy.init())), take(1));
      return yield lastValueFrom(result$);
    });
  }
  logout(queryParams) {
    if (!this.strategy) {
      return EMPTY;
    }
    return this.strategy.logout(queryParams);
  }
  navigateToLogin(queryParams) {
    this.strategy.navigateToLogin(queryParams);
  }
  login(params) {
    return this.strategy.login(params);
  }
  get isAuthenticated() {
    return this.oAuthService.hasValidAccessToken();
  }
  loginUsingGrant(grantType, parameters, headers) {
    const {
      clientId: client_id,
      dummyClientSecret: client_secret
    } = this.oAuthService;
    const access_token = this.oAuthService.getAccessToken();
    const p = __spreadValues({
      access_token,
      grant_type: grantType,
      client_id
    }, parameters);
    if (client_secret) {
      p["client_secret"] = client_secret;
    }
    return this.oAuthService.fetchTokenUsingGrant(grantType, p, headers);
  }
  getRefreshToken() {
    return this.oAuthService.getRefreshToken();
  }
  getAccessToken() {
    return this.oAuthService.getAccessToken();
  }
  refreshToken() {
    if (isPlatformBrowser(this.platformId) && this.appStartedWithSsr) {
      this.document.defaultView?.location.replace("/authorize");
      return Promise.resolve();
    }
    return this.oAuthService.refreshToken();
  }
  getAccessTokenExpiration() {
    return this.oAuthService.getAccessTokenExpiration();
  }
};
_AbpOAuthService.ɵfac = function AbpOAuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpOAuthService)();
};
_AbpOAuthService.ɵprov = ɵɵdefineInjectable({
  token: _AbpOAuthService,
  factory: _AbpOAuthService.ɵfac,
  providedIn: "root"
});
var AbpOAuthService = _AbpOAuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpOAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _OAuthErrorFilterService = class _OAuthErrorFilterService extends AbstractAuthErrorFilter {
  constructor() {
    super(...arguments);
    this._filters = signal([]);
    this.filters = this._filters.asReadonly();
  }
  get(id) {
    return this._filters().find(({
      id: _id
    }) => _id === id);
  }
  add(filter2) {
    this._filters.update((items) => [...items, filter2]);
  }
  patch(item) {
    const _item = this.filters().find(({
      id
    }) => id === item.id);
    if (!_item) {
      return;
    }
    Object.assign(_item, item);
  }
  remove(id) {
    const item = this.filters().find(({
      id: _id
    }) => _id === id);
    if (!item) {
      return;
    }
    this._filters.update((items) => items.filter(({
      id: _id
    }) => _id !== id));
  }
  run(event) {
    return this.filters().filter(({
      executable
    }) => !!executable).map(({
      execute
    }) => execute(event)).some((item) => item);
  }
};
_OAuthErrorFilterService.ɵfac = /* @__PURE__ */ (() => {
  let ɵOAuthErrorFilterService_BaseFactory;
  return function OAuthErrorFilterService_Factory(__ngFactoryType__) {
    return (ɵOAuthErrorFilterService_BaseFactory || (ɵOAuthErrorFilterService_BaseFactory = ɵɵgetInheritedFactory(_OAuthErrorFilterService)))(__ngFactoryType__ || _OAuthErrorFilterService);
  };
})();
_OAuthErrorFilterService.ɵprov = ɵɵdefineInjectable({
  token: _OAuthErrorFilterService,
  factory: _OAuthErrorFilterService.ɵfac,
  providedIn: "root"
});
var OAuthErrorFilterService = _OAuthErrorFilterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthErrorFilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _BrowserTokenStorageService = class _BrowserTokenStorageService {
  getItem(key) {
    return this.readCookie(key);
  }
  removeItem(key) {
    this.removeCookie(key);
  }
  setItem(key, data) {
    this.writeCookie(key, data);
  }
  readCookie(name) {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
  }
  writeCookie(name, value, days = 7) {
    if (typeof document === "undefined") return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; Secure; SameSite=Lax`;
  }
  removeCookie(name) {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=; Max-Age=0; path=/;`;
  }
};
_BrowserTokenStorageService.ɵfac = function BrowserTokenStorageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BrowserTokenStorageService)();
};
_BrowserTokenStorageService.ɵprov = ɵɵdefineInjectable({
  token: _BrowserTokenStorageService,
  factory: _BrowserTokenStorageService.ɵfac,
  providedIn: "root"
});
var BrowserTokenStorageService = _BrowserTokenStorageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserTokenStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function provideAbpOAuth() {
  const providers = [{
    provide: AuthService,
    useClass: AbpOAuthService
  }, {
    provide: AuthGuard,
    useClass: AbpOAuthGuard
  }, {
    provide: authGuard,
    useValue: abpOAuthGuard
  }, {
    provide: asyncAuthGuard,
    useValue: asyncAbpOAuthGuard
  }, {
    provide: ApiInterceptor,
    useClass: OAuthApiInterceptor
  }, {
    provide: PIPE_TO_LOGIN_FN_KEY,
    useValue: pipeToLogin
  }, {
    provide: CHECK_AUTHENTICATION_STATE_FN_KEY,
    useValue: checkAccessToken
  }, {
    provide: HTTP_INTERCEPTORS,
    useExisting: ApiInterceptor,
    multi: true
  }, NavigateToManageProfileProvider, provideAppInitializer(() => {
    inject(OAuthConfigurationHandler);
  }), OAuthModule.forRoot().providers, ServerTokenStorageService, BrowserTokenStorageService, {
    provide: OAuthStorage,
    useFactory: oAuthStorageFactory
  }, {
    provide: AuthErrorFilterService,
    useExisting: OAuthErrorFilterService
  }];
  return makeEnvironmentProviders(providers);
}
var _AbpOAuthModule = class _AbpOAuthModule {
  static forRoot() {
    return {
      ngModule: _AbpOAuthModule,
      providers: [provideAbpOAuth()]
    };
  }
};
_AbpOAuthModule.ɵfac = function AbpOAuthModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpOAuthModule)();
};
_AbpOAuthModule.ɵmod = ɵɵdefineNgModule({
  type: _AbpOAuthModule
});
_AbpOAuthModule.ɵinj = ɵɵdefineInjector({});
var AbpOAuthModule = _AbpOAuthModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpOAuthModule, [{
    type: NgModule
  }], null, null);
})();
export {
  AUTH_FLOW_STRATEGY,
  AbpOAuthGuard,
  AbpOAuthModule,
  AbpOAuthService,
  AuthCodeFlowStrategy,
  AuthFlowStrategy,
  AuthPasswordFlowStrategy,
  BrowserTokenStorageService,
  COOKIES,
  MockStorage,
  NavigateToManageProfileProvider,
  OAuthApiInterceptor,
  OAuthConfigurationHandler,
  OAuthErrorFilterService,
  RememberMeService,
  ServerTokenStorageService,
  abpOAuthGuard,
  asyncAbpOAuthGuard,
  buildLoginUrl,
  checkAccessToken,
  clearOAuthStorage,
  isTokenExpired,
  oAuthStorageFactory,
  pipeToLogin,
  provideAbpOAuth
};
//# sourceMappingURL=@abp_ng__oauth.js.map
