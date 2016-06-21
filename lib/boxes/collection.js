'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generic = require('./generic');

var _generic2 = _interopRequireDefault(_generic);

var _getBox = require('./../utilities/get-box');

var _getBox2 = _interopRequireDefault(_getBox);

var _getBoundingBox = require('./../utilities/get-bounding-box');

var _getBoundingBox2 = _interopRequireDefault(_getBoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This handles either HTMLCollection (e.g. `getElementsByTagName()`)
// or NodeList (e.g. `querySelectorAll()`).

var _class = function (_Box) {
  _inherits(_class, _Box);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _Box.apply(this, arguments));
  }

  _class.prototype.update = function update() {
    // convert collection to array
    var elements_array = Array.prototype.slice.call(this.input);
    // convert all elements to box representations
    var boxes = elements_array.map(function (item) {
      return (0, _getBox2.default)(item);
    });
    // find box encompassing all the elements
    var bounding_box = (0, _getBoundingBox2.default)(boxes);
    return this.set(bounding_box);
  };

  return _class;
}(_generic2.default);

exports.default = _class;