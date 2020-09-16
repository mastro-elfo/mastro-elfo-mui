/**
 * Creates a LastInLastOut list of length `length`
 * @param  {Array}  [start=[]] List initialization
 * @param  {Number} [length=1] Length of the list
 * @return {Array}             [List, push method]
 */

export default function useLilo(start = [], length = 1) {
  // Setup
  const [lilo, setLilo] = useState(slice(start, length));
  // Push method
  const push = item => {
    // Push new item
    lilo.push(item);
    // Slice and set
    setLilo(slice(lilo, length));
  };
  // TODO: Add pop method that pops from the beginning
  // Return lilo list and push method
  return [lilo, push];
}

// Slice list to length
function slice(list, length) {
  // TODO: if length is undefined, don't slice [requires pop method]
  return list.slice(Math.max(0, list.length - length));
}
