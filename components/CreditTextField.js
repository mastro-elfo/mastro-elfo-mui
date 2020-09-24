"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _CreditCard = _interopRequireDefault(require("@material-ui/icons/CreditCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _default(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? "" : _ref$value,
      _ref$validate = _ref.validate,
      validate = _ref$validate === void 0 ? function () {
    return {};
  } : _ref$validate,
      others = _objectWithoutProperties(_ref, ["value", "validate"]);

  // Remove non digit characters from value
  var innerValue = value.replace(/[^\d]/g, ""); // Split innerValue into 4-length pieces

  var pieces = (innerValue.match(/.{0,4}/g) || []).filter(function (i) {
    return !!i;
  });
  return /*#__PURE__*/_react["default"].createElement(_core.TextField, _extends({
    value: pieces.join(" "),
    InputProps: {
      startAdornment: /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_CreditCard["default"], null))
    }
  }, validate(innerValue), others));
}