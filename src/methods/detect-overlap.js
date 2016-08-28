import getDifference from './get-difference';

/**
 * Returns true if both boxes overlap at least partially.
 * @param {Box} a
 * @param {Box} b
 * @returns {boolean}
 */
export default function detectOverlap (a, b) {
  var difference = getDifference(a, b);
  return (difference.horizontal < 0) && (difference.vertical < 0);
}