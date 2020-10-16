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
