// welcome to imooc.com
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.E$ = {}));
}(this, (function (exports) { 'use strict';

    var a = 1;

    function test() {
      console.log(a);
    }

    exports.test = test;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// powered by sam
