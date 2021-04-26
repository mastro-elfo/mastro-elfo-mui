import React from "react";
import renderer from "react-test-renderer";

import ConfigWrapper from "../src/components/ConfigWrapper";
import TopFab from "../src/components/TopFab";

test("Render", () => {
  const component = renderer.create(
    <ConfigWrapper>
      <TopFab />
    </ConfigWrapper>
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
