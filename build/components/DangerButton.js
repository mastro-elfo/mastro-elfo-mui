"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

/**
 * Use `error` palette to create a "danger" button
 */
// https://material-ui.com/styles/api/#styled-component-styles-options-component
var _default = (0, _styles.styled)(_core.Button)(function (_ref) {
  var _ref$theme$palette$er = _ref.theme.palette.error,
      contrastText = _ref$theme$palette$er.contrastText,
      main = _ref$theme$palette$er.main,
      dark = _ref$theme$palette$er.dark;
  return {
    color: contrastText,
    backgroundColor: main,
    "&:hover": {
      backgroundColor: dark
    }
  };
});

exports["default"] = _default;