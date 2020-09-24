"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

/**
 * Use `error` palette to create a "danger" component
 */
// https://material-ui.com/styles/api/#styled-component-styles-options-component
var _default = function _default(Component) {
  return (0, _styles.styled)(Component)(function (_ref) {
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
};

exports["default"] = _default;