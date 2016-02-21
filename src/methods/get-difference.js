import getBoundingBox from './../utilities/get-bounding-box';


// Returns horizontal and vertical difference between two boxes.
// Positive values mean that boxes are apart, zero value means boxes
// are touching, negative value means boxes are overlapping.
export default function (a, b) {
  var bounding_box = getBoundingBox([a, b]);
  return {
    horizontal: bounding_box.width - a.width - b.width,
    vertical: bounding_box.height - a.height - b.height
  }
}