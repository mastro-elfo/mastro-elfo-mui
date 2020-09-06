import React from "react";

import {
  // See https://reacttraining.com/react-router/web/guides/quick-start for details
  MemoryRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default function({
  Router = MemoryRouter,
  routes = [],
  redirect = null
}) {
  console.warning("Deprecated");
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        {!!redirect && <Redirect to={redirect} />}
      </Switch>
    </Router>
  );
}
