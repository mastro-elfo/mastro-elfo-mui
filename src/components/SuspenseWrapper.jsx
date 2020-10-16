import React, { Suspense } from "react";
import PropTypes from "prop-types";

import Fallback from "./Fallback";

/**
 * [SuspenseWrapper description]
 * @param       {node} children [description]
 * @param       {elementType} Fallback [description]
 * @param       {any} rest      Passed to `Fallback`
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
