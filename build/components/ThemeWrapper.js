"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ThemeWrapper;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _pink = _interopRequireDefault(require("@material-ui/core/colors/pink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Customize main theme
// See https://material-ui.com/customization/color/#color for details
// See https://material-ui.com/customization/theming/#createmuitheme-options-args-theme for details
var THEME = (0, _styles.createMuiTheme)({
  palette: {
    primary: _blue["default"],
    secondary: _pink["default"]
  }
});

function ThemeWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider, {
    theme: THEME
  }, children);
}