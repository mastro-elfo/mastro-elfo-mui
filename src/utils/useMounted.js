import { useEffect, useRef } from "react";

/**
 * Value returned from this hook is `true` if component is mounted, `false` otherwise.
 * @return {Boolean}
 */
export default function useMounted() {
  // Set start value
  const mounted = useRef(false);
  // Create effect
  useEffect(() => {
    // Set `true` when mounted
    mounted.current = true;
    // Clean up
    return () => {
      mounted.current = false;
    };
  }, []);
  // Return current value
  return mounted.current;
}
