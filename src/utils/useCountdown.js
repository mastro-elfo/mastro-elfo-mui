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
  return value;
}
