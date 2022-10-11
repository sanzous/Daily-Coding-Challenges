




//Parameters - An array of numbers that may contain 0 to any amount of elements.

function maxDiff(list) {
    //PsuedoCode
    //Return 0 
    //Find the max of array, can use the Math.max and spreading the array
    //find the min of array, can use the Math.mix and also spreading the array
    // return the difference between the two
    //can do it all in one line or put the two values in a seperate variable each
      return list.length <= 1 ? 0 : Math.max(...list) - Math.min(...list)
    };
    //Example if given an array of [1,2,3,4,5] the return should be 4 since largest is 5 minus the smallest 1
    
    //Return - if the array is empty or length is 1 should return 0
    // otherwise return the difference of the largest number in the array and the smallest number