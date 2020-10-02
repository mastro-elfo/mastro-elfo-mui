"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pluralize;

/**
 * Returns `singular` or `plural` depending on `count`
 * @param  {Number} count    The counter value
 * @param  {any} singular Returned if `count === 1`
 * @param  {any} plural   Returned if `count !== 1`
 * @return {any}          Return value
 */
function pluralize(count, singular, plural) {
  return count === 1 ? singular : plural;
}