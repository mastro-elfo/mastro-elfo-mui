"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Style a Typography with `flexGrow: 1`.
 *
 * Useful in AppBar/Toolbar
 */
var _default = (0, _styles.styled)(_Typography["default"])({
  flexGrow: 1
});

exports["default"] = _default;