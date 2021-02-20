"use strict";

var _sliderMain = _interopRequireDefault(require("./modules/slider/slider-main"));

var _sliderMini = _interopRequireDefault(require("./modules/slider/slider-mini"));

var _playVideo = _interopRequireDefault(require("./modules/playVideo"));

var _difference = _interopRequireDefault(require("./modules/difference"));

var _form = _interopRequireDefault(require("./modules/form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener('DOMContentLoaded', function () {
  var slider = new _sliderMain["default"]({
    btns: '.next',
    container: '.page'
  });
  slider.render();
  var modulePageSlider = new _sliderMain["default"]({
    container: '.moduleapp',
    btns: '.next'
  });
  modulePageSlider.render();
  var showUpSlider = new _sliderMini["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();
  var modulesSlider = new _sliderMini["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  modulesSlider.init();
  var feedSlider = new _sliderMini["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();
  var player = new _playVideo["default"]('.showup .play', '.overlay');
  player.init();
  var difference = new _difference["default"]('.officerold', '.officernew', '.officer__card-item');
  difference.init();
  new _form["default"]('.form').init();
});