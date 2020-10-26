// TODO: https://react-hooks-testing-library.com/usage/advanced-hooks

import { renderHook } from "@testing-library/react-hooks";
import { Context, usePalette } from "../src/utils/usePalette";

test("Context", () => {
  expect(typeof Context).toBe("object");
  expect(Context).toBeTruthy();
});

test("usePalette", () => {
  const {
    result: { current }
  } = renderHook(() => usePalette());
  expect(typeof current).toBe("object");
  expect(current).toBeTruthy();
});
