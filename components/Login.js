"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Login;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// TODO: I want to pass actions to Component only if its type is LoginDialog
// This is one way to do it, but relies on Component.name and I'm not sure about this
// {...(Component.name === "LoginDialog" ? { actions: [...] } : {})}

/**
 * Handle show login component conditionally
 *
 * If `show` is a function it is evaluated with `location` as parameter; Otherwise is converted to `Boolean`. Then is passed to `Component` as `open` property.
 *
 * `Component` is the component shown to display a login form. It defaults to `LoginDialog`. `open` prop is passed to `Component` to show/hide.
 *
 * `...rest` is passed to `Component`.
 *
 * @param       {[type]}  children                [description]
 * @param       {[type]}  [Component=LoginDialog] [description]
 * @param       {Boolean} [show=false]            [description]
 * @param       {[type]}  rest                    [description]
 * @constructor
 */
function Login(_ref) {
  var children = _ref.children,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? _.LoginDialog : _ref$Component,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      rest = _objectWithoutProperties(_ref, ["children", "Component", "show"]);

  var location = (0, _reactRouterDom.useLocation)();
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(Component, _extends({
    open: Boolean(typeof show === "function" ? show(location) : show)
  }, rest)), children);
}

Login.propTypes = {
  children: _propTypes["default"].node,
  Component: _propTypes["default"].node,
  show: _propTypes["default"].any
};