"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Print = Print;
exports.NoPrint = NoPrint;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)({
  print: {
    "@media screen": {
      display: "none"
    }
  },
  noPrint: {
    "@media print": {
      display: "none"
    }
  }
});

function Print(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.print
  }, children);
}

function NoPrint(_ref2) {
  var children = _ref2.children;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.noPrint
  }, children);
}