import React from "react";
import renderer from "react-test-renderer";

import Footer from "../src/components/Footer";

test("Render", () => {
  const component = renderer.create(<Footer>Footer</Footer>);
  const json = component.toJSON();
  expect(json.children).toEqual(["Footer"]);
  expect(json.type).toBe("div");
});

test("Render with separator", () => {
  const component = renderer.create(
    <Footer separator={<div style={{ height: "1em" }} />}>Footer</Footer>
  );
  const json = component.toJSON();
  const [child, separator] = json;
  expect(child.children).toEqual(["Footer"]);
  expect(child.type).toBe("div");
  expect(separator.type).toBe("div");
});
