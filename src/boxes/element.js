import Box from './generic';
import getScrollPosition from './../utilities/get-scroll-position';


export default class extends Box {

  update () {
    const bounding_box = this.input.getBoundingClientRect();
    const scroll_position = getScrollPosition();
    return this.set({
      width: bounding_box.width,
      height: bounding_box.height,
      left: scroll_position.left + bounding_box.left,
      top: scroll_position.top + bounding_box.top
    });
  }

}
