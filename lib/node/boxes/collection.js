"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO revisit when general library is ready

// This handles either HTMLCollection (e.g. `getElementsByTagName()`)
// or NodeList (e.g. `querySelectorAll()`).

var BoxCollection = function (_Box) {
  _inherits(BoxCollection, _Box);

  function BoxCollection() {
    _classCallCheck(this, BoxCollection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BoxCollection).apply(this, arguments));
  }

  _createClass(BoxCollection, [{
    key: "update",
    value: function update() {
      var boxes = [];
      for (var i = 0, j = this.input.length; i < j; i++) {
        boxes.push(new BoxElement(this.input[i]));
      }
      var bounding_box = DomBox.getBoundingBox(boxes);
      return this.set(bounding_box);
    }
  }]);

  return BoxCollection;
}(Box);