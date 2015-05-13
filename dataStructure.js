module.exports = (function() {
  'use strict';

  function DataStructure() {}
  DataStructure.__proto__.registerAction = function(name, func) {
    if (!this.hasOwnProperty(name) && typeof(func) === 'function') this.prototype[name] = func;
  };
  return DataStructure;
}());