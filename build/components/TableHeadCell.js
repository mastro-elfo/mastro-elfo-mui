"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _styles.withStyles)(function (theme) {
  return {
    head: {
      backgroundColor: "".concat(theme.palette.primary.main, " !important"),
      color: "".concat(theme.palette.primary.contrastText, " !important"),
      textAlign: "center",
      fontWeight: "bold",
      "-webkit-print-color-adjust": "exact"
    }
  };
})(_TableCell["default"]);

exports["default"] = _default;