function findRotatedIndex(rotatedSortedArr, num) {
    // Define the extremeties
    let leftEnd = 0;
    let rightEnd = rotatedSortedArr.length - 1;
  
    while (leftEnd <= rightEnd) {
      let middle = Math.floor((leftEnd + rightEnd) / 2);
      // CHeck if its a direct match
      if (rotatedSortedArr[middle] === num) {
        return middle;
      }
  
      // Determine which half is the sorted half
      if (rotatedSortedArr[leftEnd] <= rotatedSortedArr[middle]) {
        // If its the left half that is sorted
        if (num >= rotatedSortedArr[leftEnd] && num <= rotatedSortedArr[middle]) {
          rightEnd = middle - 1;
        } else {
          leftEnd = middle + 1;
        }
      } else {
        // If the right half is sorted
        if (num >= rotatedSortedArr[middle] && num <= rotatedSortedArr[rightEnd]) {
          leftEnd = middle + 1;
        } else {
          rightEnd = middle - 1;
        }
      }
    }
    // If the element is not found in the array
    return -1;
  }

module.exports = findRotatedIndex