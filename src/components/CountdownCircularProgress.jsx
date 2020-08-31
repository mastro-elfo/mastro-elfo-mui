import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  circleStatic: { "transition-timing-function": "linear" }
});

export default function CountdownCircularProgress({
  delay = 300,
  duration = 100000,
  ...others
}) {
  const [value, setValue] = useState(100);

  useEffect(() => {
    if (value > 0) {
      const delta = (100 * delay) / duration;
      const to = setTimeout(setValue, delay, Math.max(0, value - delta));
      return () => clearTimeout(to);
    }
  }, [delay, duration, value]);

  const { circleStatic } = useStyles();
  return (
    <CircularProgress
      variant="static"
      value={value}
      classes={{ circleStatic }}
      {...others}
    />
  );
}

CountdownCircularProgress.propTypes = {
  delay: PropTypes.number,
  duration: PropTypes.number
};
