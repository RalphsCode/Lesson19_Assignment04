console.log('JS is running');

function sortedFrequency(arr, num) {  
    // Find an instance
    let anInstance = findAnInstance(arr, num);
    // if no instance found in the array return -1
    if (anInstance == -1){
        return -1;
    }
    
    // Identify the first instance of num in the array - leftExtremety
    let leftExtremety
    // check that its not the first element in the array that equals num
    if (anInstance != 0){
        leftExtremety  = findLeftExtremety(arr, anInstance, num);
    } else {
        // if the first element in the array is num, return that index
        leftExtremety = anInstance;
    }
    console.log('leftExtremety:', leftExtremety);    
    
    // Identify the last instance of num in the array -  rightExtremety
    let rightExtremety = findRightExtremity(arr, anInstance, num);
    console.log('rightExtremety:', rightExtremety);

    // return the number of times num is present in the array
    return (rightExtremety - leftExtremety)+1;

}

function findAnInstance(arr, num){
    /* Looks for an instance of num, in the passed in array.
    Returns an index number of a location where num can be found.
    Or, returns -1 if num cannot be found. */
    let leftInx = 0;
    let rightInx = arr.length -1;
    let middleInx = 0
    // Check if the first element is an instance of num
    if (arr[leftInx] == num){
        console.log(`Found an instance of num ${arr[middleInx]} at index number: ${leftInx}`);
        return leftInx;
    } else {
        // num not found at first index, look in the rest of the array
        while (leftInx <= rightInx) {
                // Look for an instance of num
                middleInx = findMiddleInx(leftInx, rightInx)
                console.log(`l:${leftInx} : m:${middleInx} : r:${rightInx}`)
                // Check if at end of array and num not found
                if (middleInx >= arr.length -1 && arr[middleInx] != num){
                    console.log(`No instance found. l:${leftInx} - m:${middleInx} - r:${rightInx}`);
                    return -1;
                } else {
                    // Check if we found an instance of num
                    if (arr[middleInx] == num) {
                        console.log(`Found an instance of num ${arr[middleInx]} at index number: ${middleInx}`);
                        // return the index number where we found an instance of num
                        return middleInx;
                    // didn't find num, keep looking
                    } else if (arr[middleInx] < num){
                            // Look to the right for an instance of num
                            leftInx = middleInx +1;
                    } else if (arr[middleInx] > num){
                        // Look to the left for an instance of num
                        rightInx = middleInx -1;
                    } else {
                        // Display to console if we are outside paramaters for some reason
                        console.log(`Something went wrong in findAnInstance() l:${leftInx} - m:${middleInx} - r:${rightInx}`);
                    } }
                } // END if...
            } // END while loop
        return `Exiting while loop with middleInx: ${middleInx}`
}  // END sortedFrequency()


function findLeftExtremety(arr, anInstance, num){
    /* Returns the index number of the left most instance of num in the passed in array. */   
    let leftInx = 0;
    let rightInx = anInstance;
    while (leftInx <= rightInx){
        middleInx = findMiddleInx(leftInx, rightInx);
        /* if the middleInx element contains num, and the element to the left does not, we have found the left most instance of num. Return middleInx. */
        if (arr[middleInx] == num && arr[middleInx -1] != num) {
            console.log(`findLeftExtremety is returning index number: ${middleInx}  (l:${leftInx} m:${middleInx} r:${rightInx})`);
            return middleInx;
        // if the middleInx element is not most left instance of num, keep looking! 
        } else if (arr[middleInx] < num) {
            leftInx = middleInx + 1;
        // if middleInx == num or > num
        } else {
            rightInx = middleInx -1;
        } 
    } // END while...
    return `There was a problem in findLeftExtremety() l:${leftInx} - m:${middleInx} - r:${rightInx}`;
}  // END findLeftExtremity()


function findRightExtremity(arr, anInstance, num) {
    /* Returns the index number of the right most instance of num in the passed in array. */  
    let leftInx = anInstance;
    let rightInx = arr.length -1 ;
    while (leftInx <= rightInx){
        middleInx = findMiddleInx(leftInx, rightInx);
        console.log(`l:${leftInx} m:${middleInx} r:${rightInx}`)
        // check if middleInx equals num  and is the last element in the array.
        if (arr[middleInx] == num && middleInx == arr.length -1) {
            return middleInx;
        } else {
            // Check if the middle index is the last num element in the array
            if (arr[middleInx] == num && arr[middleInx +1] != num) {
                console.log(`findRightExtremety is returning index number: ${middleInx}  (l:${leftInx} m:${middleInx} r:${rightInx})`);
                return middleInx;
            // middleInx is not the last element in the array, nor the last num element    
            } else if (arr[middleInx] > num) {
                // Move left
                rightInx = middleInx - 1;
            // Move right
            } else {
                rightInx = rightInx +1
                };
        } // END if...
    } // END while...
    return `There was a problem in findRightExtremety() l:${leftInx} - m:${middleInx} - r:${rightInx}`;
}  // END findRightExtremity()


function findMiddleInx(leftInx, rightInx){
    /* function that finds the middle index number between the 
    left index being worked on, and the right index being worked on. */
    return Math.floor((leftInx + rightInx)/2);
}


// module.exports = sortedFrequency