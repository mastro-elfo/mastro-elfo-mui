import React from "react";
import renderer from "react-test-renderer";

import MediaScreen from "../src/components/MediaScreen";

test("Render", () => {
  const component = renderer.create(<MediaScreen>content</MediaScreen>);
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("div");
  expect(json.children).toEqual(["content"]);
});
