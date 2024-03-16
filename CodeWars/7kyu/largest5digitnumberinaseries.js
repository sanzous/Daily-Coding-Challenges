//P A digit of X length in the a string
//R The largest 5 digit integer in the string
//E 1234567898765' should return 98765
//P First we will split the given string into an array. We then reduce the array with the reduce method, we start with 0 and then for each loop we use the Math.max value of the current value, which
// on the first run will be 0, and the number given from the current index to the current index + 5 which is the next 5 digits in the given parameter, The Math.max method will return the bigger of the 2 as the new current value.


function solution(digits){
    return digits.split('').reduce((p,c,i) => Math.max(p , digits.slice(i, i + 5)) , 0)
  }