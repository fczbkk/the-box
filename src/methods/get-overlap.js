import detectOverlap from './detect-overlap';
import BoxGeneric from './../boxes/generic';

// Returns box for an area where both boxes are overlapping.
// Returns `null` if boxes do not overlap.
export default function (a, b) {
  // if boxes do not overlap, just return `null`...
  if (detectOverlap(a, b)) {
    return new BoxGeneric({
      left: Math.max(a.left, b.left),
      top: Math.max(a.top, b.top),
      width: Math.min(a.right, b.right) - Math.max(a.left, b.left),
      height: Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top)
    });
  }

  return null;
}