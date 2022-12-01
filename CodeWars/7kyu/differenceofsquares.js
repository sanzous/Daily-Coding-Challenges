// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

//P - the limit of how many integers to sum towards
//R -  the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.
//E - For example, when n = 10:

// The square of the sum of the numbers is:

// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025
//P - First we find the square of the sums by creating a new array using array.from with the length being equal to n. We then reduce 
// the array adding each element to eachother and then using Math.pow on the sum and squaring it.
// We then find the sum of the square of each number by doing the same but after we get the array we map it and square each element before reducing it down
// to the sum of each squared element.
// We then return the absolute value of the difference between the two.

function differenceOfSquares(n) {
    let squareOfSum = Math.pow(Array.from({ length: n }, (_, i) => i + 1).reduce((p, c) => p + c, 0), 2)
    let sumOfSquares = Array.from({ length: n }, (_, i) => i + 1).map(e => Math.pow(e, 2)).reduce((p, c) => p + c, 0)
    return Math.abs(sumOfSquares - squareOfSum)
}