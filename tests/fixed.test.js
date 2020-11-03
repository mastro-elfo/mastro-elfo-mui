import React from "react";
import renderer from "react-test-renderer";

import fixed from "../src/styles/fixed";

const Fixed = fixed(({ children }) => <div>{children}</div>);

test("Render", () => {
  const component = renderer.create(<Fixed>fixed</Fixed>);
  const tree = component.toJSON();
  expect(tree.type).toBe("div");
  expect(tree.children).toEqual(["fixed"]);
});
