// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

//P - two paramaters, an array of numbers and then a target number that 2 elements must equal to
//R - two elements indexes that equal to the target integer
//E - [1,2,3]  4 , [0,2]
//P - We create an array that will hold the 2 indexes then we can do 2 loops through the array. The first loop will hold the element and the second loop will sum the rest of the array to check
// if it will equal to the target. If it does we return the index.

function twoSum(numbers, target) {
    let indexes = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target && i !== j) {
                indexes = [i, j]
            }
        }
    } return indexes
}