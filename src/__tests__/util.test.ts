import { sum } from "../utils/common";

const testCases = [
  [1, 2, 3],
  [0, 0, 0],
  [-2, -2, -4],
  [-2, 3, 1],
];

const testCasesForEach = [
  { num1: 1, num2: 2, expected: 3 },
  { num1: 0, num2: 0, expected: 0 },
  { num1: -2, num2: -2, expected: -4 },
  { num1: -2, num2: 3, expected: 1 },
];

testCasesForEach.forEach(({ num1, num2, expected }) => {
  test("should calculate sum of two numbers", () => {
    const result = sum(num1, num2);
    expect(result).toBe(expected);
  });
});
