// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

//P - an x amount of arguments being passed into the function
//R - the amount of arguments being passed into the function
//E - args_count(1, 2, 3) -> 3
//P - First we can spread the parameters being passed into the function using the arguments keyword
// and spreading it inside of an array. We then call the length of the array and return that

function args_count(args) {
    return [...arguments].length
}