/**
 * [Fallback description]
 * @type {[type]}
 */

import React, { Suspense } from "react";
import PropTypes from "prop-types";

import { useTheme } from "@material-ui/core/";
import { Box, LinearProgress } from "@material-ui/core";

export function Fallback({ logo, progress = false, title = "" }) {
  const theme = useTheme();
  console.log(typeof logo);

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

export default function SuspenseWrapper({
  children,
  Fallback: FallbackComponent = Fallback,
  ...rest
}) {
  return (
    <Suspense fallback={<FallbackComponent {...rest} />}>{children}</Suspense>
  );
}

SuspenseWrapper.propTypes = {
  children: PropTypes.node,
  Fallback: PropTypes.node
};
