import canContain from './can-contain';
import getBoundingBox from './../utilities/get-bounding-box';


// Returns `true` if both `b` and `c` can fit completely inside `a`
// without changing their respective positions.
/**
 * Returns `true` if both `b` and `c` can fit completely inside `a` without changing their respective positions. Handy when deciding if boxes can be fully scrolled into a viewport.
 * @param {Box} a
 * @param {Box} b
 * @param {Box} c
 * @returns {boolean}
 */
export default function canCoexist (a, b, c) {
  return canContain(a, getBoundingBox([b, c]));
}

