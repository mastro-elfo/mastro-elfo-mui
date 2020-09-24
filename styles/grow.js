"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

/**
 *
 */
// https://material-ui.com/styles/api/#styled-component-styles-options-component
var _default = function _default(Component) {
  return (0, _styles.styled)(Component)({
    flexGrow: 1
  });
};

exports["default"] = _default;