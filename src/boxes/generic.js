/**
 * Data object representing a box, with basic properties.
 * @typedef {Object} BoxProperties
 * @type Object
 * @property {number} [left]
 * @property {number} [top]
 * @property {number} [right]
 * @property {number} [bottom]
 * @property {number} [width]
 * @property {number} [height]
 */


/**
 * Class representing an abstract Box.
 * @class
 * @name Box
 */
export default class Box {

  /**
   * Constructs generic Box object.
   * @param {BoxProperties} input
   */
  constructor (input = {}) {
    // default values
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.height = 0;

    this.input = input;
    this.update();
  }

  get right () {return this.left + this.width;}
  get bottom () {return this.top + this.height;}

  /**
   * @property {object} pivot
   * @property {number} pivot.left - Left position of Box's pivot.
   * @property {number} pivot.top - Top position of Box's pivot.
   */
  get pivot () {
    return {
      left: this.left + (this.width / 2),
      top: this.top + (this.height / 2)
    }
  }

  /**
   * Updates properties of the box
   * @param {BoxProperties} properties
   * @returns {BoxProperties}
   */
  set (properties = {}) {
    if (typeof properties === 'object' && properties !== null) {
      for (let property of ['left', 'top', 'width', 'height']) {
        if (typeof properties[property] !== 'undefined') {
          this[property] = properties[property];
        }
      }
    }
    return this.get();
  }

  // returns object with all current properties
  /**
   * Gets current properties of the box.
   * @returns {BoxProperties}
   */
  get () {
    return {
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      width: this.width,
      height: this.height
    }
  }

  // In generic box, this does nothing. It is just a placeholder for method
  // that will be used to get current values for DOM element, collection, etc.
  /**
   * Updates properties of the Box according to the Box's input. This doesn't really do anything in Generic Box. But it recalculates box properties for DOM element, collection, viewport, etc.
   * @returns {BoxProperties}
   */
  update () {
    return this.set(this.input);
  }


  /**
   * Adds padding to the whole box.
   * @param {number} [padding=0]
   */
  pad (padding = 0) {
    this.padHorizontal(padding);
    this.padVertical(padding);
    return this.get();
  }


  /**
   * Adds padding to the left and right side of box.
   * @param {number} [padding=0]
   */
  padHorizontal (padding = 0) {
    this.left -= padding;
    this.width += padding * 2;
    return this.get();
  }


  /**
   * Adds padding to the top and bottom side of box.
   * @param {number} [padding=0]
   */
  padVertical (padding = 0) {
    this.top -= padding;
    this.height += padding * 2;
    return this.get();
  }


  /**
   * Move box to a specific location
   * @param {number} [left]
   * @param {number} [top]
   * @returns {Box}
   */
  moveTo (left, top) {
    if (typeof left === 'number') {
      this.left = left;
    }
    if (typeof top === 'number') {
      this.top = top;
    }
    return this.get();
  }


  /**
   * Moves pivot of the box to a specific location, recalculates the other properties accordingly.
   * @param {number} [left]
   * @param {number} [top]
   * @returns {BoxProperties}
   */
  movePivotTo (left, top) {
    if (typeof left !== 'number') {
      left = this.pivot.left;
    }
    if (typeof top !== 'number') {
      top = this.pivot.top;
    }

    this.moveTo(
      left - (this.width / 2),
      top - (this.height / 2)
    );

    return this.get();
  };


  /**
   * Moves the box by a distance.
   * @param {number} [horizontal]
   * @param {number} [vertical]
   * @returns {BoxProperties}
   */
  moveBy (horizontal, vertical) {
    if (typeof horizontal === 'number') {
      this.left = this.left + horizontal;
    }
    if (typeof vertical === 'number') {
      this.top = this.top + vertical;
    }
    return this.get();
  }


  /**
   * Resizes the box to a specific size.
   * @param [width]
   * @param [height]
   * @returns {BoxProperties}
   */
  resizeTo (width, height) {
    if (typeof width === 'number') {
      this.width = width;
    }
    if (typeof height === 'number') {
      this.height = height;
    }
    return this.get();
  }


  /**
   * Resizes the box by a specific value.
   * @param {number} [horizontal]
   * @param {number} [vertical]
   * @returns {BoxProperties}
   */
  resizeBy (horizontal, vertical) {
    if (typeof horizontal === 'number') {
      this.width += horizontal;
    }
    if (typeof vertical === 'number') {
      this.height += vertical;
    }
    return this.get();
  }

  /**
   * Returns text representation of Box properties. Used for debugging.
   * @param {boolean} [pretty=false] If `true`, returns pretty formatted string.
   * @returns {string}
   */
  toString (pretty = false) {
    const indent = pretty === true ? 2 : 0;
    return JSON.stringify(this.get(), null, indent);
  }

}
