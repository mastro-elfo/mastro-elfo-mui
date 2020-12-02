import React from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

/**
 * `IconButton` with `ArrowBack` icon.
 * Calls history's `goBack` when clicked.
 * @param   {Number} back=1 How many pages should go back
 * @param   {Object} IconProps={} Properties for `ArrowBackIcon`
 * @param  {Object} props Props are spread to `IconButton`
 * @return {node}
 */

export default function BackIconButton({
  back = 1,
  children,
  IconProps = {},
  ...props
}) {
  const { go } = useHistory();
  return (
    <IconButton onClick={() => go(-parseInt(back))} {...props}>
      <ArrowBackIcon {...IconProps} />
      {children}
    </IconButton>
  );
}

BackIconButton.propTypes = {
  back: PropTypes.number,
  children: PropTypes.node,
  IconProps: PropTypes.object,
};
