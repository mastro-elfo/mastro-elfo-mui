import React from "react";
import renderer from "react-test-renderer";

import { HashRouter } from "react-router-dom";
import DrawerLists from "../src/components/DrawerLists";

test("Render no list", () => {
  renderer.create(
    <HashRouter>
      <DrawerLists />
    </HashRouter>
  );
});

test("Render empty list", () => {
  renderer.create(
    <HashRouter>
      <DrawerLists lists={[]} />
    </HashRouter>
  );
});

test("Render list", () => {
  renderer.create(
    <HashRouter>
      <DrawerLists lists={[{ key: 1 }]} />
    </HashRouter>
  );
});
