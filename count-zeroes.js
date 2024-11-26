console.log('JS is running')


function countZeroes(arr) {
    /* function to count the series of 0's that follow 1's in a passed in array. */
    let leftInx = 0;
    // Check if the whole array is 0's
    if (arr[leftInx] == 0) {
        return arr.length
    // Array is not all 0's
    } else {
        let rightInx = arr.length -1;
        while (leftInx <= rightInx){
            let middleInx = Math.floor(((leftInx + rightInx) /2));
            // Is the element at the middle index a 1?
            if (arr[middleInx] == 1) {
                // Check if it is a 1 followed by a zero
                if (arr[middleInx + 1] == 0){
                    // return a count of the remaining elements (0's)
                    return arr.length - middleInx -1;
                    }
                // The element is not a 1 - move search to the right
                leftInx = middleInx +1;
            } else if (arr[middleInx] == 0) {
                // Already in the 0 elements, move search left
                rightInx = middleInx -1;
            } 
    }  // END while loop
    // The loop completed and no zero's found
    return 0
    }  // END else...   
} // END countZeroes


function countZeroesAlternate(arr) {
    /* function to count the number of 0's at the end of provided array. */
    // use find method to find index of first zero in the array
    let startInx = arr.findIndex(function(val, index){
        return val == 0
    })
    console.log('startInx', startInx, '& arr.length', arr.length);
    // check for edge case of no 0's in array
    if (startInx == -1) {
        output = 0
    } else {
        output = arr.length - startInx;
        }
    console.log('Number of zeros:', output);
    return output;
}

module.exports = countZeroes

