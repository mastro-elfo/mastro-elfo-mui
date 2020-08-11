import React from "react";

import { styled } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default props =>
  styled(CircularProgress)({
    position: "absolute"
  });
