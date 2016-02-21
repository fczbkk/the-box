/**
 * Find length of hypotenuse in right-angled triangle.
 * @param {number} x length of side of triangle attached to right angle
 * @param {number} y length of side of triangle attached to right angle
 * @returns {number} length of side of triangle opposite to right angle
 */
export default function(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}