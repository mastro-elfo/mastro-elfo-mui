import React from "react";
import renderer from "react-test-renderer";

import TopFab from "../src/components/TopFab";

test("Render", () => {
  const component = renderer.create(<TopFab />);
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
