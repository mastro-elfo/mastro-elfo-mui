"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var _useHistory = (0, _reactRouterDom.useHistory)(),
      goBack = _useHistory.goBack;

  return /*#__PURE__*/_react["default"].createElement(_core.IconButton, _extends({
    onClick: goBack,
    color: "inherit"
  }, props), /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null));
}