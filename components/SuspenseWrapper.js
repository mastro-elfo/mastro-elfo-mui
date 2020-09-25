"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fallback = Fallback;
exports["default"] = SuspenseWrapper;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core/");

var _core2 = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Fallback(_ref) {
  var logo = _ref.logo,
      _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? false : _ref$progress,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title;
  var theme = (0, _core.useTheme)();
  console.log(_typeof(logo));
  return /*#__PURE__*/_react["default"].createElement(_core2.Box, {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "calc(100% - ".concat(theme.spacing(8), "px)"),
    maxWidth: theme.breakpoints.values.sm / 2,
    style: {
      transform: "translate(-50%, -50%)"
    }
  }, !!logo && /*#__PURE__*/_react["default"].createElement(_core2.Box, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: logo,
    alt: "Logo",
    width: "100%"
  })), !!title && /*#__PURE__*/_react["default"].createElement(_core2.Box, {
    textAlign: "center"
  }, title), progress !== false && /*#__PURE__*/_react["default"].createElement(_core2.Box, null, progress === true ? /*#__PURE__*/_react["default"].createElement(_core2.LinearProgress, null) : /*#__PURE__*/_react["default"].createElement(_core2.LinearProgress, {
    variant: "determinate",
    value: progress
  })));
}

Fallback.propTypes = {
  logo: _propTypes["default"].string,
  progress: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
  title: _propTypes["default"].string
};

function SuspenseWrapper(_ref2) {
  var children = _ref2.children,
      _ref2$Fallback = _ref2.Fallback,
      FallbackComponent = _ref2$Fallback === void 0 ? Fallback : _ref2$Fallback,
      rest = _objectWithoutProperties(_ref2, ["children", "Fallback"]);

  return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(FallbackComponent, rest)
  }, children);
}

SuspenseWrapper.propTypes = {
  children: _propTypes["default"].node,
  Fallback: _propTypes["default"].node
};