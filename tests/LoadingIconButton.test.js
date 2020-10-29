import React from "react";
import renderer from "react-test-renderer";

import { SnackbarProvider } from "notistack";
import LoadingIconButton from "../src/components/LoadingIconButton";

test("", () => {
  const component = renderer.create(
    <SnackbarProvider>
      <LoadingIconButton></LoadingIconButton>
    </SnackbarProvider>
  );
  let tree = component.toJSON();
  // console.log(tree);
  expect(tree).toMatchSnapshot();
});
