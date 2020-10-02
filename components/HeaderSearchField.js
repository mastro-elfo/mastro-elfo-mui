"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _SearchField = _interopRequireDefault(require("./SearchField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    AppBarSearch: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0, _styles.fade)(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: (0, _styles.fade)(theme.palette.common.white, 0.25)
      }
    },
    AppBarInput: {
      color: "inherit"
    }
  };
});
/**
 * A `SearchField` styled to stay inside `Header`.
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */

function _default(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_SearchField["default"], _extends({
    variant: "standard",
    InputProps: _objectSpread({
      classes: {
        root: (0, _classnames["default"])(_defineProperty({}, classes.AppBarInput, appBar))
      }
    }, appBar && {
      disableUnderline: true
    })
  }, props));
}