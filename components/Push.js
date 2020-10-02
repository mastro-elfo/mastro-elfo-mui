"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Push;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Renders `Component` with `onClick` prop that calls pushes or replaces history with `href`.
 *
 * @param       {node}  children        [description]
 * @param       {string}  href            location to push
 * @param       {Boolean} [replace=false] If `true` uses `replace` instead of `push`
 * @param       {node}  Component       Component rendered
 * @param       {any}  rest            Passed to Component
 * @constructor
 */
function Push(_ref) {
  var children = _ref.children,
      href = _ref.href,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      Component = _ref.Component,
      rest = _objectWithoutProperties(_ref, ["children", "href", "replace", "Component"]);

  var _useHistory = (0, _reactRouterDom.useHistory)(),
      push = _useHistory.push,
      repl = _useHistory.replace;

  return /*#__PURE__*/_react["default"].createElement(Component, _extends({
    onClick: function onClick() {
      return replace ? repl(href) : push(href);
    }
  }, rest), children);
}

Push.propTypes = {
  children: _propTypes["default"].node,
  href: _propTypes["default"].string,
  replace: _propTypes["default"].bool,
  Component: _propTypes["default"].elementType
};