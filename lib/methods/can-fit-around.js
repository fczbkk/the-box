'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c) {
  // can `c` itself fit inside `a`?
  if (!(0, _canContain2.default)(a, c)) {
    return false;
  }

  var gaps = (0, _getGaps2.default)(a, b);
  return (c.width <= gaps.horizontal.before || c.width <= gaps.horizontal.after) && (c.height <= gaps.vertical.before || c.height <= gaps.vertical.after);
};

var _canContain = require('./can-contain');

var _canContain2 = _interopRequireDefault(_canContain);

var _getGaps = require('./../utilities/get-gaps');

var _getGaps2 = _interopRequireDefault(_getGaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }