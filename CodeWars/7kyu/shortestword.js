function findShort(s) {
    //split the string into arrays
    //find the smallest word
    //give the word a numerical value = length and return it
    let sarr = s.split(' ')
    let found = sarr.reduce((x, y) => x.length <= y.length ? x : y)
    return found.length
}