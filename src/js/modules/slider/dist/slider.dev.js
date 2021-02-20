"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function Slider() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? null : _ref$container,
      _ref$btns = _ref.btns,
      btns = _ref$btns === void 0 ? null : _ref$btns,
      _ref$next = _ref.next,
      next = _ref$next === void 0 ? null : _ref$next,
      _ref$prev = _ref.prev,
      prev = _ref$prev === void 0 ? null : _ref$prev,
      _ref$activeClass = _ref.activeClass,
      activeClass = _ref$activeClass === void 0 ? '' : _ref$activeClass,
      animate = _ref.animate,
      autoplay = _ref.autoplay;

  _classCallCheck(this, Slider);

  this.container = document.querySelector(container);

  try {
    this.slides = this.container.children;
  } catch (e) {}

  this.btns = document.querySelectorAll(btns);
  this.prev = document.querySelector(prev);
  this.next = document.querySelector(next);
  this.activeClass = activeClass;
  this.animate = animate;
  this.autoplay = autoplay;
  this.slideIndex = 1;
};

exports["default"] = Slider;