// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.

//P - an array of integers
//R - the amount of pairs in the array that are consecutive going by every 2 integers
//E - pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.
//P - first we create a variable to hold the count of how many consecutive pairs
// We then create a for loop that increments by 2 every loop
// For each iteration of the loop we check if the current element +/- 1 is equal to the next element
// If it is we increment count by 1
// After we go through the whole array we then return count.

function pairs(ar) {
    let count = 0;
    for (let i = 0; i < ar.length; i += 2) {
        if (ar[i] + 1 == ar[i + 1] || ar[i] - 1 == ar[i + 1]) {
            count++
        }
    } return count
};