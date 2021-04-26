import React from "react";
import renderer from "react-test-renderer";

import { HashRouter } from "react-router-dom";
import ConfigWrapper from "../src/components/ConfigWrapper";
import BackIconButton from "../src/components/BackIconButton";

test("Render", () => {
  const component = renderer.create(
    <ConfigWrapper>
      <HashRouter>
        <BackIconButton />
      </HashRouter>
    </ConfigWrapper>
  );
  let {
    children,
    type,
    props: { onClick },
  } = component.toJSON();
  expect(type).toBe("button");
  expect(typeof onClick).toBe("function");
});
