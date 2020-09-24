"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DrawerLists;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *
 */
function DrawerLists(_ref) {
  var _ref$lists = _ref.lists,
      lists = _ref$lists === void 0 ? [] : _ref$lists;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, lists.map(function (_ref2) {
    var _ref2$avatar = _ref2.avatar,
        avatar = _ref2$avatar === void 0 ? false : _ref2$avatar,
        _ref2$header = _ref2.header,
        header = _ref2$header === void 0 ? "" : _ref2$header,
        _ref2$items = _ref2.items,
        items = _ref2$items === void 0 ? [] : _ref2$items,
        key = _ref2.key,
        _ref2$leftFill = _ref2.leftFill,
        leftFill = _ref2$leftFill === void 0 ? false : _ref2$leftFill,
        _ref2$rightFill = _ref2.rightFill,
        rightFill = _ref2$rightFill === void 0 ? false : _ref2$rightFill;
    return /*#__PURE__*/_react["default"].createElement(_core.List, {
      key: key,
      subheader: /*#__PURE__*/_react["default"].createElement(_core.ListSubheader, null, header)
    }, items.map(function (_ref3) {
      var _ref3$action = _ref3.action,
          action = _ref3$action === void 0 ? null : _ref3$action,
          _ref3$icon = _ref3.icon,
          icon = _ref3$icon === void 0 ? null : _ref3$icon,
          key = _ref3.key,
          _ref3$onClick = _ref3.onClick,
          onClick = _ref3$onClick === void 0 ? false : _ref3$onClick,
          _ref3$primary = _ref3.primary,
          primary = _ref3$primary === void 0 ? "" : _ref3$primary,
          _ref3$secondary = _ref3.secondary,
          secondary = _ref3$secondary === void 0 ? "" : _ref3$secondary;
      return /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
        key: key,
        button: Boolean(onClick),
        onClick: Boolean(onClick) ? onClick : function () {}
      }, (!!icon || leftFill) && (avatar ? /*#__PURE__*/_react["default"].createElement(_core.ListItemAvatar, null, icon || /*#__PURE__*/_react["default"].createElement("span", null)) : /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, icon || /*#__PURE__*/_react["default"].createElement("span", null))), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
        primary: primary,
        secondary: secondary
      }), (!!action || rightFill) && /*#__PURE__*/_react["default"].createElement(_core.ListItemSecondaryAction, null, action || /*#__PURE__*/_react["default"].createElement("span", null)));
    }));
  }));
}

DrawerLists.propTypes = {
  lists: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    key: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
    avatar: _propTypes["default"].bool,
    header: _propTypes["default"].string,
    items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      key: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
      action: _propTypes["default"].node,
      icon: _propTypes["default"].node,
      onClick: _propTypes["default"].func,
      primary: _propTypes["default"].string,
      secondary: _propTypes["default"].string
    })),
    leftFill: _propTypes["default"].bool,
    rightFill: _propTypes["default"].bool
  }))
};