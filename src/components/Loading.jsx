import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button, IconButton } from "@material-ui/core";

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

  return (
    <span>{innerLoading && <AbsoluteCircularProgress {...others} />}</span>
  );
}

LoadingButton.propTypes = {
  //
  delay: PropTypes.number,
  // Display CircularProgress and disable button
  loading: PropTypes.bool
};
