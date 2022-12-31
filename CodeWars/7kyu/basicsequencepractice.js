//P - an integer can be less than or greater than 0
//R - Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
//E - sumOfN(3), [0, 1, 3, 6]
//P - first we create an array variable to hold what we will return
// We then create a variable to hold the current value
// First we check to see if the given paramater is a negative number, if it is we have to make sure
// that any number pushed into an array is also negative
// We then create a for loop, in the for loop we add to current the current value of i in the for loop
// We then push that to the array and then return the array from the function
function sumOfN(n) {
    let arr = []
    let current = 0
    if (n < 0) {
        for (let i = 0; i <= Math.abs(n); i++) {
            current += i * - 1
            arr.push(current)
        }
    } else {
        for (let i = 0; i <= n; i++) {
            current += i
            arr.push(current)
        }
    } return arr
};