This is a collection of components that extend **@material-ui**.

# Install

`yarn add mastro-elfo-mui`

or

`npm i mastro-elfo-mui`

# Documentation

The full [documentation](https://github.com/mastro-elfo/mastro-elfo-mui/wiki "Documentation") is available on GitHub Wiki.

# Getting started

The start point of this library is then `AppContainer` component. This is not required, but gives the app some basic configuration.

`AppContainer` creates wrapper for the _theme_, the **React** `Suspense` component, the _Error boundary_, the _notifier_ (with **notistack**), and the _router_ (with **react-router-dom**).

## Example

This example creates an `AppContainer` with a global theme and that uses `HashRouter`.

```js
import React from "react";
import { HashRouter } from "react-router-dom";
import primary from "@material-ui/core/colors/blue";
import secondary from "@material-ui/core/colors/pink";

import { AppContainer } from "mastro-elfo-mui";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <AppContainer
      ThemeProps={{
        palette: { primary, secondary },
      }}
      RouterProps={{
        Router: HashRouter,
        routes: [{ path: "/", component: HomePage, exact: true }],
      }}
    />
  );
}
```

The `Page` component creates the structure for a page.

A `Page` has basically an _header_ and a _content_. They can be any component, but they work well with `Header` and `Content` components. _header_ and _content_ are rendered inside a `Paper` so they reflect the type of palette (light or dark).

A `Page` also has a _print_ property that is rendered with `@media print`; on the other hand _header_ and _content_ don't render when printed.

## Example

This example creates a basic page with an header and content.

```js
import React from "react";

import { Page, Header, Content } from "mastro-elfo-mui";

function HomePage() {
  return (
    <Page
      header={<Header>Home Page</Header>}
      content={
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non mi
          tincidunt, mattis sapien non, facilisis massa.
        </Content>
      }
    />
  );
}
```

Many components in this library extend their counterpart in **material-ui** in a specific way.

Other components group some complex structure.

# Scripts

The directory 'node_modules/mastro-elfo-mui/dist/scripts/' contains utility scripts.

## Example

This command prints a page template.

```sh
node node_modules/mastro-elfo-mui/dist/scripts/create-page.js homepage
```

This command prints a context template.

```sh
node node_modules/mastro-elfo-mui/dist/scripts/create-context.js mycontext
```
