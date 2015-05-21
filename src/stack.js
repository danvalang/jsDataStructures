module.exports = function() {
	var index = 0,
		elements = [];

	return {
		push: function(element) {
			index++;
			elements[index] = element;
		},
		pop: function() {
			if(index > 0) {
				var element = elements[index];
				delete elements[index];
				index = ((index - 1) < 0) ? null : index - 1;
				return element;
			} else {
				return null;
			}
		},
		length: function() {
			return index;
		},
		peek: function() {
			return elements[index];
		}
	};
};