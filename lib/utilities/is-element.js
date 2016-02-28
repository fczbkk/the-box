'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                   * Returns `true` if referenced object is DOM element.
                                                                                                                                                                                                                                                   * NOTE: Simply checking if `obj` is instance of `HTMLElement` would not work
                                                                                                                                                                                                                                                   * here, because that would exclude exotic elements, e.g. SVG polygons.
                                                                                                                                                                                                                                                   * @param {*} obj
                                                                                                                                                                                                                                                   * @returns {boolean}
                                                                                                                                                                                                                                                   */


exports.default = function (obj) {
  return obj != null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.nodeType === 1 && _typeof(obj.style) === 'object' && _typeof(obj.ownerDocument) === 'object';
};