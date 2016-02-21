'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var boxes = arguments.length <= 0 || arguments[0] === undefined ? [{ left: 0, top: 0, right: 0, bottom: 0 }] : arguments[0];

  // object for remembering extreme values, starting with values of first box
  var extremes = {
    left: boxes[0].left,
    top: boxes[0].top,
    right: boxes[0].right,
    bottom: boxes[0].bottom
  };

  // go through each box, update extreme values where applicable
  boxes.forEach(function (box) {
    if (box.left < extremes.left) {
      extremes.left = box.left;
    }
    if (box.top < extremes.top) {
      extremes.top = box.top;
    }
    if (box.right > extremes.right) {
      extremes.right = box.right;
    }
    if (box.bottom > extremes.bottom) {
      extremes.bottom = box.bottom;
    }
  });

  // return Box object with extreme values
  return new _generic2.default({
    left: extremes.left,
    top: extremes.top,
    width: extremes.right - extremes.left,
    height: extremes.bottom - extremes.top
  });
};

var _generic = require('./../boxes/generic');

var _generic2 = _interopRequireDefault(_generic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }