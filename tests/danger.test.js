import React from "react";
import renderer from "react-test-renderer";

import style from "../src/styles/danger";

const Component = style(({ children }) => <div>{children}</div>);

test("Render", () => {
  const component = renderer.create(<Component>content</Component>);
  const json = component.toJSON();
  expect(json.type).toBe("div");
  expect(json.children).toEqual(["content"]);
});
