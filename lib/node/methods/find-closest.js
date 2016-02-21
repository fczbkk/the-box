'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  var boxes = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
  var property = arguments.length <= 2 || arguments[2] === undefined ? 'direct' : arguments[2];

  var lowest_distance = Number.MAX_VALUE;
  var result = null;

  boxes.forEach(function (box) {
    var distance = (0, _getDistance2.default)(a, box)[property];
    if (distance < lowest_distance) {
      result = box;
      lowest_distance = distance;
    }
  });

  return result;
};

var _getDistance = require('./get-distance');

var _getDistance2 = _interopRequireDefault(_getDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }