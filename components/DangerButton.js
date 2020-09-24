"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var _danger = _interopRequireDefault(require("../styles/danger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * A `Button` with `danger` style.
 */
var _default = (0, _danger["default"])(_core.Button);

exports["default"] = _default;