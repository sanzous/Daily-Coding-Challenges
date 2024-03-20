//P we are given an array of integers as a parameter
//R The returned value will need to be the sum of all even numbers in the array
//E If given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] the function should return 30 as 2 + 4 + 6 + 8 + 10 equals 30
//P First we will use the filter method on the given array and filter out any elements that aren't even. Once that is finished we can then use the reduce array with the initial value
// of 0 and adding the previous and current value until the end of the array. We then return that value.

function sumEvenNumbers(input) {
    let evenNumbers = input.filter(e => e % 2 == 0);
    let totalofEvenNumbers = evenNumbers.reduce((p,c) => p + c , 0);
    return totalofEvenNumbers;
  }