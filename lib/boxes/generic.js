'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


  // updates values of properties

  _class.prototype.set = function set() {
    var properties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if ((typeof properties === 'undefined' ? 'undefined' : _typeof(properties)) === 'object' && properties !== null) {
      var _arr = ['left', 'top', 'width', 'height'];

      for (var _i = 0; _i < _arr.length; _i++) {
        var property = _arr[_i];
        if (typeof properties[property] !== 'undefined') {
          this[property] = properties[property];
        }
      }
    }
    return this.get();
  };

  // returns object with all current properties


  _class.prototype.get = function get() {
    return {
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      width: this.width,
      height: this.height
    };
  };

  // In generic box, this does nothing. It is just a placeholder for method
  // that will be used to get current values for DOM element, collection, etc.


  _class.prototype.update = function update() {
    return this.set(this.input);
  };

  // adds padding around the whole box


  _class.prototype.pad = function pad() {
    var padding = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    this.left -= padding;
    this.top -= padding;
    this.width += padding * 2;
    this.height += padding * 2;
  };

  _class.prototype.moveTo = function moveTo(left, top) {
    if (typeof left === 'number') {
      this.left = left;
    }
    if (typeof top === 'number') {
      this.top = top;
    }
    return this.get();
  };

  _class.prototype.movePivotTo = function movePivotTo(left, top) {
    if (typeof left !== 'number') {
      left = this.pivot.left;
    }
    if (typeof top !== 'number') {
      top = this.pivot.top;
    }

    this.moveTo(left - this.width / 2, top - this.height / 2);

    return this.get();
  };

  _class.prototype.moveBy = function moveBy(horizontal, vertical) {
    if (typeof horizontal === 'number') {
      this.left = this.left + horizontal;
    }
    if (typeof vertical === 'number') {
      this.top = this.top + vertical;
    }
    return this.get();
  };

  _class.prototype.resizeTo = function resizeTo(width, height) {
    if (typeof width === 'number') {
      this.width = width;
    }
    if (typeof height === 'number') {
      this.height = height;
    }
    return this.get();
  };

  _class.prototype.resizeBy = function resizeBy(horizontal, vertical) {
    if (typeof horizontal === 'number') {
      this.width += horizontal;
    }
    if (typeof vertical === 'number') {
      this.height += vertical;
    }
    return this.get();
  };

  // for better debug


  _class.prototype.toString = function toString() {
    return JSON.stringify(this.get());
  };

  _createClass(_class, [{
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