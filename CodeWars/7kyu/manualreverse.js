// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

//P -- An array of integers, strings, booleans, nulls
//R -- The same array but in reverse order of index
//E --  reverse([1,2,3]) === [3,2,1]
//P -- We make an array to hold the new reversed array.
// We make a for loop that will start at the end of the array index and then go down.
// As it loops we push the current index to the new array and then we return that array.

reverse = function (array) {
    let reversed = []
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i])
    }
    return reversed
}