/**
 * Returns `true` if `b` can fit completely inside `a`.
 * @param {Box} a
 * @param {Box} b
 * @returns {boolean}
 */
export default function canContain (a, b) {
  return (
    (a.width >= b.width) &&
    (a.height >= b.height)
  );
}