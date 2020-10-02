"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shorten;

/**
 * Removes items from the beginning of a string or array.
 * @param  {String|Array} string Input value
 * @param  {Number} length Length of the output
 * @return {String|Array}        Same type as input, but shorter
 */
function shorten(string, length) {
  if (string.length <= length) return string;
  return string.slice(string.length - length);
}