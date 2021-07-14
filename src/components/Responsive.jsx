import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

export default function Responsive({
  children,
  Container = DefaultContainer,
  ContainerProps = {},
  Item = DefaultItem,
  ItemProps = {},
}) {
  return (
    <Container {...ContainerProps}>
      <Item {...ItemProps}>{children}</Item>
    </Container>
  );
}

Responsive.propTypes = {
  children: PropTypes.node,
  Container: PropTypes.node,
  ContainerProps: PropTypes.object,
  Item: PropTypes.node,
  ItemProps: PropTypes.object,
};

function DefaultContainer({ children, ...props }) {
  return (
    <Grid container {...props}>
      {children}
    </Grid>
  );
}

function DefaultItem({ children, ...props }) {
  return (
    <Grid item {...props}>
      {children}
    </Grid>
  );
}
