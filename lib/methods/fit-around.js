'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c) {
  if ((0, _canFitAround2.default)(a, b, c)) {

    // find available targets
    var targets = (0, _getBoxesAround2.default)(a, b);
    targets.forEach(drawDebugElement);

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

var _getBoxesAround = require('./../utilities/get-boxes-around');

var _getBoxesAround2 = _interopRequireDefault(_getBoxesAround);

var _canContain = require('./can-contain');

var _canContain2 = _interopRequireDefault(_canContain);

var _canFitAround = require('./can-fit-around');

var _canFitAround2 = _interopRequireDefault(_canFitAround);

var _findClosest = require('./find-closest');

var _findClosest2 = _interopRequireDefault(_findClosest);

var _moveInside = require('./move-inside');

var _moveInside2 = _interopRequireDefault(_moveInside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function drawDebugElement(box) {
  var elm = document.createElement('div');
  elm.style.position = 'absolute';
  elm.style.top = box.top + 'px';
  elm.style.left = box.left + 'px';
  elm.style.width = box.width + 'px';
  elm.style.height = box.height + 'px';
  elm.style.border = '1px solid green';
  document.body.appendChild(elm);
}

// Change position of `c` so that it is positioned inside `a` without
// colliding with `b`. If it is not possible, position of `c` does not change.
// It will move the box to a new position closest to its original position.