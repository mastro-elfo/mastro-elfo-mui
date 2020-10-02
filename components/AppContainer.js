"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Main container for an application.
 *
 * Wraps the application with Theme, Error handler, Notifier and Router.
 * Wrappers can be configured with ThemeProps, NotifyProps and RouterProps.
 */

/**
 * App main container.
 *
 * Wraps application with Theme, Error handler, Notifier and Router.
 * @param       {Object} [NotifyProps={}]   [description]
 * @param       {Object} [RouterProps={}]   [description]
 * @param       {Object} [SuspenseProps={}] [description]
 * @param       {Object} [ThemeProps={}]    [description]
 * @param       {Object} [WrapperProps={}}] [description]
 * @constructor
 */
function App(_ref) {
  var _ref$NotifyProps = _ref.NotifyProps,
      NotifyProps = _ref$NotifyProps === void 0 ? {} : _ref$NotifyProps,
      _ref$RouterProps = _ref.RouterProps,
      RouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps,
      _ref$SuspenseProps = _ref.SuspenseProps,
      SuspenseProps = _ref$SuspenseProps === void 0 ? {} : _ref$SuspenseProps,
      _ref$ThemeProps = _ref.ThemeProps,
      ThemeProps = _ref$ThemeProps === void 0 ? {} : _ref$ThemeProps,
      _ref$WrapperProps = _ref.WrapperProps,
      WrapperProps = _ref$WrapperProps === void 0 ? {} : _ref$WrapperProps;
  // TODO: can wrap everything in Wrapper:

  /*
  <Wrapper Children={[
    { Child: ThemeWrapper, ...ThemeProps },
    { Child: SuspenseWrapper, ...SuspenseProps },
    { Child: ErrorWrapper },
    { Child: NotifyWrapper, ...NotifyProps },
    ...WrapperProps.Children
  ]}>
  <RouterWrapper {...RouterProps} />
  </Wrapper>
   */
  return /*#__PURE__*/_react["default"].createElement(_.ThemeWrapper, ThemeProps, /*#__PURE__*/_react["default"].createElement(_.SuspenseWrapper, SuspenseProps, /*#__PURE__*/_react["default"].createElement(_.ErrorWrapper, null, /*#__PURE__*/_react["default"].createElement(_.NotifyWrapper, NotifyProps, /*#__PURE__*/_react["default"].createElement(_.Wrapper, WrapperProps, /*#__PURE__*/_react["default"].createElement(_.RouterWrapper, RouterProps))))));
}

App.propTypes = {
  NotifyProps: _propTypes["default"].object,
  RouterProps: _propTypes["default"].object,
  SuspenseProps: _propTypes["default"].object,
  ThemeProps: _propTypes["default"].object,
  WrapperProps: _propTypes["default"].object
};