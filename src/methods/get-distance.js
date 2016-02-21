import getDifference from './get-difference';
import getHypotenuse from './../utilities/get-hypotenuse';


// Returns horizontal, vertical, direct and pivot distance between two boxes.
// If boxes overlap, returns zero values.
export default function (a, b) {
  var difference = getDifference(a, b);

  var result = {
    horizontal: Math.max(0, difference.horizontal),
    vertical: Math.max(0, difference.vertical),
    pivot: getHypotenuse(
      (a.pivot.left - b.pivot.left), (a.pivot.top - b.pivot.top)
    )
  };

  result.direct = getHypotenuse(result.horizontal, result.vertical);

  return result;
}