'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generic = require('./generic');

var _generic2 = _interopRequireDefault(_generic);

var _getScrollPosition = require('./../utilities/get-scroll-position');

var _getScrollPosition2 = _interopRequireDefault(_getScrollPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Box) {
  _inherits(_class, _Box);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _Box.apply(this, arguments));
  }

  _class.prototype.update = function update() {
    var scroll_position = (0, _getScrollPosition2.default)();

    return this.set({
      left: scroll_position.left,
      top: scroll_position.top,
      width: window.innerWidth || document.documentElement.clientWidth || 0,
      height: window.innerHeight || document.documentElement.clientHeight || 0
    });
  };

  return _class;
}(_generic2.default);

exports.default = _class;