import Box from './generic';
import getScrollPosition from './../utilities/get-scroll-position';


/**
 * Class representing Box of viewport.
 * @name ViewportBox
 * @extends Box
 */
export default class extends Box {

  update () {
    const scroll_position = getScrollPosition();

    return this.set({
      left: scroll_position.left,
      top: scroll_position.top,
      width: (
        window.innerWidth ||
        document.documentElement.clientWidth ||
        0
      ),
      height: (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        0
      )
    });
  }

}
