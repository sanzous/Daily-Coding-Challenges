// Write a function that removes every lone 9 that is inbetween 7s.

//P - A string of integers each integer will always be between 0 and 9
//R - The same string but each 9 that is inbetween a 7 is removed
//E - '7979797', '7777'
//P - First we create a new variable to hold the given parameter turned into an array of each elements
// We then create  for loop and we check on each element that if the prev and next element equals 7 and the current element is 9 we splice
// the current element
// We then return the new modifided string element joined together.

function sevenAte9(str) {
    let string = str.split('')
    for (let i = 0; i < string.length; i++) {
        if (string[i - 1] == 7 && string[i + 1] == 7 && string[i] == 9) {
            string.splice(i, 1)
        }
    } return string.join('')
}