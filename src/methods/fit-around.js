import getBox from './../utilities/get-box';
import getGaps from './../utilities/get-gaps';
import canContain from './can-contain';
import canFitAround from './can-fit-around';
import findClosest from './find-closest';
import moveInside from './move-inside';

// Change position of `c` so that it is positioned inside `a` without
// colliding with `b`. If it is not possible, position of `c` does not change.
// It will move the box to a new position closest to its original position.
export default function (a, b, c) {
  if (canFitAround(a, b, c)) {
    // find available targets
    const gaps = getGaps(a, b);

    const targets = [
      getBox({
        left: a.left,
        top: a.top,
        width: gaps.horizontal.before,
        height: a.height
      }),
      getBox({
        left: a.right - gaps.horizontal.after,
        top: a.top,
        width: gaps.horizontal.after,
        height: a.height
      }),
      getBox({
        left: a.left,
        top: a.top,
        width: a.width,
        height: gaps.vertical.before
      }),
      getBox({
        left: a.left,
        top: a.bottom - gaps.horizontal.after,
        width: a.width,
        height: gaps.vertical.after
      })
    ];

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