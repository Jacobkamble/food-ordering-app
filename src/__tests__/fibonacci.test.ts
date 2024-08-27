import { fibonacci } from "../utils/common";

const testCases = [
  { input: 0, output: [0] },
  { input: 1, output: [0, 1] },
  { input: 2, output: [0, 1, 1] },
  { input: 3, output: [0, 1, 1, 2] },
  { input: 4, output: [0, 1, 1, 2, 3] },
  { input: 5, output: [0, 1, 1, 2, 3, 5] },
  { input: 6, output: [0, 1, 1, 2, 3, 5, 8] },
];

testCases.forEach(({ input, output }) => {
  test(`should check fibonacci series of ${input}`, () => {
    const result = fibonacci(input);
    expect(result).toEqual(output);
  });
});
