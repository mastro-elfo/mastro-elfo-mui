"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = evaluate;

/**
 * Evaluate `value` if it's a function, otherwise returns `value`
 * @param  {any} value Function or any type
 * @param  {any} props if `value` is a function, all the following arguments are passed to it.
 * @return {any}       Same as `value` or `value(...props)`
 */
function evaluate(value) {
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  if (typeof value === "function") return value.apply(void 0, props);
  return value;
}