'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c) {
  return (0, _canContain2.default)(a, (0, _getBoundingBox2.default)([b, c]));
};

var _canContain = require('./can-contain');

var _canContain2 = _interopRequireDefault(_canContain);

var _getBoundingBox = require('./../utilities/get-bounding-box');

var _getBoundingBox2 = _interopRequireDefault(_getBoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }