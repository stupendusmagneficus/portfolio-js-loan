"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Difference =
/*#__PURE__*/
function () {
  function Difference(oldOfficer, newOfficer, items) {
    _classCallCheck(this, Difference);

    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
      this.oldCounter = 0;
      this.newCounter = 0;
    } catch (e) {}
  }

  _createClass(Difference, [{
    key: "bindTriggers",
    value: function bindTriggers(container, items, counter) {
      container.querySelector('.plus').addEventListener('click', function () {
        if (counter !== items.length - 2) {
          items[counter].style.display = 'flex';
          counter++;
        } else {
          items[counter].style.display = 'flex';
          items[items.length - 1].remove();
        }
      });
    }
  }, {
    key: "hideItems",
    value: function hideItems(items) {
      items.forEach(function (item, i, arr) {
        if (i !== arr.length - 1) {
          item.style.display = 'none';
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      try {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
      } catch (e) {}
    }
  }]);

  return Difference;
}();

exports["default"] = Difference;