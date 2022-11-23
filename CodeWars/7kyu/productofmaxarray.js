// Given an array/list [] of integers , Find the product of the k maximal numbers.
//P - an array called numbers, it contains integers that can be positive or negative, and then a size variable that is an integer
//R - an integer that is the product of the array where you take the nth largest numbers and multiple them together. nth = size
//E - [4,3,5], 2, 20 since 5 and 4 are the largest and size is 2, 5 * 4 = 20
//P - First we can sort the array to have the largest numbers in front. then we can use the splice method starting at 0 and ending with size. This will 
// give us the numbers that are the largest. Then with the new array we can reduce it and get the product.
function maxProduct(numbers, size) {
    return numbers.sort((a, b) => b - a).splice(0, size).reduce((p, c) => p * c)
}