import getDistance from './../methods/get-distance';
import getOverlap from './../methods/get-overlap';
import detectOverlap from './../methods/detect-overlap';
import getPivotAngle from './../methods/get-pivot-angle';
import moveInside from './../methods/move-inside';
import contains from './../methods/contains';
import canContain from './../methods/can-contain';
import canCoexist from './../methods/can-coexist';
import canFitAround from './../methods/can-fit-around';
import findClosest from './../methods/find-closest';
import fitAround from './../methods/fit-around';


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
    for (let property of ['left', 'top', 'width', 'height']) {
      if (typeof properties[property] !== 'undefined') {
        this[property] = properties[property];
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


  // adds padding around the whole box
  pad (padding = 0) {
    this.left -= padding;
    this.top -= padding;
    this.width += padding * 2;
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

  getDistance (box) {return getDistance(this, box);}
  getOverlap (box) {return getOverlap(this, box);}
  detectOverlap (box) {return detectOverlap(this, box);}
  getPivotAngle (box) {return getPivotAngle(this, box);}
  moveInside (box) {return moveInside(this, box);}
  contains (box) {return contains(this, box);}
  canContain (box) {return canContain(this, box);}
  canCoexist (a, b) {return canCoexist(this, a, b);}
  canFitAround (a, b) {return canFitAround(this, a, b);}
  findClosest (boxes, prop) {return findClosest(this, boxes, prop);}
  fitAround (a, b) {return fitAround(this, a, b);}

  // for better debug
  toString () {
    return JSON.stringify(this.get());
  }

}
