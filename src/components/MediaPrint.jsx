import React from "react";
import PropTypes from "prop-types";

import { Box } from "@material-ui/core";
import {
  MuiThemeProvider,
  createMuiTheme,
  useTheme
} from "@material-ui/core/styles";

/**
 * Wraps `children` to be displayed only when printed
 * @param       {node} children [description]
 * @constructor
 */
export default function MediaPrint({ children }) {
  return (
    <PrintThemeProvider>
      <Box display="none" displayPrint="block">
        {children}
      </Box>
    </PrintThemeProvider>
  );
}

MediaPrint.propTypes = {
  children: PropTypes.node
};

/**
 * Copies the global theme, but uses a "light" mode.
 * @param       {any} children [description]
 * @constructor
 */
function PrintThemeProvider({ children }) {
  const theme = useTheme();
  const {
    palette: {
      common,
      contrastThreshold,
      error,
      grey,
      info,
      primary,
      secondary,
      success,
      tonalOffset,
      warning
    }
  } = theme;
  const THEME = createMuiTheme({
    ...theme,
    palette: {
      common,
      contrastThreshold,
      error,
      grey,
      info,
      primary,
      secondary,
      success,
      tonalOffset,
      warning,
      type: "light"
    }
  });
  return <MuiThemeProvider theme={THEME}>{children}</MuiThemeProvider>;
}
