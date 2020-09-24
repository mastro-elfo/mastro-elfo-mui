"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopFab;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    Fab: {
      position: "fixed",
      bottom: theme.spacing(1),
      right: theme.spacing(1),
      zIndex: theme.zIndex.modal
    }
  };
});

function TopFab(_ref) {
  var _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 100 : _ref$threshold,
      others = _objectWithoutProperties(_ref, ["threshold"]);

  var classes = useStyles();
  var trigger = (0, _core.useScrollTrigger)({
    disableHysteresis: true,
    threshold: threshold
  });

  var handleClick = function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_core.Zoom, {
    "in": trigger
  }, /*#__PURE__*/_react["default"].createElement(_core.Fab, _extends({
    onClick: handleClick,
    className: classes.Fab
  }, others), /*#__PURE__*/_react["default"].createElement(_KeyboardArrowUp["default"], null)));
}

TopFab.propTypes = {
  // Minimum scroll before show the button
  threshold: _propTypes["default"].number
};