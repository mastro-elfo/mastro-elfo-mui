import React, { Fragment } from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import GrowTypography from "./GrowTypography";

export default function Header({
  title = "",
  LeftAction = null,
  RightActions = []
}) {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          {LeftAction}
          <GrowTypography variant="h6" color="inherit">
            {title}
          </GrowTypography>
          {RightActions}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
