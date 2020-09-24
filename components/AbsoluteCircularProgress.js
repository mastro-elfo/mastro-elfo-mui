"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _absolute = _interopRequireDefault(require("../styles/absolute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * A `CircularProgress` styled with `absolute`.
 */
var _default = (0, _absolute["default"])(_CircularProgress["default"]);

exports["default"] = _default;