import getDistance from './get-distance';

/**
 * Returns box that is closest to `a`.
 * @param {Box} a
 * @param {Array.<Box>} [boxes=[]]
 * @param {string} [property='direct'] - Box's distance property (`horizontal`, `vertical`, `direct` or `pivot`) that will be used to evaluate ([see `getDistance()`]({@link getDistance})).
 * @returns {Box|null}
 */
export default function findClosest (a, boxes = [], property = 'direct') {
  var lowest_distance = Number.MAX_VALUE;
  var result = null;

  boxes.forEach((box) => {
    var distance = getDistance(a, box)[property];
    if (distance < lowest_distance) {
      result = box;
      lowest_distance = distance;
    }
  });

  return result;
}