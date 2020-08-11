"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shorten;

/**
 * Removes items from the beginning of a string
 */
function shorten(string, length) {
  if (string.length <= length) return string;
  return string.slice(string.length - length);
}