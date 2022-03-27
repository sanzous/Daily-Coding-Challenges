function countRedBeads(n) {
    let red = 0
    if (n < 2) {
        return 0
    } else {
        for (let count = 1; count < n; count++) {
            red += 2
        } return red
    }
}