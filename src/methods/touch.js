/**
 * Move box B so that it touches box A from the outside.
 * @param {Object} a
 * @param {Object} b
 * @param {null|string} horizontal Either `left` or `right`
 * @param {null|string} vertical Either `top` or `bottom`
 */
export default function touch (a, b, horizontal, vertical) {
  let left_position, top_position;

  switch (horizontal) {
    case 'left': {
      left_position = a.left - b.width;
      break;
    }
    case 'right': {
      left_position = a.right;
      break;
    }
    default: {
      break;
    }
  }

  switch (vertical) {
    case 'top': {
      top_position = a.top - b.height;
      break;
    }
    case 'bottom': {
      top_position = a.bottom;
      break;
    }
    default: {
      break;
    }
  }

  b.moveTo(left_position, top_position);
}