(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.E$ = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var fnError = {
    isUnitOfArray: function isUnitOfArray(a) {
      a.forEach(function (element) {
        var sElemant = String(element);

        if (sElemant.length > 1) {
          throw new Error('the element of condition(Array) in Function then() must be unit char');
        }
      });
    },
    isFinally: function isFinally(regExpObj) {
      if (regExpObj["finally"]) {
        throw new Error('the function then() must in front of the finally function');
      }
    }
  };

  function isCorrect(sInput, aCondition) {
    var result = true;

    for (var i = 0; i < sInput.length; i++) {
      var sUnitInput = sInput[i];

      if (!isArrayHasString(aCondition[i], sUnitInput)) {
        result = false;
      }
    }

    return result;
  }

  function sReplace(sInput, aCondition, s) {
    var result = "";

    for (var i = 0; i < sInput.length; i++) {
      var sUnitInput = sInput[i];

      if (!isArrayHasString(aCondition[i], sUnitInput)) {
        result += s;
      } else {
        result += sUnitInput;
      }
    }

    return result;
  }

  function isArrayHasString(a, s) {
    var result = false;

    for (var i = 0; i < a.length; i++) {
      if (a[i] == s) {
        result = true;
      }
    }

    return result;
  }

  var RegExpObj = /*#__PURE__*/function () {
    function RegExpObj(sInput) {
      _classCallCheck(this, RegExpObj);

      this.sInput = sInput;
      this.aCondition = [];
      this["finally"] = false;
    }

    _createClass(RegExpObj, [{
      key: "then",
      value: function then(aCondition, iNum) {
        var self = this;
        fnError.isUnitOfArray(aCondition);
        fnError.isFinally(self);

        for (var i = 0; i < iNum; i++) {
          self.aCondition.push(aCondition);
        }

        return self;
      }
    }, {
      key: "test",
      value: function test() {
        var self = this;
        self["finally"] = true;
        return isCorrect(self.sInput, self.aCondition);
      }
    }, {
      key: "replace",
      value: function replace(s) {
        var self = this;
        self["finally"] = true;
        return sReplace(self.sInput, self.aCondition, String(s));
      }
    }], [{
      key: "init",
      value: function init(sInput) {
        return new RegExpObj(sInput);
      }
    }]);

    return RegExpObj;
  }();

  var E$ = RegExpObj.init;

  return E$;

})));
