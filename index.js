// Universal module definition
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser
    root.myModule = factory();
  }
})(this, function() {
  'use strict';

  var sum = function(a, b) {
    return a + b;
  }

  var test = function(func) {
    var _ = function(arg) {
      if (typeof(arg) === "object") {
        if (Object.prototype.toString.call(arg) === '[object Array]') {
          return "\n"+JSON.stringify(arg, null, 2);
        } else if (arg === null) {
          return "null";
        } else {
          // return "object";
          return "\n"+JSON.stringify(arg, null, 2);
        }
      } else if (typeof(arg) === "number") {
        if (isNaN(arg)) {
          return "NaN";
        } else {
          return arg;
        }
      } else if (typeof(arg) === "string") {
        if (arg.length > 10) {
          return "string";
        } else {
          return arg;
        }
      } else {
        return typeof(arg);
      }
    }
    return {
      exec: function(...args) {
        console.log("function: "+func.name);
        for (var i = 0; i < args.length; i++) {
          console.log("arguments["+i+"]: "+_(args[i]));
        }
        var start = new Date().valueOf();
        var res = func(...args);
        var end = new Date().valueOf();
        var diff = (Math.round((end - start) * 0.01) / 100 || "0.00") + "s";
        console.log("result: "+_(res)+" ["+diff+"]");
        return res;
      }
    }
  }

  return {
    sum: sum,
    test: test
  }
});