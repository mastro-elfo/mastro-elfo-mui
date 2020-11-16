import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

/**
 * NestedListTypography
 *
 * @param       {[type]} children    [description]
 * @param       {Object} [ulProps={  component:    "ul" }] [description]
 * @param       {Object} [liProps={  component:    "li" }] [description]
 * @param       {Object} [pProps={}] [description]
 * @param       {[type]} }           [description]
 * @constructor
 */
export default function NestedListTypography({
  children,
  ulProps = { component: "ul" },
  liProps = { component: "li" },
  pProps = {},
}) {
  if (["boolean", "number", "string"].indexOf(typeof children) !== -1) {
    return <Typography {...pProps}>{children}</Typography>;
  } else if (typeof children === "object" && children.map) {
    return children.map((child, i) => {
      if (["boolean", "number", "string"].indexOf(typeof child) !== -1) {
        return (
          <Typography key={i} {...pProps}>
            {child}
          </Typography>
        );
      } else if (typeof child === "object" && child.map) {
        return (
          <Recursive key={i} ulProps={ulProps} liProps={liProps}>
            {child}
          </Recursive>
        );
      } else if ("$$typeof" in child) {
        return { ...child, key: i };
      }
      return null;
    });
  }
  return null;
}

NestedListTypography.propTypes = {
  children: PropTypes.node,
  ulProps: PropTypes.object,
  liProps: PropTypes.object,
  pProps: PropTypes.object,
};

function Recursive({
  children,
  ulProps = { component: "ul" },
  liProps = { component: "li" },
}) {
  if (typeof children === "object" && children.map) {
    return (
      <Typography {...ulProps}>
        {children.map((child, i) => (
          <Recursive key={i} __first={false}>
            {child}
          </Recursive>
        ))}
      </Typography>
    );
  } else if (children !== null && children !== undefined) {
    return <Typography {...liProps}>{children}</Typography>;
  } else if ("$$typeof" in children) {
    return { ...children };
  }
  return null;
}
