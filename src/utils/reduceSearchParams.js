/**
 * Reduces a string like `?key1=val1&key2=val2...` to a key/value object
 * @param  {string} search Input string
 * @return {object}        Key/Value pair object
 */
export default function reducer(search) {
  return (
    search
      // Remove the first "?" character
      .substr(1)
      // Split each pair
      .split("&")
      // Split key/value
      .map(pair => pair.split("="))
      // Reduce to object
      .reduce((carry, [key, value]) => ({ ...carry, [key]: value }), {})
  );
}
