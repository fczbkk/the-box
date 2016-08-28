/**
 * Adjusts position of `b` so that it is aligned to `a`.
 * @param {Box} a
 * @param {Box} b
 * @param {string} [horizontal] - 'left', 'right' or 'center'
 * @param {string} [vertical] - 'top', 'bottom' or 'center
 */
export default function align (a, b, horizontal, vertical) {

  switch (horizontal) {
    case 'left':
      b.left = a.left;
      break;
    case 'right':
      b.left = a.left + a.width - b.width;
      break;
    case 'center':
      b.left = (a.left + (a.width / 2)) - (b.width / 2);
      break;
    default:
      break;
  }

  switch (vertical) {
    case 'top':
      b.top = a.top;
      break;
    case 'bottom':
      b.top = a.top + a.height - b.height;
      break;
    case 'center':
      b.top = (a.top + (a.height / 2)) - (b.height / 2);
      break;
    default:
      break;
  }

}