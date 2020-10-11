"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Organizes a List with optional SubHeader
 *
 * If `results` is `null` or `undefined`, then prints nothing.
 *
 * Otherwise `results` must be an array, for each item `mapper` is called and must provide at least a unique `key`.
 *
 * Also `LeftIcon` and `RightIcon` are used inside a `ListItemIcon`, and `primary` and `secondary` are used with `ListItemText`.
 *
 * Anything else is passed to `ListItem`. By default `onClick` sets `button` to `true`.
 * @param  {[type]} subheader [description]
 * @param  {[type]} [mapper=r => r] [description]
 * @param  {[type]} results   [description]
 * @param  {[type]} others    [description]
 * @return {[type]}           [description]
 */
function _default(_ref) {
  var subheader = _ref.subheader,
      _ref$mapper = _ref.mapper,
      mapper = _ref$mapper === void 0 ? function (r) {
    return r;
  } : _ref$mapper,
      results = _ref.results,
      others = _objectWithoutProperties(_ref, ["subheader", "mapper", "results"]);

  return /*#__PURE__*/_react["default"].createElement(_.Condition, {
    show: results !== null && results !== undefined
  }, /*#__PURE__*/_react["default"].createElement(_core.List, _extends({
    subheader: !!subheader && /*#__PURE__*/_react["default"].createElement(_core.ListSubheader, null, subheader)
  }, others), results && results.map(function (r) {
    var _mapper = mapper(r),
        LeftIcon = _mapper.LeftIcon,
        RightIcon = _mapper.RightIcon,
        primary = _mapper.primary,
        secondary = _mapper.secondary,
        onClick = _mapper.onClick,
        others = _objectWithoutProperties(_mapper, ["LeftIcon", "RightIcon", "primary", "secondary", "onClick"]);

    return /*#__PURE__*/_react["default"].createElement(_core.ListItem, _extends({
      button: !!onClick,
      onClick: onClick
    }, others), !!LeftIcon && /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, LeftIcon), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
      primary: primary,
      secondary: secondary
    }), !!RightIcon && /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, RightIcon));
  })));
}