"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form =
/*#__PURE__*/
function () {
  function Form(forms) {
    _classCallCheck(this, Form);

    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('.input');
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...'
    };
    this.path = 'assets/question.php';
  }

  _createClass(Form, [{
    key: "clearInputs",
    value: function clearInputs() {
      this.inputs.forEach(function (input) {
        input.value = '';
      });
    }
  }, {
    key: "checkMailInputs",
    value: function checkMailInputs() {
      var mailInputs = document.querySelectorAll('[type="email"]');
      mailInputs.forEach(function (item) {
        item.addEventListener('keypress', function (e) {
          if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
            e.preventDefault();
          }
        });
      });
    }
  }, {
    key: "initMask",
    value: function initMask() {
      var setCursorPosition = function setCursorPosition(pos, elem) {
        elem.focus();

        if (elem.setSelectionRange) {
          elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };

      function createMask(event) {
        var matrix = '+1 (___) ___-____',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
          val = def;
        }

        this.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
          if (this.value.length == 2) {
            this.value = '';
          }
        } else {
          setCursorPosition(this.value.length, this);
        }
      }

      var inputs = document.querySelectorAll('[name="phone"]');
      inputs.forEach(function (input) {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
      });
    }
  }, {
    key: "postData",
    value: function postData(url, data) {
      var res;
      return regeneratorRuntime.async(function postData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch(url, {
                method: "POST",
                body: data
              }));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(res.text());

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.initMask();
      this.checkMailInputs();
      this.forms.forEach(function (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var statusMessage = document.createElement('div');
          statusMessage.style.cssText = "\n            margin-top: 15px;\n            font-size: 18px;\n            color: grey;\n            ";
          form.parentNode.appendChild(statusMessage);
          statusMessage.textContent = _this.message.loading;
          var formData = new FormData(form);

          _this.postData(_this.path, formData).then(function (res) {
            console.log(res);
            statusMessage.textContent = _this.message.success;
          })["catch"](function () {
            statusMessage.textContent = _this.message.failure;
          })["finally"](function () {
            _this.clearInputs();

            setTimeout(function () {
              statusMessage.remove();
            }, 6000);
          });
        });
      });
    }
  }]);

  return Form;
}();

exports["default"] = Form;