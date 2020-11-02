import React, { cloneElement, createElement, isValidElement } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

/**
 * Renders `Component` with `onClick` prop that pushes or replaces history with `href`.
 *
 * @param {any}     children      [description]
 * @param {string}  href          location to push or replace
 * @param {Boolean} replace=false If `true` uses `replace` instead of `push`
 * @param {node}    Component     Component rendered, deprecated
 * @param {any}     rest          Passed to Component
 * @constructor
 */

export default function Push({
  children,
  href,
  replace = false,
  Component,
  ...rest
}) {
  const { push, replace: repl } = useHistory();

  // If `Component` is used, render the old version
  if (Component !== undefined) {
    console.warn(
      "`Component` prop is deprecated since version 1.25.0 and will be removed in version 2.0.0, use `children` instead."
    );

    return (
      <Component onClick={() => (replace ? repl(href) : push(href))} {...rest}>
        {children}
      </Component>
    );
  }

  // Define callback
  const handleClick = () => (replace ? repl(href) : push(href));

  // If `children` is a valid element, clone with `onClick: handleClick`
  if (isValidElement(children)) {
    return cloneElement(children, {
      onClick: handleClick,
      ...rest
    });
  }

  // Otherwise create a new element
  return createElement("span", {
    children,
    onClick: handleClick,
    ...rest
  });
}

Push.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  replace: PropTypes.bool,
  Component: PropTypes.elementType
};
