import React, { Fragment } from "react";

import { useTheme } from "@material-ui/core/styles";
import { BottomNavigation } from "@material-ui/core";

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
