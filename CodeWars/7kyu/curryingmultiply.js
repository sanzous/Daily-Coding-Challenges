// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

//P - an array of integers and an integer to multiply all those integers
//R - A new array where all the original integers are multiplied by the second paramater
//E - ([1, 2, 3])(2), [2, 4, 6])
//P - In the first function we will return another function that takes in a paramater
//  - Inside the nested function we return the first parmater arr mapped where each element is multiplied by the second paramater i

function multiplyAll(arr) {
    return function multiply_all(i) {
        return arr.map(e => e * i)
    }
}