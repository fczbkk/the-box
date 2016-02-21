'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var difference = (0, _getDifference2.default)(a, b);

  var result = {
    horizontal: Math.max(0, difference.horizontal),
    vertical: Math.max(0, difference.vertical),
    pivot: (0, _getHypotenuse2.default)(a.pivot.left - b.pivot.left, a.pivot.top - b.pivot.top)
  };

  result.direct = (0, _getHypotenuse2.default)(result.horizontal, result.vertical);

  return result;
};

var _getDifference = require('./get-difference');

var _getDifference2 = _interopRequireDefault(_getDifference);

var _getHypotenuse = require('./../utilities/get-hypotenuse');

var _getHypotenuse2 = _interopRequireDefault(_getHypotenuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }