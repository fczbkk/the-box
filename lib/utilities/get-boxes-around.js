'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var result = [];
  var gaps = (0, _getGaps2.default)(a, b);

  if (gaps.horizontal.before > 0) {
    result.push({
      left: a.left,
      top: a.top,
      width: gaps.horizontal.before,
      height: a.height
    });
  }

  if (gaps.horizontal.after > 0) {
    result.push({
      left: b.right,
      top: a.top,
      width: gaps.horizontal.after,
      height: a.height
    });
  }

  if (gaps.vertical.before > 0) {
    result.push({
      left: a.left,
      top: a.top,
      width: a.width,
      height: gaps.vertical.before
    });
  }

  if (gaps.vertical.after > 0) {
    result.push({
      left: a.left,
      top: b.bottom,
      width: a.width,
      height: gaps.vertical.after
    });
  }

  // convert all results to Box objects
  result = result.map(function (item) {
    return (0, _getBox2.default)(item);
  });

  // ensure results are unique
  result = makeUnique(result);

  return result;
};

var _getGaps = require('./get-gaps');

var _getGaps2 = _interopRequireDefault(_getGaps);

var _getBox = require('./get-box');

var _getBox2 = _interopRequireDefault(_getBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// accepts list of Boxes, returns list of unique Boxes
function makeUnique(boxes) {
  // boxes converted to string, for easier comparison
  var ref = [];
  var result = [];

  boxes.forEach(function (item) {
    var item_string = item.toString();
    if (ref.indexOf(item_string) === -1) {
      ref.push(item_string);
      result.push(item);
    }
  });

  return result;
}

// Returns list of boxes that can be placed around `b` to fill entire `a`.
// Note: Returned boxes can be overlapping. This is intended to be used to find
// places to position another box, so that it fits inside `a` around `b`.
// If you are looking for boxes that seamlessly fill the space around `b`
// inside `a`, try this module:
// https://github.com/fczbkk/gap-grid