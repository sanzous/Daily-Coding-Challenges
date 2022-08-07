// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

function findSum(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i)
        }
    } return arr.reduce((p, c) => p + c, 0)
}