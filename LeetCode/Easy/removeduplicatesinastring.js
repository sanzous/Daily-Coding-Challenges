// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

//P - A string of characters all lowercase from 1 to 20000 in length
//R - the string with all adjacent repeating elements removed
//E - 'aabbca' == 'ca'
//P - we create a new array to hold the new array of non duplicated items then we split the given parameter into an array
//We then loop through the array. If the current array element doesnt equal the last item on new array then we can push that in to the new array. If it is equal we dont add it into the array and we also remove from the new array that element since they were duplicates
//we then return the new array with the join method to return a string

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let arr = []
    let newStr = s.split('')
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] == arr[arr.length - 1]) {
            arr.pop()

        } else {
            arr.push(newStr[i])

        }
    } return arr.join('')
};