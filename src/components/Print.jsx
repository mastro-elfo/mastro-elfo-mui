/**
 * Provides two components to control what is shown on screen and printed.
 */

import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  print: {
    "@media screen": {
      display: "none"
    }
  },
  noPrint: {
    "@media print": {
      display: "none"
    }
  }
});

/**
 * Children inside `Print` are not shown on screen.
 */
export function Print({ children }) {
  // TODO: Deprecated, remove in v2
  console.warn(
    "Print component is deprecated and will be removed in version 2. Use MediaPrint instead."
  );
  const classes = useStyles();
  return <div className={classes.print}>{children}</div>;
}

/**
 * Children inside `NoPrint` are not printed.
 */
export function NoPrint({ children }) {
  console.warn(
    "NoPrint component is deprecated and will be removed in version 2. Use MediaScreen instead."
  );
  const classes = useStyles();
  return <div className={classes.noPrint}>{children}</div>;
}
