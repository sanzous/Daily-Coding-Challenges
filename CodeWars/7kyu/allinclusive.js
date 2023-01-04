// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise

//P - an string containing case sensitive letters, and an array of strings
//R - true if all rotations of the string are included in the array
//E - contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
//P - We first create a for loop that will iterate through the string
// inside the loop we create an if statement and for each iteration we slice from index to end
// and then from beginning to index and concatenate the two , we then check to see if that is contained in the array using indexOf. If at
// it equals to - 1 which means it doesn't exist in the array we just return false and stop the loop


function containAllRots(str, arr) {
    for (var i = 0; i < str.length; i++) {
        if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
            return false
        }
    }
    return true
}