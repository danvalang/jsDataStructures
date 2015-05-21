function QuickSort(data) {
	var leftArray = [],
		rightArray = [];

	if(data.length < 1)
		return data;
	else
		return sort(data);

	function sort(data) {
		var pivot = divideAndPivot(data);

		if(leftArray.length > 1)
			leftArray = QuickSort(leftArray);
		if(rightArray.length > 1)
			rightArray = QuickSort(rightArray);

		return leftArray.concat([pivot], rightArray);
	}

	function divideAndPivot(data) {
		var size = data.length - 1;
		var pivot = data[size];

		for(var index = 0; index < size; index++) {
			value = data[index];
			if(value < pivot)
				leftArray.push(value);
			if(value > pivot)
				rightArray.push(value);
		}

		return pivot;
	}
}
module.exports = QuickSort;