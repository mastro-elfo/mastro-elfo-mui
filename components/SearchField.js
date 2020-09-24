"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SearchField;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _notistack = require("notistack");

var _core = require("@material-ui/core");

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

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

function SearchField(_ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 250 : _ref$delay,
      _ref$onClear = _ref.onClear,
      onClear = _ref$onClear === void 0 ? function () {} : _ref$onClear,
      _ref$onSearch = _ref.onSearch,
      onSearch = _ref$onSearch === void 0 ? function () {
    return Promise.reject(new Error("No search function provided"));
  } : _ref$onSearch,
      _ref$SearchButtonProp = _ref.SearchButtonProps,
      SearchButtonProps = _ref$SearchButtonProp === void 0 ? {} : _ref$SearchButtonProp,
      _ref$ClearButtonProps = _ref.ClearButtonProps,
      ClearButtonProps = _ref$ClearButtonProps === void 0 ? {} : _ref$ClearButtonProps,
      others = _objectWithoutProperties(_ref, ["delay", "onClear", "onSearch", "SearchButtonProps", "ClearButtonProps"]);

  // Query string
  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1]; // Searching status


  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      searching = _useState4[0],
      setSearching = _useState4[1];

  var _useSnackbar = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar; // Handle search from any event (click, enter, keypress)


  var handleSearch = function handleSearch() {
    // Cancel if there's a debounce pending
    debounced.cancel(); // Set searching true

    setSearching(true); // Callback

    onSearch(query, (0, _lodash.deburr)(query))["catch"](function (err) {
      console.error(err);
      enqueueSnackbar(err.message, {
        variant: "error"
      });
    }) // In any case reset searching
    .then(function () {
      return setSearching(false);
    });
  }; // Define a debounced function to handle keypress searches


  var debounced = (0, _lodash.debounce)(handleSearch, delay); // Debounce search when query changes

  (0, _react.useEffect)(function () {
    if (query) {
      // Search only if there's a query string
      debounced();
      return function () {
        return debounced.cancel();
      };
    } // eslint-disable-next-line

  }, [query]); // Handle clear click events

  var handleClear = function handleClear() {
    // Cancel if there's a debounce pending
    debounced.cancel(); // Reset query

    setQuery(""); // Callback

    onClear();
  }; // Hanle keypress events


  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === "Enter") {
      // Fire immediate search if "Enter" is pressed
      handleSearch();
    }
  }; // Handle change events


  var handleChange = function handleChange(_ref2) {
    var value = _ref2.target.value;
    setQuery(value);
  };

  return /*#__PURE__*/_react["default"].createElement(_core.TextField, _extends({
    type: "text",
    value: query,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    InputProps: {
      startAdornment: /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, _extends({
        title: "Search",
        onClick: handleSearch,
        disabled: searching
      }, SearchButtonProps), /*#__PURE__*/_react["default"].createElement(_Search["default"], null))),
      endAdornment: /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
        position: "end"
      }, !!query && /*#__PURE__*/_react["default"].createElement(_core.IconButton, _extends({
        title: "Clear",
        onClick: handleClear,
        color: "inherit"
      }, ClearButtonProps), /*#__PURE__*/_react["default"].createElement(_Clear["default"], null)))
    }
  }, others));
}

SearchField.propTypes = {
  delay: _propTypes["default"].number,
  onClear: _propTypes["default"].func,
  onSearch: _propTypes["default"].func,
  SearchButtonProps: _propTypes["default"].object,
  ClearButtonProps: _propTypes["default"].object
};