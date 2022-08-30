// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.



function adjacentElementsProduct(array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            0
        } else
            arr.push(array[i] * array[i + 1])
    } return Math.max(...arr)
}