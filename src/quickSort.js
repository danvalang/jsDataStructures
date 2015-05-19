function QuickSort(data) {
  if (data.length < 1) {
    return data;
  } else {
    return conquer(data);
  }

  function conquer(data) {
    var leftArray = [];
    var rightArray = [];
    var pivot = divide(data);
    return leftArray.concat([pivot], rightArray);

    function divide(data) {
      var size = data.length - 1;
      var pivot = data[size];
      for (var index = 0; index < size; index++) {
        value = data[index];
        if (value < pivot)
          leftArray.push(value);
        if (value > pivot)
          rightArray.push(value);
      }
      if (leftArray.length > 1)
        leftArray = QuickSort(leftArray);
      if (rightArray.length > 1)
        rightArray = QuickSort(rightArray);
      return pivot;
    }
  }
}
module.exports = QuickSort;