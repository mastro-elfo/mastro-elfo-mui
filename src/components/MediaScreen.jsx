import React from "react";
import PropTypes from "prop-types";

import { Box } from "@material-ui/core";

/**
 * Wraps `children` to be displayed only on screen
 * @param       {node} children [description]
 * @constructor
 */
export default function MediaScreen({ children }) {
  return (
    <Box display="block" displayPrint="none">
      {children}
    </Box>
  );
}

MediaScreen.propTypes = {
  children: PropTypes.node
};
