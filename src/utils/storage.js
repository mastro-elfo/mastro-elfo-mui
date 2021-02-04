/**
 * Adds read/write json functions to LocalStorage and SessionStorage.
 *
 * Just require once.
 */

/**
 * Gets a `key` from LocalStorage or SessionStorage and returns its value parsed as JSON.
 * @param  {string} key          Storage key
 * @param  {any} defaultValue   Default value if key is not found
 * @return {any}                Parsed JSON value
 */

if (!("getJson" in Storage.prototype)) {
  Storage.prototype.getJson = function(key, defaultValue) {
    // TODO: deprecate
    console.warn(
      "This method is deprecated since v2.10.0 and will be removed in v3.0.0. Use `load` instead."
    );

    try {
      return JSON.parse(this.getItem(key)) || defaultValue;
    } catch (e) {
      if (e instanceof SyntaxError) {
        return defaultValue;
      }
      throw e;
    }
  };
}

/**
 * Stringify `value` and stores it in LocalStorage or SessionStorage
 * @param  {Number|String} key   The key
 * @param  {any} value Anything that can be converted to JSON string
 */
if (!("setJson" in Storage.prototype)) {
  Storage.prototype.setJson = function(key, value) {
    // TODO: deprecate
    console.warn(
      "This method is deprecated since v2.10.0 and will be removed in v3.0.0. Use `store` instead."
    );

    this.setItem(key, JSON.stringify(value));
  };
}

/**
 * [load description]
 * @param  {[type]} key          [description]
 * @param  {[type]} defaultValue [description]
 * @param  {[type]} temporary    [description]
 * @return {[type]}              [description]
 */
export function load(key, defaultValue, temporary = false) {
  // Define storage
  const storage = temporary ? sessionStorage : localStorage;
  // If key is not set
  if (!storage.hasOwnProperty(key)) {
    return defaultValue;
  }
  // Otherwise
  try {
    return JSON.parse(storage.getItem(key));
  } catch (e) {
    if (e instanceof SyntaxError) {
      return defaultValue;
    }
    throw e;
  }
}

/**
 * [store description]
 * @param  {[type]}  key               [description]
 * @param  {[type]}  value             [description]
 * @param  {Boolean} [temporary=false] [description]
 * @return {[type]}                    [description]
 */
export function store(key, value, temporary = false) {
  // Define storage
  const storage = temporary ? sessionStorage : localStorage;
  // Set item
  storage.setItem(key, JSON.stringify(value));
}

/**
 * [remove description]
 * @param  {[type]}  key               [description]
 * @param  {Boolean} [temporary=false] [description]
 * @return {[type]}                    [description]
 */
export function remove(key, temporary = false) {
  // Define storage
  const storage = temporary ? sessionStorage : localStorage;
  // Remove item
  storage.removeItem(key);
}