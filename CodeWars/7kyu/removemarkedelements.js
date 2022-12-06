// Define a method/function that removes from a given array of integers all the values contained in a second array.

//P - two integer arrays, the first array the given integer list, and the second array the integer values that must be removed from the given integer list
//R - the integer list array with all elements that are in values list array removed
//E -  [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
//P - We can return the integer_list array with the filter method, where if an element is not includes in values list it will not be filtered out.
Array.prototype.remove_ = function (integer_list, values_list) {
    return integer_list.filter(e => !values_list.includes(e))
}