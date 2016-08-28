/**
 * Returns angle between pivots of both boxes. Can be used with [Angle JS](https://github.com/fczbkk/angle-js) to determine direction of one box relative to another.
 * @param {Box} a
 * @param {Box} b
 * @param {boolean} [use_radian=false] If `true`, returns result in radians, otherwise in degrees.
 * @returns {number}
 */
export default function getPivotAngle (a, b, use_radian = false) {
  // angle in radians
  var result = Math.atan2(
    b.pivot.top - a.pivot.top,
    b.pivot.left - a.pivot.left
  );

  if (use_radian) {
    return result;
  }

  // convert to degrees
  return result * (180 / Math.PI);
}