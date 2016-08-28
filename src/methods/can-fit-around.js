import canContain from './can-contain';
import getBoxesAround from './../utilities/get-boxes-around';

/**
 * Returns `true` if `c` can be positioned inside `a` so that it will not collide with `b`.
 * @param {Box} a
 * @param {Box} b
 * @param {Box} c
 * @returns {boolean}
 */
export default function canFitAround (a, b, c) {
  // can `c` itself fit inside `a`?
  if (!canContain(a, c)) {return false;}

  let result = false;

  // get all boxes that can fit around `b` inside `a` and check, if `c` can
  // fit any of them
  getBoxesAround(a, b).forEach((item) => {
    if (canContain(item, c)) {
      result = true;
    }
  });

  return result;
}

