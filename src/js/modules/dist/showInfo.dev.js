"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShowInfo =
/*#__PURE__*/
function () {
  function ShowInfo(triggers) {
    _classCallCheck(this, ShowInfo);

    this.btns = document.querySelectorAll(triggers);
  }

  _createClass(ShowInfo, [{
    key: "init",
    value: function init() {
      this.btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var sibling = btn.closest('.module__info-show').nextElementSibling;
          sibling.classList.toggle('msg');
          sibling.style.marginTop = '20px';
          sibling.classList.add('animated', 'fadeIn');
        });
      });
    }
  }]);

  return ShowInfo;
}();

exports["default"] = ShowInfo;