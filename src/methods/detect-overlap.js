import getDifference from './get-difference';

// returns true if boxes overlap at least partially
export default function (a, b) {
  var difference = getDifference(a, b);
  return (difference.horizontal < 0) && (difference.vertical < 0);
}