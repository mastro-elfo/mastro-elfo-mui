"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Markdown;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _reactRouterDom = require("react-router-dom");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderers = {
  emphasis: function emphasis(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      component: "em",
      variant: "inherit"
    }, children);
  },
  heading: function heading(_ref2) {
    var children = _ref2.children,
        level = _ref2.level;
    return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h".concat([3, 3, 4, 5, 6, 6, 6][level])
    }, children);
  },
  link: function link(_ref3) {
    var children = _ref3.children,
        href = _ref3.href,
        title = _ref3.title;
    return href.match(/^(https?)\/\//) ? /*#__PURE__*/_react["default"].createElement("a", {
      href: href,
      title: title,
      target: "_blank",
      rel: "noopener noreferrer"
    }, children) : /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: href,
      title: title
    }, children);
  },
  list: function list(_ref4) {
    var children = _ref4.children,
        ordered = _ref4.ordered;
    return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      component: ordered ? "ol" : "ul",
      gutterBottom: true
    }, children);
  },
  listItem: function listItem(_ref5) {
    var children = _ref5.children;
    return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      component: "li",
      variant: "body2"
    }, children);
  },
  paragraph: function paragraph(_ref6) {
    var children = _ref6.children;
    return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      gutterBottom: true
    }, children);
  },
  strong: function strong(_ref7) {
    var children = _ref7.children,
        others = _objectWithoutProperties(_ref7, ["children"]);

    return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      component: "strong",
      variant: "inherit"
    }, children);
  }
};
/**
 * `<Markdown source={"# Markdown"}/>`
 * @constructor
 */

function Markdown(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], _extends({}, props, {
    renderers: renderers
  }));
}