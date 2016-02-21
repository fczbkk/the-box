import canContain from './can-contain';
import getGaps from './../utilities/get-gaps';

// Returns `true` if `c` can be positioned inside `a`
// so that it will not collide with `b`.
export default function (a, b, c) {
  // can `c` itself fit inside `a`?
  if (!canContain(a, c)) {return false;}

  const gaps = getGaps(a, b);
  return (
    (
      (c.width <= gaps.horizontal.before) ||
      (c.width <= gaps.horizontal.after)
    ) && (
      (c.height <= gaps.vertical.before) ||
      (c.height <= gaps.vertical.after)
    )
  );
}

