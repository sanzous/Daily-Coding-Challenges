// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

//P - An integer of how many multiples to return and an integer of the number to be multiplited
//R - an array of the n variables integer multiples up to m
//E - multiples(3, 5), [5, 10, 15]
//P - we first declare the answer array
//We then create a for loop that starts at 1 is less than or equal to m and iterate by 1 on each loop
//We then push to the ans array n * i and then we return that array

function multiples(m, n) {
    let ans = []
    for (let i = 1; i <= m; i++) {
        ans.push(n * i)
    } return ans
}