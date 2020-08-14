import { shorten } from "../";

test("String", () => {
  expect(shorten("Hello", 4)).toBe("ello");
});

test("Array", () => {
  expect(shorten("Hello".split(""), 4).join("")).toBe("ello");
});
