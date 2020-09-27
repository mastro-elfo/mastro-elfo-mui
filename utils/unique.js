/**
 * Creates an array of unique items.
 */

export default function unique(array) {
  return [...new Set(array || [])];
}
