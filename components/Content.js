"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Content;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Puts a `Box` inside a `Container`.
 * @param       {[type]} children            [description]
 * @param       {Object} [ContainerProps={}] [description]
 * @param       {Object} [BoxProps={}}]      [description]
 * @constructor
 */
function Content(_ref) {
  var children = _ref.children,
      _ref$ContainerProps = _ref.ContainerProps,
      ContainerProps = _ref$ContainerProps === void 0 ? {} : _ref$ContainerProps,
      _ref$BoxProps = _ref.BoxProps,
      BoxProps = _ref$BoxProps === void 0 ? {} : _ref$BoxProps;
  return /*#__PURE__*/_react["default"].createElement(_core.Container, ContainerProps, /*#__PURE__*/_react["default"].createElement(_core.Box, _extends({
    pt: 1
  }, BoxProps), children));
}