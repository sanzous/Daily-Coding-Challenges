// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

//P - an array of integers from 1 - 9
//R - the same array incremented by a value equal to their index, if the value is more than 1 digit we only need the last digit
//E - (incrementer([1, 2, 3]), [2, 4, 6]))
//P - first we use the map method on the given array with the parameters e for element and i for index. We then on each element
// add e + i + 1, the 1 is because index starts count at 0. We then check if the value is equal to or greater than 9 to check if it
// is more than 1 digit. if it is we first use the toString method so we can use slice to grab the last digit and then return it back as a number
// if not then we just add e + i + 1

function incrementer(nums) {
    return nums.map((e, i) => (e + i) >= 9 ? +((e + (i + 1)).toString().slice(-1)) : (e + i + 1))
}