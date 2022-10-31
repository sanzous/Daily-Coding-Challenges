// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//P - A string of words seperated by a space
//R - the words sorted alphabetically by their last letter
//E -'man i need a taxi up to ubud', ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'
//P - we first split the given parameter of string into an array using the split method,
// then we can use the sort method and sort by checking if the last letter of b is greater than return -1 which will sort it first

function last(x) {
    return x.split(' ').sort((a, b) => b[b.length - 1] > a[a.length - 1] ? -1 : 1)
}