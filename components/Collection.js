"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Collection;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _notistack = require("notistack");

var _core = require("@material-ui/core");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _Save = _interopRequireDefault(require("@material-ui/icons/Save"));

var _ = require("./");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * [Collection description]
 * @param       {[type]} cid        [description]
 * @param       {function} [search=()=>{}] [description]
 * @constructor
 */
function Collection(_ref) {
  var cid = _ref.cid,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? function () {
    return Promise.reject(new Error("No search function provided"));
  } : _ref$search,
      _ref$load = _ref.load,
      load = _ref$load === void 0 ? function () {
    return Promise.reject(new Error("No load function provided"));
  } : _ref$load,
      _ref$save = _ref.save,
      save = _ref$save === void 0 ? function () {
    return Promise.reject(new Error("No save function provided"));
  } : _ref$save,
      _ref$CollectionProps = _ref.CollectionProps,
      CollectionProps = _ref$CollectionProps === void 0 ? {
    title: "Collection",
    mapper: function mapper(r) {
      return r;
    },
    SearchFieldProps: {},
    ResultListProps: {
      subheader: null,
      mapper: function mapper(r) {
        return r;
      }
    }
  } : _ref$CollectionProps,
      _ref$ViewProps = _ref.ViewProps,
      ViewProps = _ref$ViewProps === void 0 ? {
    title: "View Item",
    render: function render() {}
  } : _ref$ViewProps,
      _ref$NewProps = _ref.NewProps,
      NewProps = _ref$NewProps === void 0 ? {
    title: "New Item",
    render: function render() {},
    data: {}
  } : _ref$NewProps,
      _ref$EditProps = _ref.EditProps,
      EditProps = _ref$EditProps === void 0 ? {
    title: "Edit Item",
    render: function render() {}
  } : _ref$EditProps;
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/".concat(cid, "/v/:id")
  }, /*#__PURE__*/_react["default"].createElement(ViewItem, _extends({
    cid: cid,
    load: load
  }, ViewProps))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/".concat(cid, "/e/:id")
  }, /*#__PURE__*/_react["default"].createElement(EditItem, _extends({
    cid: cid,
    load: load,
    save: save
  }, EditProps))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/".concat(cid, "/n")
  }, /*#__PURE__*/_react["default"].createElement(NewItem, _extends({
    cid: cid,
    save: save
  }, NewProps))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/".concat(cid)
  }, /*#__PURE__*/_react["default"].createElement(CollectionPage, _extends({
    cid: cid,
    search: search
  }, CollectionProps))));
}

Collection.propTypes = {
  cid: _propTypes["default"].string.isRequired,
  // functions
  search: _propTypes["default"].func,
  load: _propTypes["default"].func,
  save: _propTypes["default"].func
};

function CollectionPage(_ref2) {
  var cid = _ref2.cid,
      _ref2$search = _ref2.search,
      search = _ref2$search === void 0 ? Promise.reject(new Error("No search function provided to CollectionPage")) : _ref2$search,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? "Collection" : _ref2$title,
      _ref2$mapper = _ref2.mapper,
      _mapper = _ref2$mapper === void 0 ? function (r) {
    return r;
  } : _ref2$mapper,
      _ref2$SearchFieldProp = _ref2.SearchFieldProps,
      SearchFieldProps = _ref2$SearchFieldProp === void 0 ? {} : _ref2$SearchFieldProp,
      _ref2$ResultListProps = _ref2.ResultListProps,
      ResultListProps = _ref2$ResultListProps === void 0 ? {
    mapper: function mapper(r) {
      return r;
    },
    subheader: null
  } : _ref2$ResultListProps;

  var _useHistory = (0, _reactRouterDom.useHistory)(),
      push = _useHistory.push;

  var _useSnackbar = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      results = _useState2[0],
      setResults = _useState2[1];

  var handleSearch = function handleSearch(q, d) {
    return search(q, d).then(function (r) {
      return setResults(r);
    })["catch"](function (err) {
      console.error(err);
      enqueueSnackbar(err.message, {
        variant: "error"
      });
    });
  };

  var handleClear = function handleClear() {
    setResults(null);
  };

  return /*#__PURE__*/_react["default"].createElement(_.Page, {
    header: /*#__PURE__*/_react["default"].createElement(_.Header, {
      LeftAction: /*#__PURE__*/_react["default"].createElement(_.BackIconButton, null),
      RightActions: [/*#__PURE__*/_react["default"].createElement(_core.IconButton, {
        key: "new",
        color: "inherit",
        onClick: function onClick() {
          return push("/".concat(cid, "/n"));
        }
      }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))]
    }, title),
    content: /*#__PURE__*/_react["default"].createElement(_.Content, null, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      container: true,
      item: true,
      justify: "center"
    }, /*#__PURE__*/_react["default"].createElement(_.SearchField, _extends({
      label: "Search",
      onSearch: handleSearch,
      onClear: handleClear
    }, SearchFieldProps))), " ", /*#__PURE__*/_react["default"].createElement(_.ResultList, _extends({
      results: results,
      mapper: function mapper(a) {
        // TODO: // DEPRECATED: Remove in version 2.0
        console.warn("`mapper` is deprecated, use `ResultListProps.mapper` instead. Will be removed in version 2.0");
        return _mapper(a);
      }
    }, ResultListProps, {
      subheader: (0, _utils.evaluate)(ResultListProps.subheader, results)
    })))
  });
}

function ViewItem(_ref3) {
  var _ref3$load = _ref3.load,
      load = _ref3$load === void 0 ? Promise.reject(new Error("No load function provided to ViewItem")) : _ref3$load,
      others = _objectWithoutProperties(_ref3, ["load"]);

  var _useParams = (0, _reactRouterDom.useParams)(),
      id = _useParams.id;

  var _useSnackbar2 = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar2.enqueueSnackbar;

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  (0, _react.useEffect)(function () {
    load(id).then(function (r) {
      return setData(r);
    })["catch"](function (err) {
      console.error(err);
      enqueueSnackbar(err.message, {
        variant: "error"
      });
    }); // eslint-disable-next-line
  }, [id]);
  return /*#__PURE__*/_react["default"].createElement(_.Conditional, _extends({
    show: data,
    Component: ViewPage,
    Alt: LoadingPage,
    data: data
  }, others));
}

function ViewPage(_ref4) {
  var cid = _ref4.cid,
      _ref4$title = _ref4.title,
      title = _ref4$title === void 0 ? "View Item" : _ref4$title,
      _ref4$render = _ref4.render,
      render = _ref4$render === void 0 ? function () {} : _ref4$render,
      data = _ref4.data;

  var _useHistory2 = (0, _reactRouterDom.useHistory)(),
      push = _useHistory2.push;

  var id = data.id;
  return /*#__PURE__*/_react["default"].createElement(_.Page, {
    header: /*#__PURE__*/_react["default"].createElement(_.Header, {
      LeftAction: /*#__PURE__*/_react["default"].createElement(_.BackIconButton, null),
      RightActions: [/*#__PURE__*/_react["default"].createElement(_core.IconButton, {
        key: "edit",
        color: "inherit",
        onClick: function onClick() {
          return push("/".concat(cid, "/e/").concat(id));
        }
      }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null))]
    }, (0, _utils.evaluate)(title, data)),
    content: /*#__PURE__*/_react["default"].createElement(_.Content, null, render(data))
  });
}

function EditItem(_ref5) {
  var _ref5$load = _ref5.load,
      load = _ref5$load === void 0 ? Promise.reject(new Error("No load function provided to EditItem")) : _ref5$load,
      others = _objectWithoutProperties(_ref5, ["load"]);

  var _useParams2 = (0, _reactRouterDom.useParams)(),
      id = _useParams2.id;

  var _useSnackbar3 = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar3.enqueueSnackbar;

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  (0, _react.useEffect)(function () {
    load(id).then(function (r) {
      return setData(r);
    })["catch"](function (err) {
      console.error(err);
      enqueueSnackbar(err.message, {
        variant: "error"
      });
    }); // eslint-disable-next-line
  }, [id]);
  return /*#__PURE__*/_react["default"].createElement(_.Conditional, _extends({
    show: Boolean(data),
    Component: EditPage,
    Alt: LoadingPage,
    data: data,
    setData: setData
  }, others));
}

function EditPage(_ref6) {
  var _ref6$title = _ref6.title,
      title = _ref6$title === void 0 ? "Edit Item" : _ref6$title,
      _ref6$render = _ref6.render,
      render = _ref6$render === void 0 ? function () {} : _ref6$render,
      data = _ref6.data,
      setData = _ref6.setData,
      _ref6$save = _ref6.save,
      save = _ref6$save === void 0 ? function () {
    return Promise.reject(new Error("No save function provided to EditPage"));
  } : _ref6$save;

  var _useHistory3 = (0, _reactRouterDom.useHistory)(),
      goBack = _useHistory3.goBack;

  var handleSave = function handleSave() {
    return save(data).then(function (_ref7) {
      var id = _ref7.id;
      return setTimeout(goBack, 100);
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_.Page, {
    header: /*#__PURE__*/_react["default"].createElement(_.Header, {
      LeftAction: /*#__PURE__*/_react["default"].createElement(_.BackIconButton, null),
      RightActions: [/*#__PURE__*/_react["default"].createElement(_.LoadingIconButton, {
        key: "save",
        color: "inherit",
        callback: handleSave
      }, /*#__PURE__*/_react["default"].createElement(_Save["default"], null))]
    }, (0, _utils.evaluate)(title, data)),
    content: /*#__PURE__*/_react["default"].createElement(_.Content, null, render(data, setData))
  });
}

function NewItem(_ref8) {
  var defaultData = _ref8.data,
      others = _objectWithoutProperties(_ref8, ["data"]);

  var _useState7 = (0, _react.useState)(defaultData),
      _useState8 = _slicedToArray(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  return /*#__PURE__*/_react["default"].createElement(NewPage, _extends({
    data: data,
    setData: setData
  }, others));
}

function NewPage(_ref9) {
  var cid = _ref9.cid,
      _ref9$title = _ref9.title,
      title = _ref9$title === void 0 ? "New Item" : _ref9$title,
      render = _ref9.render,
      data = _ref9.data,
      setData = _ref9.setData,
      _ref9$save = _ref9.save,
      save = _ref9$save === void 0 ? Promise.reject(new Error("No save function provided to NewPage")) : _ref9$save;

  var _useHistory4 = (0, _reactRouterDom.useHistory)(),
      replace = _useHistory4.replace;

  var handleSave = function handleSave() {
    return save(data).then(function (_ref10) {
      var id = _ref10.id;
      return setTimeout(replace, 100, "/".concat(cid, "/v/").concat(id));
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_.Page, {
    header: /*#__PURE__*/_react["default"].createElement(_.Header, {
      LeftAction: /*#__PURE__*/_react["default"].createElement(_.BackIconButton, null),
      RightActions: [/*#__PURE__*/_react["default"].createElement(_.LoadingIconButton, {
        key: "save",
        color: "inherit",
        callback: handleSave
      }, /*#__PURE__*/_react["default"].createElement(_Save["default"], null))]
    }, (0, _utils.evaluate)(title, data)),
    content: /*#__PURE__*/_react["default"].createElement(_.Content, null, render(data, setData))
  });
}

function LoadingPage() {
  return /*#__PURE__*/_react["default"].createElement(_.Page, {
    header: /*#__PURE__*/_react["default"].createElement(_.Header, {
      LeftAction: /*#__PURE__*/_react["default"].createElement(_.BackIconButton, null),
      RightActions: [/*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
        key: "progress",
        color: "secondary"
      })]
    }, "Loading...")
  });
}