import getBoxesAround from './../utilities/get-boxes-around';
import canContain from './can-contain';
import canFitAround from './can-fit-around';
import findClosest from './find-closest';
import moveInside from './move-inside';


/**
 * Changes positino of `c` so that it is positioned inside `a` without colliding with `b`. If it is not possible, position of `c` is unchanged. It will move the box to a new position closest to its original position.
 * @param {Box} a
 * @param {Box} b
 * @param {Box} c
 */
export default function fitAround (a, b, c) {
  if (canFitAround(a, b, c)) {
    // find available targets
    const targets = getBoxesAround(a, b);
    const valid_targets = targets.filter(function (target) {
      return canContain(target, c);
    });

    // choose closest targets and move inside it, if possible
    const target = findClosest(c, valid_targets, 'direct');

    if (target !== null) {
      moveInside(target, c);
    }
  }
}