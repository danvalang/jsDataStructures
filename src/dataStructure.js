module.exports = (function() {
  'use strict';

  function DataStructure() {}
  /**
   * Register a method to the data structure, to register a plugin
   * @param {string} name name of the method
   * @param {function} func method to be added
   */
  DataStructure.__proto__.registerAction = function(name, func) {
    if (!this.hasOwnProperty(name) && typeof(func) === 'function') this.prototype[name] = func;
  };
  return DataStructure;
}());