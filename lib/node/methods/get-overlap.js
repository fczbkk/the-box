'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  // if boxes do not overlap, just return `null`...
  if ((0, _detectOverlap2.default)(a, b)) {
    return new _generic2.default({
      left: Math.max(a.left, b.left),
      top: Math.max(a.top, b.top),
      width: Math.min(a.right, b.right) - Math.max(a.left, b.left),
      height: Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top)
    });
  }

  return null;
};

var _detectOverlap = require('./detect-overlap');

var _detectOverlap2 = _interopRequireDefault(_detectOverlap);

var _generic = require('./../boxes/generic');

var _generic2 = _interopRequireDefault(_generic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }