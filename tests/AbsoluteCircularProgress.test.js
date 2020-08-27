import React from "react";
import renderer from "react-test-renderer";
import { AbsoluteCircularProgress } from "../";

it("renders AbsoluteCircularProgress", () => {
  const tree = renderer.create(<AbsoluteCircularProgress />).toJSON();
  expect(tree).toMatchSnapshot();
});
