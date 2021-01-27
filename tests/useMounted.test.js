// TODO: https://react-hooks-testing-library.com/usage/advanced-hooks

import { renderHook } from "@testing-library/react-hooks";
import useMounted from "../src/utils/useMounted";

test("useMounted", () => {
  const { rerender, result, unmount } = renderHook(() => useMounted());

  expect(result.current).toBeTruthy();

  rerender();
  expect(result.current).toBeTruthy();

  // unmount();
  // console.log(result.current);
  // expect(result.current).toBeFalsy();
});
