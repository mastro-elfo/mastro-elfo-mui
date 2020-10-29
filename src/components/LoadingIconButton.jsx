import React, { useState } from "react";
import PropTypes from "prop-types";

import { useSnackbar } from "notistack";

import { IconButton } from "@material-ui/core";

import AbsoluteCircularProgress from "./AbsoluteCircularProgress";
import Loading from "./Loading";

/**
 * `IconButton` with `Loading` component
 * @param node      children
 * @param function  callback Deprecated
 * @param Boolean   disabled=false  [description]
 * @param function  onClick=()=>{} Callback on click event
 * @param Object    AbsoluteCircularProgressProps={} Properties for `AbsoluteCircularProgress` component
 * @param Object    n sLoadingProps={}  Properties for `Loading` component
 * @constructor
 */
export default function LoadingIconButton({
  children,
  callback,
  disabled = false,
  onClick,
  AbsoluteCircularProgressProps = {},
  LoadingProps = {},
  ...others
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  if (callback !== undefined) {
    console.warn(
      "`callback` is deprecated since v1.24.0 and will be removed in v2.0.0. Use `onClick` instead"
    );
  }

  const cb =
    onClick !== undefined
      ? onClick
      : callback !== undefined
      ? callback
      : () => Promise.reject(new Error("No callback provided"));

  const handleClick = () => {
    setLoading(true);
    Promise.resolve()
      .then(() => cb())
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      })
      .then(() => {
        setLoading(false);
      });

    // setLoading(true);
    // callback()
    //   .catch(err => {
    //     console.error(err);
    //     enqueueSnackbar(err.message, { variant: "error" });
    //   })
    //   .then(() => {
    //     setLoading(false);
    //   });
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
  callback: PropTypes.func,
  disabled: PropTypes.bool,
  AbsoluteCircularProgressProps: PropTypes.object
};
