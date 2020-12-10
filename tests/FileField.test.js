import React from "react";
import renderer from "react-test-renderer";

import FileField from "../src/components/FileField";

test("FileField", () => {
  const component = renderer.create(<FileField />);
  const json = component.toJSON();
  // console.log(json);

  expect(json.length).toBe(2);

  const TextField = json[0];
  const input = json[1];

  expect(TextField.type).toBe("div");
  expect(input.type).toBe("input");

  expect(input.props.type).toBe("file");
  expect(input.props.hidden).toBe(true);
});
