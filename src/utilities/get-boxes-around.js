import getGaps from './get-gaps';
import getBox from './get-box';


/**
 * Returns list of boxes that can be placed around `b` to fill entire `a`.
 * NOTE: Returned boxes can be overlapping. This is intended to be used to find places to position another box, so that it fits inside `a`, without coliding with `b`. If you are looking for boxes that seamlessly fill the space around `b` inside `a`, try this module instead: https://github.com/fczbkk/gap-grid
 * @param {Box} a
 * @param {Box} b
 * @returns {Array.<Box>}
 * @ignore
 */
export default function getBoxesAround (a, b) {
  var result = [];
  var gaps = getGaps(a, b);

  if (gaps.horizontal.before > 0) {
    result.push({
      left: a.left,
      top: a.top,
      width: gaps.horizontal.before,
      height: a.height
    });
  }

  if (gaps.horizontal.after > 0) {
    result.push({
      left: b.right,
      top: a.top,
      width: gaps.horizontal.after,
      height: a.height
    });
  }

  if (gaps.vertical.before > 0) {
    result.push({
      left: a.left,
      top: a.top,
      width: a.width,
      height: gaps.vertical.before
    });
  }

  if (gaps.vertical.after > 0) {
    result.push({
      left: a.left,
      top: b.bottom,
      width: a.width,
      height: gaps.vertical.after
    });
  }

  // convert all results to Box objects
  result = result.map(item => getBox(item));

  // ensure results are unique
  result = makeUnique(result);

  return result;
}


/**
 * Accepts list of Boxes, returns list of unique Boxes.
 * @param {Array.<Box>} [boxes=[]]
 * @returns {Array.<Box>}
 * @ignore
 */
function makeUnique (boxes = []) {
  // boxes converted to string, for easier comparison
  const ref = [];
  const result = [];

  boxes.forEach((item) => {
    const item_string = item.toString();
    if (ref.indexOf(item_string) === -1) {
      ref.push(item_string);
      result.push(item);
    }
  });

  return result;
}