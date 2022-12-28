// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

//P - an array of integers can be greater than lesser than or equal to 0
//R - The largest gap between two integers in the array
//E - maxGap([13,10,2,9,5]),4
//P - First we create a variable to hold the largest current gap, we then sort the given numbers array from largest to smallest
// We then create a for loop to iterate through the sorted numbers array. On each iteration we check if the current item and item afters difference is larger
// than the current max gap. if it is we set maxgap to the new number
// We then return the maxGap variable

function maxGap(numbers) {
    let maxGap = 0
    numbers = numbers.sort((a, b) => b - a)
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] - numbers[i + 1]) > maxGap) {
            maxGap = numbers[i] - numbers[i + 1]
        }
    } return maxGap
}
