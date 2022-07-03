function factorial(n) {
    let factor = 1;
    if (n === 0) {
        return 1
    }
    if (n > 12 || n < 0) {
        throw 'RangeError'
    } else

        for (let i = 1; i <= n; i++) {
            factor *= i
        } return factor
}