import React from "react";

import { useHistory } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

/**
 * `IconButton` with `ArrowBack` icon.
 * Calls history's `goBack` when clicked.
 * @param  {Object} props Props are spread to `IconButton`
 * @return {node}
 */

export default function({ back = 1, ...props }) {
  const { go } = useHistory();
  return (
    <IconButton onClick={() => go(-parseInt(back))} {...props}>
      <ArrowBackIcon />
    </IconButton>
  );
}
