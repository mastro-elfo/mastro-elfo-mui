import React from "react";
import renderer from "react-test-renderer";
import AbsoluteCircularProgress from "../src/components/AbsoluteCircularProgress";

it("renders AbsoluteCircularProgress", () => {
  const tree = renderer.create(<AbsoluteCircularProgress />).toJSON();
  expect(tree).toMatchSnapshot();
});
