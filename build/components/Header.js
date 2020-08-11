"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _GrowTypography = _interopRequireDefault(require("./GrowTypography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Create an AppBar/Toolbar header.
 *
 * Children are rendered inside a flexGrow Typography
 */
function Header(_ref) {
  var children = _ref.children,
      _ref$LeftAction = _ref.LeftAction,
      LeftAction = _ref$LeftAction === void 0 ? null : _ref$LeftAction,
      _ref$RightActions = _ref.RightActions,
      RightActions = _ref$RightActions === void 0 ? [] : _ref$RightActions,
      _ref$TitleProps = _ref.TitleProps,
      TitleProps = _ref$TitleProps === void 0 ? {} : _ref$TitleProps;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.AppBar, null, /*#__PURE__*/_react["default"].createElement(_core.Toolbar, null, LeftAction, /*#__PURE__*/_react["default"].createElement(_GrowTypography["default"], _extends({
    variant: "h6",
    color: "inherit"
  }, TitleProps), children), RightActions)), /*#__PURE__*/_react["default"].createElement(_core.Toolbar, null));
}