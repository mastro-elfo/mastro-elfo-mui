"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextHttpBackend = _interopRequireDefault(require("i18next-http-backend"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
// Use languagedetector and initReactI18next here because they (initReactI18next) must be used before anything else
_i18next["default"] // detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(_i18nextBrowserLanguagedetector["default"]) // pass the i18n instance to react-i18next.
.use(_reactI18next.initReactI18next);
/**
 * Initialize i18n.
 *
 * ```js
 * import init from "mastro-elfo-mui/utils/i18n"
 * init(true, {
 *  backend: {
 *    loadPath: `${window.location.pathname}locales/{{lng}}/{{ns}}.json`
 *  }
 * })
 * ```
 *
 * ```js
 * import init from "mastro-elfo-mui/utils/i18n"
 * init(false, {
 *  resources: {
 *    en: {
 *      translation: {
 *        key: "value"
 *      }
 *    }
 *  }
 * })
 * ```
 *
 * @param  {Boolean} [backend=false] If `true` then `use(Backend)`
 * @param  {[type]}  options         options passed to `init` method: https://www.i18next.com/overview/configuration-options
 * @return {[type]}                  `i18n`
 */


var _default = function _default() {
  var backend = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var options = arguments.length > 1 ? arguments[1] : undefined;

  if (backend) {
    _i18next["default"] // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(_i18nextHttpBackend["default"]);
  } // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options


  return _i18next["default"].init(_objectSpread({
    fallbackLng: "en",
    joinArrays: "\n",
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default

    }
  }, options));
};

exports["default"] = _default;