function getDivisorsCnt(n) {
    //set count to 2 to count for 1 and itself
    let count = 2
    //failsafe for integer 1
    if (n == 1) {
        return 1
    }
    //testing i to see if it less than half of n
    //once passed half of n nothing is a divisor
    for (let i = 2; (i * 2) <= n; i++) {
        if (n % i === 0) {
            count += 1
        }
    } return count
}