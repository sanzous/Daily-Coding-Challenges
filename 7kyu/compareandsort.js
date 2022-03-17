function compare(a, b) {
    return a.length - b.length
}

function sortByLength(array) {
    return array.sort(compare)
};
