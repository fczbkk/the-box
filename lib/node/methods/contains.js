"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a.left <= b.left && a.top <= b.top && a.right >= b.right && a.bottom >= b.bottom;
};