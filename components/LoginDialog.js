"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoginDialog;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _notistack = require("notistack");

var _core = require("@material-ui/core");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LoginDialog(_ref) {
  var _ref$login = _ref.login,
      login = _ref$login === void 0 ? function () {
    return Promise.reject(new Error("No login function provided"));
  } : _ref$login,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? [] : _ref$actions,
      _ref$BoxProps = _ref.BoxProps,
      BoxProps = _ref$BoxProps === void 0 ? {} : _ref$BoxProps,
      _ref$ButtonLabel = _ref.ButtonLabel,
      ButtonLabel = _ref$ButtonLabel === void 0 ? "Login" : _ref$ButtonLabel,
      _ref$ButtonProps = _ref.ButtonProps,
      ButtonProps = _ref$ButtonProps === void 0 ? {} : _ref$ButtonProps,
      _ref$PasswordProps = _ref.PasswordProps,
      PasswordProps = _ref$PasswordProps === void 0 ? {} : _ref$PasswordProps,
      _ref$UsernameProps = _ref.UsernameProps,
      UsernameProps = _ref$UsernameProps === void 0 ? {} : _ref$UsernameProps,
      others = _objectWithoutProperties(_ref, ["login", "title", "actions", "BoxProps", "ButtonLabel", "ButtonProps", "PasswordProps", "UsernameProps"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      username = _useState4[0],
      setUsername = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useSnackbar = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var handleLogin = function handleLogin() {
    setLoading(true);
    login(username, password)["catch"](function (err) {
      console.error(err);
      enqueueSnackbar(err.message, {
        variant: "error"
      });
    }).then(function () {
      setLoading(false);
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_core.Dialog, others, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, title), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_core.Box, BoxProps, /*#__PURE__*/_react["default"].createElement(_core.TextField, _extends({
    fullWidth: true,
    label: "Username",
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setUsername(value);
    }
  }, UsernameProps))), /*#__PURE__*/_react["default"].createElement(_core.Box, BoxProps, /*#__PURE__*/_react["default"].createElement(_.PasswordField, _extends({
    fullWidth: true,
    label: "Password",
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      return setPassword(value);
    }
  }, PasswordProps)))), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, actions, /*#__PURE__*/_react["default"].createElement(_core.Button, _extends({
    disabled: loading,
    onClick: handleLogin
  }, ButtonProps), ButtonLabel, /*#__PURE__*/_react["default"].createElement(_.Loading, {
    loading: loading
  }))));
}

LoginDialog.propTypes = {
  login: _propTypes["default"].func,
  title: _propTypes["default"].string,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].node),
  BoxProps: _propTypes["default"].object,
  ButtonProps: _propTypes["default"].object,
  PasswordProps: _propTypes["default"].object,
  UsernameProps: _propTypes["default"].object
};