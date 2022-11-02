// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

//P - an array of strings
//R - an array of arrays that divides the parameter into two elements together for each word
//E -["I", "wish", "I", "hadn't", "come"], [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
//P - we first create an empty array to hold all the array items we will make
// we then loop through the array starting at 1, we create 2 variables, one that holds the first half and the other holding the second half
// the first half will always start at the first word and end on the index
//the second half will always start on the index and end at the last element
//we then concat both variables and push that to the list variable and return it
function partlist(arr) {
    let list = []
    for (let i = 1; i < arr.length; i++) {
        let firstHalf
        let secondHalf
        firstHalf = [arr.slice(0, i).join(' ')]
        secondHalf = [arr.slice(i, arr.length).join(' ')]
        list.push(firstHalf.concat(secondHalf))
    } return list
}