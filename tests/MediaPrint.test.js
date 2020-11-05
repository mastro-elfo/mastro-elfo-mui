import React from "react";
import renderer from "react-test-renderer";

import MediaPrint from "../src/components/MediaPrint";

test("Render", () => {
  const component = renderer.create(<MediaPrint>content</MediaPrint>);
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("div");
  expect(json.children).toEqual(["content"]);
});
