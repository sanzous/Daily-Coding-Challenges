function wordValue(a) {
    //P - an array of strings
    //R - the same array of strings but each string is the value of each letter from 1 - 26
    // and then the value of the whole string multiplied by its position in the array
    //E - nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.
    //P - first we use the map method on the given parameter and inside the map we can either
    // use regex to remove all the spaces or do split, join,split to do so.
    // We then use the reduce method on the current element where we find the value of the letter
    // by using the charCodeAt method set to 0 and subtracting 96 and then adding the previous value. After getting
    // the total value we then multiply it by the current index + 1
    return a.map((e, i) => (e.split(' ').join('').split('')
        .reduce((p, c) => (c.charCodeAt(0) - 96) + p, 0)) * (i + 1))
}