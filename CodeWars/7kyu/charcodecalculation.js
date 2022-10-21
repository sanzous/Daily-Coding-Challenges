// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

//P -- a string of letters can be lowercase or uppercase
//R -- the difference of the sum of total1 which is the ASCII codes of all the letters summed up
// and total2 which is total1 but each instance of the number 7 is replaced by 1
//E -- 'abcdef', 6
//P -- first we create total1 by taking the given parameter, splitting it into an array, using the mao function
// to create a new array where each element is becomes its ASCII code number, joining them and then splitting them up to form an array of digits
// We then create total 2 by taking total1 and using the map function to change each element if its 7 to 1 
// We then take both and use the reduce function to get the total sum and then return the difference between total1 and total2
function calc(x) {
    let total1 = x.split('').map(e => e.charCodeAt(0)).join('').split('')
    let total2 = total1.map(e => e == 7 ? 1 : e).reduce((p, c) => +p + +c, 0)
    return total1.reduce((p, c) => +p + +c, 0) - total2

}