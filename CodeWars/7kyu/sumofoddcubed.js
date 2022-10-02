// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
function cubeOdd(arr) {
    if (!arr.every(e => typeof e === 'number')) {
        return undefined
    }
    return arr.filter(e => e % 2 !== 0).map(e => e * e * e).reduce((p, c) => p + c)
}