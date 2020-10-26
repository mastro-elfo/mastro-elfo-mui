import "../src/utils/storage.js";

test("Storage", () => {
  expect("getJson" in sessionStorage).toBe(true);
  expect("setJson" in sessionStorage).toBe(true);
  expect("getJson" in localStorage).toBe(true);
  expect("setJson" in localStorage).toBe(true);
});
