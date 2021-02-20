"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slider = _interopRequireDefault(require("./slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MiniSlider =
/*#__PURE__*/
function (_Slider) {
  _inherits(MiniSlider, _Slider);

  function MiniSlider(container, next, prev, activeClass, animate, autoplay) {
    _classCallCheck(this, MiniSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(MiniSlider).call(this, container, next, prev, activeClass, animate, autoplay));
  }

  _createClass(MiniSlider, [{
    key: "decorizeSlides",
    value: function decorizeSlides() {
      var _this = this;

      this.slides.forEach(function (slide) {
        slide.classList.remove(_this.activeClass);

        if (_this.animate) {
          slide.querySelector('.card__title').style.opacity = '0.4';
          slide.querySelector('.card__controls-arrow').style.opacity = '0';
        }
      });

      if (!this.slides[0].closest('button')) {
        this.slides[0].classList.add(this.activeClass);
      }

      if (this.animate) {
        this.slides[0].querySelector('.card__title').style.opacity = '1';
        this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
      }
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
        this.container.appendChild(this.slides[0]); // Slide

        this.container.appendChild(this.slides[1]); // Btn

        this.container.appendChild(this.slides[2]); // Btn

        this.decorizeSlides();
      } else if (this.slides[1].tagName == "BUTTON") {
        this.container.appendChild(this.slides[0]); // Slide

        this.container.appendChild(this.slides[1]); // Btn

        this.decorizeSlides();
      } else {
        this.container.appendChild(this.slides[0]);
        this.decorizeSlides();
      }
    }
  }, {
    key: "bindTriggers",
    value: function bindTriggers() {
      var _this2 = this;

      this.next.addEventListener('click', function () {
        return _this2.nextSlide();
      });
      this.prev.addEventListener('click', function () {
        for (var i = _this2.slides.length - 1; i > 0; i--) {
          if (_this2.slides[i].tagName !== "BUTTON") {
            var active = _this2.slides[i];

            _this2.container.insertBefore(active, _this2.slides[0]);

            _this2.decorizeSlides();

            break;
          }
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      try {
        this.container.style.cssText = "\n            display: flex;\n            flex-wrap: wrap;\n            overflow: hidden;\n            align-items: flex-start;\n            ";
        this.bindTriggers();
        this.decorizeSlides();

        if (this.autoplay) {
          setInterval(function () {
            return _this3.nextSlide();
          }, 5000);
        }
      } catch (e) {}
    }
  }]);

  return MiniSlider;
}(_slider["default"]);

exports["default"] = MiniSlider;