function BinarySearch(data, target, callBack) {
  if (data instanceof Array && callBack instanceof Function) {
    return callBack(searchbyIndex(0, data.length - 1));
  } else {
    throw new Error("Invalid Arguments");
  }


  function searchbyIndex(start, end) {
    try {
      if (start >= end || (end <= 1) && start === 0) {
        if (data[end] === target) {
          return end;
        }
        throw new RangeError("target not found");
      } else {
        var middle = Math.floor(end - start / 2);
        var value = data[middle];
        if (target > value) {
          return searchbyIndex(middle - 1, end);
        }
        if (target < value) {
          return searchbyIndex(start, middle - 1);
        }
        return middle;
      }

    } catch (error) {
      console.log(start, end);
      console.error(error);
      throw (error);
    }
  }
}

module.exports = BinarySearch;