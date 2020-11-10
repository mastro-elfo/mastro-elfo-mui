import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  Paper: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

/**
 * Footer - component with fixed position at the bottom of the page
 *
 * @param  {node} children
 * @param  {node} separator = null used to add a bottom margin
 * @param  {any} props properties passed to `Paper` component
 * @constructor
 */
export default function Footer({ children, separator = null, ...props }) {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper square elevation={0} {...props} className={classes.Paper}>
        {children}
      </Paper>
      {separator}
    </Fragment>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
  separator: PropTypes.node,
};
