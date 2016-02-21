'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var difference = (0, _getDifference2.default)(a, b);
  return difference.horizontal < 0 && difference.vertical < 0;
};

var _getDifference = require('./get-difference');

var _getDifference2 = _interopRequireDefault(_getDifference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }