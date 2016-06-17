import Box from './generic';
import getBox from './../utilities/get-box';
import getBoundingBox from './../utilities/get-bounding-box';

// This handles either HTMLCollection (e.g. `getElementsByTagName()`)
// or NodeList (e.g. `querySelectorAll()`).

export default class extends Box {

  update () {
    let boxes = [];
    for (let i = 0, j = this.input.length; i < j; i++) {
      boxes.push(getBox(this.input[i]));
    }
    const bounding_box = getBoundingBox(boxes);
    return this.set(bounding_box);
  }

}
