// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

//Parameters -- an array containing arrays of integers
//Return -- A string containing all the nested arrays with the elements seperated by commas and arrays seperated by /n
//Example -- an array containing 2 arrays [1,2,3,4] and [2,3,4,5] will return 1,2,3,4\n2,3,4,5
//PsuedoCode-- can easily be done by using the join method 

function toCsvText(array) {
    return array.join('\n')
}