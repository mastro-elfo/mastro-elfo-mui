/**
 * Display an `AbsoluteCircularProgress` after a delay.
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import AbsoluteCircularProgress from "./AbsoluteCircularProgress";

export default function Loading({
  children,
  delay = 1000,
  loading = false,
  ...others
}) {
  // Display CircularProgress if innerLoading is true
  const [innerLoading, setInnerLoading] = useState(false);

  useEffect(() => {
    // Delay setting innerLoading
    if (loading) {
      const to = setTimeout(setInnerLoading, delay, true);
      return () => clearTimeout(to);
    } else setInnerLoading(false);
  }, [delay, loading]);

  return innerLoading ? <AbsoluteCircularProgress {...others} /> : null;
}

Loading.propTypes = {
  //
  delay: PropTypes.number,
  // Display CircularProgress and disable button
  loading: PropTypes.bool
};
