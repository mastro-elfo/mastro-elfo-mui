import { cloneElement, createElement, isValidElement } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

/**
 * Renders child component with `onClick` prop that pushes or replaces history with `href`.
 *
 * @param {any}     children      [description]
 * @param {string}  href          location to push or replace
 * @param {Boolean} replace=false If `true` uses `replace` instead of `push`
 * @param {any}     rest          Passed to Component
 * @constructor
 */

export default function Push({
  children,
  href,
  replace = false,
  state = null,
  ...rest
}) {
  const { push, replace: repl } = useHistory();

  // Define callback
  const handleClick = () => (replace ? repl(href, state) : push(href, state));

  // If `children` is a valid element, clone with `onClick: handleClick`
  if (isValidElement(children)) {
    return cloneElement(children, {
      onClick: handleClick,
      ...rest,
    });
  }

  // Otherwise create a new element
  return createElement("span", {
    children,
    onClick: handleClick,
    ...rest,
  });
}

Push.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  replace: PropTypes.bool,
};
