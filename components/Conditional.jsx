import React from "react";
import PropTypes from "prop-types";

export default function Conditional({
  Component,
  Alt = () => null,
  show = false,
  ...others
}) {
  return Boolean(typeof show === "function" ? show() : show) ? (
    <Component {...others} />
  ) : (
    <Alt />
  );
}

Conditional.propTypes = {
  Component: PropTypes.elementType.isRequired,
  Alt: PropTypes.elementType,
  show: PropTypes.any
};
