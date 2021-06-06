import React, { Component } from "react";

import { IconButton, Typography } from "@material-ui/core";

import RefreshIcon from "@material-ui/icons/Refresh";

import Content from "./Content";
import Header from "./Header";
import Page from "./Page";

/**
 * Error handler component
 */
export default class ErrorWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleReloadClick.bind(this);
  }

  componentDidCatch(error, info) {
    console.error("Console Error", error, info, this.props);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  handleReloadClick() {
    window.location.reload();
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <Page
          header={
            <Header
              RightActions={[
                <IconButton
                  key="reload"
                  title="Reload"
                  onClick={this.handleReloadClick}
                  {...this.props.ReloadIconButtonProps}
                >
                  <RefreshIcon />
                </IconButton>,
              ]}
            >
              {this.props.header || "An error occurred"}
            </Header>
          }
          content={
            <Content>
              <Typography variant="h3" gutterBottom>
                {error.message}
              </Typography>
              <Typography component="ul">
                {error.stack.split("\n").map((line, i) => (
                  <Typography
                    key={i}
                    component="li"
                    variant="body2"
                    gutterBottom
                  >
                    {line}
                  </Typography>
                ))}
              </Typography>
            </Content>
          }
        />
      );
    }
    return this.props.children;
  }
}
