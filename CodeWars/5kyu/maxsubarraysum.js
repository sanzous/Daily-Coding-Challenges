// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//P - an array of integers, can be positive or negative
//R - the biggest sum of a contigous subsequence in the array
//E - maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//    should be 6: [4, -1, 2, 1]
//P - first we set a variable max to 0, the running sum, and then j to hold the current array index
//We then loop through the given array with a for loop, on each iteration I would set the running sum back to 0 and set the 
//j variable to the current index. The subsequent array will start with array index i and then j will iterate through the rest of the array
//while the current sum is less than max we then add the current subsequence array element to the running sum, if sum is greater than max
//we have found the newest biggest sum of a subsequent array and set that to max, we then iterate j to the next array element
var maxSequence = function (arr) {
    let max = 0, sum = 0, j;
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        j = i;
        while (sum <= max) {
            sum += arr[j]
            if (sum > max) {
                max = sum;
            }
            j++;
        }
    }
    return max
}