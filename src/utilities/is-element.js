/**
 * Returns `true` if referenced object is DOM element.
 * NOTE: Simply checking if `obj` is instance of `HTMLElement` would not work
 * here, because that would exclude exotic elements, e.g. SVG polygons.
 * @param {*} obj
 * @returns {boolean}
 */
export default function (obj) {
  return (
    (obj != null) &&
    (typeof obj === 'object') &&
    (obj.nodeType === 1) &&
    (typeof obj.style === 'object') &&
    (typeof obj.ownerDocument === 'object')
  );
}