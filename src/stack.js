module.exports = (function() {
  'use strict';

  index = null;

  function Stack() {
    this.elements = {};
    DataStructure.call(this);
  }
  Stack.prototype.push = function(element) {
    index = (!! index ? 0 : index + 1);
    this.elements[index] = element;
  };
  Stack.prototype.pop = function() {
    var element = this.elements[index];
    delete this.elements[index];
    index = (index - 1 < 0) ? null : index - 1;
    return element;
  };
  return Stack;
}());

