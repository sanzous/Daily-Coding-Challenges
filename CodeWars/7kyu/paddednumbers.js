// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

//P - an integer
//R - a string containign Value is and then the integer as a string with leadings 0's the number must be 5 length
//E - solution(5),"Value is 00005"
//P - We can use a template literal and inside we can use the string().padStart() method to turn the integer into a string.


function solution(value) {
    return `Value is ${String(value).padStart(5, '0')}`
}