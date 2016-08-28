(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TheBox"] = factory();
	else
		root["TheBox"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getBox = __webpack_require__(1);

	var _getBox2 = _interopRequireDefault(_getBox);

	var _getDistance = __webpack_require__(10);

	var _getDistance2 = _interopRequireDefault(_getDistance);

	var _getOverlap = __webpack_require__(13);

	var _getOverlap2 = _interopRequireDefault(_getOverlap);

	var _detectOverlap = __webpack_require__(14);

	var _detectOverlap2 = _interopRequireDefault(_detectOverlap);

	var _getPivotAngle = __webpack_require__(15);

	var _getPivotAngle2 = _interopRequireDefault(_getPivotAngle);

	var _moveInside = __webpack_require__(16);

	var _moveInside2 = _interopRequireDefault(_moveInside);

	var _contains = __webpack_require__(17);

	var _contains2 = _interopRequireDefault(_contains);

	var _canContain = __webpack_require__(18);

	var _canContain2 = _interopRequireDefault(_canContain);

	var _canCoexist = __webpack_require__(19);

	var _canCoexist2 = _interopRequireDefault(_canCoexist);

	var _canFitAround = __webpack_require__(20);

	var _canFitAround2 = _interopRequireDefault(_canFitAround);

	var _findClosest = __webpack_require__(23);

	var _findClosest2 = _interopRequireDefault(_findClosest);

	var _fitAround = __webpack_require__(24);

	var _fitAround2 = _interopRequireDefault(_fitAround);

	var _shrinkToFit = __webpack_require__(25);

	var _shrinkToFit2 = _interopRequireDefault(_shrinkToFit);

	var _align = __webpack_require__(26);

	var _align2 = _interopRequireDefault(_align);

	var _touch = __webpack_require__(27);

	var _touch2 = _interopRequireDefault(_touch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  getBox: _getBox2.default,
	  getDistance: _getDistance2.default,
	  getOverlap: _getOverlap2.default,
	  detectOverlap: _detectOverlap2.default,
	  getPivotAngle: _getPivotAngle2.default,
	  moveInside: _moveInside2.default,
	  contains: _contains2.default,
	  canContain: _canContain2.default,
	  canCoexist: _canCoexist2.default,
	  canFitAround: _canFitAround2.default,
	  findClosest: _findClosest2.default,
	  fitAround: _fitAround2.default,
	  shrinkToFit: _shrinkToFit2.default,
	  align: _align2.default,
	  touch: _touch2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getBox;

	var _iselement = __webpack_require__(2);

	var _iselement2 = _interopRequireDefault(_iselement);

	var _generic = __webpack_require__(3);

	var _generic2 = _interopRequireDefault(_generic);

	var _element = __webpack_require__(4);

	var _element2 = _interopRequireDefault(_element);

	var _collection = __webpack_require__(6);

	var _collection2 = _interopRequireDefault(_collection);

	var _document = __webpack_require__(8);

	var _document2 = _interopRequireDefault(_document);

	var _viewport = __webpack_require__(9);

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
	 * @name getBox
	 * @param {*} [input]
	 * @returns {Box} instance of Box object
	 */
	function getBox(input) {
	  if (input === 'viewport') {
	    return new _viewport2.default();
	  }

	  if (isDocument(input)) {
	    return new _document2.default();
	  }

	  if (isCollection(input)) {
	    return new _collection2.default(input);
	  }

	  if ((0, _iselement2.default)(input)) {
	    return new _element2.default(input);
	  }

	  return new _generic2.default(input);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.default = function (obj) {
	  return obj != null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.nodeType === 1 && _typeof(obj.style) === 'object' && _typeof(obj.ownerDocument) === 'object';
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Data object representing a box, with basic properties.
	 * @typedef {Object} BoxProperties
	 * @type Object
	 * @property {number} [left]
	 * @property {number} [top]
	 * @property {number} [right]
	 * @property {number} [bottom]
	 * @property {number} [width]
	 * @property {number} [height]
	 */

	/**
	 * Class representing an abstract Box.
	 * @class
	 * @name Box
	 */
	var Box = function () {

	  /**
	   * Constructs generic Box object.
	   * @param {BoxProperties} input
	   */
	  function Box() {
	    var input = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Box);

	    // default values
	    this.left = 0;
	    this.top = 0;
	    this.width = 0;
	    this.height = 0;

	    this.input = input;
	    this.update();
	  }

	  _createClass(Box, [{
	    key: 'set',


	    /**
	     * Updates properties of the box
	     * @param {BoxProperties} properties
	     * @returns {BoxProperties}
	     */
	    value: function set() {
	      var properties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      if ((typeof properties === 'undefined' ? 'undefined' : _typeof(properties)) === 'object' && properties !== null) {
	        var _arr = ['left', 'top', 'width', 'height'];

	        for (var _i = 0; _i < _arr.length; _i++) {
	          var property = _arr[_i];
	          if (typeof properties[property] !== 'undefined') {
	            this[property] = properties[property];
	          }
	        }
	      }
	      return this.get();
	    }

	    // returns object with all current properties
	    /**
	     * Gets current properties of the box.
	     * @returns {BoxProperties}
	     */

	  }, {
	    key: 'get',
	    value: function get() {
	      return {
	        left: this.left,
	        top: this.top,
	        right: this.right,
	        bottom: this.bottom,
	        width: this.width,
	        height: this.height
	      };
	    }

	    // In generic box, this does nothing. It is just a placeholder for method
	    // that will be used to get current values for DOM element, collection, etc.
	    /**
	     * Updates properties of the Box according to the Box's input. This doesn't really do anything in Generic Box. But it recalculates box properties for DOM element, collection, viewport, etc.
	     * @returns {BoxProperties}
	     */

	  }, {
	    key: 'update',
	    value: function update() {
	      return this.set(this.input);
	    }

	    /**
	     * Adds padding to the whole box.
	     * @param {number} [padding=0]
	     */

	  }, {
	    key: 'pad',
	    value: function pad() {
	      var padding = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.padHorizontal(padding);
	      this.padVertical(padding);
	      return this.get();
	    }

	    /**
	     * Adds padding to the left and right side of box.
	     * @param {number} [padding=0]
	     */

	  }, {
	    key: 'padHorizontal',
	    value: function padHorizontal() {
	      var padding = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.left -= padding;
	      this.width += padding * 2;
	      return this.get();
	    }

	    /**
	     * Adds padding to the top and bottom side of box.
	     * @param {number} [padding=0]
	     */

	  }, {
	    key: 'padVertical',
	    value: function padVertical() {
	      var padding = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.top -= padding;
	      this.height += padding * 2;
	      return this.get();
	    }

	    /**
	     * Move box to a specific location
	     * @param {number} [left]
	     * @param {number} [top]
	     * @returns {Box}
	     */

	  }, {
	    key: 'moveTo',
	    value: function moveTo(left, top) {
	      if (typeof left === 'number') {
	        this.left = left;
	      }
	      if (typeof top === 'number') {
	        this.top = top;
	      }
	      return this.get();
	    }

	    /**
	     * Moves pivot of the box to a specific location, recalculates the other properties accordingly.
	     * @param {number} [left]
	     * @param {number} [top]
	     * @returns {BoxProperties}
	     */

	  }, {
	    key: 'movePivotTo',
	    value: function movePivotTo(left, top) {
	      if (typeof left !== 'number') {
	        left = this.pivot.left;
	      }
	      if (typeof top !== 'number') {
	        top = this.pivot.top;
	      }

	      this.moveTo(left - this.width / 2, top - this.height / 2);

	      return this.get();
	    }
	  }, {
	    key: 'moveBy',


	    /**
	     * Moves the box by a distance.
	     * @param {number} [horizontal]
	     * @param {number} [vertical]
	     * @returns {BoxProperties}
	     */
	    value: function moveBy(horizontal, vertical) {
	      if (typeof horizontal === 'number') {
	        this.left = this.left + horizontal;
	      }
	      if (typeof vertical === 'number') {
	        this.top = this.top + vertical;
	      }
	      return this.get();
	    }

	    /**
	     * Resizes the box to a specific size.
	     * @param [width]
	     * @param [height]
	     * @returns {BoxProperties}
	     */

	  }, {
	    key: 'resizeTo',
	    value: function resizeTo(width, height) {
	      if (typeof width === 'number') {
	        this.width = width;
	      }
	      if (typeof height === 'number') {
	        this.height = height;
	      }
	      return this.get();
	    }

	    /**
	     * Resizes the box by a specific value.
	     * @param {number} [horizontal]
	     * @param {number} [vertical]
	     * @returns {BoxProperties}
	     */

	  }, {
	    key: 'resizeBy',
	    value: function resizeBy(horizontal, vertical) {
	      if (typeof horizontal === 'number') {
	        this.width += horizontal;
	      }
	      if (typeof vertical === 'number') {
	        this.height += vertical;
	      }
	      return this.get();
	    }

	    /**
	     * Returns text representation of Box properties. Used for debugging.
	     * @param {boolean} [pretty=false] If `true`, returns pretty formatted string.
	     * @returns {string}
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      var pretty = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	      var indent = pretty === true ? 2 : 0;
	      return JSON.stringify(this.get(), null, indent);
	    }
	  }, {
	    key: 'right',
	    get: function get() {
	      return this.left + this.width;
	    }
	  }, {
	    key: 'bottom',
	    get: function get() {
	      return this.top + this.height;
	    }

	    /**
	     * @property {object} pivot
	     * @property {number} pivot.left - Left position of Box's pivot.
	     * @property {number} pivot.top - Top position of Box's pivot.
	     */

	  }, {
	    key: 'pivot',
	    get: function get() {
	      return {
	        left: this.left + this.width / 2,
	        top: this.top + this.height / 2
	      };
	    }
	  }]);

	  return Box;
	}();

	exports.default = Box;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _generic = __webpack_require__(3);

	var _generic2 = _interopRequireDefault(_generic);

	var _getScrollPosition = __webpack_require__(5);

	var _getScrollPosition2 = _interopRequireDefault(_getScrollPosition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Class representing Box of an Element.
	 * @name ElementBox
	 * @extends Box
	 */
	var _class = function (_Box) {
	  _inherits(_class, _Box);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'update',
	    value: function update() {
	      var bounding_box = this.input.getBoundingClientRect();
	      var scroll_position = (0, _getScrollPosition2.default)();
	      return this.set({
	        width: bounding_box.width,
	        height: bounding_box.height,
	        left: scroll_position.left + bounding_box.left,
	        top: scroll_position.top + bounding_box.top
	      });
	    }
	  }]);

	  return _class;
	}(_generic2.default);

	exports.default = _class;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  // modern browsers
	  if (typeof window.pageXOffset !== 'undefined' && typeof window.pageYOffset !== 'undefined') {
	    return {
	      left: window.pageXOffset,
	      top: window.pageYOffset
	    };
	  }

	  // obsolete browsers
	  if (typeof document_root.scrollLeft !== 'undefined' && typeof document_root.scrollTop !== 'undefined') {
	    return {
	      left: document_root.scrollLeft,
	      top: document_root.scrollTop
	    };
	  }

	  return { left: 0, top: 0 };
	};

	/**
	 * Cross-browser reference to the root document node.
	 * @type {Element|Node|HTMLElement}
	 * @ignore
	 */
	var document_root = exports.document_root = document.documentElement || document.body.parentNode || document.body;

	/**
	 * Cross-browser function to get left and top position of viewport relative to
	 * the document.
	 * @returns {{left: {number}, top: {number}}}
	 * @ignore
	 */

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _generic = __webpack_require__(3);

	var _generic2 = _interopRequireDefault(_generic);

	var _getBox = __webpack_require__(1);

	var _getBox2 = _interopRequireDefault(_getBox);

	var _getBoundingBox = __webpack_require__(7);

	var _getBoundingBox2 = _interopRequireDefault(_getBoundingBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Class representing bounding Box around collection of elements. Accepts either HTMLCollection (e.g. `getElementsByTagName()`) or NodeList (e.g. `querySelectorAll()`).
	 * @name CollectionBox
	 * @extends Box
	 */
	var _class = function (_Box) {
	  _inherits(_class, _Box);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'update',
	    value: function update() {
	      // convert collection to array
	      var elements_array = Array.prototype.slice.call(this.input);
	      // convert all elements to box representations
	      var boxes = elements_array.map(function (item) {
	        return (0, _getBox2.default)(item);
	      });
	      // find box encompassing all the elements
	      var bounding_box = (0, _getBoundingBox2.default)(boxes);
	      return this.set(bounding_box);
	    }
	  }]);

	  return _class;
	}(_generic2.default);

	exports.default = _class;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var boxes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	  // if collection did not match any elements, return a zero box
	  if (boxes.length === 0) {
	    boxes = [{ left: 0, top: 0, right: 0, bottom: 0 }];
	  }

	  // object for remembering extreme values, starting with values of first box
	  var extremes = {
	    left: boxes[0].left,
	    top: boxes[0].top,
	    right: boxes[0].right,
	    bottom: boxes[0].bottom
	  };

	  // go through each box, update extreme values where applicable
	  boxes.forEach(function (box) {
	    if (box.left < extremes.left) {
	      extremes.left = box.left;
	    }
	    if (box.top < extremes.top) {
	      extremes.top = box.top;
	    }
	    if (box.right > extremes.right) {
	      extremes.right = box.right;
	    }
	    if (box.bottom > extremes.bottom) {
	      extremes.bottom = box.bottom;
	    }
	  });

	  // return Box object with extreme values
	  return new _generic2.default({
	    left: extremes.left,
	    top: extremes.top,
	    width: extremes.right - extremes.left,
	    height: extremes.bottom - extremes.top
	  });
	};

	var _generic = __webpack_require__(3);

	var _generic2 = _interopRequireDefault(_generic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _generic = __webpack_require__(3);

	var _generic2 = _interopRequireDefault(_generic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Class representing Box of whole document.
	 * @name DocumentBox
	 * @extends Box
	 */
	var _class = function (_Box) {
	  _inherits(_class, _Box);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'update',
	    value: function update() {
	      return this.set({
	        left: 0,
	        top: 0,
	        width: Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth, 0),
	        height: Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, 0)
	      });
	    }
	  }]);

	  return _class;
	}(_generic2.default);

	exports.default = _class;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _generic = __webpack_require__(3);

	var _generic2 = _interopRequireDefault(_generic);

	var _getScrollPosition = __webpack_require__(5);

	var _getScrollPosition2 = _interopRequireDefault(_getScrollPosition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Class representing Box of viewport.
	 * @name ViewportBox
	 * @extends Box
	 */
	var _class = function (_Box) {
	  _inherits(_class, _Box);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'update',
	    value: function update() {
	      var scroll_position = (0, _getScrollPosition2.default)();

	      return this.set({
	        left: scroll_position.left,
	        top: scroll_position.top,
	        width: window.innerWidth || document.documentElement.clientWidth || 0,
	        height: window.innerHeight || document.documentElement.clientHeight || 0
	      });
	    }
	  }]);

	  return _class;
	}(_generic2.default);

	exports.default = _class;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDistance;

	var _getDifference = __webpack_require__(11);

	var _getDifference2 = _interopRequireDefault(_getDifference);

	var _getHypotenuse = __webpack_require__(12);

	var _getHypotenuse2 = _interopRequireDefault(_getHypotenuse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns horizontal, vertical, direct and pivot distance between two boxes.
	 * @param {Box} a
	 * @param {Box} b
	 * @returns {{horizontal: number, vertical: number, pivot: number}}
	 */
	function getDistance(a, b) {
	  var difference = (0, _getDifference2.default)(a, b);

	  var result = {
	    horizontal: Math.max(0, difference.horizontal),
	    vertical: Math.max(0, difference.vertical),
	    pivot: (0, _getHypotenuse2.default)(a.pivot.left - b.pivot.left, a.pivot.top - b.pivot.top)
	  };

	  result.direct = (0, _getHypotenuse2.default)(result.horizontal, result.vertical);

	  return result;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDifference;

	var _getBoundingBox = __webpack_require__(7);

	var _getBoundingBox2 = _interopRequireDefault(_getBoundingBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns horizontal and vertical difference between two boxes. Positive values mean that boxes are apart, zero value means boxes are touching, negative value means boxes are overlapping.
	 * @param {Box} a
	 * @param {Box} b
	 * @returns {{horizontal: number, vertical: number}}
	 */
	function getDifference(a, b) {
	  var bounding_box = (0, _getBoundingBox2.default)([a, b]);
	  return {
	    horizontal: bounding_box.width - a.width - b.width,
	    vertical: bounding_box.height - a.height - b.height
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (x, y) {
	  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getOverlap;

	var _detectOverlap = __webpack_require__(14);

	var _detectOverlap2 = _interopRequireDefault(_detectOverlap);

	var _generic = __webpack_require__(3);

	var _generic2 = _interopRequireDefault(_generic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Returns box for an area where both boxes are overlapping.
	// Returns `null` if boxes do not overlap.
	/**
	 * Returns box for an area where both boxes are overlapping. Returns `null` if boxes do not overlap.
	 * @param {Box} a
	 * @param {Box} b
	 * @returns {Box|null}
	 */
	function getOverlap(a, b) {
	  // if boxes do not overlap, just return `null`...
	  if ((0, _detectOverlap2.default)(a, b)) {
	    return new _generic2.default({
	      left: Math.max(a.left, b.left),
	      top: Math.max(a.top, b.top),
	      width: Math.min(a.right, b.right) - Math.max(a.left, b.left),
	      height: Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top)
	    });
	  }

	  return null;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = detectOverlap;

	var _getDifference = __webpack_require__(11);

	var _getDifference2 = _interopRequireDefault(_getDifference);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns true if both boxes overlap at least partially.
	 * @param {Box} a
	 * @param {Box} b
	 * @returns {boolean}
	 */
	function detectOverlap(a, b) {
	  var difference = (0, _getDifference2.default)(a, b);
	  return difference.horizontal < 0 && difference.vertical < 0;
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getPivotAngle;
	/**
	 * Returns angle between pivots of both boxes. Can be used with [Angle JS](https://github.com/fczbkk/angle-js) to determine direction of one box relative to another.
	 * @param {Box} a
	 * @param {Box} b
	 * @param {boolean} [use_radian=false] If `true`, returns result in radians, otherwise in degrees.
	 * @returns {number}
	 */
	function getPivotAngle(a, b) {
	  var use_radian = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	  // angle in radians
	  var result = Math.atan2(b.pivot.top - a.pivot.top, b.pivot.left - a.pivot.left);

	  if (use_radian) {
	    return result;
	  }

	  // convert to degrees
	  return result * (180 / Math.PI);
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = moveInside;
	/**
	 * Changes position of `b` to the closest position where it is completely inside `a`. If `b` can not fit `a`, it is positioned at top-left corner of `a`.
	 * @param {Box} a
	 * @param {Box} b
	 */
	function moveInside(a, b) {
	  if (b.right > a.right) {
	    b.left = a.right - b.width;
	  }
	  if (b.bottom > a.bottom) {
	    b.top = a.bottom - b.height;
	  }
	  if (b.left < a.left) {
	    b.left = a.left;
	  }
	  if (b.top < a.top) {
	    b.top = a.top;
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = contains;
	/**
	 * Returns `true` if box `b` is completely inside box `a`.
	 * @param {Box} a
	 * @param {Box} b
	 * @returns {boolean}
	 */
	function contains(a, b) {
	  return a.left <= b.left && a.top <= b.top && a.right >= b.right && a.bottom >= b.bottom;
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = canContain;
	/**
	 * Returns `true` if `b` can fit completely inside `a`.
	 * @param {Box} a
	 * @param {Box} b
	 * @returns {boolean}
	 */
	function canContain(a, b) {
	  return a.width >= b.width && a.height >= b.height;
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = canCoexist;

	var _canContain = __webpack_require__(18);

	var _canContain2 = _interopRequireDefault(_canContain);

	var _getBoundingBox = __webpack_require__(7);

	var _getBoundingBox2 = _interopRequireDefault(_getBoundingBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Returns `true` if both `b` and `c` can fit completely inside `a`
	// without changing their respective positions.
	/**
	 * Returns `true` if both `b` and `c` can fit completely inside `a` without changing their respective positions. Handy when deciding if boxes can be fully scrolled into a viewport.
	 * @param {Box} a
	 * @param {Box} b
	 * @param {Box} c
	 * @returns {boolean}
	 */
	function canCoexist(a, b, c) {
	  return (0, _canContain2.default)(a, (0, _getBoundingBox2.default)([b, c]));
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = canFitAround;

	var _canContain = __webpack_require__(18);

	var _canContain2 = _interopRequireDefault(_canContain);

	var _getBoxesAround = __webpack_require__(21);

	var _getBoxesAround2 = _interopRequireDefault(_getBoxesAround);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns `true` if `c` can be positioned inside `a` so that it will not collide with `b`.
	 * @param {Box} a
	 * @param {Box} b
	 * @param {Box} c
	 * @returns {boolean}
	 */
	function canFitAround(a, b, c) {
	  // can `c` itself fit inside `a`?
	  if (!(0, _canContain2.default)(a, c)) {
	    return false;
	  }

	  var result = false;

	  // get all boxes that can fit around `b` inside `a` and check, if `c` can
	  // fit any of them
	  (0, _getBoxesAround2.default)(a, b).forEach(function (item) {
	    if ((0, _canContain2.default)(item, c)) {
	      result = true;
	    }
	  });

	  return result;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getBoxesAround;

	var _getGaps = __webpack_require__(22);

	var _getGaps2 = _interopRequireDefault(_getGaps);

	var _getBox = __webpack_require__(1);

	var _getBox2 = _interopRequireDefault(_getBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns list of boxes that can be placed around `b` to fill entire `a`.
	 * NOTE: Returned boxes can be overlapping. This is intended to be used to find places to position another box, so that it fits inside `a`, without coliding with `b`. If you are looking for boxes that seamlessly fill the space around `b` inside `a`, try this module instead: https://github.com/fczbkk/gap-grid
	 * @param {Box} a
	 * @param {Box} b
	 * @returns {Array.<Box>}
	 * @ignore
	 */
	function getBoxesAround(a, b) {
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
	}

	/**
	 * Accepts list of Boxes, returns list of unique Boxes.
	 * @param {Array.<Box>} [boxes=[]]
	 * @returns {Array.<Box>}
	 * @ignore
	 */
	function makeUnique() {
	  var boxes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

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

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getGaps;
	// Returns sizes of gaps inside `a` around `b`.
	// Used mostly as utility function.

	/**
	 * Returns sizes of gaps inside `a` around `b`.
	 * @param {Box} a
	 * @param {Box} b
	 * @returns {{horizontal: {before: number, after: number}, vertical: {before: number, after: number}}}
	 * @ignore
	 */
	function getGaps(a, b) {
	  var result = {
	    horizontal: {
	      before: Math.max(0, b.left - a.left),
	      after: Math.max(0, a.right - b.right)
	    },
	    vertical: {
	      before: Math.max(0, b.top - a.top),
	      after: Math.max(0, a.bottom - b.bottom)
	    }
	  };

	  // Gaps can not be bigger than the parent box.
	  // This can happen when child box is outside parent box.
	  if (result.horizontal.before > a.width) {
	    result.horizontal.before = a.width;
	  }
	  if (result.horizontal.after > a.width) {
	    result.horizontal.after = a.width;
	  }
	  if (result.vertical.before > a.height) {
	    result.vertical.before = a.height;
	  }
	  if (result.vertical.after > a.height) {
	    result.vertical.after = a.height;
	  }

	  return result;
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = findClosest;

	var _getDistance = __webpack_require__(10);

	var _getDistance2 = _interopRequireDefault(_getDistance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns box that is closest to `a`.
	 * @param {Box} a
	 * @param {Array.<Box>} [boxes=[]]
	 * @param {string} [property='direct'] - Box's distance property (`horizontal`, `vertical`, `direct` or `pivot`) that will be used to evaluate ([see `getDistance()`]({@link getDistance})).
	 * @returns {Box|null}
	 */
	function findClosest(a) {
	  var boxes = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var property = arguments.length <= 2 || arguments[2] === undefined ? 'direct' : arguments[2];

	  var lowest_distance = Number.MAX_VALUE;
	  var result = null;

	  boxes.forEach(function (box) {
	    var distance = (0, _getDistance2.default)(a, box)[property];
	    if (distance < lowest_distance) {
	      result = box;
	      lowest_distance = distance;
	    }
	  });

	  return result;
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fitAround;

	var _getBoxesAround = __webpack_require__(21);

	var _getBoxesAround2 = _interopRequireDefault(_getBoxesAround);

	var _canContain = __webpack_require__(18);

	var _canContain2 = _interopRequireDefault(_canContain);

	var _canFitAround = __webpack_require__(20);

	var _canFitAround2 = _interopRequireDefault(_canFitAround);

	var _findClosest = __webpack_require__(23);

	var _findClosest2 = _interopRequireDefault(_findClosest);

	var _moveInside = __webpack_require__(16);

	var _moveInside2 = _interopRequireDefault(_moveInside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Changes positino of `c` so that it is positioned inside `a` without colliding with `b`. If it is not possible, position of `c` is unchanged. It will move the box to a new position closest to its original position.
	 * @param {Box} a
	 * @param {Box} b
	 * @param {Box} c
	 */
	function fitAround(a, b, c) {
	  if ((0, _canFitAround2.default)(a, b, c)) {
	    // find available targets
	    var targets = (0, _getBoxesAround2.default)(a, b);
	    var valid_targets = targets.filter(function (target) {
	      return (0, _canContain2.default)(target, c);
	    });

	    // choose closest targets and move inside it, if possible
	    var target = (0, _findClosest2.default)(c, valid_targets, 'direct');

	    if (target !== null) {
	      (0, _moveInside2.default)(target, c);
	    }
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = shrinkToFit;
	/**
	 * Adjusts size of `b` so that it fits `a` while keeping the original aspect ratio. Does nothing if `b` is smaller than `a`.
	 * @param {Box} a
	 * @param {Box} b
	 */
	function shrinkToFit(a, b) {
	  if (a.width < b.width) {
	    b.height = adjustByRatio(a.width, b.width, b.height);
	    b.width = a.width;
	  }
	  if (a.height < b.height) {
	    b.width = adjustByRatio(a.height, b.height, b.width);
	    b.height = a.height;
	  }
	}

	/**
	 * Returns `secondary` adjusted by the same ratio as when resizing `primary` to `target`.
	 * @param {number} target
	 * @param {number} primary
	 * @param {number} secondary
	 * @returns {number}
	 * @ignore
	 */
	function adjustByRatio(target, primary, secondary) {
	  var ratio = target / primary;
	  return secondary * ratio;
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = align;
	/**
	 * Adjusts position of `b` so that it is aligned to `a`.
	 * @param {Box} a
	 * @param {Box} b
	 * @param {string} [horizontal] - 'left', 'right' or 'center'
	 * @param {string} [vertical] - 'top', 'bottom' or 'center
	 */
	function align(a, b, horizontal, vertical) {

	  switch (horizontal) {
	    case 'left':
	      b.left = a.left;
	      break;
	    case 'right':
	      b.left = a.left + a.width - b.width;
	      break;
	    case 'center':
	      b.left = a.left + a.width / 2 - b.width / 2;
	      break;
	    default:
	      break;
	  }

	  switch (vertical) {
	    case 'top':
	      b.top = a.top;
	      break;
	    case 'bottom':
	      b.top = a.top + a.height - b.height;
	      break;
	    case 'center':
	      b.top = a.top + a.height / 2 - b.height / 2;
	      break;
	    default:
	      break;
	  }
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = touch;
	/**
	 * Move `b` so that it touches `a` from the outside.
	 * @param {Box} a
	 * @param {Box} b
	 * @param {null|string} [horizontal] - Either `left` or `right`.
	 * @param {null|string} [vertical] - Either `top` or `bottom`.
	 */
	function touch(a, b, horizontal, vertical) {
	  var left_position = void 0,
	      top_position = void 0;

	  switch (horizontal) {
	    case 'left':
	      {
	        left_position = a.left - b.width;
	        break;
	      }
	    case 'right':
	      {
	        left_position = a.right;
	        break;
	      }
	    default:
	      {
	        break;
	      }
	  }

	  switch (vertical) {
	    case 'top':
	      {
	        top_position = a.top - b.height;
	        break;
	      }
	    case 'bottom':
	      {
	        top_position = a.bottom;
	        break;
	      }
	    default:
	      {
	        break;
	      }
	  }

	  b.moveTo(left_position, top_position);
	}

/***/ }
/******/ ])
});
;