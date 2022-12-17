// Create a function add(n)/Add(n) which returns a function that always adds n to any number

//P  - a function that adds an integer
//R  - an integer that is the result of adding two integers
//E - add(1)(3), 4, 'add one to three equals four'
//P - In the main function add we return another function that will return the first parameter given with the second paramater given

function add(n) {
    return function Add(m) {
        return n + m
    }
}
