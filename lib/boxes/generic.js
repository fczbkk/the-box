'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
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
*/

var _class = function () {
  function _class() {
    var input = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, _class);

    // default values
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.height = 0;

    this.input = input;
    this.update();
  }

  // calculated properties


  _createClass(_class, [{
    key: 'set',


    // updates values of properties
    value: function set() {
      var properties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var _arr = ['left', 'top', 'width', 'height'];

      for (var _i = 0; _i < _arr.length; _i++) {
        var property = _arr[_i];
        if (typeof properties[property] !== 'undefined') {
          this[property] = properties[property];
        }
      }
      return this.get();
    }

    // returns object with all current properties

  }, {
    key: 'get',
    value: function get() {
      return {
        left: this.left,
        top: this.top,
        right: this.right,
        bottom: this.bottom,
        width: this.width,
        height: this.height
      };
    }

    // In generic box, this does nothing. It is just a placeholder for method
    // that will be used to get current values for DOM element, collection, etc.

  }, {
    key: 'update',
    value: function update() {
      return this.set(this.input);
    }

    // adds padding around the whole box

  }, {
    key: 'pad',
    value: function pad() {
      var padding = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      this.left -= padding;
      this.top -= padding;
      this.width += padding * 2;
      this.height += padding * 2;
    }
  }, {
    key: 'moveTo',
    value: function moveTo(left, top) {
      if (typeof left === 'number') {
        this.left = left;
      }
      if (typeof top === 'number') {
        this.top = top;
      }
      return this.get();
    }
  }, {
    key: 'moveBy',
    value: function moveBy(horizontal, vertical) {
      if (typeof horizontal === 'number') {
        this.left = this.left + horizontal;
      }
      if (typeof vertical === 'number') {
        this.top = this.top + vertical;
      }
      return this.get();
    }
  }, {
    key: 'resizeTo',
    value: function resizeTo(width, height) {
      if (typeof width === 'number') {
        this.width = width;
      }
      if (typeof height === 'number') {
        this.height = height;
      }
      return this.get();
    }
  }, {
    key: 'resizeBy',
    value: function resizeBy(horizontal, vertical) {
      if (typeof horizontal === 'number') {
        this.width += horizontal;
      }
      if (typeof vertical === 'number') {
        this.height += vertical;
      }
      return this.get();
    }

    /*
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
    */

    // for better debug

  }, {
    key: 'toString',
    value: function toString() {
      return JSON.stringify(this.get());
    }
  }, {
    key: 'right',
    get: function get() {
      return this.left + this.width;
    }
  }, {
    key: 'bottom',
    get: function get() {
      return this.top + this.height;
    }
  }, {
    key: 'pivot',
    get: function get() {
      return {
        left: this.left + this.width / 2,
        top: this.top + this.height / 2
      };
    }
  }]);

  return _class;
}();

exports.default = _class;