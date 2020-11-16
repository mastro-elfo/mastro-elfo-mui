import React from "react";
import renderer from "react-test-renderer";

import SearchField from "../src/components/SearchField";
import NotifyWrapper from "../src/components/NotifyWrapper";

test("Render", () => {
  const component = renderer.create(
    <NotifyWrapper>
      <SearchField />
    </NotifyWrapper>
  );
  const json = component.toJSON();
  expect(json.type).toBe("div");
  expect(json.children[0].children[1].type).toBe("input");
});
