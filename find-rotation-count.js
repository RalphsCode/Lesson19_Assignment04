function findRotationCount(arr) {
    // Define the extremeties
    let leftEnd = 0;
    let rightEnd = arr.length - 1;
  
    // Loop through the array using divide & conquer
    while (leftEnd < rightEnd) {
      let middle = Math.floor((leftEnd + rightEnd) / 2);
  
      // If the element is in the right half of the array
      if (arr[middle] > arr[rightEnd]) {
        leftEnd = middle + 1;
      } else {
        // if not, the element is in the left side
        rightEnd = middle;
      }
    }
  
    // leftEnd must now be the smallest, so return it
    return leftEnd;
  }

module.exports = findRotationCount