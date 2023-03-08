//P - an array of integers
//R - the average of the array rounded out
//E - average[90,98,89,100,100,86,94] = 94
//P first we use the reduce method on the scores array and then divide that by the scores length. We then use Math.round to round that to the nearest integer

function average(scores) {
    return Math.round(scores.reduce((p, c) => p + c, 0) / scores.length)
}