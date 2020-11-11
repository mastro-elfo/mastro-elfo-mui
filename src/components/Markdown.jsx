import React from "react";

import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

const renderers = {
  emphasis: ({ children }) => (
    <Typography component="em" variant="inherit">
      {children}
    </Typography>
  ),
  heading: ({ children, level }) => (
    <Typography variant={`h${[3, 3, 4, 5, 6, 6, 6][level]}`}>
      {children}
    </Typography>
  ),
  link: ({ children, href, title }) =>
    href.match(/^(https?)\/\//) ? (
      <a href={href} title={title} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link to={href} title={title}>
        {children}
      </Link>
    ),
  list: ({ children, ordered }) => (
    <Typography component={ordered ? "ol" : "ul"} gutterBottom>
      {children}
    </Typography>
  ),
  listItem: ({ children }) => (
    <Typography component="li" variant="body2">
      {children}
    </Typography>
  ),
  paragraph: ({ children }) => <Typography gutterBottom>{children}</Typography>,
  strong: ({ children, ...others }) => (
    <Typography component="strong" variant="inherit">
      {children}
    </Typography>
  ),
};

/**
 * `<Markdown source={"# Markdown"}/>`
 * @constructor
 */
export default function Markdown(props) {
  console.warn(
    "`Markdown` is deprecated since v1.29.0 and will be removed in v2.0.0, use `react-markdown` instead. A list of renderers is available in `mastro-elfo-mui/utils/markdown-renderers`"
  );
  return <ReactMarkdown {...props} renderers={renderers} />;
}
