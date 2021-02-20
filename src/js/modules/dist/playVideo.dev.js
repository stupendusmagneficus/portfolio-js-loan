"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VideoPlayer =
/*#__PURE__*/
function () {
  function VideoPlayer(triggers, overlay) {
    _classCallCheck(this, VideoPlayer);

    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  _createClass(VideoPlayer, [{
    key: "bindTriggers",
    value: function bindTriggers() {
      var _this = this;

      this.btns.forEach(function (btn, i) {
        try {
          var blockedElem = btn.closest('.module__video-item').nextElementSibling;

          if (i % 2 == 0) {
            blockedElem.setAttribute('data-disabled', 'true');
          }
        } catch (e) {}

        btn.addEventListener('click', function () {
          if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
            _this.activeBtn = btn;

            if (document.querySelector('iframe#frame')) {
              _this.overlay.style.display = 'flex';

              if (_this.path !== btn.getAttribute('data-url')) {
                _this.path = btn.getAttribute('data-url');

                _this.player.loadVideoById({
                  videoId: _this.path
                });
              }
            } else {
              _this.path = btn.getAttribute('data-url');

              _this.createPlayer(_this.path);
            }
          }
        });
      });
    }
  }, {
    key: "bindCloseBtn",
    value: function bindCloseBtn() {
      var _this2 = this;

      this.close.addEventListener('click', function () {
        _this2.overlay.style.display = 'none';

        _this2.player.stopVideo();
      });
    }
  }, {
    key: "createPlayer",
    value: function createPlayer(url) {
      this.player = new YT.Player('frame', {
        height: '100%',
        width: '100%',
        videoId: "".concat(url),
        events: {
          'onStateChange': this.onPlayerStateChange
        }
      });
      this.overlay.style.display = 'flex';
    }
  }, {
    key: "onPlayerStateChange",
    value: function onPlayerStateChange(state) {
      try {
        var blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
        var playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

        if (state.data === 0) {
          if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
            blockedElem.querySelector('.play__circle').classList.remove('closed');
            blockedElem.querySelector('svg').remove();
            blockedElem.querySelector('.play__circle').appendChild(playBtn);
            blockedElem.querySelector('.play__text').textContent = 'play video';
            blockedElem.querySelector('.play__text').classList.remove('attention');
            blockedElem.style.opacity = 1;
            blockedElem.style.filter = 'none';
            blockedElem.setAttribute('data-disabled', 'false');
          }
        }
      } catch (e) {}
    }
  }, {
    key: "init",
    value: function init() {
      if (this.btns.length > 0) {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindTriggers();
        this.bindCloseBtn();
      }
    }
  }]);

  return VideoPlayer;
}();

exports["default"] = VideoPlayer;