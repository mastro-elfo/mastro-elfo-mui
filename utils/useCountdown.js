/**
 * Creates a countdown timer from `start` to 0.
 *
 * Value is update each `delay` milliseconds.
 *
 * @return: [value, resetFunction]
 */

import { useEffect, useState } from "react";

export default function(start, delay = 1000) {
  // Inner state
  const [value, setValue] = useState(start);
  // Start countdown
  useEffect(() => {
    // Until expired
    if (value > 0) {
      const to = setTimeout(setValue, delay, Math.max(0, value - delay / 1000));
      return () => clearTimeout(to);
    }
  }, [delay, value]);

  const reset = () => setValue(start);

  return [value, reset];
}
