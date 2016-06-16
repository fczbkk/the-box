import getGaps from './get-gaps';
import getBox from './get-box';


// Returns list of boxes that can be placed around `b` to fill entire `a`.
// Note: Returned boxes can be overlapping. This is intended to be used to find
// places to position another box, so that it fits inside `a` around `b`.
// If you are looking for boxes that seamlessly fill the space around `b`
// inside `a`, try this module:
// https://github.com/fczbkk/gap-grid

export default function (a, b) {
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


// accepts list of Boxes, returns list of unique Boxes
function makeUnique (boxes) {
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