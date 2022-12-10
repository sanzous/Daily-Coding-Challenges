// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

//P - An array where the elements are X or O
//R - the index of the first O
//E - meeting(['X', 'O', 'X']), 1
//P - first we find the index of O in the array x, if its greater than -1 then we return that index if its not that means there are no O's in the
// array and we return none available

function meeting(x) {
    return x.indexOf('O') >= 0 ? x.indexOf('O') : 'None available!'
}