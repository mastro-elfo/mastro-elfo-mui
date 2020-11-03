import React from "react";
import renderer from "react-test-renderer";

import GrowTypography from "../src/components/GrowTypography";

test("Render", () => {
  const component = renderer.create(<GrowTypography>content</GrowTypography>);
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("p");
  expect(json.children).toEqual(["content"]);
});
