export default function (a, b, use_radian) {
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