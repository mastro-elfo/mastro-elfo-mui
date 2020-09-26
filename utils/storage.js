"use strict";

/**
 * Adds read/write json functions to LocalStorage and SessionStorage.
 *
 * Just require once.
 */
Storage.prototype.getJson = function (key, defaultValue) {
  try {
    return JSON.parse(this.getItem(key)) || defaultValue;
  } catch (e) {
    if (e instanceof SyntaxError) {
      return defaultValue;
    }

    throw e;
  }
};

Storage.prototype.setJson = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};