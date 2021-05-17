import React from "react";
import PropTypes from "prop-types";

/**
 * Wraps a component dinamically
 *
 * `Children` defaults to `[]`, is an array of object. Each object must have a `Component` property that will wrap the following items in the list. Any other property in each item is passed to its `Component`.
 *
 * If `Component` has `children`, it must render also its `children` property.
 * @param       {node} children     Component's children
 * @param       {Array}  [Children=[]] [description]
 * @constructor
 */
export default function Wrapper({ children, Children = [], components = [] }) {
  if (Children && Children.length) {
    console.warn(
      "Property `Children` is deprecated since v2.19.2 and will be removed in v3.0.0. Use `components` instead"
    );
  }
  // Take the first child
  const [Child, ...rest] = Children && Children.length ? Children : components;
  if (Child) {
    // Split Child between Component and all the rest
    const { Component, ...props } = Child;
    // Render Component and Wrap the rest
    return (
      <Component {...props}>
        <Wrapper Children={rest}>{children}</Wrapper>
      </Component>
    );
  } else {
    // No child left, just render children
    return children;
  }
}

Wrapper.propTypes = {
  children: PropTypes.node,
  Children: PropTypes.arrayOf(
    PropTypes.objectOf((propValue, key) => {
      if (
        !Object.keys(propValue).includes("Component")
        // TODO: Check if propValue.Component is something that can be rendered
      ) {
        return new Error("Component property is required");
      }
    })
  ),
};
