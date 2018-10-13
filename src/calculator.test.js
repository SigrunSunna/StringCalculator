const add = require("./calculator");

it("should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
  expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
  expect(add("1,2")).toBe(3);
});

it("should handle an unknown number of numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

it("should handle new lines between numbers", () => {
  expect(add("1 \n2,3")).toBe(6);
});

it("should be able to throw an error and print out a negative number", () => {
    expect(add('3,-7,-9')).toBe("Negatives not allowed: -7,-9");
});

it("should ignore numbers bigger than 1000", () => {
    expect(add("1001, 2")).toBe(2);
});

it("should handle a different delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
});
