// welcome to imooc.com
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

var isUnitOfArray = function isUnitOfArray(a) {
  a.forEach(function (element) {
    var sElemant = String(element);

    if (sElemant.length > 1) {
      throw new Error('the element of condition(Array) in Function then() must be unit char');
    }
  });
};

var errorFun = {
  isUnitOfArray: isUnitOfArray
};

var regExpObj = /*#__PURE__*/function () {
  function regExpObj(sInput) {
    _classCallCheck(this, regExpObj);

    this.sInput = sInput;
    this.aCondition = [];
  }

  _createClass(regExpObj, [{
    key: "then",
    value: function then(aCondition, iNum) {
      errorFun.isUnitOfArray(aCondition);
      var self = this;

      for (var i = 0; i < iNum; i++) {
        self.aCondition.push(aCondition);
      }

      return self;
    }
  }]);

  return regExpObj;
}();

function E$(sInput) {
  return new regExpObj(sInput);
}

export default E$;
// powered by sam
