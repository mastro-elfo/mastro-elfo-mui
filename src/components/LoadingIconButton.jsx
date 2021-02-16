import React, { useState } from "react";
import PropTypes from "prop-types";

import { useSnackbar } from "notistack";

import { IconButton } from "@material-ui/core";

import AbsoluteCircularProgress from "./AbsoluteCircularProgress";
import Loading from "./Loading";
import delay from "../utils/delay";

/**
 * `IconButton` with `Loading` component
 * @param node      children
 * @param Boolean   disabled=false  [description]
 * @param function  onClick=()=>{} Callback on click event
 * @param Object    AbsoluteCircularProgressProps={} Properties for `AbsoluteCircularProgress` component
 * @param Object    n sLoadingProps={}  Properties for `Loading` component
 * @constructor
 */
export default function LoadingIconButton({
  children,
  disabled = false,
  onClick = () => Promise.reject(new Error("No callback provided")),
  AbsoluteCircularProgressProps = {},
  LoadingProps = {},
  ...others
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    setLoading(true);
    // Promise.resolve(onClick(e))
    delay(0, onClick, e)
      .catch((err) => {
        // TODO: deprecate
        console.warn(
          "Catch is deprecated since v2.4.0 and will be removed in v3.0.0."
        );
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <IconButton
      disabled={loading || disabled}
      onClick={handleClick}
      {...others}
    >
      {children}
      <Loading loading={loading} {...LoadingProps}>
        <AbsoluteCircularProgress
          color="secondary"
          {...AbsoluteCircularProgressProps}
        />
      </Loading>
    </IconButton>
  );
}

LoadingIconButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  AbsoluteCircularProgressProps: PropTypes.object,
  LoadingProps: PropTypes.object,
};
