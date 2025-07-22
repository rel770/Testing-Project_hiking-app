/**
 * Tests for Calories Calculator
 * Using Node.js v22 built-in test runner
 */

const { test, describe } = require("node:test");
const assert = require("node:assert");
const { caloriesBurned } = require("./calories.js");

describe("Calories Calculator Tests", () => {
  describe("caloriesBurned", () => {
    test("should calculate calories for regular input", () => {
      const result = caloriesBurned(70, 5);
      assert.strictEqual(result, 362.6);
    });

    test("should handle decimal distance", () => {
      const result = caloriesBurned(60, 3.5);
      // 60 * 3.5 * 1.036 = 217.56
      assert.strictEqual(result, 217.56);
    });

    test("should handle zero distance", () => {
      const result = caloriesBurned(70, 0);
      assert.strictEqual(result, 0);
    });

    test("should throw error for zero or negative weight", () => {
      assert.throws(() => caloriesBurned(0, 5), /Weight must be a positive number/);
      assert.throws(() => caloriesBurned(-10, 5), /Weight must be a positive number/);
    });

    test("should throw error for negative distance", () => {
      assert.throws(() => caloriesBurned(70, -5), /Distance must be a non-negative number/);
    });

    test("should throw error for invalid input types", () => {
      assert.throws(() => caloriesBurned("invalid", 5), /Weight must be a positive number/);
      assert.throws(() => caloriesBurned(70, "invalid"), /Distance must be a non-negative number/);
      assert.throws(() => caloriesBurned(NaN, 5), /Weight must be a positive number/);
      assert.throws(() => caloriesBurned(70, NaN), /Distance must be a non-negative number/);
    });
  });
});
