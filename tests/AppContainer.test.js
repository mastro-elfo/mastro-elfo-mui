import React from "react";
import renderer from "react-test-renderer";
import { AppContainer } from "../";

it("renders AbsoluteCircularProgress", () => {
  const tree = renderer.create(<AppContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
