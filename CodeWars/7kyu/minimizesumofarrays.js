// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

//P -- First we sort the array from largest to smallest and assign it to a new variable
// We then create a new variable to hold the total sum of each product
// We then loop through the array and multiply together the first index and last indexed element.
// for each iteration we go 1 deeper from the front and back until the loop reaches the middle
// we then return the total variable
function minSum(arr) {
    let newarr = arr.sort((a, b) => b - a)
    let total = 0;
    for (let i = 0; i < (newarr.length / 2); i++) {
        total += newarr[i] * newarr[newarr.length - (i + 1)]
    } return total
}