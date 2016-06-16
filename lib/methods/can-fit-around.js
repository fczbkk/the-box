'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c) {
  // can `c` itself fit inside `a`?
  if (!(0, _canContain2.default)(a, c)) {
    return false;
  }

  var result = false;

  // get all boxes that can fit around `b` inside `a` and check, if `c` can
  // fit any of them
  (0, _getBoxesAround2.default)(a, b).forEach(function (item) {
    if ((0, _canContain2.default)(item, c)) {
      result = true;
    }
  });

  return result;
};

var _canContain = require('./can-contain');

var _canContain2 = _interopRequireDefault(_canContain);

var _getBoxesAround = require('./../utilities/get-boxes-around');

var _getBoxesAround2 = _interopRequireDefault(_getBoxesAround);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }