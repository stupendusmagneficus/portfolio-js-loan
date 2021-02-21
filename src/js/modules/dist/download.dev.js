"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Download =
/*#__PURE__*/
function () {
  function Download(triggers) {
    _classCallCheck(this, Download);

    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/main.bg';
  }

  _createClass(Download, [{
    key: "downloadItem",
    value: function downloadItem(path) {
      var link = document.createElement('a');
      link.setAttribute('href', path);
      link.setAttribute('download', 'nice_picture');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          _this.downloadItem(_this.path);
        });
      });
    }
  }]);

  return Download;
}();

exports["default"] = Download;