const { avg, prime, factorial } = require("./lib");

test("3,5,7의 평균", () => {
  const result = avg([3, 5, 7]);
  expect(result).toBe(5);
});

test("5는 소수", () => {
  const result = prime(5);
  expect(result).toBe(true);
});

test("5!", () => {
  const result = factorial(5);
  expect(result).toBe(120);
});
