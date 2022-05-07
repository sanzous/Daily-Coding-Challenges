function getSum(a, b) {
    let arr = []
    if (a === b) {
        return a;
    }

    if (a > b) {
        for (let i = b; i <= a; i++) {
            arr.push(i)
        }
    } else {
        for (let i = a; i <= b; i++) {
            arr.push(i)
        }
    } return arr.reduce((p, c) => p + c)


}