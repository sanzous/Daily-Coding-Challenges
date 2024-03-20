//P We are given a number as the parameter, it can be positive or negative and will always be an integer
//R We need to return from the function the same integer but reversed. If it is negative the returned number should also be negative
//E -123 should return -321 and 98989898 should return 89898989 and 1000 should return 1
//P First we can create 2 variables, one to check if the given parameter is negative and then one to grab the parameter itself. We then check if the number is negative, and if true
// We set the variable to check if its negative to true. We then turn the parameter into a positive number using Math.abs() method.
// We then create a new variable that will be the reversed number, we can reverse the number by converting it into a string, splitting it into an array, using the reverse() method to reverse the array
// and then using the join() method to turn back into a single string. We then house all of that in a Number() method to turn it back into an integer.
// We then do one final check, if the isNegative variable is set to true from our check earlier we then multiply the reversed number by -1 to turn it back to negative and return that
// Otherwise we just return the reversed number variable.

function reverseNumber(n) {
    let isNegative = false
    let numberToReverse = n
    if(numberToReverse < 0){
      isNegative = true
      numberToReverse = Math.abs(numberToReverse)
    }
    
    let reversedNumber = Number(numberToReverse.toString().split('').reverse().join(''))
    if (isNegative == true){
      return reversedNumber * -1
    }else return reversedNumber
    
  }