import BoxGeneric from './../boxes/generic';


/**
 * Returns Box object encompassing all provided boxes. If no boxes are provided, returns zero box.
 * @param {Array.<Box>} [boxes=[]]
 * @returns {Box} generic box
 * @ignore
 */
export default function (boxes = []) {
  // if collection did not match any elements, return a zero box
  if (boxes.length === 0) {
    boxes = [{left: 0, top: 0, right: 0, bottom: 0}];
  }

  // object for remembering extreme values, starting with values of first box
  var extremes = {
    left: boxes[0].left,
    top: boxes[0].top,
    right: boxes[0].right,
    bottom: boxes[0].bottom
  };

  // go through each box, update extreme values where applicable
  boxes.forEach((box) => {
    if (box.left < extremes.left) {extremes.left = box.left;}
    if (box.top < extremes.top) {extremes.top = box.top;}
    if (box.right > extremes.right) {extremes.right = box.right;}
    if (box.bottom > extremes.bottom) {extremes.bottom = box.bottom;}
  });

  // return Box object with extreme values
  return new BoxGeneric({
    left: extremes.left,
    top: extremes.top,
    width: extremes.right - extremes.left,
    height: extremes.bottom - extremes.top
  });
}