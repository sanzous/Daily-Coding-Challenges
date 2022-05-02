function isNarcissistic(n) {
    n = n.toString()
    const power = n.length;
    let sum = 0;
    let arr = n.split('')
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow((arr[i]), power);
    }
    if (sum == n) {
        return true
    } else return false

}