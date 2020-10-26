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
  const theme = useTheme();
  return (
    <Fragment>
      <BottomNavigation
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: theme.zIndex.appBar
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
  children: PropTypes.node
};
