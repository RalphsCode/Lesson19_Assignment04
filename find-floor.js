function findFloor(arr, x) {
    // define the extremes
    let leftEnd = 0;
    let rightEnd = arr.length - 1;
  
    // Loop through and find the middle index
    while (leftEnd <= rightEnd) {
      let middle = Math.floor((leftEnd + rightEnd) / 2);
      // if our middle matches we are done
      if (arr[middle] === x)
   {
        return arr[middle];
      // If no match, keep looking
      } else if (arr[middle] < x) {
        leftEnd = middle + 1;
      } else {
        rightEnd = middle - 1;
      }
    }
  
    // If the element is not found in the array
    // return the end that is closest to the elament
    return rightEnd >= 0 ? arr[rightEnd] : -1;
  }

module.exports = findFloor