/**
 * Puts a `Box` inside a `Container`.
 *
 * Children are rendered inside box and all other props are passed to `Box` element.
 *
 * @see: https://material-ui.com/api/box/
 * @see: https://material-ui.com/api/container/
 */

import React from "react";

import { Box, Container } from "@material-ui/core";

export default function Content({
  children,
  ContainerProps = {},
  BoxProps = {}
}) {
  return (
    <Container {...ContainerProps}>
      <Box pt={1} {...BoxProps}>
        {children}
      </Box>
    </Container>
  );
}
