export default class {

  constructor (input = {}) {
    // default values
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.height = 0;

    this.input = input;
    this.update();
  }

  // calculated properties
  get right () {return this.left + this.width;}
  get bottom () {return this.top + this.height;}

  get pivot () {
    return {
      left: this.left + (this.width / 2),
      top: this.top + (this.height / 2)
    }
  }

  // updates values of properties
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
  update () {
    return this.set(this.input);
  }


  /**
   * Adds padding to the whole box.
   * @param {number} padding
   */
  pad (padding = 0) {
    this.padHorizontal(padding);
    this.padVertical(padding);
  }


  /**
   * Adds padding to the left and right side of box.
   * @param {number} padding
   */
  padHorizontal (padding = 0) {
    this.left -= padding;
    this.width += padding * 2;
  }


  /**
   * Adds padding to the top and bottom side of box.
   * @param {number} padding
   */
  padVertical (padding = 0) {
    this.top -= padding;
    this.height += padding * 2;
  }


  moveTo (left, top) {
    if (typeof left === 'number') {
      this.left = left;
    }
    if (typeof top === 'number') {
      this.top = top;
    }
    return this.get();
  }


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


  moveBy (horizontal, vertical) {
    if (typeof horizontal === 'number') {
      this.left = this.left + horizontal;
    }
    if (typeof vertical === 'number') {
      this.top = this.top + vertical;
    }
    return this.get();
  }


  resizeTo (width, height) {
    if (typeof width === 'number') {
      this.width = width;
    }
    if (typeof height === 'number') {
      this.height = height;
    }
    return this.get();
  }


  resizeBy (horizontal, vertical) {
    if (typeof horizontal === 'number') {
      this.width += horizontal;
    }
    if (typeof vertical === 'number') {
      this.height += vertical;
    }
    return this.get();
  }

  // for better debug
  toString () {
    return JSON.stringify(this.get());
  }

}
