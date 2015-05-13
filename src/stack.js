module.exports = (function() {

  var index = null;

  return function() {
    this.push = function(element) {
      index++;
      this.elements[index] = element;
    };
    this.pop = function() {
      if (index > 0) {
        var element = this.elements[index];
        delete this.elements[index];
        index = ((index - 1) < 0) ? null : index - 1;
        return element;
      } else {
        return null;
      }
    };
    this.length = function() {
      return index;
    };
    this.peek = function() {
      return this.elements[index];
    };

    index = 0;
    this.elements = [];
    if (arguments.length >= 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.push(arguments[i]);
      }
    }
  };
}());