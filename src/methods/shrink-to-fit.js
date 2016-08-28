/**
 * Adjusts size of `b` so that it fits `a` while keeping the original aspect ratio. Does nothing if `b` is smaller than `a`.
 * @param {Box} a
 * @param {Box} b
 */
export default function shrinkToFit (a, b) {
  if (a.width < b.width) {
    b.height = adjustByRatio(a.width, b.width, b.height);
    b.width = a.width;
  }
  if (a.height < b.height) {
    b.width = adjustByRatio(a.height, b.height, b.width);
    b.height = a.height;
  }
}


/**
 * Returns `secondary` adjusted by the same ratio as when resizing `primary` to `target`.
 * @param {number} target
 * @param {number} primary
 * @param {number} secondary
 * @returns {number}
 * @ignore
 */
function adjustByRatio (target, primary, secondary) {
  const ratio = target / primary;
  return secondary * ratio;
}