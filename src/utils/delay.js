/**
 * Returns a `Promise` that resolves after `delay` ms.
 * @param  {Number}   [delay=0] Resolves after these ms
 * @param  {Function} callback  If callable, calls it after the delay
 * @param  {any}      args      Arguments passed to callback
 * @return {Promise}            Promise
 */
export default function (delay = 0, callback, ...args) {
  return new Promise((r) => setTimeout(r, delay)).then(
    () => typeof callback === "function" && callback(...args)
  );
}
