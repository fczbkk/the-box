import Box from './generic';
import getBox from './../utilities/get-box';
import getBoundingBox from './../utilities/get-bounding-box';

// This handles either HTMLCollection (e.g. `getElementsByTagName()`)
// or NodeList (e.g. `querySelectorAll()`).

export default class extends Box {

  update () {
    // convert collection to array
    const elements_array = Array.prototype.slice.call(this.input);
    // convert all elements to box representations
    const boxes = elements_array.map(item => getBox(item));
    // find box encompassing all the elements
    const bounding_box = getBoundingBox(boxes);
    return this.set(bounding_box);
  }

}
