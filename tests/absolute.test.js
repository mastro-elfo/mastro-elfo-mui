import React from "react";
import renderer from "react-test-renderer";

import absolute from "../src/styles/absolute";

const Absolute = absolute(({ children }) => <div>{children}</div>);

test("Render", () => {
  const component = renderer.create(<Absolute>absolute</Absolute>);
  const tree = component.toJSON();
  expect(tree.type).toBe("div");
  expect(tree.children).toEqual(["absolute"]);
});
