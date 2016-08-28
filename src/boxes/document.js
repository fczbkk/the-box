import Box from './generic';


/**
 * Class representing Box of whole document.
 * @name DocumentBox
 * @extends Box
 */
export default class extends Box {

  update () {
    return this.set({
      left: 0,
      top: 0,
      width: Math.max(
        document.body.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.clientWidth,
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
        0
      ),
      height: Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        0
      )
    });
  }

}
