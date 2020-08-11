/**
 * Removes items from the beginning of a string
 */

export default function shorten(string, length) {
  if (string.length <= length) return string;
  return string.slice(string.length - length);
}
