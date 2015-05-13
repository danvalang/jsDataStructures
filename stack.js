module.exports = (function() {
  'use strict';

  var DataStructure = require('./dataStructure');
  var assert = require('assert');
  var util = require('util');

  function Stack() {
    this.index = 0;
    this.elements = {};
    DataStructure.call(this);
  }
  util.inherits(Stack, DataStructure);
  Stack.registerAction('push', function(element) {
    this.index = (!!this.index ? 0 : this.index + 1);
    this.elements[this.index] = element;
  });
  Stack.registerAction('pop', function() {
    var element = this.elements[this.index];
    delete this.elements[this.index];
    this.index--;
    return element;
  });
  return Stack;
}());