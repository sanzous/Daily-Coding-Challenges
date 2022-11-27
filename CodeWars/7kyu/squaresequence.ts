// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.



//P - x which is an integer that the array starts with, and n which is the length of the final array
//R - an array of integers, the first element being x and then the proceeding elements the element coming before it squared
//E - squares(2,5),[2,4,16,256,65536]
//P - first since we were given a default condition to return an empty array if n is 0 or less we can first create an if statement
// to check this before running anything else
// then we can create a new variable holding an array holding x since x will always be the first element in the array
// we then create a for loop starting i at 1 and going until it hits before n. For each loop we push to the array the previous element
// squared and return that array

function squares(x, n) {
    if (n <= 0) return []

    let arr = [x]
    for (let i = 1; i < n; i++) {
        arr.push(arr[i - 1] * arr[i - 1])
    } return arr
}