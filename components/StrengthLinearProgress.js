"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StrengthLinearProgress;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Evaluate the strength of `password`
function evaluate(password) {
  // Short password: don't care about the content
  if (password.length === 0) return 0;
  if (password.length < 8) return 10; // Start from 10

  var s = 10;
  if (password.length > 11) s += 18;
  if (password.match(/[a-z]/)) s += 18;
  if (password.match(/[A-Z]/)) s += 18;
  if (password.match(/[0-9]/)) s += 18;
  if (password.match(/[^\w]/)) s += 18; // Just in case

  return Math.min(100, s);
}
/**
 * `LinearProgress` that shows the strength of a password.
 *
 * `password` is the string to be checked. Strength function is in progress.
 * `others` are passed to `LinearProgress`.
 * If component has children, this must be a function and the evaluated strength is passed.
 * @param       {[type]} children      [description]
 * @param       {String} [password=""] [description]
 * @param       {[type]} others        [description]
 * @constructor
 */


function StrengthLinearProgress(_ref) {
  var children = _ref.children,
      _ref$password = _ref.password,
      password = _ref$password === void 0 ? "" : _ref$password,
      others = _objectWithoutProperties(_ref, ["children", "password"]);

  var strength = evaluate(password);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.LinearProgress, _extends({
    variant: "determinate",
    value: strength
  }, others)), children && children(strength));
}

StrengthLinearProgress.propTypes = {
  children: _propTypes["default"].func,
  password: _propTypes["default"].string
};