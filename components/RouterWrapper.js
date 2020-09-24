"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _default(_ref) {
  var _ref$Router = _ref.Router,
      Router = _ref$Router === void 0 ? _reactRouterDom.MemoryRouter : _ref$Router,
      _ref$routes = _ref.routes,
      routes = _ref$routes === void 0 ? [] : _ref$routes,
      _ref$redirect = _ref.redirect,
      redirect = _ref$redirect === void 0 ? null : _ref$redirect,
      _ref$WrapperProps = _ref.WrapperProps,
      WrapperProps = _ref$WrapperProps === void 0 ? {} : _ref$WrapperProps,
      others = _objectWithoutProperties(_ref, ["Router", "routes", "redirect", "WrapperProps"]);

  return /*#__PURE__*/_react["default"].createElement(Router, others, /*#__PURE__*/_react["default"].createElement(_.Wrapper, WrapperProps, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, routes.map(function (route, i) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, _extends({
      key: i
    }, route));
  }), !!redirect && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
    to: redirect
  }))));
}