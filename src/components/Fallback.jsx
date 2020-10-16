import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "@material-ui/core/";
import { Box, LinearProgress } from "@material-ui/core";

/**
 * [Fallback description]
 * @param       {node}  logo             [description]
 * @param       {Boolean} [progress=false] [description]
 * @param       {String}  [title=""]       [description]
 * @constructor
 */
export default function Fallback({ logo, progress = false, title = "" }) {
  const theme = useTheme();

  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      width={`calc(100% - ${theme.spacing(8)}px)`}
      maxWidth={theme.breakpoints.values.sm / 2}
      style={{
        transform: "translate(-50%, -50%)"
      }}
    >
      {!!logo && (
        <Box>
          <img src={logo} alt="Logo" width="100%" />
        </Box>
      )}

      {!!title && <Box textAlign="center">{title}</Box>}

      {progress !== false && (
        <Box>
          {progress === true ? (
            <LinearProgress />
          ) : (
            <LinearProgress variant={"determinate"} value={progress} />
          )}
        </Box>
      )}
    </Box>
  );
}

Fallback.propTypes = {
  logo: PropTypes.string,
  progress: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  title: PropTypes.string
};
