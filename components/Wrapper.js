"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Wrapper;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Wrapper(_ref) {
  var children = _ref.children,
      _ref$Children = _ref.Children,
      Children = _ref$Children === void 0 ? [] : _ref$Children;

  // Take the first child
  var _Children = _toArray(Children),
      Child = _Children[0],
      rest = _Children.slice(1);

  if (Child) {
    // Split Child between Component and all the rest
    var Component = Child.Component,
        props = _objectWithoutProperties(Child, ["Component"]); // Render Component and Wrap the rest


    return /*#__PURE__*/_react["default"].createElement(Component, props, /*#__PURE__*/_react["default"].createElement(Wrapper, {
      Children: rest
    }, children));
  } else {
    // No child left, just render children
    return children;
  }
}

Wrapper.propTypes = {
  children: _propTypes["default"].node,
  Children: _propTypes["default"].arrayOf(_propTypes["default"].objectOf(function (propValue, key) {
    if (!Object.keys(propValue).includes("Component") // TODO: Check if propValue.Component is something that can be rendered
    ) {
        return new Error("Component property is required");
      }
  }))
};