/**
 * `IconButton` with `ArrowBack` icon.
 *
 * Use `useHistory` to go back when clicked.
 */

import React from "react";

import { useHistory } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function(props) {
  const { goBack } = useHistory();
  return (
    <IconButton onClick={goBack} color="inherit" {...props}>
      <ArrowBackIcon />
    </IconButton>
  );
}
