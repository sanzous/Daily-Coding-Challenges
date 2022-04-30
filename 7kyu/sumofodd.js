function rowSumOddNumbers(n) {
    let total = 1;
    let first = n * (n + 1) + 1;
    for (let i = 1; i < n; i++) {
        total += first;
    } return total;
}