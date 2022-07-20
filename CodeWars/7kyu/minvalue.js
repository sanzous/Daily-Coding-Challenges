function minValue(values) {
    // holder for new array
    let smallNum = []
    //find unique values and insert into new array
    for (let i = 0; i < values.length; i++) {
        if (smallNum.indexOf(values[i]) === -1) {
            smallNum.push(values[i]);
        }
    }
    // sorts the array
    smallNum.sort(function (a, b) { return a - b })
    //turns array into a number
    let newNum = parseInt(smallNum.join(''))
    return newNum

}