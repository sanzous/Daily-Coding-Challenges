// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

// The Smallest element of the list of integers , must come in center position of array/list.

// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

//P - an array of integers, can be negative or positive
//R - the same array arranged to where the smallest integers are in the middle and the largest are on the sides.
//E - [4, 10, 9], [10, 4, 9]
//P - first we check if the array is empty and return empty.
// If not we first sort the array of numbers from smallest to largest
// we then create a new array of numbers and insert the smallest integer which is now the 1st element of values
// we know that the next biggest number after the smallest goes to the right so on the index after the 1st element which is odd, we push those to the new array
// even indexes will be unshifted to the front

export function pendulum(values: number[]) {
    values = values.sort((a, b) => a - b)
    let ans: number[] = [values[0]]
    for (let i = 1; i < values.length; i++) {
        if (i % 2 !== 0) {
            ans.push(values[i])
        } else {
            ans.unshift(values[i])
        }
    }
    return ans
}