function persistence(num) {
    //split num into single digits to read length
    num = num.toString().split('')
    //count how many times multiplied
    let count = 0;
    //while loop until num.length == 1
    while (num.length >= 2) {
        //reduce to multiply all elements together, toString and split to turn it into an array with a length
        num = num.reduce((p, c) => p * c, 1).toString().split('')
        count++
    } return count
}