'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBox;

var _iselement = require('iselement');

var _iselement2 = _interopRequireDefault(_iselement);

var _generic = require('./../boxes/generic');

var _generic2 = _interopRequireDefault(_generic);

var _element = require('./../boxes/element');

var _element2 = _interopRequireDefault(_element);

var _collection = require('./../boxes/collection');

var _collection2 = _interopRequireDefault(_collection);

var _document = require('./../boxes/document');

var _document2 = _interopRequireDefault(_document);

var _viewport = require('./../boxes/viewport');

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDocument(input) {
  return input === 'document' || input === document || input === document.body || input === document.documentElement;
}

function isCollection(input) {
  var string_representation = Object.prototype.toString.call(input);
  return string_representation === '[object NodeList]' || string_representation === '[object HTMLCollection]' || string_representation === '[object Array]';
}

/**
 * Checks for the type of `input` and returns appropriate Box object.
 * @param {*} [input]
 * @returns {Object} instance of Box object
 */
function getBox(input) {
  if ((0, _iselement2.default)(input)) {
    return new _element2.default(input);
  }

  if (input === 'viewport') {
    return new _viewport2.default();
  }

  if (isDocument(input)) {
    return new _document2.default();
  }

  if (isCollection(input)) {
    return new _collection2.default(input);
  }

  return new _generic2.default(input);
}