import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { useTheme } from "@material-ui/core/styles";
import { BottomNavigation } from "@material-ui/core";

/**
 * [FixedBottomNavigation description]
 * @param       {node} children [description]
 * @param       {any} props    [description]
 * @constructor
 */
export default function FixedBottomNavigation({ children, ...props }) {
  // TODO: // DEPRECATED: Remove in version 2.0
  console.warn(
    "`FixedBottomNavigation` is deprecated and will be removed in version 2.0.0, use `Footer` instead."
  );

  const theme = useTheme();
  return (
    <Fragment>
      <BottomNavigation
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: theme.zIndex.appBar,
        }}
        {...props}
      >
        {children}
      </BottomNavigation>
      <BottomNavigation />
    </Fragment>
  );
}

FixedBottomNavigation.propTypes = {
  children: PropTypes.node,
};
