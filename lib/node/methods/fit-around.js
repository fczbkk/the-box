'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c) {
  if ((0, _canFitAround2.default)(a, b, c)) {
    // find available targets
    var gaps = (0, _getGaps2.default)(a, b);

    var targets = [(0, _getBox2.default)({
      left: a.left,
      top: a.top,
      width: gaps.horizontal.before,
      height: a.height
    }), (0, _getBox2.default)({
      left: a.right - gaps.horizontal.after,
      top: a.top,
      width: gaps.horizontal.after,
      height: a.height
    }), (0, _getBox2.default)({
      left: a.left,
      top: a.top,
      width: a.width,
      height: gaps.vertical.before
    }), (0, _getBox2.default)({
      left: a.left,
      top: a.bottom - gaps.horizontal.after,
      width: a.width,
      height: gaps.vertical.after
    })];

    var valid_targets = targets.filter(function (target) {
      return (0, _canContain2.default)(target, c);
    });

    // choose closest targets and move inside it, if possible
    var target = (0, _findClosest2.default)(c, valid_targets, 'direct');

    if (target !== null) {
      (0, _moveInside2.default)(target, c);
    }
  }
};

var _getBox = require('./../utilities/get-box');

var _getBox2 = _interopRequireDefault(_getBox);

var _getGaps = require('./../utilities/get-gaps');

var _getGaps2 = _interopRequireDefault(_getGaps);

var _canContain = require('./can-contain');

var _canContain2 = _interopRequireDefault(_canContain);

var _canFitAround = require('./can-fit-around');

var _canFitAround2 = _interopRequireDefault(_canFitAround);

var _findClosest = require('./find-closest');

var _findClosest2 = _interopRequireDefault(_findClosest);

var _moveInside = require('./move-inside');

var _moveInside2 = _interopRequireDefault(_moveInside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }