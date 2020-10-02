"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

/**
 * Applies `position: "absolute"` to `Component`
 * @param  {elementType} Component Input component
 * @return {elementType}           Absolute component
 */
var _default = function _default(Component) {
  return (0, _styles.styled)(Component)({
    position: "absolute"
  });
};

exports["default"] = _default;