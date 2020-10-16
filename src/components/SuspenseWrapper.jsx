import React, { Suspense } from "react";
import PropTypes from "prop-types";

import Fallback from "./Fallback";

/**
 * [SuspenseWrapper description]
 * @param       {[type]} children [description]
 * @param       {[type]} Fallback [description]
 * @param       {[type]} rest     [description]
 * @constructor
 */
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
