import "@testing-library/jest-dom";

// Extend Jest matchers
expect.extend({
  toHaveClass: (received, expected) => {
    const pass = received.classList.contains(expected);
    return {
      message: () =>
        `expected ${received} ${pass ? "not " : ""}to have class ${expected}`,
      pass,
    };
  },
});
