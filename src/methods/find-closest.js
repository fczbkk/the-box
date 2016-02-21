import getDistance from './get-distance';

// Returns box that is closest to `a`.
export default function (a, boxes = [], property = 'direct') {
  var lowest_distance = Number.MAX_VALUE;
  var result = null;

  boxes.forEach((box) => {
    var distance = getDistance(a, box)[property];
    if (distance < lowest_distance) {
      result = box;
      lowest_distance = distance;
    }
  });

  return result;
}