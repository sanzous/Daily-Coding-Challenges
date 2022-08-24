// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

function sumTriangularNumbers(n) {
    let temp = 0;
    let ans = 0
    for (let i = 0; i <= n; i++) {
        temp += i
        ans += temp
    } return ans
}