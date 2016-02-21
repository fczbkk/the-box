/**
 * Returns `true` if box `b` is completely inside box `a`.
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */
export default function (a, b) {
  return (
    (a.left <= b.left) &&
    (a.top <= b.top) &&
    (a.right >= b.right) &&
    (a.bottom >= b.bottom)
  );
}