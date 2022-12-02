// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

//P - a string of letters and an array of integers
//R - the string where each index included in the array paramater has been changed to its uppercase counterpart
//E - ("abcdef",[1,2,5]),'aBCdeF'
//P - first we split the given string into an array so we can use the map method to return a new array, inside the map method we can include
// the first 2 parameters for the element and index, we then check if the current index is included in the array of index integers. If it is we return the the upperCase of the element and if not
// we return the element as is.

function capitalize(s, arr) {
    return s.split('').map((e, i) => arr.includes(i) ? e.toUpperCase() : e).join('')
};