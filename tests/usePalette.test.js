import { Context, usePalette } from "../src/utils/usePalette";

test("Context", () => {
  expect(Context).toEqual({});
});

test("usePalette", () => {
  const [palette, setPalette] = usePalette();
  expect(palette).toEqual({});
  expect(typeof setPalette).toBe("function");
});
