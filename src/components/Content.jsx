import React from "react";

import { Box, Container } from "@material-ui/core";

/**
 * Puts a `Box` inside a `Container`.
 *
 * Children are rendered inside box and all other props are passed to `Box` element.
 */
export default function Content({ children, ...props }) {
  return (
    <Container>
      <Box pt={1} {...props}>
        {children}
      </Box>
    </Container>
  );
}
