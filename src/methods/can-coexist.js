import canContain from './can-contain';
import getBoundingBox from './../utilities/get-bounding-box';


// Returns `true` if both `b` and `c` can fit completely inside `a`
// without changing their respective positions.
export default function (a, b, c) {
  return canContain(a, getBoundingBox([b, c]));
}

