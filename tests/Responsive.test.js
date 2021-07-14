import React from "react";
import renderer from "react-test-renderer";

import Responsive from "../src/components/Responsive";

test("Render", () => {
  const component = renderer.create(<Responsive />);
  expect(component).toBeTruthy();
});
