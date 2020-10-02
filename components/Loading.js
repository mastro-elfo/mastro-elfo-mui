"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loading;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Renders `children` after `delay` milliseconds when `show` goes `true`.
 *
 * Example:
 * ```jsx
 *  <Button onClick={handler} disabled={loading}>
 *    Send
 *    <Loading show={loading}>
 *      <AbsoluteCircularProgress/>
 *    </Loading>
 *  </Button>
 * ```
 *
 * `handler` sets `loading` to `true` and sends a message to a server. If the operation takes more than `delay` an `AbsoluteCircularProgress` is displayed.
 * When operation is complete `handler` sets `loading` to `false` to hide the component.
 *
 * @param       {[type]}  children     [description]
 * @param       {Number}  [delay=1000] [description]
 * @param       {Boolean} [show=false] [description]
 * @param       {[type]}  others       [description]
 * @constructor
 */
function Loading(_ref) {
  var children = _ref.children,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 1000 : _ref$delay,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      others = _objectWithoutProperties(_ref, ["children", "delay", "show"]);

  // Display CircularProgress if innerLoading is true
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      innerLoading = _useState2[0],
      setInnerLoading = _useState2[1];

  (0, _react.useEffect)(function () {
    // Delay setting innerLoading
    if (show) {
      var to = setTimeout(setInnerLoading, delay, true);
      return function () {
        return clearTimeout(to);
      };
    } else setInnerLoading(false);
  }, [delay, show]);
  return innerLoading ? children : null;
}

Loading.propTypes = {
  delay: _propTypes["default"].number,
  show: _propTypes["default"].bool
};