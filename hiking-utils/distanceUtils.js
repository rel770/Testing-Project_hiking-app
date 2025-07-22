/**
 * Hiking Distance Utilities
 * Functions for converting and calculating distances for hiking routes
 */

/**
 * Convert kilometers to meters
 * @param {number} kilometers - Distance in kilometers
 * @returns {number} Distance in meters
 */
function kmToMeters(kilometers) {
  // Handle edge cases
  if (typeof kilometers !== "number" || isNaN(kilometers)) {
    throw new Error("Input must be a valid number");
  }

  return kilometers * 1000;
}

module.exports = {
  kmToMeters,
};
