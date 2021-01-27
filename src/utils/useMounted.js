import { useEffect, useRef } from "react";

/**
 * Value returned from this hook is `true` if component is mounted, `false` otherwise.
 * @return {Boolean}
 */
export default function useMounted() {
  // Set start value
  const mounted = useRef(true);
  // Create effect
  useEffect(
    () => () => {
      mounted.current = false;
    },
    [mounted]
  );
  // Return current value
  return mounted.current;
}
