'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var bounding_box = (0, _getBoundingBox2.default)([a, b]);
  return {
    horizontal: bounding_box.width - a.width - b.width,
    vertical: bounding_box.height - a.height - b.height
  };
};

var _getBoundingBox = require('./../utilities/get-bounding-box');

var _getBoundingBox2 = _interopRequireDefault(_getBoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }