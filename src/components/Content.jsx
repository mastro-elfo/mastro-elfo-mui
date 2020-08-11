import React from "react";

import { Box, Container } from "@material-ui/core";

/**
 * Puts a `Box` inside a `Container`.
 *
 * Children are rendered inside box and all other props are passed to `Box` element. Also apply a default `pt={1}` to the Box
 */
export default function BoxContainer({ children, ...props }) {
  return (
    <Container>
      <Box pt={1} {...props}>
        {children}
      </Box>
    </Container>
  );
}
