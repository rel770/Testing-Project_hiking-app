/**
 * Tests for Distance Utilities
 * Using Node.js v22 built-in test runner
 */

const { test, describe } = require("node:test");
const assert = require("node:assert");
const { kmToMeters } = require("./distanceUtils.js");

describe("Distance Utilities Tests", () => {
  describe("kmToMeters", () => {
    test("should convert positive kilometers to meters correctly", () => {
      assert.strictEqual(kmToMeters(2), 2000);
      assert.strictEqual(kmToMeters(1), 1000);
      assert.strictEqual(kmToMeters(7.7), 7700);
    });

    test("should handle zero input", () => {
      assert.strictEqual(kmToMeters(0), 0);
    });

    test("should handle negative input", () => {
      assert.strictEqual(kmToMeters(-2), -2000);
      assert.strictEqual(kmToMeters(-1.5), -1500);
    });

    test("should throw error for invalid input", () => {
      assert.throws(() => kmToMeters("invalid"), /Input must be a valid number/);
      assert.throws(() => kmToMeters(NaN), /Input must be a valid number/);
      assert.throws(() => kmToMeters(undefined), /Input must be a valid number/);
    });
  });
});
