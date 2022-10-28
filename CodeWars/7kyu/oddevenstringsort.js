// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

//P - A string containign one woprd
//R - a string containing the even indexed elements joined together followed by a space and then followed by a string containing the odd indexed elemnets joined together
//E - "CodeWars", "CdWr oeas"
//P - We first create 2 variables to hold the even and odd indexed items
// we then loop through the given parameter and check if the current element is even we push it to even if not we push it to odd
//we then return the even array joined then a space and then the odd array joined
function sortMyString(S) {
    let odd = []
    let even = []
    S.split('').forEach((e, i) => i % 2 == 0 ? even.push(e) : odd.push(e))
    return even.join('') + ' ' + odd.join('')
}