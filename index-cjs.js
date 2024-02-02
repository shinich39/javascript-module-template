
'use strict';

const sum = function(a, b) {
  return a + b;
}

const test = function(func) {
  const _ = function(arg) {
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
      for (let i = 0; i < args.length; i++) {
        console.log("arguments["+i+"]: "+_(args[i]));
      }
      const start = new Date().valueOf();
      const res = func(...args);
      const end = new Date().valueOf();
      const diff = (Math.round((end - start) * 0.01) / 100 || "0.00") + "s";
      console.log("result: "+_(res)+" ["+diff+"]");
      return res;
    }
  }
}

module.exports = {
  sum: sum,
  test: test,
}
