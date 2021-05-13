import React from "react";
import renderer from "react-test-renderer";

import ConfigWrapper from "../src/components/ConfigWrapper";

test("Render", () => {
  renderer.create(<ConfigWrapper />);
});
