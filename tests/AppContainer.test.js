import React from "react";
import renderer from "react-test-renderer";
import { AppContainer } from "../";

it("renders AppContainer", () => {
  const tree = renderer.create(<AppContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
