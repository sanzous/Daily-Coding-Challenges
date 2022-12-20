// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.
// Input
// Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

//P - Two integers, which will create the array. The first being the start and the sevcond being the last
//R - An array of integers that start with m and end with n
//E - (2, 5), [2, 3, 4, 5]
//P - First we create an empty array variable
// Then we create a for loop where i will start at m and will go until it reaches n
// For each iteration we push the current i to the array and then return the completed array

function generateIntegers(m, n) {
    let array = []
    for (let i = m; i <= n; i++) {
        array.push(i)
    }
    return array
}