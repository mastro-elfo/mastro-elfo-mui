import React, { Fragment } from "react";
import PropTypes from "prop-types";

/**
 * For `each` item apply `map` and create `Component`.
 *
 * A `key` property is given by the array index of the element. This can be overwritten by `map`.
 *
 * @param {Array}       [each=[]]  Array to loop
 * @param {func}        [map=(x)=>x]  Apply map to each item
 * @param {elementType} [Component] (Required) Create a component for each item
 * @param {object}      [ComponentProps={}] Common properties for each item
 * @param {elementType} [Container=Fragment] List container
 * @param {object}      [ContainerProps={}] Properties for the Container component
 * @constructor
 */
export default function For({
  // Items to loop
  each = [],
  // Map items, default identity
  map = (x) => x,
  // Component and Container elements and props
  Component,
  ComponentProps = {},
  Container = Fragment,
  ContainerProps = {},
}) {
  // If `each` is not a valid array
  if (!each || !each.map) return <Container {...ContainerProps} />;
  // Render
  return (
    <Container {...ContainerProps}>
      {each.map((item, i) => {
        // Map items
        const mapped = map(item, i);
        // Check falsy
        if (mapped) {
          // Render `Component`
          return <Component key={i} {...ComponentProps} {...mapped} />;
        }
        // Nothing to render
        return null;
      })}
    </Container>
  );
}

For.propTypes = {
  each: PropTypes.array,
  map: PropTypes.func,
  Component: PropTypes.elementType.isRequired,
  ComponentProps: PropTypes.object,
  Container: PropTypes.elementType,
  ContainerProps: PropTypes.object,
};
