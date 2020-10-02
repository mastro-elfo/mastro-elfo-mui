"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _grow = _interopRequireDefault(require("../styles/grow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Style a Typography with `flexGrow: 1`.
 */
var _default = (0, _grow["default"])(_Typography["default"]);

exports["default"] = _default;