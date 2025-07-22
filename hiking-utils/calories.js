/**
 * Hiking Calories Calculator
 * Functions for estimating calories burned during hiking
 */

/**
 * Calculate estimated calories burned during hiking
 * @param {number} weightInKg - Weight of hiker in kilograms
 * @param {number} distanceInKm - Distance walked in kilometers
 * @returns {number} Estimated calories burned
 */
function caloriesBurned(weightInKg, distanceInKm) {
  // Handle edge cases
  if (typeof weightInKg !== "number" || isNaN(weightInKg) || weightInKg <= 0) {
    throw new Error("Weight must be a positive number");
  }

  if (typeof distanceInKm !== "number" || isNaN(distanceInKm) || distanceInKm < 0) {
    throw new Error("Distance must be a non-negative number");
  }

  // Formula: calories = weight * distance * 1.036
  return weightInKg * distanceInKm * 1.036;
}

module.exports = {
  caloriesBurned,
};
