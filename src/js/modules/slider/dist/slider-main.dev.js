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

var MainSlider =
/*#__PURE__*/
function (_Slider) {
  _inherits(MainSlider, _Slider);

  function MainSlider(btns) {
    _classCallCheck(this, MainSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainSlider).call(this, btns));
  }

  _createClass(MainSlider, [{
    key: "showSlides",
    value: function showSlides(n) {
      var _this = this;

      if (n > this.slides.length) {
        this.slideIndex = 1;
      }

      if (n < 1) {
        this.slideIndex = this.slides.length;
      }

      try {
        this.hanson.style.opacity = '0';

        if (n == 3) {
          this.hanson.classList.add('animated');
          setTimeout(function () {
            _this.hanson.style.opacity = '1';

            _this.hanson.classList.add('slideInUp');
          }, 3000);
        } else {
          this.hanson.classList.remove('slideInUp');
        }
      } catch (e) {}

      this.slides.forEach(function (slide) {
        slide.style.display = 'none';
      });
      this.slides[this.slideIndex - 1].style.display = 'block';
    }
  }, {
    key: "plusSlides",
    value: function plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    }
  }, {
    key: "bindTriggers",
    value: function bindTriggers() {
      var _this2 = this;

      this.btns.forEach(function (item) {
        item.addEventListener('click', function () {
          _this2.plusSlides(1);
        });
        item.parentNode.previousElementSibling.addEventListener('click', function (e) {
          e.preventDefault();
          _this2.slideIndex = 1;

          _this2.showSlides(_this2.slideIndex);
        });
      });
      document.querySelectorAll('.prevmodule').forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          e.preventDefault();

          _this2.plusSlides(-1);
        });
      });
      document.querySelectorAll('.nextmodule').forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          e.preventDefault();

          _this2.plusSlides(1);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.container) {
        try {
          this.hanson = document.querySelector('.hanson');
        } catch (e) {}

        this.showSlides(this.slideIndex);
        this.bindTriggers();
      }
    }
  }]);

  return MainSlider;
}(_slider["default"]);

exports["default"] = MainSlider;