import React from "react";

import { Box, Container } from "@material-ui/core";

/**
 * Puts a `Box` inside a `Container`.
 *
 * Children are rendered inside box and all other props are passed to `Box` element.
 */
export default function Content({
  children,
  ContainerProps = {},
  BoxProps = {}
}) {
  return (
    <Container {...ContainerProps}>
      <Box {...BoxProps}>{children}</Box>
    </Container>
  );
}
