"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ConfirmDialog;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Complex dialog box that asks to confirm some action.
 * @param       {String} [title=""]    [description]
 * @param       {String} [content=""]  [description]
 * @param       {String} [confirm=""]  [description]
 * @param       {String} [cancel=""]   [description]
 * @param       {[type]} [onConfirm=(] [description]
 * @constructor
 */
function ConfirmDialog(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? "" : _ref$content,
      _ref$confirm = _ref.confirm,
      confirm = _ref$confirm === void 0 ? "" : _ref$confirm,
      _ref$cancel = _ref.cancel,
      cancel = _ref$cancel === void 0 ? "" : _ref$cancel,
      _ref$onConfirm = _ref.onConfirm,
      onConfirm = _ref$onConfirm === void 0 ? function () {} : _ref$onConfirm,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$ConfirmButtonPro = _ref.ConfirmButtonProps,
      ConfirmButtonProps = _ref$ConfirmButtonPro === void 0 ? {} : _ref$ConfirmButtonPro,
      _ref$CancelButtonProp = _ref.CancelButtonProps,
      CancelButtonProps = _ref$CancelButtonProp === void 0 ? {} : _ref$CancelButtonProp,
      other = _objectWithoutProperties(_ref, ["title", "content", "confirm", "cancel", "onConfirm", "onCancel", "ConfirmButtonProps", "CancelButtonProps"]);

  return /*#__PURE__*/_react["default"].createElement(_core.Dialog, other, /*#__PURE__*/_react["default"].createElement(_.Condition, {
    show: title
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, title)), /*#__PURE__*/_react["default"].createElement(_.Condition, {
    show: content
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, _typeof(content) === "object" && content.map ? content.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_core.DialogContentText, {
      key: i
    }, item);
  }) : /*#__PURE__*/_react["default"].createElement(_core.DialogContentText, null, content))), /*#__PURE__*/_react["default"].createElement(_.Condition, {
    show: !!confirm || !!cancel
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_.Condition, {
    show: confirm
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, _extends({
    color: "primary",
    variant: "contained",
    title: "Confirm",
    onClick: onConfirm
  }, ConfirmButtonProps), confirm)), /*#__PURE__*/_react["default"].createElement(_.Condition, {
    show: cancel
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, _extends({
    color: "secondary",
    title: "Cancel",
    onClick: onCancel
  }, CancelButtonProps), cancel)))));
}

ConfirmDialog.propTypes = {
  title: _propTypes["default"].node,
  content: _propTypes["default"].node,
  confirm: _propTypes["default"].node,
  cancel: _propTypes["default"].node,
  onConfirm: _propTypes["default"].func,
  onCancel: _propTypes["default"].func,
  ConfirmButtonProps: _propTypes["default"].object,
  CancelButtonProps: _propTypes["default"].object
};