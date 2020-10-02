"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Conditional;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Conditionally renders `Component` or `Alt`
 * @param       {node} Component [description]
 * @param       {node} [Alt=()=>null]   [description]
 * @constructor
 */
function Conditional(_ref) {
  var Component = _ref.Component,
      _ref$Alt = _ref.Alt,
      Alt = _ref$Alt === void 0 ? function () {
    return null;
  } : _ref$Alt,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      others = _objectWithoutProperties(_ref, ["Component", "Alt", "show"]);

  return Boolean(typeof show === "function" ? show() : show) ? /*#__PURE__*/_react["default"].createElement(Component, others) : /*#__PURE__*/_react["default"].createElement(Alt, null);
}

Conditional.propTypes = {
  Component: _propTypes["default"].elementType.isRequired,
  Alt: _propTypes["default"].elementType,
  show: _propTypes["default"].any
};