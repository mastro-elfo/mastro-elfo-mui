"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Condition;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Development
 *
 * Renders `children` if `show` is `true`.
 *
 * `alt` defaults to `null` and is rendered when `show` is `false`.
 * If `show` is a function, it is evaluated and its return value is used as condition.
 */
function Condition(_ref) {
  var _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? null : _ref$alt,
      children = _ref.children,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show;
  var condition = !!(typeof show === "function" ? show() : show);
  return condition ? children : alt;
}

Condition.propTypes = {
  alt: _propTypes["default"].node,
  children: _propTypes["default"].node,
  show: _propTypes["default"].any
};