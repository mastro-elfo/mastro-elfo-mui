import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { useLocation } from "react-router-dom";

import LoginDialog from "./LoginDialog";

// TODO: I want to pass actions to Component only if its type is LoginDialog
// This is one way to do it, but relies on Component.name and I'm not sure about this
// {...(Component.name === "LoginDialog" ? { actions: [...] } : {})}

/**
 * Handle show login component conditionally
 *
 * If `show` is a function it is evaluated with `location` as parameter; Otherwise is converted to `Boolean`. Then is passed to `Component` as `open` property.
 *
 * `Component` is the component shown to display a login form. It defaults to `LoginDialog`. `open` prop is passed to `Component` to show/hide.
 *
 * `...rest` is passed to `Component`.
 *
 * @param       {node}  children                [description]
 * @param       {elementType}  [Component=LoginDialog] [description]
 * @param       {Boolean} [show=false]            [description]
 * @param       {any}  rest                    [description]
 * @constructor
 */
export default function Login({
  children,
  Component = LoginDialog,
  show = false,
  ...rest
}) {
  // TODO: deprecate
  console.warn(
    "This component is deprecated since v2.4.0 and will be removed in v3.0.0."
  );
  const location = useLocation();

  return (
    <Fragment>
      <Component
        open={Boolean(typeof show === "function" ? show(location) : show)}
        {...rest}
      />
      {children}
    </Fragment>
  );
}

Login.propTypes = {
  children: PropTypes.node,
  Component: PropTypes.node,
  show: PropTypes.any,
};
