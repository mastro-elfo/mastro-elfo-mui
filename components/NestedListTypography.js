"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NestedListTypography;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Use Typography to create nested lists.
 *
 * Example
 *
 * ```jsx
 * <NestedListTypography>{["Item 1", ["Sublist Item 1", "Sublist Item 2"], "Item 2"]}</NestedListTypography>
 *
 * * Item 1
 *  - Sublist item 1
 *  - Sublist Item 2
 * * Item 2
 * ```
 * @param       {Array} children   Array of strings or nested array
 * @param       {Object} [ulProps={ component: "ul" }] Properties for Typography component for lists
 * @param       {Object} [liProps={ component: "li" }] Properties for Typography component for list items
 * @constructor
 */
function NestedListTypography(_ref) {
  var children = _ref.children,
      _ref$ulProps = _ref.ulProps,
      ulProps = _ref$ulProps === void 0 ? {
    component: "ul"
  } : _ref$ulProps,
      _ref$liProps = _ref.liProps,
      liProps = _ref$liProps === void 0 ? {
    component: "li"
  } : _ref$liProps;

  if (_typeof(children) === "object") {
    // Assumes array
    return /*#__PURE__*/_react["default"].createElement(_core.Typography, ulProps, children.map(function (child, i) {
      return /*#__PURE__*/_react["default"].createElement(NestedListTypography, {
        key: i
      }, child);
    }));
  } else if (children !== null && children !== undefined) {
    return /*#__PURE__*/_react["default"].createElement(_core.Typography, liProps, children);
  }

  return null;
}

NestedListTypography.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  liProps: _propTypes["default"].object,
  ulProps: _propTypes["default"].object
};