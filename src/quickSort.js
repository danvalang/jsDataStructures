function QuickSort(data) {
  var size = data.length - 1;
  var leftArray = [];
  var rightArray = [];
  if (data.length < 2) {
    return data;
  } else {
    var pivot = data[size];
    for (var index = 0; index < size; index++) {
      value = data[index];
      if (value < pivot)
        leftArray.push(value);
      if (value > pivot)
        rightArray.push(value);
    }
    if (leftArray.length > 2)
      leftArray = QuickSort(leftArray);
    if (rightArray.length > 2)
      rightArray = QuickSort(rightArray);
    data = leftArray.concat([pivot], rightArray);
    return data;
  }
}

module.exports = QuickSort;