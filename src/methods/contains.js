/**
 * Returns `true` if box `b` is completely inside box `a`.
 * @param {Box} a
 * @param {Box} b
 * @returns {boolean}
 */
export default function contains (a, b) {
  return (
    (a.left <= b.left) &&
    (a.top <= b.top) &&
    (a.right >= b.right) &&
    (a.bottom >= b.bottom)
  );
}