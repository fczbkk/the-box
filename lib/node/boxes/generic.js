'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getDistance2 = require('./../methods/get-distance');

var _getDistance3 = _interopRequireDefault(_getDistance2);

var _getOverlap2 = require('./../methods/get-overlap');

var _getOverlap3 = _interopRequireDefault(_getOverlap2);

var _detectOverlap2 = require('./../methods/detect-overlap');

var _detectOverlap3 = _interopRequireDefault(_detectOverlap2);

var _getPivotAngle2 = require('./../methods/get-pivot-angle');

var _getPivotAngle3 = _interopRequireDefault(_getPivotAngle2);

var _moveInside2 = require('./../methods/move-inside');

var _moveInside3 = _interopRequireDefault(_moveInside2);

var _contains2 = require('./../methods/contains');

var _contains3 = _interopRequireDefault(_contains2);

var _canContain2 = require('./../methods/can-contain');

var _canContain3 = _interopRequireDefault(_canContain2);

var _canCoexist2 = require('./../methods/can-coexist');

var _canCoexist3 = _interopRequireDefault(_canCoexist2);

var _canFitAround2 = require('./../methods/can-fit-around');

var _canFitAround3 = _interopRequireDefault(_canFitAround2);

var _findClosest2 = require('./../methods/find-closest');

var _findClosest3 = _interopRequireDefault(_findClosest2);

var _fitAround2 = require('./../methods/fit-around');

var _fitAround3 = _interopRequireDefault(_fitAround2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  }, {
    key: 'getDistance',
    value: function getDistance(box) {
      return (0, _getDistance3.default)(this, box);
    }
  }, {
    key: 'getOverlap',
    value: function getOverlap(box) {
      return (0, _getOverlap3.default)(this, box);
    }
  }, {
    key: 'detectOverlap',
    value: function detectOverlap(box) {
      return (0, _detectOverlap3.default)(this, box);
    }
  }, {
    key: 'getPivotAngle',
    value: function getPivotAngle(box) {
      return (0, _getPivotAngle3.default)(this, box);
    }
  }, {
    key: 'moveInside',
    value: function moveInside(box) {
      return (0, _moveInside3.default)(this, box);
    }
  }, {
    key: 'contains',
    value: function contains(box) {
      return (0, _contains3.default)(this, box);
    }
  }, {
    key: 'canContain',
    value: function canContain(box) {
      return (0, _canContain3.default)(this, box);
    }
  }, {
    key: 'canCoexist',
    value: function canCoexist(a, b) {
      return (0, _canCoexist3.default)(this, a, b);
    }
  }, {
    key: 'canFitAround',
    value: function canFitAround(a, b) {
      return (0, _canFitAround3.default)(this, a, b);
    }
  }, {
    key: 'findClosest',
    value: function findClosest(boxes, prop) {
      return (0, _findClosest3.default)(this, boxes, prop);
    }
  }, {
    key: 'fitAround',
    value: function fitAround(a, b) {
      return (0, _fitAround3.default)(this, a, b);
    }

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